parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"/qM3":[function(require,module,exports) {
"use strict";function e(e){return"string"==typeof e||e instanceof String}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isString=e;
},{}],"0mut":[function(require,module,exports) {
"use strict";function e(e,t){var r,n=e.split(".");return(r={})[n.shift()]=function e(r){var n;return r.length>0?((n={})[r.shift()]=e(r),n):t}(n),r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseDeepPattern=e;
},{}],"jdy3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e){return new RegExp("^"+e+"*")},r=function(e){return new RegExp(e+"*$")};exports.trimAll=function(n){return function(t){return t.replace(e(n),"").replace(r(n),"")}};
},{}],"2ONf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./trim-all");function r(r){for(var t,l=/([a-z.]*):[a-z.,]*;/,a=e.trimAll(","),u=e.trimAll(";"),s=[];l.test(r);)t=l.exec(r),r=r.replace(t[0],""),s.push({key:t[1],value:u(t[0].replace(t[1]+":",""))});return r.length&&s.push({key:null,value:a(r)}),s}exports.parseForkPattern=r;
},{"./trim-all":"jdy3"}],"dUth":[function(require,module,exports) {
"use strict";function e(e){return e.split(",")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseWidePattern=e;
},{}],"1krg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./is-string"),r=require("./parse-deep-pattern"),t=require("./parse-fork-pattern"),a=require("./parse-wide-pattern");function n(n){for(var p=[],i=1;i<arguments.length;i++)p[i-1]=arguments[i];var s=Object.assign;if(e.isString(n)){var u=t.parseForkPattern(n),l=[],o={},f={};return u.forEach(function(e){l=a.parseWidePattern(e.value).map(function(e){return r.parseDeepPattern(e,p.shift())}),o=null===e.key?s.apply(null,l):r.parseDeepPattern(e.key,s.apply(null,l)),s(f,o)}),f}return{}}exports.mocktail=n;
},{"./is-string":"/qM3","./parse-deep-pattern":"0mut","./parse-fork-pattern":"2ONf","./parse-wide-pattern":"dUth"}]},{},["1krg"], "mocktail")
//# sourceMappingURL=/mocktail.map