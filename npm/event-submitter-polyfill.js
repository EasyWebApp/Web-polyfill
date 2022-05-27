/**
 * Minified by jsDelivr using Terser v5.13.1.
 * Original file: /npm/event-submitter-polyfill@0.3.1/dist/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t){if("object"==typeof module&&"object"==typeof module.exports){var e=t(require,exports);void 0!==e&&(module.exports=e)}else"function"==typeof define&&define.amd&&define(["require","exports"],t)}((function(t,e){"use strict";var n;e.__esModule=!0,e.SubmitableButton=void 0,e.SubmitableButton='button, input[type="button"], input[type="submit"], input[type="image"]',document.addEventListener("click",(function(t){var u,o;return n=null===(o=(u=t.target).closest)||void 0===o?void 0:o.call(u,e.SubmitableButton)}),!0),document.addEventListener("submit",(function(t){n&&t.submitter||Object.defineProperty(Object.getPrototypeOf(t),"submitter",{configurable:!0,enumerable:!0,get:function(){for(var t=this.target,u=0,o=[document.activeElement,n];u<o.length;u++){var i=o[u];if((null==i?void 0:i.matches(e.SubmitableButton))&&t===i.form)return i}return null}})}),!0),document.addEventListener("submit",(function(){return n=void 0}))}));
//# sourceMappingURL=/sm/096586d0dcdb9e914bfab094a35d6ebe30b63befeb0c21f18616a5e36683c668.map