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
    updateAllBtns();
  }

  function toggle() {
    apply(isLight() ? 'dark' : 'light');
  }

  function updateBtn(btn) {
    if (!btn) return;
    var light = isLight();
    btn.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
    btn.setAttribute('title', light ? 'Switch to Atelier Noir' : 'Switch to Atelier Blanc');
    var sun  = btn.querySelector('.th-sun');
    var moon = btn.querySelector('.th-moon');
    if (sun)  sun.classList.toggle('hidden', !light);
    if (moon) moon.classList.toggle('hidden', light);
    // mobile label update
    var labelDark  = btn.querySelector('.th-label-dark');
    var labelLight = btn.querySelector('.th-label-light');
    if (labelDark)  labelDark.classList.toggle('hidden', light);
    if (labelLight) labelLight.classList.toggle('hidden', !light);
    // mobile track update
    var track = btn.querySelector('.th-track');
    if (track) {
      track.classList.toggle('bg-amber-400', light);
      track.classList.toggle('bg-gray-700', !light);
    }
    var thumb = btn.querySelector('.th-thumb');
    if (thumb) {
      thumb.classList.toggle('translate-x-6', light);
      thumb.classList.toggle('translate-x-1', !light);
    }
  }

  function updateAllBtns() {
    document.querySelectorAll('.js-theme-toggle').forEach(updateBtn);
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateAllBtns();
    document.querySelectorAll('.js-theme-toggle').forEach(function(btn) {
      btn.addEventListener('click', toggle);
    });
  });
})();
