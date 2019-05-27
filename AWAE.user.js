// ==UserScript==
// @name         Adult-Website-Auto-Enabler
// @version      1.3
// @description  Automatically gives adult permission on many websites
// @author       Freed
// @match        *://*/*
// @updateURL    https://github.com/KNFreed/Adult-Website-Auto-Enabler/raw/master/AWAE.user.js
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

var currLoc = window.location.hostname

// Adults Shop websites

if (currLoc.includes("toranoana.jp")) {
    var adult = getCookie("adflg");
      if (adult != "0") {
        document.cookie = "adflg=0";
         location.reload();
}
}

if (currLoc.includes("melonbooks.co.jp")) {
    var adult = getCookie("AUTH_ADULT");
      if (adult != "1") {
        document.cookie = "AUTH_ADULT=1";
         location.reload();
}
}

if (currLoc.includes("suruga-ya.jp")) {
    var adult = getCookie("adult");
      if (adult != "1") {
        document.cookie = "adult=1";
         location.reload();
}
}
