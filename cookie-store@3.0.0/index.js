/*!
  * Cookie-store v3.0.0
  * https://github.com/mkay581/cookie-store
  *
  * Copyright (c) 2020 Mark Kennedy
  * Licensed under the MIT license
 */

"use strict";
/**
 * Module variables.
 * @private
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;
/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */
// eslint-disable-next-line no-control-regex
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */
function tryDecode(str, decode) {
    try {
        return typeof decode === 'boolean' ? decodeURIComponent(str) : decode(str);
    }
    catch (e) {
        return str;
    }
}
/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @private
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    if (typeof str !== 'string') {
        throw new TypeError('argument str must be a string');
    }
    var obj = [];
    var opt = options || {};
    var pairs = str.split(pairSplitRegExp);
    var dec = opt.decode || decode;
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        var eqIdx = pair.indexOf('=');
        // skip things that don't look like key=value
        if (eqIdx < 0) {
            continue;
        }
        var key = pair.substr(0, eqIdx).trim();
        var val = pair.substr(++eqIdx, pair.length).trim();
        // quoted values
        if ('"' == val[0]) {
            val = val.slice(1, -1);
        }
        // only assign once
        if (undefined == obj[key]) {
            obj.push({
                name: key,
                value: tryDecode(val, dec),
            });
        }
    }
    return obj;
}
/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @private
 */
function serialize(name, val, options) {
    if (options === void 0) { options = {}; }
    var opt = options || {};
    var enc = opt.encode || encode;
    if (typeof enc !== 'function') {
        throw new TypeError('option encode is invalid');
    }
    if (!fieldContentRegExp.test(name)) {
        throw new TypeError('argument name is invalid');
    }
    var value = enc(val);
    if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError('argument val is invalid');
    }
    var str = name + '=' + value;
    if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge))
            throw new Error('maxAge should be a Number');
        str += '; Max-Age=' + Math.floor(maxAge);
    }
    if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
            throw new TypeError('option domain is invalid');
        }
        str += '; Domain=' + opt.domain;
    }
    if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
            throw new TypeError('option path is invalid');
        }
        str += '; Path=' + opt.path;
    }
    if (opt.expires) {
        if (typeof opt.expires.toUTCString !== 'function') {
            throw new TypeError('option expires is invalid');
        }
        str += '; Expires=' + opt.expires.toUTCString();
    }
    if (opt.httpOnly) {
        str += '; HttpOnly';
    }
    if (opt.secure) {
        str += '; Secure';
    }
    if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === 'string'
            ? opt.sameSite.toLowerCase()
            : opt.sameSite;
        switch (sameSite) {
            case true:
                str += '; SameSite=Strict';
                break;
            case 'lax':
                str += '; SameSite=Lax';
                break;
            case 'strict':
                str += '; SameSite=Strict';
                break;
            case 'none':
                str += '; SameSite=None';
                break;
            default:
                throw new TypeError('option sameSite is invalid');
        }
    }
    return str;
}
function sanitizeOptions(arg) {
    if (!arg) {
        return {};
    }
    if (typeof arg === 'string') {
        return { name: arg };
    }
    return arg;
}
var CookieStore = {
    /**
     * Get a cookie.
     *
     * @param {string} name
     * @return {Promise}
     */
    get: function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var name;
            return __generator(this, function (_a) {
                name = sanitizeOptions(options).name;
                return [2 /*return*/, parse(document.cookie).find(function (cookie) { return cookie.name === name; })];
            });
        });
    },
    /**
     * Set a cookie.
     *
     * @param {string} name
     * @param {string} value
     * @return {Promise}
     */
    set: function (name, value) {
        return new Promise(function (resolve, reject) {
            try {
                var cookieString = serialize(name, value);
                document.cookie = cookieString;
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    },
    /**
     * Get multiple cookies.
     */
    getAll: function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var name, cookie;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = sanitizeOptions(options).name;
                        if (!name) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.get(name)];
                    case 1:
                        cookie = _a.sent();
                        return [2 /*return*/, [cookie]];
                    case 2: return [2 /*return*/, parse(document.cookie)];
                }
            });
        });
    },
    /**
     * Remove a cookie.
     *
     * @param {String} name
     * @return {Promise}
     */
    delete: function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, domain, value, serializedValue;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = sanitizeOptions(options), name = _a.name, domain = _a.domain;
                        return [4 /*yield*/, this.get(name)];
                    case 1:
                        value = (_b.sent()).value;
                        serializedValue = serialize(name, value, {
                            maxAge: 0,
                            domain: domain,
                        });
                        document.cookie = serializedValue;
                        return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    },
};
if (!window.cookieStore) {
    window.cookieStore = CookieStore;
}
