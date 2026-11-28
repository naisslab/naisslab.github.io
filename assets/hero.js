// Hero background: two layers of drifting network nodes that link up when close,
// with gold packets in flight on the near layer. Also keeps the header in hero colours
// while it sits over the hero.
(() => {
    const canvas = document.getElementById('hero-net');
    const hero = document.querySelector('.hero');
    const header = document.getElementById('header');
    if (!canvas || !hero || !canvas.getContext) return;

    // Header: hero colours only while the hero is underneath it.
    if (header) {
        let pending = false;
        const syncHeader = () => {
            pending = false;
            header.classList.toggle('on-hero', hero.getBoundingClientRect().bottom > header.offsetHeight);
        };
        window.addEventListener('scroll', () => {
            if (!pending) { pending = true; requestAnimationFrame(syncHeader); }
        }, { passive: true });
        window.addEventListener('resize', syncHeader);
        syncHeader();
    }

    const ctx = canvas.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const LINE = '196, 226, 214';
    const GOLD = '226, 160, 62';
    const MAX_PACKETS = 16;

    let width = 0;
    let height = 0;
    let linkDistance = 150;
    let near = [];
    let far = [];
    let links = [];
    let packets = [];
    let pulses = [];
    let pointer = null;
    let parallax = { x: 0, y: 0 };
    let frame = 0;
    let lastTime = 0;
    let packetTimer = 0;
    let pulseTimer = 0;
    let visible = true;

    const random = (min, max) => min + Math.random() * (max - min);

    function makeNodes(count, speed, radius, hubChance) {
        return Array.from({ length: count }, () => {
            const hub = Math.random() < hubChance;
            return {
                x: random(0, width),
                y: random(0, height),
                vx: random(-speed, speed),
                vy: random(-speed, speed),
                r: hub ? random(2.8, 3.6) : random(radius[0], radius[1]),
                hub
            };
        });
    }

    function seed() {
        const area = width * height;
        near = makeNodes(Math.round(Math.min(110, Math.max(32, area / 14000))), 0.14, [1.1, 2.2], 0.12);
        far = makeNodes(Math.round(Math.min(90, Math.max(24, area / 18000))), 0.06, [0.6, 1.1], 0);
    }

    function resize() {
        const rect = canvas.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(rect.width * dpr);
        canvas.height = Math.round(rect.height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        if (!near.length) {
            width = rect.width;
            height = rect.height;
            seed();
        } else {
            const sx = rect.width / width;
            const sy = rect.height / height;
            [...near, ...far].forEach(node => { node.x *= sx; node.y *= sy; });
            width = rect.width;
            height = rect.height;
        }
        linkDistance = width < 640 ? 112 : 152;
        draw();
    }

    function move(nodes, dt) {
        for (const node of nodes) {
            node.x += node.vx * dt;
            node.y += node.vy * dt;
            if (node.x < 0 || node.x > width) node.vx *= -1;
            if (node.y < 0 || node.y > height) node.vy *= -1;
        }
    }

    function step(dt) {
        move(near, dt);
        move(far, dt);

        // Ease the parallax offset toward the pointer.
        const target = pointer
            ? { x: (pointer.x / width - 0.5) * -24, y: (pointer.y / height - 0.5) * -16 }
            : { x: 0, y: 0 };
        parallax.x += (target.x - parallax.x) * 0.05 * dt;
        parallax.y += (target.y - parallax.y) * 0.05 * dt;

        packetTimer += dt;
        if (packetTimer > 9 && packets.length < MAX_PACKETS && links.length) {
            packetTimer = 0;
            const [a, b] = links[Math.floor(Math.random() * links.length)];
            const speed = random(0.012, 0.022);
            packets.push(Math.random() < 0.5 ? { a, b, t: 0, speed } : { a: b, b: a, t: 0, speed });
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
            const hubs = near.filter(node => node.hub);
            if (hubs.length) pulses.push({ node: hubs[Math.floor(Math.random() * hubs.length)], t: 0 });
        }
        pulses = pulses.filter(pulse => (pulse.t += 0.008 * dt) < 1);
    }

    function drawLinks(nodes, distance, alpha, collect) {
        const maxSq = distance * distance;
        for (let i = 0; i < nodes.length; i++) {
            const a = nodes[i];
            for (let j = i + 1; j < nodes.length; j++) {
                const b = nodes[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const distSq = dx * dx + dy * dy;
                if (distSq > maxSq) continue;
                if (collect) links.push([a, b]);
                ctx.strokeStyle = `rgba(${LINE}, ${(1 - Math.sqrt(distSq) / distance) * alpha})`;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
            }
        }
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        links = [];
        ctx.lineWidth = 1;

        // Far layer: small, dim, and shifted less by the pointer for depth.
        ctx.save();
        ctx.translate(parallax.x * 0.4, parallax.y * 0.4);
        drawLinks(far, linkDistance * 0.75, 0.14, false);
        ctx.fillStyle = `rgba(${LINE}, 0.35)`;
        for (const node of far) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();

        ctx.save();
        ctx.translate(parallax.x, parallax.y);
        drawLinks(near, linkDistance, 0.42, true);

        if (pointer) {
            const px = pointer.x - parallax.x;
            const py = pointer.y - parallax.y;
            for (const node of near) {
                const dx = node.x - px;
                const dy = node.y - py;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist > 190) continue;
                ctx.strokeStyle = `rgba(${GOLD}, ${(1 - dist / 190) * 0.45})`;
                ctx.beginPath();
                ctx.moveTo(px, py);
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

        for (const node of near) {
            if (node.hub) {
                const halo = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 22);
                halo.addColorStop(0, 'rgba(196, 226, 214, 0.22)');
                halo.addColorStop(1, 'rgba(196, 226, 214, 0)');
                ctx.fillStyle = halo;
                ctx.beginPath();
                ctx.arc(node.x, node.y, 22, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.fillStyle = node.hub ? 'rgba(236, 246, 241, 0.92)' : `rgba(${LINE}, 0.7)`;
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
            ctx.fill();
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
        ctx.restore();
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
