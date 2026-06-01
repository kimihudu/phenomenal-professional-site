(function () {
  'use strict';
  var KEY = 'pa-theme';
  var html = document.documentElement;

  function isLight() {
    return html.getAttribute('data-theme') === 'light';
  }

  function apply(theme) {
    if (theme === 'light') {
      html.setAttribute('data-theme', 'light');
    } else {
      html.removeAttribute('data-theme');
    }
    localStorage.setItem(KEY, theme || 'dark');
    updateBtn();
  }

  function toggle() {
    apply(isLight() ? 'dark' : 'light');
  }

  function updateBtn() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var light = isLight();
    btn.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
    btn.setAttribute('title', light ? 'Switch to Atelier Noir' : 'Switch to Atelier Blanc');
    var sun  = btn.querySelector('.th-sun');
    var moon = btn.querySelector('.th-moon');
    if (sun)  sun.classList.toggle('hidden', !light);
    if (moon) moon.classList.toggle('hidden', light);
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateBtn();
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggle);
  });
})();
