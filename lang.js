(function () {
  var btnJa = document.getElementById('btn-ja');
  var btnEn = document.getElementById('btn-en');
  if (!btnJa || !btnEn) return;
  var groups = [['head-ja','head-en'], ['body-ja','body-en'], ['foot-ja','foot-en']];
  function setLang(lang) {
    var ja = lang === 'ja';
    groups.forEach(function (pair) {
      var a = document.getElementById(pair[0]), b = document.getElementById(pair[1]);
      if (a) a.hidden = !ja;
      if (b) b.hidden = ja;
    });
    btnJa.setAttribute('aria-pressed', String(ja));
    btnEn.setAttribute('aria-pressed', String(!ja));
    document.documentElement.lang = ja ? 'ja' : 'en';
    try { localStorage.setItem('fiv-lang', lang); } catch (e) {}
  }
  btnJa.addEventListener('click', function () { setLang('ja'); });
  btnEn.addEventListener('click', function () { setLang('en'); });
  var saved = null;
  try { saved = localStorage.getItem('fiv-lang'); } catch (e) {}
  setLang(saved === 'en' ? 'en' : 'ja');
})();
