/* Accessible mobile navigation for the adapted Editorial sidebar. */
(() => {
  const sidebar = document.getElementById('sidebar');
  const toggle = document.querySelector('.menu-toggle');
  const mobile = window.matchMedia('(max-width: 1280px)');
  let open = false;

  function setOpen(value, restoreFocus = false) {
    open = mobile.matches && value;
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    sidebar.inert = mobile.matches && !open;
    if (restoreFocus) toggle.focus();
  }

  document.body.classList.remove('no-js');
  toggle.hidden = false;
  setOpen(false);

  toggle.addEventListener('click', () => {
    setOpen(!open);
    if (open) sidebar.querySelector('a').focus();
  });

  sidebar.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link || !mobile.matches) return;
    setOpen(false);
    // Put keyboard focus at the destination when navigating within this page.
    if (link.hash && link.pathname === window.location.pathname) {
      const destination = document.getElementById(link.hash.slice(1));
      if (destination) {
        destination.setAttribute('tabindex', '-1');
        destination.focus({ preventScroll: true });
      }
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && open) setOpen(false, true);
  });
  document.addEventListener('click', (event) => {
    if (open && !sidebar.contains(event.target) && !toggle.contains(event.target)) {
      setOpen(false);
    }
  });
  document.addEventListener('focusin', (event) => {
    if (open && !sidebar.contains(event.target) && !toggle.contains(event.target)) {
      setOpen(false);
    }
  });
  mobile.addEventListener('change', () => setOpen(false));
})();
