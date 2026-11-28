// Shared by every page: the mobile menu, and notices that expire on a set date.
(() => {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        const setMenuOpen = open => {
            mobileMenu.classList.toggle('hidden', !open);
            menuButton.setAttribute('aria-expanded', String(open));
            const [openIcon, closeIcon] = menuButton.querySelectorAll('svg');
            openIcon.classList.toggle('hidden', open);
            closeIcon.classList.toggle('hidden', !open);
        };

        menuButton.addEventListener('click', () => setMenuOpen(mobileMenu.classList.contains('hidden')));
        document.addEventListener('keydown', e => {
            if (e.key !== 'Escape' || mobileMenu.classList.contains('hidden')) return;
            setMenuOpen(false);
            menuButton.focus();
        });
        mobileMenu.addEventListener('focusout', e => {
            if (e.relatedTarget && !mobileMenu.contains(e.relatedTarget) && e.relatedTarget !== menuButton) setMenuOpen(false);
        });
        document.getElementById('menu-scrim')?.addEventListener('click', () => setMenuOpen(false));
        document.getElementById('header')?.addEventListener('click', e => {
            if (e.target.closest('a')) setMenuOpen(false);
        });
    }

    // Deadline notices carry data-until (an ISO date) and disappear once it passes.
    document.querySelectorAll('[data-until]').forEach(notice => {
        if (Date.now() > Date.parse(notice.dataset.until)) notice.hidden = true;
    });
})();
