// ==UserScript==
// @name         Void theme
// @version      1.0
// @description  Void theme for pxls.space
// @author       Darkness
// @match        https://pxls.space/*
// @icon         https://raw.githubusercontent.com/TouchedByDarkness/pxls-space/main/icon.png
// ==/UserScript==

const source = 'https://raw.githubusercontent.com/TouchedByDarkness/pxls-space/main/Void theme/code.js';

fetch(source)
.then(res => res.text())
.then(code => {
  const el = document.createElement('script');
  el.innerHTML = code;
  document.body.appendChild(el);
});
