/* =====================================================================
 *  ASSET MANAGEMENT v1.0 — connection to your Google Sheet
 *
 *  Paste your Apps Script web app link (the one ending in /exec)
 *  between the quotes below. All three pages use this one setting.
 * ===================================================================== */
window.AM_API_URL = 'https://script.google.com/macros/s/AKfycbzZRiMsMPk4c6Iy7EP2cbN7d8CZmFbp-AQeJh9gUR27erMjge67KeYt0Al1ZN58Wr9v/exec';


/* ---- Do not edit below this line ---- */
(function () {
  if (/^https:\/\/script\.google\.com\/.+\/exec$/.test(window.AM_API_URL)) return;
  document.addEventListener('DOMContentLoaded', function () {
    document.body.innerHTML =
      '<div style="max-width:440px;margin:15vh auto;padding:24px;font-family:Inter,system-ui,sans-serif;color:#f6ede6;text-align:center">' +
      '<h2 style="margin:0 0 8px">Not connected yet</h2>' +
      '<p style="color:#ab988c;line-height:1.5">Open <b>asset-management/config.js</b> on GitHub and paste your Apps Script link (ending in /exec) into AM_API_URL.</p></div>';
  });
})();
