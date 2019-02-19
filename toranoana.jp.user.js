// ==UserScript==
// @name         Auto Adult Toranoana
// @version      1.0
// @description  Automatically gives adult permission on Toranoana
// @author       Freed
// @match        https://toranoana.jp/*
// @updateURL    https://github.com/KNFreed/Adult-Website-Auto-Enabler/raw/master/toranoana.jp.user.js
// ==/UserScript==

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var adult = getCookie("adflg");
if (adult != "0") {
  document.cookie = "adflg=0";
    location.reload();
}
