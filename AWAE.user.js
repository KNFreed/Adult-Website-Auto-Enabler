// ==UserScript==
// @name         Adult-Website-Auto-Enabler
// @version      1.7
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


// Adults Shops

if (currLoc.includes("toranoana.jp")) {
     if (getCookie("adflg") != "0") {
      document.cookie = `adflg=0; expires=${expdate}`;
       location.reload();
}
}

if (currLoc.includes("melonbooks.co.jp")) {
     if (getCookie("AUTH_ADULT") != "1") {
       document.cookie = `AUTH_ADULT=1; expires=${expdate}`;
          location.reload();
} else if (getCookie("done") != "1") {
    document.cookie = `AUTH_ADULT=1; expires=${expdate}`;
    document.cookie = `done=1; expires=${expdate}`;
}
}

if (currLoc.includes("suruga-ya.jp")) {
     if (getCookie("adult") != "1") {
       document.cookie = `adult=1; expires=${expdate}`;
        location.reload();
}
}

// Porn sites

if (currLoc.includes("pornhub.com")) {
     if (getCookie("accessAgeDisclaimerPH") != "1") {
      document.cookie = `accessAgeDisclaimerPH=1; expires=${expdate}`;
       location.reload();
}
}