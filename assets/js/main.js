(function () {
  var root = document.documentElement;

  // Theme toggle: remembers an explicit choice; otherwise follows the OS setting.
  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme');
      if (!current) {
        current = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Mobile navigation
  var navBtn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (navBtn && nav) {
    navBtn.addEventListener('click', function () {
      var open = navBtn.getAttribute('aria-expanded') === 'true';
      navBtn.setAttribute('aria-expanded', String(!open));
      navBtn.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      nav.classList.toggle('is-open', !open);
    });
  }

  // Blog category filter
  var filters = document.querySelectorAll('.filter');
  if (filters.length) {
    var items = document.querySelectorAll('.post-item');
    filters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var f = btn.getAttribute('data-filter');
        filters.forEach(function (b) { b.classList.toggle('is-active', b === btn); });
        items.forEach(function (it) {
          it.hidden = !(f === 'all' || it.getAttribute('data-category') === f);
        });
      });
    });
  }
})();
