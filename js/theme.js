// Theme switcher with system preference tracking and localStorage persistence
(function () {
  var root = document.documentElement;
  var mq = window.matchMedia('(prefers-color-scheme: dark)');

  function effective() {
    return root.getAttribute('data-theme') || (mq.matches ? 'dark' : 'light');
  }

  function updateLabels() {
    var next = effective() === 'dark' ? 'light' : 'dark';
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.setAttribute('aria-label', 'Switch to ' + next + ' theme');
      btn.setAttribute('title', 'Switch to ' + next + ' theme');
    });
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('.theme-toggle') : null;
    if (!btn) return;
    var next = effective() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (err) {}
    updateLabels();
  });

  if (mq.addEventListener) {
    mq.addEventListener('change', updateLabels);
  }
  updateLabels();
})();
