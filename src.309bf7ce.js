parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./..\\images\\hero\\icecream_mob.png":[["icecream_mob.93d93d6c.png","VkXV"],"VkXV"],"./..\\images\\hero\\ellipse_mob.png":[["ellipse_mob.be31a166.png","vTpw"],"vTpw"],"./..\\images\\hero\\icecream_tablet.png":[["icecream_tablet.3424d079.png","iFMl"],"iFMl"],"./..\\images\\hero\\ellipse_tablet.png":[["ellipse_tablet.83867f6a.png","rNBL"],"rNBL"],"./..\\images\\hero\\icecream_desktop.png":[["icecream_desktop.daa5649f.png","tHVX"],"tHVX"],"./..\\images\\hero\\ellipse_desktop.png":[["ellipse_desktop.f00ea603.png","ntMp"],"ntMp"],"./..\\images\\section2\\home-pic1.png":[["home-pic1.551d59f0.png","viSw"],"viSw"],"./..\\images\\section2\\home-pic2.png":[["home-pic2.c195ed97.png","Hkb1"],"Hkb1"],"./..\\images\\section2\\home-pic3.png":[["home-pic3.47d9a006.png","P9qk"],"P9qk"],"./..\\images\\section3\\milk-desk.png":[["milk-desk.814fb784.png","uiDF"],"uiDF"],"./..\\images\\section3\\milk.png":[["milk.167e1065.png","ztDf"],"ztDf"],"./..\\images\\section3\\apple.png":[["apple.0796f3d8.png","MF5I"],"MF5I"],"./..\\images\\section3\\candy.png":[["candy.14bff3b6.png","yTNa"],"yTNa"],"./..\\images\\icons\\quotes.svg":[["quotes.712082dc.svg","jFCJ"],"jFCJ"],"./..\\images\\testimonuals\\vector-tel.svg":[["vector-tel.3e7ac57f.svg","dCig"],"dCig"],"./..\\images\\testimonuals\\vector-tablet.svg":[["vector-tablet.061d879c.svg","afdL"],"afdL"],"./..\\images\\testimonuals\\vector-decstop.svg":[["vector-decstop.bc926a51.svg","M2w1"],"M2w1"],"./..\\images\\section5\\img51-desktop.png":[["img51-desktop.e4060758.png","xENp"],"xENp"],"./..\\images\\section5\\img51-desktop@2x.png":[["img51-desktop@2x.e1fd4cac.png","jU5Z"],"jU5Z"]}],"wzuc":[function(require,module,exports) {
var e=document.querySelectorAll("#slides .slide"),l=0,s=setInterval(a,3e3);function a(){e[l].className="slide",l=(l+1)%e.length,e[l].className="slide showing"}
},{}],"i0CD":[function(require,module,exports) {
!function(){var e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};function o(){e.modal.classList.toggle("is-open")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}();
},{}],"U0nI":[function(require,module,exports) {
!function(){var o={openModalBtn:document.querySelector("[mob-data-mod-open]"),closeModalBtn:document.querySelector("[mob-data-mod-close]"),modal:document.querySelector("[mob-data-mod]")};function e(){o.modal.classList.toggle("is-hidden")}o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e)}();
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/slider"),require("./js/menu"),require("./js/moblie-modal");
},{"./sass/main.scss":"clu1","./js/slider":"wzuc","./js/menu":"i0CD","./js/moblie-modal":"U0nI"}]},{},["Focm"], null)
//# sourceMappingURL=/src.309bf7ce.js.map