(function () {
  'use strict';

  const storageKey = 'hvu-theme';
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
  const stylesheet = document.getElementById('dark-theme-stylesheet');
  let manualTheme = null;
  let button;

  try {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === 'light' || saved === 'dark') manualTheme = saved;
  } catch (error) {
    // The theme still works when browser storage is unavailable.
  }

  function applyTheme() {
    const theme = manualTheme || (systemPreference.matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
    stylesheet.media = theme === 'dark' ? 'all' : 'not all';
    if (button) {
      const label = theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro';
      button.textContent = theme === 'dark' ? '☀ Modo claro' : '☾ Modo oscuro';
      button.setAttribute('aria-label', label);
      button.title = label;
    }
  }

  applyTheme();
  systemPreference.addEventListener('change', function () {
    if (!manualTheme) applyTheme();
  });

  document.addEventListener('DOMContentLoaded', function () {
    button = document.createElement('button');
    button.type = 'button';
    button.className = 'theme-toggle';
    button.addEventListener('click', function () {
      manualTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      try {
        window.localStorage.setItem(storageKey, manualTheme);
      } catch (error) {
        // Keep the chosen theme for this page even if storage is unavailable.
      }
      applyTheme();
    });
    document.body.append(button);
    applyTheme();
  });
})();
