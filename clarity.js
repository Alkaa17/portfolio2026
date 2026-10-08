// Microsoft Clarity — set your project ID from clarity.microsoft.com → Settings → Overview
(function () {
  var CLARITY_PROJECT_ID = 'yupktcjd35';
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) return;

  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', CLARITY_PROJECT_ID);
})();
