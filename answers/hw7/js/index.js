let lang = 'zh-tw';

function setPageTitle(lang) {
  document.getElementById("title").innerHTML = I18N[lang].TITLE;
  switch(lang) {
    case "zh-tw":
      document.getElementById("lang-zh-tw").style.textDecoration = 'underline';
      document.getElementById("lang-en").style.textDecoration = 'none';
      break;
    case "en":
      document.getElementById("lang-en").style.textDecoration = 'underline';
      document.getElementById("lang-zh-tw").style.textDecoration = 'none';
      break;
  }
}

document.getElementById("lang-zh-tw").addEventListener("click", () => {
  lang = 'zh-tw';
  setPageTitle(lang);
})

document.getElementById("lang-en").addEventListener("click", () => {
  lang = 'en';
  setPageTitle(lang);
})

window.onload = function() {
  setPageTitle(lang);
};