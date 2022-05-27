/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/yet-another-abortcontroller-polyfill@0.0.4/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
const root="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||"undefined"!=typeof global&&global;if(void 0===root.AbortController){const t={};root.AbortSignal=function(){function o(o){if(o!==t)throw new TypeError("Illegal constructor.");EventTarget.call(this),this._aborted=!1}return o.prototype=Object.create(EventTarget.prototype),o.prototype.constructor=o,Object.defineProperty(o.prototype,"onabort",{get:function(){return this._onabort},set:function(t){const o=this._onabort;o&&this.removeEventListener("abort",o),this._onabort=t,this.addEventListener("abort",t)}}),Object.defineProperty(o.prototype,"aborted",{get:function(){return this._aborted}}),o}(),root.AbortController=function(){function o(){this._signal=new AbortSignal(t)}return o.prototype=Object.create(Object.prototype),Object.defineProperty(o.prototype,"signal",{get:function(){return this._signal}}),o.prototype.abort=function(){const t=this.signal;t.aborted||(t._aborted=!0,t.dispatchEvent(new Event("abort")))},o}()}
//# sourceMappingURL=/sm/d936ef670075a23acf02b9441a23645ed6a094eedbaa699b183b4822cdea42ff.map