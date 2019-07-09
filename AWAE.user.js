// ==UserScript==
// @name         Adult-Website-Auto-Enabler
// @version      1.4
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
var currentTime = new Date();
var UTCtime = currentTime.toUTCString();
var expdate = UTCtime.substring(0, 12) + (parseInt(UTCtime.substring(12, 16)) + 4) + UTCtime.substring(16, 29);


// Adults Shop websites

if (currLoc.includes("toranoana.jp")) {
    var toranoana = getCookie("adflg");
      if (toranoana != "0") {
        document.cookie = `adflg=0; expires=${expdate}`;
         location.reload();
}
}

if (currLoc.includes("melonbooks.co.jp")) {
    var melonbooks = getCookie("AUTH_ADULT");
      if (melonbooks != "1") {
        document.cookie = `AUTH_ADULT=1; expires=${expdate}`;
         location.reload();
}
}

if (currLoc.includes("suruga-ya.jp")) {
    var suruga = getCookie("adult");
      if (suruga != "1") {
        document.cookie = `adult=1; expires=${expdate}`;
         location.reload();
}
}
