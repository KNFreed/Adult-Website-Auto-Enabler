// ==UserScript==
// @name         Auto Adult Pornhub
// @version      1.0
// @description  Automatically gives adult permission on Pornhub
// @author       Freed
// @match        https://www.pornhub.com/*
// @updateURL    https://github.com/KNFreed/Adult-Website-Auto-Enabler/raw/master/pornhub.com.user.js
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

var adult = getCookie("accessAgeDisclaimerPH");
if (adult != "1") {
  document.cookie = "AUTH_ADULT=1";
    location.reload();
}
