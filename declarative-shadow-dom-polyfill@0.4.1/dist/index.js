var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var _a, _b, _c, _d;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.encodeHTMLEntities = void 0;
    exports.findShadowRoots = findShadowRoots;
    exports.generateHTML = generateHTML;
    exports.getHTML = getHTML;
    exports.attachDeclarativeShadowRoots = attachDeclarativeShadowRoots;
    exports.setHTMLUnsafe = setHTMLUnsafe;
    exports.parseHTMLUnsafe = parseHTMLUnsafe;
    var xmlSerializer = new XMLSerializer(), attachShadow = HTMLElement.prototype.attachShadow, shadowDOMs = new WeakMap();
    HTMLElement.prototype.attachShadow = function (options) {
        var shadowRoot = attachShadow.call(this, options);
        shadowDOMs.set(this, shadowRoot);
        return shadowRoot;
    };
    function findShadowRoots(root) {
        var walker, currentNode, shadowRoot;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: function (node) {
                            return node instanceof HTMLElement
                                ? NodeFilter.FILTER_ACCEPT
                                : NodeFilter.FILTER_SKIP;
                        }
                    });
                    currentNode = null;
                    _a.label = 1;
                case 1:
                    if (!(currentNode = walker.nextNode())) return [3 /*break*/, 5];
                    shadowRoot = shadowDOMs.get(currentNode);
                    if (!shadowRoot) return [3 /*break*/, 4];
                    return [4 /*yield*/, shadowRoot];
                case 2:
                    _a.sent();
                    return [5 /*yield**/, __values(findShadowRoots(shadowRoot))];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    }
    /**
     * @see {@link https://stackoverflow.com/a/18750001}
     *
     * Posted by Chris Baker, modified by community. See post 'Timeline' for change history
     *
     * @license CC-BY-SA-4.0
     */
    var encodeHTMLEntities = function (raw) {
        return raw.replace(/[\u00A0-\u9999<>'"&]/g, function (char) { return "&#" + char.charCodeAt(0) + ";"; });
    };
    exports.encodeHTMLEntities = encodeHTMLEntities;
    function generateHTML(root, _a) {
        var walker, currentNode, tagName, attributes, shadowRoot, shadowRootHTML, nextSibling, parentElement;
        var _b = _a === void 0 ? {} : _a, serializableShadowRoots = _b.serializableShadowRoots, shadowRoots = _b.shadowRoots;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    shadowRoots = (shadowRoots === null || shadowRoots === void 0 ? void 0 : shadowRoots.filter(Boolean)) || [];
                    if (!(!serializableShadowRoots || !shadowRoots[0])) return [3 /*break*/, 2];
                    return [4 /*yield*/, root.innerHTML];
                case 1:
                    _c.sent();
                    return [2 /*return*/];
                case 2:
                    walker = document.createTreeWalker(root, NodeFilter.SHOW_ALL, {
                        acceptNode: function (node) {
                            return node === root || node instanceof SVGElement
                                ? NodeFilter.FILTER_SKIP
                                : NodeFilter.FILTER_ACCEPT;
                        }
                    });
                    currentNode = null;
                    _c.label = 3;
                case 3:
                    if (!(currentNode = walker.nextNode())) return [3 /*break*/, 19];
                    if (!(currentNode instanceof CDATASection)) return [3 /*break*/, 5];
                    return [4 /*yield*/, "<![CDATA[".concat(currentNode.nodeValue, "]]>")];
                case 4:
                    _c.sent();
                    return [3 /*break*/, 16];
                case 5:
                    if (!(currentNode instanceof Text)) return [3 /*break*/, 7];
                    return [4 /*yield*/, currentNode.nodeValue || ""];
                case 6:
                    _c.sent();
                    return [3 /*break*/, 16];
                case 7:
                    if (!(currentNode instanceof Comment)) return [3 /*break*/, 9];
                    return [4 /*yield*/, "<!--".concat(currentNode.nodeValue, "-->")];
                case 8:
                    _c.sent();
                    return [3 /*break*/, 16];
                case 9:
                    if (!(currentNode instanceof SVGElement)) return [3 /*break*/, 11];
                    return [4 /*yield*/, xmlSerializer.serializeToString(currentNode)];
                case 10:
                    _c.sent();
                    return [3 /*break*/, 16];
                case 11:
                    if (!(currentNode instanceof Element)) return [3 /*break*/, 16];
                    tagName = currentNode.tagName.toLowerCase(), attributes = __spreadArray([], __read(currentNode.attributes), false).map(function (_a) {
                        var name = _a.name, value = _a.value;
                        return "".concat(name, "=\"").concat((0, exports.encodeHTMLEntities)(value), "\"");
                    }), shadowRoot = shadowDOMs.get(currentNode);
                    return [4 /*yield*/, "<".concat(__spreadArray([tagName], __read(attributes), false).join(" "), ">")];
                case 12:
                    _c.sent();
                    if (!(shadowRoot && shadowRoots.includes(shadowRoot))) return [3 /*break*/, 14];
                    shadowRootHTML = __spreadArray([], __read(generateHTML(shadowRoot, { serializableShadowRoots: serializableShadowRoots, shadowRoots: shadowRoots })), false).join("");
                    return [4 /*yield*/, "<template shadowrootmode=\"".concat(shadowRoot.mode, "\">").concat(shadowRootHTML, "</template>")];
                case 13:
                    _c.sent();
                    _c.label = 14;
                case 14:
                    if (!!currentNode.childNodes[0]) return [3 /*break*/, 16];
                    return [4 /*yield*/, "</".concat(tagName, ">")];
                case 15:
                    _c.sent();
                    _c.label = 16;
                case 16:
                    nextSibling = currentNode.nextSibling, parentElement = currentNode.parentElement;
                    if (!(!nextSibling && parentElement && parentElement !== root)) return [3 /*break*/, 18];
                    return [4 /*yield*/, "</".concat(parentElement.tagName.toLowerCase(), ">")];
                case 17:
                    _c.sent();
                    _c.label = 18;
                case 18: return [3 /*break*/, 3];
                case 19: return [2 /*return*/];
            }
        });
    }
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/getHTML}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/getHTML}
     */
    function getHTML(options) {
        if (options === void 0) { options = {}; }
        return __spreadArray([], __read(generateHTML(this, options)), false).join("");
    }
    function attachDeclarativeShadowRoots(root) {
        var e_1, _a;
        var templates = root.querySelectorAll("template[shadowrootmode]");
        try {
            for (var templates_1 = __values(templates), templates_1_1 = templates_1.next(); !templates_1_1.done; templates_1_1 = templates_1.next()) {
                var template = templates_1_1.value;
                var parentElement = template.parentElement, content = template.content;
                var shadowRoot = parentElement.attachShadow({
                    mode: template.getAttribute("shadowrootmode")
                });
                shadowRoot.append(content);
                template.remove();
                attachDeclarativeShadowRoots(shadowRoot);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (templates_1_1 && !templates_1_1.done && (_a = templates_1.return)) _a.call(templates_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/setHTMLUnsafe}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/setHTMLUnsafe}
     */
    function setHTMLUnsafe(html) {
        this.innerHTML = html;
        attachDeclarativeShadowRoots(this);
    }
    var domParser = new DOMParser(), initDocument = function (_a) {
        var _b = _a === void 0 ? document : _a, documentElement = _b.documentElement;
        return attachDeclarativeShadowRoots(documentElement);
    };
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/parseHTMLUnsafe_static}
     */
    function parseHTMLUnsafe(html) {
        var document = domParser.parseFromString(html, "text/html");
        initDocument(document);
        return document;
    }
    (_a = Element.prototype).getHTML || (_a.getHTML = getHTML);
    (_b = Element.prototype).setHTMLUnsafe || (_b.setHTMLUnsafe = setHTMLUnsafe);
    (_c = ShadowRoot.prototype).getHTML || (_c.getHTML = getHTML);
    (_d = ShadowRoot.prototype).setHTMLUnsafe || (_d.setHTMLUnsafe = setHTMLUnsafe);
    Document.parseHTMLUnsafe || (Document.parseHTMLUnsafe = parseHTMLUnsafe);
    new Promise(function (resolve) {
        if (document.readyState === "complete")
            resolve();
        else {
            document.addEventListener("DOMContentLoaded", resolve);
            window.addEventListener("load", resolve);
        }
    }).then(function () { return initDocument(); });
});
//# sourceMappingURL=index.js.map