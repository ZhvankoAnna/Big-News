!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var n=o[e];delete o[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){o[e]=n},t.parcelRequired7c6=a),a.register("iE7OH",(function(n,t){var r,o;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)a[n[t]]=e[n[t]]},o=function(e){var n=a[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),a.register("aNJCr",(function(n,t){var r;e(n.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var n=o[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=n),n}})),a("iE7OH").register(JSON.parse('{"coIxP":"favorite.0a93b85a.js","5Xoex":"not-found.5e5584a2.png"}'));var i;i=a("aNJCr").getBundleURL("coIxP")+a("iE7OH").resolve("5Xoex");var s=document.querySelector(".saved-news");function c(){if(!localStorage.getItem("savedNews"))return s.innerHTML='<div class="not-found__box"><p class="not-found__text">You have no saved news</p>\n  <img class="not-found__img" src="'.concat(n(i),'" alt="News not found" width="288px" height="198px" /></div>');var e=JSON.parse(localStorage.getItem("savedNews")).map((function(e){var n;return n=e.h2.length>50?e.h2.slice(0,46)+"...":e.h2,'<li class="images">\n          <img src="'.concat(e.img,'" alt="" width="288px" height="395px" class="news-list__img"/>\n          <p class="news-list__category">').concat(e.category,'</p>\n          <button class="img-btn favorite-true"  data-id="').concat(e.uri,'">Remove from favorite</button>\n          <h2 class="description-title">').concat(n,'</h2>\n          <p class="description-of-news">').concat(e.description,'</p>\n          <div class="info-more">\n            <p class="date">').concat(e.date,'</p>\n            <a\n              class="read-more-link"\n              href="').concat(e.href,'"\n              target="_blank"\n              rel="noopener noreferrer"\n            >\n              Read more\n            </a>\n          </div>\n        </li>')})).join("");s.innerHTML=e}c(),s.addEventListener("click",(function(e){if("BUTTON"===e.target.nodeName){var n=JSON.parse(localStorage.getItem("savedNews")).filter((function(n){return n.uri!==e.target.dataset.id}));localStorage.removeItem("savedNews"),localStorage.setItem("savedNews",JSON.stringify(n)),JSON.parse(localStorage.getItem("savedNews")).length<1&&localStorage.removeItem("savedNews"),c()}}))}();
//# sourceMappingURL=favorite.0a93b85a.js.map
