// Hero background: a drifting network whose nearby nodes link up, with gold packets in flight.
(() => {
    const canvas = document.getElementById('hero-net');
    const hero = document.getElementById('home');
    if (!canvas || !hero || !canvas.getContext) return;

    const ctx = canvas.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const LINE = '196, 226, 214';
    const GOLD = '226, 160, 62';
    const MAX_PACKETS = 16;

    let width = 0;
    let height = 0;
    let linkDistance = 150;
    let nodes = [];
    let links = [];
    let packets = [];
    let pulses = [];
    let pointer = null;
    let frame = 0;
    let lastTime = 0;
    let packetTimer = 0;
    let pulseTimer = 0;
    let visible = true;

    const random = (min, max) => min + Math.random() * (max - min);

    function seedNodes() {
        const count = Math.round(Math.min(120, Math.max(36, (width * height) / 13000)));
        nodes = Array.from({ length: count }, () => {
            const hub = Math.random() < 0.12;
            return {
                x: random(0, width),
                y: random(0, height),
                vx: random(-0.14, 0.14),
                vy: random(-0.14, 0.14),
                r: hub ? random(2.8, 3.6) : random(1.1, 2.2),
                hub
            };
        });
    }

    function resize() {
        const rect = canvas.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(rect.width * dpr);
        canvas.height = Math.round(rect.height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        if (!nodes.length) {
            width = rect.width;
            height = rect.height;
            seedNodes();
        } else {
            const sx = rect.width / width;
            const sy = rect.height / height;
            nodes.forEach(node => { node.x *= sx; node.y *= sy; });
            width = rect.width;
            height = rect.height;
        }
        linkDistance = width < 640 ? 112 : 152;
        draw();
    }

    function step(dt) {
        for (const node of nodes) {
            node.x += node.vx * dt;
            node.y += node.vy * dt;
            if (node.x < 0 || node.x > width) node.vx *= -1;
            if (node.y < 0 || node.y > height) node.vy *= -1;
        }

        packetTimer += dt;
        if (packetTimer > 9 && packets.length < MAX_PACKETS && links.length) {
            packetTimer = 0;
            const [a, b] = links[Math.floor(Math.random() * links.length)];
            packets.push(Math.random() < 0.5 ? { a, b, t: 0, speed: random(0.012, 0.022) } : { a: b, b: a, t: 0, speed: random(0.012, 0.022) });
        }
        packets = packets.filter(packet => {
            packet.t += packet.speed * dt;
            const dx = packet.a.x - packet.b.x;
            const dy = packet.a.y - packet.b.y;
            return packet.t < 1 && dx * dx + dy * dy < (linkDistance * 1.2) ** 2;
        });

        pulseTimer += dt;
        if (pulseTimer > 150) {
            pulseTimer = 0;
            const hubs = nodes.filter(node => node.hub);
            if (hubs.length) pulses.push({ node: hubs[Math.floor(Math.random() * hubs.length)], t: 0 });
        }
        pulses = pulses.filter(pulse => (pulse.t += 0.008 * dt) < 1);
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        links = [];
        const maxSq = linkDistance * linkDistance;

        ctx.lineWidth = 1;
        for (let i = 0; i < nodes.length; i++) {
            const a = nodes[i];
            for (let j = i + 1; j < nodes.length; j++) {
                const b = nodes[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const distSq = dx * dx + dy * dy;
                if (distSq > maxSq) continue;
                links.push([a, b]);
                ctx.strokeStyle = `rgba(${LINE}, ${(1 - Math.sqrt(distSq) / linkDistance) * 0.42})`;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
            }
        }

        if (pointer) {
            for (const node of nodes) {
                const dx = node.x - pointer.x;
                const dy = node.y - pointer.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist > 190) continue;
                ctx.strokeStyle = `rgba(${GOLD}, ${(1 - dist / 190) * 0.45})`;
                ctx.beginPath();
                ctx.moveTo(pointer.x, pointer.y);
                ctx.lineTo(node.x, node.y);
                ctx.stroke();
            }
        }

        for (const pulse of pulses) {
            ctx.strokeStyle = `rgba(${GOLD}, ${(1 - pulse.t) * 0.7})`;
            ctx.beginPath();
            ctx.arc(pulse.node.x, pulse.node.y, pulse.node.r + pulse.t * 26, 0, Math.PI * 2);
            ctx.stroke();
        }

        for (const node of nodes) {
            ctx.fillStyle = node.hub ? 'rgba(236, 246, 241, 0.9)' : `rgba(${LINE}, 0.7)`;
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
            ctx.fill();
            if (node.hub) {
                ctx.strokeStyle = `rgba(${LINE}, 0.22)`;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.r + 5, 0, Math.PI * 2);
                ctx.stroke();
            }
        }

        for (const packet of packets) {
            const x = packet.a.x + (packet.b.x - packet.a.x) * packet.t;
            const y = packet.a.y + (packet.b.y - packet.a.y) * packet.t;
            ctx.fillStyle = `rgba(${GOLD}, 0.18)`;
            ctx.beginPath();
            ctx.arc(x, y, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = `rgb(${GOLD})`;
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function loop(time) {
        const dt = Math.min(time - lastTime, 50) / 16.67;
        lastTime = time;
        step(dt);
        draw();
        frame = requestAnimationFrame(loop);
    }

    function update() {
        cancelAnimationFrame(frame);
        frame = 0;
        if (visible && !reducedMotion.matches) {
            lastTime = performance.now();
            frame = requestAnimationFrame(loop);
        } else {
            draw();
        }
    }

    new ResizeObserver(resize).observe(canvas);
    new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        update();
    }).observe(hero);
    reducedMotion.addEventListener('change', update);

    hero.addEventListener('pointermove', event => {
        if (event.pointerType !== 'mouse') return;
        const rect = canvas.getBoundingClientRect();
        pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    });
    hero.addEventListener('pointerleave', () => { pointer = null; });
})();
