(function() {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = function(cb, mod) {
    return function __require() {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
  };
  var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function")
      for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
        key = keys[i];
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: function(k) {
            return from[k];
          }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
    return to;
  };
  var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod);
  };

  // bazel-out/darwin-fastbuild/bin/external/npm/node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "bazel-out/darwin-fastbuild/bin/external/npm/node_modules/tslib/tslib.js": function(exports, module) {
      var __extends;
      var __assign2;
      var __rest;
      var __decorate;
      var __param;
      var __metadata;
      var __awaiter;
      var __generator;
      var __exportStar;
      var __values;
      var __read;
      var __spread;
      var __spreadArrays;
      var __spreadArray;
      var __await;
      var __asyncGenerator;
      var __asyncDelegator;
      var __asyncValues;
      var __makeTemplateObject;
      var __importStar;
      var __importDefault;
      var __classPrivateFieldGet;
      var __classPrivateFieldSet;
      var __classPrivateFieldIn;
      var __createBinding;
      (function(factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v) {
            return exports2[id] = previous ? previous(id, v) : v;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p))
              d[p] = b[p];
        };
        __extends = function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        __rest = function(s, e) {
          var t = {};
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
            }
          return t;
        };
        __decorate = function(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        __param = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __metadata = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter = function(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator = function(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __exportStar = function(m, o) {
          for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding(o, m, p);
        };
        __createBinding = Object.create ? function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          var desc = Object.getOwnPropertyDescriptor(m, k);
          if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() {
              return m[k];
            } };
          }
          Object.defineProperty(o, k2, desc);
        } : function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          o[k2] = m[k];
        };
        __values = function(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
          if (m)
            return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function() {
                if (o && i >= o.length)
                  o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read = function(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
            return o;
          var i = m.call(o), r, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error: error };
          } finally {
            try {
              if (r && !r.done && (m = i["return"]))
                m.call(i);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread = function() {
          for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
          return ar;
        };
        __spreadArrays = function() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
          return r;
        };
        __spreadArray = function(to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        };
        __await = function(v) {
          return this instanceof __await ? (this.v = v, this) : new __await(v);
        };
        __asyncGenerator = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i, q = [];
          return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function verb(n) {
            if (g[n])
              i[n] = function(v) {
                return new Promise(function(a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
                });
              };
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v) {
            if (f(v), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator = function(o) {
          var i, p;
          return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i[Symbol.iterator] = function() {
            return this;
          }, i;
          function verb(n, f) {
            i[n] = o[n] ? function(v) {
              return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
            } : f;
          }
        };
        __asyncValues = function(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i;
          return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i);
          function verb(n) {
            i[n] = o[n] && function(v) {
              return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v2) {
              resolve({ value: v2, done: d });
            }, reject);
          }
        };
        __makeTemplateObject = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        var __setModuleDefault = Object.create ? function(o, v) {
          Object.defineProperty(o, "default", { enumerable: true, value: v });
        } : function(o, v) {
          o["default"] = v;
        };
        __importStar = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
          }
          __setModuleDefault(result, mod);
          return result;
        };
        __importDefault = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet = function(receiver, state, kind, f) {
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
        };
        __classPrivateFieldSet = function(receiver, state, value, kind, f) {
          if (kind === "m")
            throw new TypeError("Private method is not writable");
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
        };
        __classPrivateFieldIn = function(state, receiver) {
          if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
            throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof state === "function" ? receiver === state : state.has(receiver);
        };
        exporter("__extends", __extends);
        exporter("__assign", __assign2);
        exporter("__rest", __rest);
        exporter("__decorate", __decorate);
        exporter("__param", __param);
        exporter("__metadata", __metadata);
        exporter("__awaiter", __awaiter);
        exporter("__generator", __generator);
        exporter("__exportStar", __exportStar);
        exporter("__createBinding", __createBinding);
        exporter("__values", __values);
        exporter("__read", __read);
        exporter("__spread", __spread);
        exporter("__spreadArrays", __spreadArrays);
        exporter("__spreadArray", __spreadArray);
        exporter("__await", __await);
        exporter("__asyncGenerator", __asyncGenerator);
        exporter("__asyncDelegator", __asyncDelegator);
        exporter("__asyncValues", __asyncValues);
        exporter("__makeTemplateObject", __makeTemplateObject);
        exporter("__importStar", __importStar);
        exporter("__importDefault", __importDefault);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet);
        exporter("__classPrivateFieldIn", __classPrivateFieldIn);
      });
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/CanonicalizeLocaleList.js
  var require_CanonicalizeLocaleList = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/CanonicalizeLocaleList.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CanonicalizeLocaleList = void 0;
      function CanonicalizeLocaleList2(locales) {
        return Intl.getCanonicalLocales(locales);
      }
      exports.CanonicalizeLocaleList = CanonicalizeLocaleList2;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/CanonicalizeTimeZoneName.js
  var require_CanonicalizeTimeZoneName = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/CanonicalizeTimeZoneName.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CanonicalizeTimeZoneName = void 0;
      function CanonicalizeTimeZoneName(tz, _a) {
        var tzData = _a.tzData, uppercaseLinks = _a.uppercaseLinks;
        var uppercasedTz = tz.toUpperCase();
        var uppercasedZones = Object.keys(tzData).reduce(function(all, z) {
          all[z.toUpperCase()] = z;
          return all;
        }, {});
        var ianaTimeZone = uppercaseLinks[uppercasedTz] || uppercasedZones[uppercasedTz];
        if (ianaTimeZone === "Etc/UTC" || ianaTimeZone === "Etc/GMT") {
          return "UTC";
        }
        return ianaTimeZone;
      }
      exports.CanonicalizeTimeZoneName = CanonicalizeTimeZoneName;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/262.js
  var require__ = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/262.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.msFromTime = exports.OrdinaryHasInstance = exports.SecFromTime = exports.MinFromTime = exports.HourFromTime = exports.DateFromTime = exports.MonthFromTime = exports.InLeapYear = exports.DayWithinYear = exports.DaysInYear = exports.YearFromTime = exports.TimeFromYear = exports.DayFromYear = exports.WeekDay = exports.Day = exports.Type = exports.HasOwnProperty = exports.ArrayCreate = exports.SameValue = exports.ToObject = exports.TimeClip = exports.ToNumber = exports.ToString = void 0;
      function ToString(o) {
        if (typeof o === "symbol") {
          throw TypeError("Cannot convert a Symbol value to a string");
        }
        return String(o);
      }
      exports.ToString = ToString;
      function ToNumber(val) {
        if (val === void 0) {
          return NaN;
        }
        if (val === null) {
          return 0;
        }
        if (typeof val === "boolean") {
          return val ? 1 : 0;
        }
        if (typeof val === "number") {
          return val;
        }
        if (typeof val === "symbol" || typeof val === "bigint") {
          throw new TypeError("Cannot convert symbol/bigint to number");
        }
        return Number(val);
      }
      exports.ToNumber = ToNumber;
      function ToInteger(n) {
        var number = ToNumber(n);
        if (isNaN(number) || SameValue(number, -0)) {
          return 0;
        }
        if (isFinite(number)) {
          return number;
        }
        var integer = Math.floor(Math.abs(number));
        if (number < 0) {
          integer = -integer;
        }
        if (SameValue(integer, -0)) {
          return 0;
        }
        return integer;
      }
      function TimeClip(time) {
        if (!isFinite(time)) {
          return NaN;
        }
        if (Math.abs(time) > 8.64 * 1e15) {
          return NaN;
        }
        return ToInteger(time);
      }
      exports.TimeClip = TimeClip;
      function ToObject(arg) {
        if (arg == null) {
          throw new TypeError("undefined/null cannot be converted to object");
        }
        return Object(arg);
      }
      exports.ToObject = ToObject;
      function SameValue(x, y) {
        if (Object.is) {
          return Object.is(x, y);
        }
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        }
        return x !== x && y !== y;
      }
      exports.SameValue = SameValue;
      function ArrayCreate(len) {
        return new Array(len);
      }
      exports.ArrayCreate = ArrayCreate;
      function HasOwnProperty(o, prop) {
        return Object.prototype.hasOwnProperty.call(o, prop);
      }
      exports.HasOwnProperty = HasOwnProperty;
      function Type(x) {
        if (x === null) {
          return "Null";
        }
        if (typeof x === "undefined") {
          return "Undefined";
        }
        if (typeof x === "function" || typeof x === "object") {
          return "Object";
        }
        if (typeof x === "number") {
          return "Number";
        }
        if (typeof x === "boolean") {
          return "Boolean";
        }
        if (typeof x === "string") {
          return "String";
        }
        if (typeof x === "symbol") {
          return "Symbol";
        }
        if (typeof x === "bigint") {
          return "BigInt";
        }
      }
      exports.Type = Type;
      var MS_PER_DAY = 864e5;
      function mod(x, y) {
        return x - Math.floor(x / y) * y;
      }
      function Day(t) {
        return Math.floor(t / MS_PER_DAY);
      }
      exports.Day = Day;
      function WeekDay(t) {
        return mod(Day(t) + 4, 7);
      }
      exports.WeekDay = WeekDay;
      function DayFromYear(y) {
        return Date.UTC(y, 0) / MS_PER_DAY;
      }
      exports.DayFromYear = DayFromYear;
      function TimeFromYear(y) {
        return Date.UTC(y, 0);
      }
      exports.TimeFromYear = TimeFromYear;
      function YearFromTime(t) {
        return new Date(t).getUTCFullYear();
      }
      exports.YearFromTime = YearFromTime;
      function DaysInYear(y) {
        if (y % 4 !== 0) {
          return 365;
        }
        if (y % 100 !== 0) {
          return 366;
        }
        if (y % 400 !== 0) {
          return 365;
        }
        return 366;
      }
      exports.DaysInYear = DaysInYear;
      function DayWithinYear(t) {
        return Day(t) - DayFromYear(YearFromTime(t));
      }
      exports.DayWithinYear = DayWithinYear;
      function InLeapYear(t) {
        return DaysInYear(YearFromTime(t)) === 365 ? 0 : 1;
      }
      exports.InLeapYear = InLeapYear;
      function MonthFromTime(t) {
        var dwy = DayWithinYear(t);
        var leap = InLeapYear(t);
        if (dwy >= 0 && dwy < 31) {
          return 0;
        }
        if (dwy < 59 + leap) {
          return 1;
        }
        if (dwy < 90 + leap) {
          return 2;
        }
        if (dwy < 120 + leap) {
          return 3;
        }
        if (dwy < 151 + leap) {
          return 4;
        }
        if (dwy < 181 + leap) {
          return 5;
        }
        if (dwy < 212 + leap) {
          return 6;
        }
        if (dwy < 243 + leap) {
          return 7;
        }
        if (dwy < 273 + leap) {
          return 8;
        }
        if (dwy < 304 + leap) {
          return 9;
        }
        if (dwy < 334 + leap) {
          return 10;
        }
        if (dwy < 365 + leap) {
          return 11;
        }
        throw new Error("Invalid time");
      }
      exports.MonthFromTime = MonthFromTime;
      function DateFromTime(t) {
        var dwy = DayWithinYear(t);
        var mft = MonthFromTime(t);
        var leap = InLeapYear(t);
        if (mft === 0) {
          return dwy + 1;
        }
        if (mft === 1) {
          return dwy - 30;
        }
        if (mft === 2) {
          return dwy - 58 - leap;
        }
        if (mft === 3) {
          return dwy - 89 - leap;
        }
        if (mft === 4) {
          return dwy - 119 - leap;
        }
        if (mft === 5) {
          return dwy - 150 - leap;
        }
        if (mft === 6) {
          return dwy - 180 - leap;
        }
        if (mft === 7) {
          return dwy - 211 - leap;
        }
        if (mft === 8) {
          return dwy - 242 - leap;
        }
        if (mft === 9) {
          return dwy - 272 - leap;
        }
        if (mft === 10) {
          return dwy - 303 - leap;
        }
        if (mft === 11) {
          return dwy - 333 - leap;
        }
        throw new Error("Invalid time");
      }
      exports.DateFromTime = DateFromTime;
      var HOURS_PER_DAY = 24;
      var MINUTES_PER_HOUR = 60;
      var SECONDS_PER_MINUTE = 60;
      var MS_PER_SECOND = 1e3;
      var MS_PER_MINUTE = MS_PER_SECOND * SECONDS_PER_MINUTE;
      var MS_PER_HOUR = MS_PER_MINUTE * MINUTES_PER_HOUR;
      function HourFromTime(t) {
        return mod(Math.floor(t / MS_PER_HOUR), HOURS_PER_DAY);
      }
      exports.HourFromTime = HourFromTime;
      function MinFromTime(t) {
        return mod(Math.floor(t / MS_PER_MINUTE), MINUTES_PER_HOUR);
      }
      exports.MinFromTime = MinFromTime;
      function SecFromTime(t) {
        return mod(Math.floor(t / MS_PER_SECOND), SECONDS_PER_MINUTE);
      }
      exports.SecFromTime = SecFromTime;
      function IsCallable(fn) {
        return typeof fn === "function";
      }
      function OrdinaryHasInstance(C, O, internalSlots) {
        if (!IsCallable(C)) {
          return false;
        }
        if (internalSlots === null || internalSlots === void 0 ? void 0 : internalSlots.boundTargetFunction) {
          var BC = internalSlots === null || internalSlots === void 0 ? void 0 : internalSlots.boundTargetFunction;
          return O instanceof BC;
        }
        if (typeof O !== "object") {
          return false;
        }
        var P = C.prototype;
        if (typeof P !== "object") {
          throw new TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
        }
        return Object.prototype.isPrototypeOf.call(P, O);
      }
      exports.OrdinaryHasInstance = OrdinaryHasInstance;
      function msFromTime(t) {
        return mod(t, MS_PER_SECOND);
      }
      exports.msFromTime = msFromTime;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/CoerceOptionsToObject.js
  var require_CoerceOptionsToObject = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/CoerceOptionsToObject.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CoerceOptionsToObject = void 0;
      var _262_1 = require__();
      function CoerceOptionsToObject(options) {
        if (typeof options === "undefined") {
          return /* @__PURE__ */ Object.create(null);
        }
        return (0, _262_1.ToObject)(options);
      }
      exports.CoerceOptionsToObject = CoerceOptionsToObject;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/DefaultNumberOption.js
  var require_DefaultNumberOption = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/DefaultNumberOption.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DefaultNumberOption = void 0;
      function DefaultNumberOption(val, min, max, fallback) {
        if (val !== void 0) {
          val = Number(val);
          if (isNaN(val) || val < min || val > max) {
            throw new RangeError("".concat(val, " is outside of range [").concat(min, ", ").concat(max, "]"));
          }
          return Math.floor(val);
        }
        return fallback;
      }
      exports.DefaultNumberOption = DefaultNumberOption;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/GetNumberOption.js
  var require_GetNumberOption = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/GetNumberOption.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.GetNumberOption = void 0;
      var DefaultNumberOption_1 = require_DefaultNumberOption();
      function GetNumberOption(options, property, minimum, maximum, fallback) {
        var val = options[property];
        return (0, DefaultNumberOption_1.DefaultNumberOption)(val, minimum, maximum, fallback);
      }
      exports.GetNumberOption = GetNumberOption;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/GetOption.js
  var require_GetOption = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/GetOption.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.GetOption = void 0;
      var _262_1 = require__();
      function GetOption2(opts, prop, type, values, fallback) {
        if (typeof opts !== "object") {
          throw new TypeError("Options must be an object");
        }
        var value = opts[prop];
        if (value !== void 0) {
          if (type !== "boolean" && type !== "string") {
            throw new TypeError("invalid type");
          }
          if (type === "boolean") {
            value = Boolean(value);
          }
          if (type === "string") {
            value = (0, _262_1.ToString)(value);
          }
          if (values !== void 0 && !values.filter(function(val) {
            return val == value;
          }).length) {
            throw new RangeError("".concat(value, " is not within ").concat(values.join(", ")));
          }
          return value;
        }
        return fallback;
      }
      exports.GetOption = GetOption2;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/GetOptionsObject.js
  var require_GetOptionsObject = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/GetOptionsObject.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.GetOptionsObject = void 0;
      function GetOptionsObject2(options) {
        if (typeof options === "undefined") {
          return /* @__PURE__ */ Object.create(null);
        }
        if (typeof options === "object") {
          return options;
        }
        throw new TypeError("Options must be an object");
      }
      exports.GetOptionsObject = GetOptionsObject2;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/IsSanctionedSimpleUnitIdentifier.js
  var require_IsSanctionedSimpleUnitIdentifier = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/IsSanctionedSimpleUnitIdentifier.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.IsSanctionedSimpleUnitIdentifier = exports.SIMPLE_UNITS = exports.removeUnitNamespace = exports.SANCTIONED_UNITS = void 0;
      exports.SANCTIONED_UNITS = [
        "angle-degree",
        "area-acre",
        "area-hectare",
        "concentr-percent",
        "digital-bit",
        "digital-byte",
        "digital-gigabit",
        "digital-gigabyte",
        "digital-kilobit",
        "digital-kilobyte",
        "digital-megabit",
        "digital-megabyte",
        "digital-petabyte",
        "digital-terabit",
        "digital-terabyte",
        "duration-day",
        "duration-hour",
        "duration-millisecond",
        "duration-minute",
        "duration-month",
        "duration-second",
        "duration-week",
        "duration-year",
        "length-centimeter",
        "length-foot",
        "length-inch",
        "length-kilometer",
        "length-meter",
        "length-mile-scandinavian",
        "length-mile",
        "length-millimeter",
        "length-yard",
        "mass-gram",
        "mass-kilogram",
        "mass-ounce",
        "mass-pound",
        "mass-stone",
        "temperature-celsius",
        "temperature-fahrenheit",
        "volume-fluid-ounce",
        "volume-gallon",
        "volume-liter",
        "volume-milliliter"
      ];
      function removeUnitNamespace(unit) {
        return unit.slice(unit.indexOf("-") + 1);
      }
      exports.removeUnitNamespace = removeUnitNamespace;
      exports.SIMPLE_UNITS = exports.SANCTIONED_UNITS.map(removeUnitNamespace);
      function IsSanctionedSimpleUnitIdentifier(unitIdentifier) {
        return exports.SIMPLE_UNITS.indexOf(unitIdentifier) > -1;
      }
      exports.IsSanctionedSimpleUnitIdentifier = IsSanctionedSimpleUnitIdentifier;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/IsValidTimeZoneName.js
  var require_IsValidTimeZoneName = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/IsValidTimeZoneName.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.IsValidTimeZoneName = void 0;
      function IsValidTimeZoneName(tz, _a) {
        var tzData = _a.tzData, uppercaseLinks = _a.uppercaseLinks;
        var uppercasedTz = tz.toUpperCase();
        var zoneNames = /* @__PURE__ */ new Set();
        var linkNames = /* @__PURE__ */ new Set();
        Object.keys(tzData).map(function(z) {
          return z.toUpperCase();
        }).forEach(function(z) {
          return zoneNames.add(z);
        });
        Object.keys(uppercaseLinks).forEach(function(linkName) {
          linkNames.add(linkName.toUpperCase());
          zoneNames.add(uppercaseLinks[linkName].toUpperCase());
        });
        return zoneNames.has(uppercasedTz) || linkNames.has(uppercasedTz);
      }
      exports.IsValidTimeZoneName = IsValidTimeZoneName;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/IsWellFormedCurrencyCode.js
  var require_IsWellFormedCurrencyCode = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/IsWellFormedCurrencyCode.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.IsWellFormedCurrencyCode = void 0;
      function toUpperCase(str) {
        return str.replace(/([a-z])/g, function(_, c) {
          return c.toUpperCase();
        });
      }
      var NOT_A_Z_REGEX = /[^A-Z]/;
      function IsWellFormedCurrencyCode(currency) {
        currency = toUpperCase(currency);
        if (currency.length !== 3) {
          return false;
        }
        if (NOT_A_Z_REGEX.test(currency)) {
          return false;
        }
        return true;
      }
      exports.IsWellFormedCurrencyCode = IsWellFormedCurrencyCode;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/IsWellFormedUnitIdentifier.js
  var require_IsWellFormedUnitIdentifier = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/IsWellFormedUnitIdentifier.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.IsWellFormedUnitIdentifier = void 0;
      var IsSanctionedSimpleUnitIdentifier_1 = require_IsSanctionedSimpleUnitIdentifier();
      function toLowerCase(str) {
        return str.replace(/([A-Z])/g, function(_, c) {
          return c.toLowerCase();
        });
      }
      function IsWellFormedUnitIdentifier(unit) {
        unit = toLowerCase(unit);
        if ((0, IsSanctionedSimpleUnitIdentifier_1.IsSanctionedSimpleUnitIdentifier)(unit)) {
          return true;
        }
        var units = unit.split("-per-");
        if (units.length !== 2) {
          return false;
        }
        var numerator = units[0], denominator = units[1];
        if (!(0, IsSanctionedSimpleUnitIdentifier_1.IsSanctionedSimpleUnitIdentifier)(numerator) || !(0, IsSanctionedSimpleUnitIdentifier_1.IsSanctionedSimpleUnitIdentifier)(denominator)) {
          return false;
        }
        return true;
      }
      exports.IsWellFormedUnitIdentifier = IsWellFormedUnitIdentifier;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/utils.js
  var require_utils = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/utils.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.invariant = exports.UNICODE_EXTENSION_SEQUENCE_REGEX = exports.defineProperty = exports.isLiteralPart = exports.getMultiInternalSlots = exports.getInternalSlot = exports.setMultiInternalSlots = exports.setInternalSlot = exports.repeat = exports.getMagnitude = void 0;
      function getMagnitude(x) {
        return Math.floor(Math.log(x) * Math.LOG10E);
      }
      exports.getMagnitude = getMagnitude;
      function repeat(s, times) {
        if (typeof s.repeat === "function") {
          return s.repeat(times);
        }
        var arr = new Array(times);
        for (var i = 0; i < arr.length; i++) {
          arr[i] = s;
        }
        return arr.join("");
      }
      exports.repeat = repeat;
      function setInternalSlot2(map, pl, field, value) {
        if (!map.get(pl)) {
          map.set(pl, /* @__PURE__ */ Object.create(null));
        }
        var slots = map.get(pl);
        slots[field] = value;
      }
      exports.setInternalSlot = setInternalSlot2;
      function setMultiInternalSlots(map, pl, props) {
        for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
          var k = _a[_i];
          setInternalSlot2(map, pl, k, props[k]);
        }
      }
      exports.setMultiInternalSlots = setMultiInternalSlots;
      function getInternalSlot2(map, pl, field) {
        return getMultiInternalSlots(map, pl, field)[field];
      }
      exports.getInternalSlot = getInternalSlot2;
      function getMultiInternalSlots(map, pl) {
        var fields = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          fields[_i - 2] = arguments[_i];
        }
        var slots = map.get(pl);
        if (!slots) {
          throw new TypeError("".concat(pl, " InternalSlot has not been initialized"));
        }
        return fields.reduce(function(all, f) {
          all[f] = slots[f];
          return all;
        }, /* @__PURE__ */ Object.create(null));
      }
      exports.getMultiInternalSlots = getMultiInternalSlots;
      function isLiteralPart2(patternPart) {
        return patternPart.type === "literal";
      }
      exports.isLiteralPart = isLiteralPart2;
      function defineProperty(target, name, _a) {
        var value = _a.value;
        Object.defineProperty(target, name, {
          configurable: true,
          enumerable: false,
          writable: true,
          value: value
        });
      }
      exports.defineProperty = defineProperty;
      exports.UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
      function invariant2(condition, message, Err) {
        if (Err === void 0) {
          Err = Error;
        }
        if (!condition) {
          throw new Err(message);
        }
      }
      exports.invariant = invariant2;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/ComputeExponentForMagnitude.js
  var require_ComputeExponentForMagnitude = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/ComputeExponentForMagnitude.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ComputeExponentForMagnitude = void 0;
      function ComputeExponentForMagnitude(numberFormat, magnitude, _a) {
        var getInternalSlots = _a.getInternalSlots;
        var internalSlots = getInternalSlots(numberFormat);
        var notation = internalSlots.notation, dataLocaleData = internalSlots.dataLocaleData, numberingSystem = internalSlots.numberingSystem;
        switch (notation) {
          case "standard":
            return 0;
          case "scientific":
            return magnitude;
          case "engineering":
            return Math.floor(magnitude / 3) * 3;
          default: {
            var compactDisplay = internalSlots.compactDisplay, style = internalSlots.style, currencyDisplay = internalSlots.currencyDisplay;
            var thresholdMap = void 0;
            if (style === "currency" && currencyDisplay !== "name") {
              var currency = dataLocaleData.numbers.currency[numberingSystem] || dataLocaleData.numbers.currency[dataLocaleData.numbers.nu[0]];
              thresholdMap = currency.short;
            } else {
              var decimal = dataLocaleData.numbers.decimal[numberingSystem] || dataLocaleData.numbers.decimal[dataLocaleData.numbers.nu[0]];
              thresholdMap = compactDisplay === "long" ? decimal.long : decimal.short;
            }
            if (!thresholdMap) {
              return 0;
            }
            var num = String(Math.pow(10, magnitude));
            var thresholds = Object.keys(thresholdMap);
            if (num < thresholds[0]) {
              return 0;
            }
            if (num > thresholds[thresholds.length - 1]) {
              return thresholds[thresholds.length - 1].length - 1;
            }
            var i = thresholds.indexOf(num);
            if (i === -1) {
              return 0;
            }
            var magnitudeKey = thresholds[i];
            var compactPattern = thresholdMap[magnitudeKey].other;
            if (compactPattern === "0") {
              return 0;
            }
            return magnitudeKey.length - thresholdMap[magnitudeKey].other.match(/0+/)[0].length;
          }
        }
      }
      exports.ComputeExponentForMagnitude = ComputeExponentForMagnitude;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/ToRawPrecision.js
  var require_ToRawPrecision = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/ToRawPrecision.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ToRawPrecision = void 0;
      var utils_1 = require_utils();
      function ToRawPrecision(x, minPrecision, maxPrecision) {
        var p = maxPrecision;
        var m;
        var e;
        var xFinal;
        if (x === 0) {
          m = (0, utils_1.repeat)("0", p);
          e = 0;
          xFinal = 0;
        } else {
          var xToString = x.toString();
          var xToStringExponentIndex = xToString.indexOf("e");
          var _a = xToString.split("e"), xToStringMantissa = _a[0], xToStringExponent = _a[1];
          var xToStringMantissaWithoutDecimalPoint = xToStringMantissa.replace(".", "");
          if (xToStringExponentIndex >= 0 && xToStringMantissaWithoutDecimalPoint.length <= p) {
            e = +xToStringExponent;
            m = xToStringMantissaWithoutDecimalPoint + (0, utils_1.repeat)("0", p - xToStringMantissaWithoutDecimalPoint.length);
            xFinal = x;
          } else {
            e = (0, utils_1.getMagnitude)(x);
            var decimalPlaceOffset = e - p + 1;
            var n = Math.round(adjustDecimalPlace(x, decimalPlaceOffset));
            if (adjustDecimalPlace(n, p - 1) >= 10) {
              e = e + 1;
              n = Math.floor(n / 10);
            }
            m = n.toString();
            xFinal = adjustDecimalPlace(n, p - 1 - e);
          }
        }
        var int;
        if (e >= p - 1) {
          m = m + (0, utils_1.repeat)("0", e - p + 1);
          int = e + 1;
        } else if (e >= 0) {
          m = "".concat(m.slice(0, e + 1), ".").concat(m.slice(e + 1));
          int = e + 1;
        } else {
          m = "0.".concat((0, utils_1.repeat)("0", -e - 1)).concat(m);
          int = 1;
        }
        if (m.indexOf(".") >= 0 && maxPrecision > minPrecision) {
          var cut = maxPrecision - minPrecision;
          while (cut > 0 && m[m.length - 1] === "0") {
            m = m.slice(0, -1);
            cut--;
          }
          if (m[m.length - 1] === ".") {
            m = m.slice(0, -1);
          }
        }
        return { formattedString: m, roundedNumber: xFinal, integerDigitsCount: int };
        function adjustDecimalPlace(x2, magnitude) {
          return magnitude < 0 ? x2 * Math.pow(10, -magnitude) : x2 / Math.pow(10, magnitude);
        }
      }
      exports.ToRawPrecision = ToRawPrecision;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/ToRawFixed.js
  var require_ToRawFixed = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/ToRawFixed.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ToRawFixed = void 0;
      var utils_1 = require_utils();
      function ToRawFixed(x, minFraction, maxFraction) {
        var f = maxFraction;
        var n = Math.round(x * Math.pow(10, f));
        var xFinal = n / Math.pow(10, f);
        var m;
        if (n < 1e21) {
          m = n.toString();
        } else {
          m = n.toString();
          var _a = m.split("e"), mantissa = _a[0], exponent = _a[1];
          m = mantissa.replace(".", "");
          m = m + (0, utils_1.repeat)("0", Math.max(+exponent - m.length + 1, 0));
        }
        var int;
        if (f !== 0) {
          var k = m.length;
          if (k <= f) {
            var z = (0, utils_1.repeat)("0", f + 1 - k);
            m = z + m;
            k = f + 1;
          }
          var a = m.slice(0, k - f);
          var b = m.slice(k - f);
          m = "".concat(a, ".").concat(b);
          int = a.length;
        } else {
          int = m.length;
        }
        var cut = maxFraction - minFraction;
        while (cut > 0 && m[m.length - 1] === "0") {
          m = m.slice(0, -1);
          cut--;
        }
        if (m[m.length - 1] === ".") {
          m = m.slice(0, -1);
        }
        return { formattedString: m, roundedNumber: xFinal, integerDigitsCount: int };
      }
      exports.ToRawFixed = ToRawFixed;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/FormatNumericToString.js
  var require_FormatNumericToString = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/FormatNumericToString.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FormatNumericToString = void 0;
      var _262_1 = require__();
      var ToRawPrecision_1 = require_ToRawPrecision();
      var utils_1 = require_utils();
      var ToRawFixed_1 = require_ToRawFixed();
      function FormatNumericToString(intlObject, x) {
        var isNegative = x < 0 || (0, _262_1.SameValue)(x, -0);
        if (isNegative) {
          x = -x;
        }
        var result;
        var rourndingType = intlObject.roundingType;
        switch (rourndingType) {
          case "significantDigits":
            result = (0, ToRawPrecision_1.ToRawPrecision)(x, intlObject.minimumSignificantDigits, intlObject.maximumSignificantDigits);
            break;
          case "fractionDigits":
            result = (0, ToRawFixed_1.ToRawFixed)(x, intlObject.minimumFractionDigits, intlObject.maximumFractionDigits);
            break;
          default:
            result = (0, ToRawPrecision_1.ToRawPrecision)(x, 1, 2);
            if (result.integerDigitsCount > 1) {
              result = (0, ToRawFixed_1.ToRawFixed)(x, 0, 0);
            }
            break;
        }
        x = result.roundedNumber;
        var string = result.formattedString;
        var int = result.integerDigitsCount;
        var minInteger = intlObject.minimumIntegerDigits;
        if (int < minInteger) {
          var forwardZeros = (0, utils_1.repeat)("0", minInteger - int);
          string = forwardZeros + string;
        }
        if (isNegative) {
          x = -x;
        }
        return { roundedNumber: x, formattedString: string };
      }
      exports.FormatNumericToString = FormatNumericToString;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/ComputeExponent.js
  var require_ComputeExponent = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/ComputeExponent.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ComputeExponent = void 0;
      var utils_1 = require_utils();
      var ComputeExponentForMagnitude_1 = require_ComputeExponentForMagnitude();
      var FormatNumericToString_1 = require_FormatNumericToString();
      function ComputeExponent(numberFormat, x, _a) {
        var getInternalSlots = _a.getInternalSlots;
        if (x === 0) {
          return [0, 0];
        }
        if (x < 0) {
          x = -x;
        }
        var magnitude = (0, utils_1.getMagnitude)(x);
        var exponent = (0, ComputeExponentForMagnitude_1.ComputeExponentForMagnitude)(numberFormat, magnitude, {
          getInternalSlots: getInternalSlots
        });
        x = exponent < 0 ? x * Math.pow(10, -exponent) : x / Math.pow(10, exponent);
        var formatNumberResult = (0, FormatNumericToString_1.FormatNumericToString)(getInternalSlots(numberFormat), x);
        if (formatNumberResult.roundedNumber === 0) {
          return [exponent, magnitude];
        }
        var newMagnitude = (0, utils_1.getMagnitude)(formatNumberResult.roundedNumber);
        if (newMagnitude === magnitude - exponent) {
          return [exponent, magnitude];
        }
        return [
          (0, ComputeExponentForMagnitude_1.ComputeExponentForMagnitude)(numberFormat, magnitude + 1, {
            getInternalSlots: getInternalSlots
          }),
          magnitude + 1
        ];
      }
      exports.ComputeExponent = ComputeExponent;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/CurrencyDigits.js
  var require_CurrencyDigits = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/CurrencyDigits.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CurrencyDigits = void 0;
      var _262_1 = require__();
      function CurrencyDigits(c, _a) {
        var currencyDigitsData = _a.currencyDigitsData;
        return (0, _262_1.HasOwnProperty)(currencyDigitsData, c) ? currencyDigitsData[c] : 2;
      }
      exports.CurrencyDigits = CurrencyDigits;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/digit-mapping.generated.js
  var require_digit_mapping_generated = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/digit-mapping.generated.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.digitMapping = void 0;
      exports.digitMapping = { "adlm": ["\uD83A\uDD50", "\uD83A\uDD51", "\uD83A\uDD52", "\uD83A\uDD53", "\uD83A\uDD54", "\uD83A\uDD55", "\uD83A\uDD56", "\uD83A\uDD57", "\uD83A\uDD58", "\uD83A\uDD59"], "ahom": ["\uD805\uDF30", "\uD805\uDF31", "\uD805\uDF32", "\uD805\uDF33", "\uD805\uDF34", "\uD805\uDF35", "\uD805\uDF36", "\uD805\uDF37", "\uD805\uDF38", "\uD805\uDF39"], "arab": ["\u0660", "\u0661", "\u0662", "\u0663", "\u0664", "\u0665", "\u0666", "\u0667", "\u0668", "\u0669"], "arabext": ["\u06F0", "\u06F1", "\u06F2", "\u06F3", "\u06F4", "\u06F5", "\u06F6", "\u06F7", "\u06F8", "\u06F9"], "bali": ["\u1B50", "\u1B51", "\u1B52", "\u1B53", "\u1B54", "\u1B55", "\u1B56", "\u1B57", "\u1B58", "\u1B59"], "beng": ["\u09E6", "\u09E7", "\u09E8", "\u09E9", "\u09EA", "\u09EB", "\u09EC", "\u09ED", "\u09EE", "\u09EF"], "bhks": ["\uD807\uDC50", "\uD807\uDC51", "\uD807\uDC52", "\uD807\uDC53", "\uD807\uDC54", "\uD807\uDC55", "\uD807\uDC56", "\uD807\uDC57", "\uD807\uDC58", "\uD807\uDC59"], "brah": ["\uD804\uDC66", "\uD804\uDC67", "\uD804\uDC68", "\uD804\uDC69", "\uD804\uDC6A", "\uD804\uDC6B", "\uD804\uDC6C", "\uD804\uDC6D", "\uD804\uDC6E", "\uD804\uDC6F"], "cakm": ["\uD804\uDD36", "\uD804\uDD37", "\uD804\uDD38", "\uD804\uDD39", "\uD804\uDD3A", "\uD804\uDD3B", "\uD804\uDD3C", "\uD804\uDD3D", "\uD804\uDD3E", "\uD804\uDD3F"], "cham": ["\uAA50", "\uAA51", "\uAA52", "\uAA53", "\uAA54", "\uAA55", "\uAA56", "\uAA57", "\uAA58", "\uAA59"], "deva": ["\u0966", "\u0967", "\u0968", "\u0969", "\u096A", "\u096B", "\u096C", "\u096D", "\u096E", "\u096F"], "diak": ["\uD806\uDD50", "\uD806\uDD51", "\uD806\uDD52", "\uD806\uDD53", "\uD806\uDD54", "\uD806\uDD55", "\uD806\uDD56", "\uD806\uDD57", "\uD806\uDD58", "\uD806\uDD59"], "fullwide": ["\uFF10", "\uFF11", "\uFF12", "\uFF13", "\uFF14", "\uFF15", "\uFF16", "\uFF17", "\uFF18", "\uFF19"], "gong": ["\uD807\uDDA0", "\uD807\uDDA1", "\uD807\uDDA2", "\uD807\uDDA3", "\uD807\uDDA4", "\uD807\uDDA5", "\uD807\uDDA6", "\uD807\uDDA7", "\uD807\uDDA8", "\uD807\uDDA9"], "gonm": ["\uD807\uDD50", "\uD807\uDD51", "\uD807\uDD52", "\uD807\uDD53", "\uD807\uDD54", "\uD807\uDD55", "\uD807\uDD56", "\uD807\uDD57", "\uD807\uDD58", "\uD807\uDD59"], "gujr": ["\u0AE6", "\u0AE7", "\u0AE8", "\u0AE9", "\u0AEA", "\u0AEB", "\u0AEC", "\u0AED", "\u0AEE", "\u0AEF"], "guru": ["\u0A66", "\u0A67", "\u0A68", "\u0A69", "\u0A6A", "\u0A6B", "\u0A6C", "\u0A6D", "\u0A6E", "\u0A6F"], "hanidec": ["\u3007", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D"], "hmng": ["\uD81A\uDF50", "\uD81A\uDF51", "\uD81A\uDF52", "\uD81A\uDF53", "\uD81A\uDF54", "\uD81A\uDF55", "\uD81A\uDF56", "\uD81A\uDF57", "\uD81A\uDF58", "\uD81A\uDF59"], "hmnp": ["\uD838\uDD40", "\uD838\uDD41", "\uD838\uDD42", "\uD838\uDD43", "\uD838\uDD44", "\uD838\uDD45", "\uD838\uDD46", "\uD838\uDD47", "\uD838\uDD48", "\uD838\uDD49"], "java": ["\uA9D0", "\uA9D1", "\uA9D2", "\uA9D3", "\uA9D4", "\uA9D5", "\uA9D6", "\uA9D7", "\uA9D8", "\uA9D9"], "kali": ["\uA900", "\uA901", "\uA902", "\uA903", "\uA904", "\uA905", "\uA906", "\uA907", "\uA908", "\uA909"], "khmr": ["\u17E0", "\u17E1", "\u17E2", "\u17E3", "\u17E4", "\u17E5", "\u17E6", "\u17E7", "\u17E8", "\u17E9"], "knda": ["\u0CE6", "\u0CE7", "\u0CE8", "\u0CE9", "\u0CEA", "\u0CEB", "\u0CEC", "\u0CED", "\u0CEE", "\u0CEF"], "lana": ["\u1A80", "\u1A81", "\u1A82", "\u1A83", "\u1A84", "\u1A85", "\u1A86", "\u1A87", "\u1A88", "\u1A89"], "lanatham": ["\u1A90", "\u1A91", "\u1A92", "\u1A93", "\u1A94", "\u1A95", "\u1A96", "\u1A97", "\u1A98", "\u1A99"], "laoo": ["\u0ED0", "\u0ED1", "\u0ED2", "\u0ED3", "\u0ED4", "\u0ED5", "\u0ED6", "\u0ED7", "\u0ED8", "\u0ED9"], "lepc": ["\u1A90", "\u1A91", "\u1A92", "\u1A93", "\u1A94", "\u1A95", "\u1A96", "\u1A97", "\u1A98", "\u1A99"], "limb": ["\u1946", "\u1947", "\u1948", "\u1949", "\u194A", "\u194B", "\u194C", "\u194D", "\u194E", "\u194F"], "mathbold": ["\uD835\uDFCE", "\uD835\uDFCF", "\uD835\uDFD0", "\uD835\uDFD1", "\uD835\uDFD2", "\uD835\uDFD3", "\uD835\uDFD4", "\uD835\uDFD5", "\uD835\uDFD6", "\uD835\uDFD7"], "mathdbl": ["\uD835\uDFD8", "\uD835\uDFD9", "\uD835\uDFDA", "\uD835\uDFDB", "\uD835\uDFDC", "\uD835\uDFDD", "\uD835\uDFDE", "\uD835\uDFDF", "\uD835\uDFE0", "\uD835\uDFE1"], "mathmono": ["\uD835\uDFF6", "\uD835\uDFF7", "\uD835\uDFF8", "\uD835\uDFF9", "\uD835\uDFFA", "\uD835\uDFFB", "\uD835\uDFFC", "\uD835\uDFFD", "\uD835\uDFFE", "\uD835\uDFFF"], "mathsanb": ["\uD835\uDFEC", "\uD835\uDFED", "\uD835\uDFEE", "\uD835\uDFEF", "\uD835\uDFF0", "\uD835\uDFF1", "\uD835\uDFF2", "\uD835\uDFF3", "\uD835\uDFF4", "\uD835\uDFF5"], "mathsans": ["\uD835\uDFE2", "\uD835\uDFE3", "\uD835\uDFE4", "\uD835\uDFE5", "\uD835\uDFE6", "\uD835\uDFE7", "\uD835\uDFE8", "\uD835\uDFE9", "\uD835\uDFEA", "\uD835\uDFEB"], "mlym": ["\u0D66", "\u0D67", "\u0D68", "\u0D69", "\u0D6A", "\u0D6B", "\u0D6C", "\u0D6D", "\u0D6E", "\u0D6F"], "modi": ["\uD805\uDE50", "\uD805\uDE51", "\uD805\uDE52", "\uD805\uDE53", "\uD805\uDE54", "\uD805\uDE55", "\uD805\uDE56", "\uD805\uDE57", "\uD805\uDE58", "\uD805\uDE59"], "mong": ["\u1810", "\u1811", "\u1812", "\u1813", "\u1814", "\u1815", "\u1816", "\u1817", "\u1818", "\u1819"], "mroo": ["\uD81A\uDE60", "\uD81A\uDE61", "\uD81A\uDE62", "\uD81A\uDE63", "\uD81A\uDE64", "\uD81A\uDE65", "\uD81A\uDE66", "\uD81A\uDE67", "\uD81A\uDE68", "\uD81A\uDE69"], "mtei": ["\uABF0", "\uABF1", "\uABF2", "\uABF3", "\uABF4", "\uABF5", "\uABF6", "\uABF7", "\uABF8", "\uABF9"], "mymr": ["\u1040", "\u1041", "\u1042", "\u1043", "\u1044", "\u1045", "\u1046", "\u1047", "\u1048", "\u1049"], "mymrshan": ["\u1090", "\u1091", "\u1092", "\u1093", "\u1094", "\u1095", "\u1096", "\u1097", "\u1098", "\u1099"], "mymrtlng": ["\uA9F0", "\uA9F1", "\uA9F2", "\uA9F3", "\uA9F4", "\uA9F5", "\uA9F6", "\uA9F7", "\uA9F8", "\uA9F9"], "newa": ["\uD805\uDC50", "\uD805\uDC51", "\uD805\uDC52", "\uD805\uDC53", "\uD805\uDC54", "\uD805\uDC55", "\uD805\uDC56", "\uD805\uDC57", "\uD805\uDC58", "\uD805\uDC59"], "nkoo": ["\u07C0", "\u07C1", "\u07C2", "\u07C3", "\u07C4", "\u07C5", "\u07C6", "\u07C7", "\u07C8", "\u07C9"], "olck": ["\u1C50", "\u1C51", "\u1C52", "\u1C53", "\u1C54", "\u1C55", "\u1C56", "\u1C57", "\u1C58", "\u1C59"], "orya": ["\u0B66", "\u0B67", "\u0B68", "\u0B69", "\u0B6A", "\u0B6B", "\u0B6C", "\u0B6D", "\u0B6E", "\u0B6F"], "osma": ["\uD801\uDCA0", "\uD801\uDCA1", "\uD801\uDCA2", "\uD801\uDCA3", "\uD801\uDCA4", "\uD801\uDCA5", "\uD801\uDCA6", "\uD801\uDCA7", "\uD801\uDCA8", "\uD801\uDCA9"], "rohg": ["\uD803\uDD30", "\uD803\uDD31", "\uD803\uDD32", "\uD803\uDD33", "\uD803\uDD34", "\uD803\uDD35", "\uD803\uDD36", "\uD803\uDD37", "\uD803\uDD38", "\uD803\uDD39"], "saur": ["\uA8D0", "\uA8D1", "\uA8D2", "\uA8D3", "\uA8D4", "\uA8D5", "\uA8D6", "\uA8D7", "\uA8D8", "\uA8D9"], "segment": ["\uD83E\uDFF0", "\uD83E\uDFF1", "\uD83E\uDFF2", "\uD83E\uDFF3", "\uD83E\uDFF4", "\uD83E\uDFF5", "\uD83E\uDFF6", "\uD83E\uDFF7", "\uD83E\uDFF8", "\uD83E\uDFF9"], "shrd": ["\uD804\uDDD0", "\uD804\uDDD1", "\uD804\uDDD2", "\uD804\uDDD3", "\uD804\uDDD4", "\uD804\uDDD5", "\uD804\uDDD6", "\uD804\uDDD7", "\uD804\uDDD8", "\uD804\uDDD9"], "sind": ["\uD804\uDEF0", "\uD804\uDEF1", "\uD804\uDEF2", "\uD804\uDEF3", "\uD804\uDEF4", "\uD804\uDEF5", "\uD804\uDEF6", "\uD804\uDEF7", "\uD804\uDEF8", "\uD804\uDEF9"], "sinh": ["\u0DE6", "\u0DE7", "\u0DE8", "\u0DE9", "\u0DEA", "\u0DEB", "\u0DEC", "\u0DED", "\u0DEE", "\u0DEF"], "sora": ["\uD804\uDCF0", "\uD804\uDCF1", "\uD804\uDCF2", "\uD804\uDCF3", "\uD804\uDCF4", "\uD804\uDCF5", "\uD804\uDCF6", "\uD804\uDCF7", "\uD804\uDCF8", "\uD804\uDCF9"], "sund": ["\u1BB0", "\u1BB1", "\u1BB2", "\u1BB3", "\u1BB4", "\u1BB5", "\u1BB6", "\u1BB7", "\u1BB8", "\u1BB9"], "takr": ["\uD805\uDEC0", "\uD805\uDEC1", "\uD805\uDEC2", "\uD805\uDEC3", "\uD805\uDEC4", "\uD805\uDEC5", "\uD805\uDEC6", "\uD805\uDEC7", "\uD805\uDEC8", "\uD805\uDEC9"], "talu": ["\u19D0", "\u19D1", "\u19D2", "\u19D3", "\u19D4", "\u19D5", "\u19D6", "\u19D7", "\u19D8", "\u19D9"], "tamldec": ["\u0BE6", "\u0BE7", "\u0BE8", "\u0BE9", "\u0BEA", "\u0BEB", "\u0BEC", "\u0BED", "\u0BEE", "\u0BEF"], "telu": ["\u0C66", "\u0C67", "\u0C68", "\u0C69", "\u0C6A", "\u0C6B", "\u0C6C", "\u0C6D", "\u0C6E", "\u0C6F"], "thai": ["\u0E50", "\u0E51", "\u0E52", "\u0E53", "\u0E54", "\u0E55", "\u0E56", "\u0E57", "\u0E58", "\u0E59"], "tibt": ["\u0F20", "\u0F21", "\u0F22", "\u0F23", "\u0F24", "\u0F25", "\u0F26", "\u0F27", "\u0F28", "\u0F29"], "tirh": ["\uD805\uDCD0", "\uD805\uDCD1", "\uD805\uDCD2", "\uD805\uDCD3", "\uD805\uDCD4", "\uD805\uDCD5", "\uD805\uDCD6", "\uD805\uDCD7", "\uD805\uDCD8", "\uD805\uDCD9"], "vaii": ["\u1620", "\u1621", "\u1622", "\u1623", "\u1624", "\u1625", "\u1626", "\u1627", "\u1628", "\u1629"], "wara": ["\uD806\uDCE0", "\uD806\uDCE1", "\uD806\uDCE2", "\uD806\uDCE3", "\uD806\uDCE4", "\uD806\uDCE5", "\uD806\uDCE6", "\uD806\uDCE7", "\uD806\uDCE8", "\uD806\uDCE9"], "wcho": ["\uD838\uDEF0", "\uD838\uDEF1", "\uD838\uDEF2", "\uD838\uDEF3", "\uD838\uDEF4", "\uD838\uDEF5", "\uD838\uDEF6", "\uD838\uDEF7", "\uD838\uDEF8", "\uD838\uDEF9"] };
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/regex.generated.js
  var require_regex_generated = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/regex.generated.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.S_UNICODE_REGEX = void 0;
      exports.S_UNICODE_REGEX = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/format_to_parts.js
  var require_format_to_parts = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/format_to_parts.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var ToRawFixed_1 = require_ToRawFixed();
      var digit_mapping_generated_1 = require_digit_mapping_generated();
      var regex_generated_1 = require_regex_generated();
      var CARET_S_UNICODE_REGEX = new RegExp("^".concat(regex_generated_1.S_UNICODE_REGEX.source));
      var S_DOLLAR_UNICODE_REGEX = new RegExp("".concat(regex_generated_1.S_UNICODE_REGEX.source, "$"));
      var CLDR_NUMBER_PATTERN = /[#0](?:[\.,][#0]+)*/g;
      function formatToParts(numberResult, data, pl, options) {
        var sign = numberResult.sign, exponent = numberResult.exponent, magnitude = numberResult.magnitude;
        var notation = options.notation, style = options.style, numberingSystem = options.numberingSystem;
        var defaultNumberingSystem = data.numbers.nu[0];
        var compactNumberPattern = null;
        if (notation === "compact" && magnitude) {
          compactNumberPattern = getCompactDisplayPattern(numberResult, pl, data, style, options.compactDisplay, options.currencyDisplay, numberingSystem);
        }
        var nonNameCurrencyPart;
        if (style === "currency" && options.currencyDisplay !== "name") {
          var byCurrencyDisplay = data.currencies[options.currency];
          if (byCurrencyDisplay) {
            switch (options.currencyDisplay) {
              case "code":
                nonNameCurrencyPart = options.currency;
                break;
              case "symbol":
                nonNameCurrencyPart = byCurrencyDisplay.symbol;
                break;
              default:
                nonNameCurrencyPart = byCurrencyDisplay.narrow;
                break;
            }
          } else {
            nonNameCurrencyPart = options.currency;
          }
        }
        var numberPattern;
        if (!compactNumberPattern) {
          if (style === "decimal" || style === "unit" || style === "currency" && options.currencyDisplay === "name") {
            var decimalData = data.numbers.decimal[numberingSystem] || data.numbers.decimal[defaultNumberingSystem];
            numberPattern = getPatternForSign(decimalData.standard, sign);
          } else if (style === "currency") {
            var currencyData = data.numbers.currency[numberingSystem] || data.numbers.currency[defaultNumberingSystem];
            numberPattern = getPatternForSign(currencyData[options.currencySign], sign);
          } else {
            var percentPattern = data.numbers.percent[numberingSystem] || data.numbers.percent[defaultNumberingSystem];
            numberPattern = getPatternForSign(percentPattern, sign);
          }
        } else {
          numberPattern = compactNumberPattern;
        }
        var decimalNumberPattern = CLDR_NUMBER_PATTERN.exec(numberPattern)[0];
        numberPattern = numberPattern.replace(CLDR_NUMBER_PATTERN, "{0}").replace(/'(.)'/g, "$1");
        if (style === "currency" && options.currencyDisplay !== "name") {
          var currencyData = data.numbers.currency[numberingSystem] || data.numbers.currency[defaultNumberingSystem];
          var afterCurrency = currencyData.currencySpacing.afterInsertBetween;
          if (afterCurrency && !S_DOLLAR_UNICODE_REGEX.test(nonNameCurrencyPart)) {
            numberPattern = numberPattern.replace("\xA4{0}", "\xA4".concat(afterCurrency, "{0}"));
          }
          var beforeCurrency = currencyData.currencySpacing.beforeInsertBetween;
          if (beforeCurrency && !CARET_S_UNICODE_REGEX.test(nonNameCurrencyPart)) {
            numberPattern = numberPattern.replace("{0}\xA4", "{0}".concat(beforeCurrency, "\xA4"));
          }
        }
        var numberPatternParts = numberPattern.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g);
        var numberParts = [];
        var symbols = data.numbers.symbols[numberingSystem] || data.numbers.symbols[defaultNumberingSystem];
        for (var _i = 0, numberPatternParts_1 = numberPatternParts; _i < numberPatternParts_1.length; _i++) {
          var part = numberPatternParts_1[_i];
          if (!part) {
            continue;
          }
          switch (part) {
            case "{0}": {
              numberParts.push.apply(numberParts, paritionNumberIntoParts(symbols, numberResult, notation, exponent, numberingSystem, !compactNumberPattern && options.useGrouping, decimalNumberPattern));
              break;
            }
            case "-":
              numberParts.push({ type: "minusSign", value: symbols.minusSign });
              break;
            case "+":
              numberParts.push({ type: "plusSign", value: symbols.plusSign });
              break;
            case "%":
              numberParts.push({ type: "percentSign", value: symbols.percentSign });
              break;
            case "\xA4":
              numberParts.push({ type: "currency", value: nonNameCurrencyPart });
              break;
            default:
              if (/^\{c:/.test(part)) {
                numberParts.push({
                  type: "compact",
                  value: part.substring(3, part.length - 1)
                });
              } else {
                numberParts.push({ type: "literal", value: part });
              }
              break;
          }
        }
        switch (style) {
          case "currency": {
            if (options.currencyDisplay === "name") {
              var unitPattern = (data.numbers.currency[numberingSystem] || data.numbers.currency[defaultNumberingSystem]).unitPattern;
              var unitName = void 0;
              var currencyNameData = data.currencies[options.currency];
              if (currencyNameData) {
                unitName = selectPlural(pl, numberResult.roundedNumber * Math.pow(10, exponent), currencyNameData.displayName);
              } else {
                unitName = options.currency;
              }
              var unitPatternParts = unitPattern.split(/(\{[01]\})/g);
              var result = [];
              for (var _a = 0, unitPatternParts_1 = unitPatternParts; _a < unitPatternParts_1.length; _a++) {
                var part = unitPatternParts_1[_a];
                switch (part) {
                  case "{0}":
                    result.push.apply(result, numberParts);
                    break;
                  case "{1}":
                    result.push({ type: "currency", value: unitName });
                    break;
                  default:
                    if (part) {
                      result.push({ type: "literal", value: part });
                    }
                    break;
                }
              }
              return result;
            } else {
              return numberParts;
            }
          }
          case "unit": {
            var unit = options.unit, unitDisplay = options.unitDisplay;
            var unitData = data.units.simple[unit];
            var unitPattern = void 0;
            if (unitData) {
              unitPattern = selectPlural(pl, numberResult.roundedNumber * Math.pow(10, exponent), data.units.simple[unit][unitDisplay]);
            } else {
              var _b = unit.split("-per-"), numeratorUnit = _b[0], denominatorUnit = _b[1];
              unitData = data.units.simple[numeratorUnit];
              var numeratorUnitPattern = selectPlural(pl, numberResult.roundedNumber * Math.pow(10, exponent), data.units.simple[numeratorUnit][unitDisplay]);
              var perUnitPattern = data.units.simple[denominatorUnit].perUnit[unitDisplay];
              if (perUnitPattern) {
                unitPattern = perUnitPattern.replace("{0}", numeratorUnitPattern);
              } else {
                var perPattern = data.units.compound.per[unitDisplay];
                var denominatorPattern = selectPlural(pl, 1, data.units.simple[denominatorUnit][unitDisplay]);
                unitPattern = unitPattern = perPattern.replace("{0}", numeratorUnitPattern).replace("{1}", denominatorPattern.replace("{0}", ""));
              }
            }
            var result = [];
            for (var _c = 0, _d = unitPattern.split(/(\s*\{0\}\s*)/); _c < _d.length; _c++) {
              var part = _d[_c];
              var interpolateMatch = /^(\s*)\{0\}(\s*)$/.exec(part);
              if (interpolateMatch) {
                if (interpolateMatch[1]) {
                  result.push({ type: "literal", value: interpolateMatch[1] });
                }
                result.push.apply(result, numberParts);
                if (interpolateMatch[2]) {
                  result.push({ type: "literal", value: interpolateMatch[2] });
                }
              } else if (part) {
                result.push({ type: "unit", value: part });
              }
            }
            return result;
          }
          default:
            return numberParts;
        }
      }
      exports.default = formatToParts;
      function paritionNumberIntoParts(symbols, numberResult, notation, exponent, numberingSystem, useGrouping, decimalNumberPattern) {
        var result = [];
        var n = numberResult.formattedString, x = numberResult.roundedNumber;
        if (isNaN(x)) {
          return [{ type: "nan", value: n }];
        } else if (!isFinite(x)) {
          return [{ type: "infinity", value: n }];
        }
        var digitReplacementTable = digit_mapping_generated_1.digitMapping[numberingSystem];
        if (digitReplacementTable) {
          n = n.replace(/\d/g, function(digit) {
            return digitReplacementTable[+digit] || digit;
          });
        }
        var decimalSepIndex = n.indexOf(".");
        var integer;
        var fraction;
        if (decimalSepIndex > 0) {
          integer = n.slice(0, decimalSepIndex);
          fraction = n.slice(decimalSepIndex + 1);
        } else {
          integer = n;
        }
        if (useGrouping && (notation !== "compact" || x >= 1e4)) {
          var groupSepSymbol = symbols.group;
          var groups = [];
          var integerNumberPattern = decimalNumberPattern.split(".")[0];
          var patternGroups = integerNumberPattern.split(",");
          var primaryGroupingSize = 3;
          var secondaryGroupingSize = 3;
          if (patternGroups.length > 1) {
            primaryGroupingSize = patternGroups[patternGroups.length - 1].length;
          }
          if (patternGroups.length > 2) {
            secondaryGroupingSize = patternGroups[patternGroups.length - 2].length;
          }
          var i = integer.length - primaryGroupingSize;
          if (i > 0) {
            groups.push(integer.slice(i, i + primaryGroupingSize));
            for (i -= secondaryGroupingSize; i > 0; i -= secondaryGroupingSize) {
              groups.push(integer.slice(i, i + secondaryGroupingSize));
            }
            groups.push(integer.slice(0, i + secondaryGroupingSize));
          } else {
            groups.push(integer);
          }
          while (groups.length > 0) {
            var integerGroup = groups.pop();
            result.push({ type: "integer", value: integerGroup });
            if (groups.length > 0) {
              result.push({ type: "group", value: groupSepSymbol });
            }
          }
        } else {
          result.push({ type: "integer", value: integer });
        }
        if (fraction !== void 0) {
          result.push({ type: "decimal", value: symbols.decimal }, { type: "fraction", value: fraction });
        }
        if ((notation === "scientific" || notation === "engineering") && isFinite(x)) {
          result.push({ type: "exponentSeparator", value: symbols.exponential });
          if (exponent < 0) {
            result.push({ type: "exponentMinusSign", value: symbols.minusSign });
            exponent = -exponent;
          }
          var exponentResult = (0, ToRawFixed_1.ToRawFixed)(exponent, 0, 0);
          result.push({
            type: "exponentInteger",
            value: exponentResult.formattedString
          });
        }
        return result;
      }
      function getPatternForSign(pattern, sign) {
        if (pattern.indexOf(";") < 0) {
          pattern = "".concat(pattern, ";-").concat(pattern);
        }
        var _a = pattern.split(";"), zeroPattern = _a[0], negativePattern = _a[1];
        switch (sign) {
          case 0:
            return zeroPattern;
          case -1:
            return negativePattern;
          default:
            return negativePattern.indexOf("-") >= 0 ? negativePattern.replace(/-/g, "+") : "+".concat(zeroPattern);
        }
      }
      function getCompactDisplayPattern(numberResult, pl, data, style, compactDisplay, currencyDisplay, numberingSystem) {
        var _a;
        var roundedNumber = numberResult.roundedNumber, sign = numberResult.sign, magnitude = numberResult.magnitude;
        var magnitudeKey = String(Math.pow(10, magnitude));
        var defaultNumberingSystem = data.numbers.nu[0];
        var pattern;
        if (style === "currency" && currencyDisplay !== "name") {
          var byNumberingSystem = data.numbers.currency;
          var currencyData = byNumberingSystem[numberingSystem] || byNumberingSystem[defaultNumberingSystem];
          var compactPluralRules = (_a = currencyData.short) === null || _a === void 0 ? void 0 : _a[magnitudeKey];
          if (!compactPluralRules) {
            return null;
          }
          pattern = selectPlural(pl, roundedNumber, compactPluralRules);
        } else {
          var byNumberingSystem = data.numbers.decimal;
          var byCompactDisplay = byNumberingSystem[numberingSystem] || byNumberingSystem[defaultNumberingSystem];
          var compactPlaralRule = byCompactDisplay[compactDisplay][magnitudeKey];
          if (!compactPlaralRule) {
            return null;
          }
          pattern = selectPlural(pl, roundedNumber, compactPlaralRule);
        }
        if (pattern === "0") {
          return null;
        }
        pattern = getPatternForSign(pattern, sign).replace(/([^\s;\-\+\d¤]+)/g, "{c:$1}").replace(/0+/, "0");
        return pattern;
      }
      function selectPlural(pl, x, rules) {
        return rules[pl.select(x)] || rules.other;
      }
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/PartitionNumberPattern.js
  var require_PartitionNumberPattern = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/PartitionNumberPattern.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.PartitionNumberPattern = void 0;
      var tslib_1 = require_tslib();
      var FormatNumericToString_1 = require_FormatNumericToString();
      var _262_1 = require__();
      var ComputeExponent_1 = require_ComputeExponent();
      var format_to_parts_1 = (0, tslib_1.__importDefault)(require_format_to_parts());
      function PartitionNumberPattern(numberFormat, x, _a) {
        var _b;
        var getInternalSlots = _a.getInternalSlots;
        var internalSlots = getInternalSlots(numberFormat);
        var pl = internalSlots.pl, dataLocaleData = internalSlots.dataLocaleData, numberingSystem = internalSlots.numberingSystem;
        var symbols = dataLocaleData.numbers.symbols[numberingSystem] || dataLocaleData.numbers.symbols[dataLocaleData.numbers.nu[0]];
        var magnitude = 0;
        var exponent = 0;
        var n;
        if (isNaN(x)) {
          n = symbols.nan;
        } else if (!isFinite(x)) {
          n = symbols.infinity;
        } else {
          if (internalSlots.style === "percent") {
            x *= 100;
          }
          ;
          _b = (0, ComputeExponent_1.ComputeExponent)(numberFormat, x, {
            getInternalSlots: getInternalSlots
          }), exponent = _b[0], magnitude = _b[1];
          x = exponent < 0 ? x * Math.pow(10, -exponent) : x / Math.pow(10, exponent);
          var formatNumberResult = (0, FormatNumericToString_1.FormatNumericToString)(internalSlots, x);
          n = formatNumberResult.formattedString;
          x = formatNumberResult.roundedNumber;
        }
        var sign;
        var signDisplay = internalSlots.signDisplay;
        switch (signDisplay) {
          case "never":
            sign = 0;
            break;
          case "auto":
            if ((0, _262_1.SameValue)(x, 0) || x > 0 || isNaN(x)) {
              sign = 0;
            } else {
              sign = -1;
            }
            break;
          case "always":
            if ((0, _262_1.SameValue)(x, 0) || x > 0 || isNaN(x)) {
              sign = 1;
            } else {
              sign = -1;
            }
            break;
          default:
            if (x === 0 || isNaN(x)) {
              sign = 0;
            } else if (x > 0) {
              sign = 1;
            } else {
              sign = -1;
            }
        }
        return (0, format_to_parts_1.default)({ roundedNumber: x, formattedString: n, exponent: exponent, magnitude: magnitude, sign: sign }, internalSlots.dataLocaleData, pl, internalSlots);
      }
      exports.PartitionNumberPattern = PartitionNumberPattern;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/FormatNumericToParts.js
  var require_FormatNumericToParts = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/FormatNumericToParts.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FormatNumericToParts = void 0;
      var PartitionNumberPattern_1 = require_PartitionNumberPattern();
      var _262_1 = require__();
      function FormatNumericToParts(nf, x, implDetails) {
        var parts = (0, PartitionNumberPattern_1.PartitionNumberPattern)(nf, x, implDetails);
        var result = (0, _262_1.ArrayCreate)(0);
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
          var part = parts_1[_i];
          result.push({
            type: part.type,
            value: part.value
          });
        }
        return result;
      }
      exports.FormatNumericToParts = FormatNumericToParts;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/abstract/CanonicalizeLocaleList.js
  var require_CanonicalizeLocaleList2 = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/abstract/CanonicalizeLocaleList.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CanonicalizeLocaleList = void 0;
      function CanonicalizeLocaleList2(locales) {
        return Intl.getCanonicalLocales(locales);
      }
      exports.CanonicalizeLocaleList = CanonicalizeLocaleList2;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/abstract/utils.js
  var require_utils2 = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/abstract/utils.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.invariant = exports.UNICODE_EXTENSION_SEQUENCE_REGEX = void 0;
      exports.UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
      function invariant2(condition, message, Err) {
        if (Err === void 0) {
          Err = Error;
        }
        if (!condition) {
          throw new Err(message);
        }
      }
      exports.invariant = invariant2;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/abstract/BestAvailableLocale.js
  var require_BestAvailableLocale = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/abstract/BestAvailableLocale.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BestAvailableLocale = void 0;
      function BestAvailableLocale(availableLocales, locale) {
        var candidate = locale;
        while (true) {
          if (availableLocales.has(candidate)) {
            return candidate;
          }
          var pos = candidate.lastIndexOf("-");
          if (!~pos) {
            return void 0;
          }
          if (pos >= 2 && candidate[pos - 2] === "-") {
            pos -= 2;
          }
          candidate = candidate.slice(0, pos);
        }
      }
      exports.BestAvailableLocale = BestAvailableLocale;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/abstract/LookupMatcher.js
  var require_LookupMatcher = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/abstract/LookupMatcher.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LookupMatcher = void 0;
      var utils_1 = require_utils2();
      var BestAvailableLocale_1 = require_BestAvailableLocale();
      function LookupMatcher(availableLocales, requestedLocales, getDefaultLocale) {
        var result = { locale: "" };
        for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
          var locale = requestedLocales_1[_i];
          var noExtensionLocale = locale.replace(utils_1.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
          var availableLocale = (0, BestAvailableLocale_1.BestAvailableLocale)(availableLocales, noExtensionLocale);
          if (availableLocale) {
            result.locale = availableLocale;
            if (locale !== noExtensionLocale) {
              result.extension = locale.slice(noExtensionLocale.length + 1, locale.length);
            }
            return result;
          }
        }
        result.locale = getDefaultLocale();
        return result;
      }
      exports.LookupMatcher = LookupMatcher;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/abstract/BestFitMatcher.js
  var require_BestFitMatcher = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/abstract/BestFitMatcher.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BestFitMatcher = void 0;
      var BestAvailableLocale_1 = require_BestAvailableLocale();
      var utils_1 = require_utils2();
      function BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale) {
        var minimizedAvailableLocaleMap = {};
        var availableLocaleMap = {};
        var canonicalizedLocaleMap = {};
        var minimizedAvailableLocales = /* @__PURE__ */ new Set();
        availableLocales.forEach(function(locale2) {
          var minimizedLocale = new Intl.Locale(locale2).minimize().toString();
          var canonicalizedLocale = Intl.getCanonicalLocales(locale2)[0] || locale2;
          minimizedAvailableLocaleMap[minimizedLocale] = locale2;
          availableLocaleMap[locale2] = locale2;
          canonicalizedLocaleMap[canonicalizedLocale] = locale2;
          minimizedAvailableLocales.add(minimizedLocale);
          minimizedAvailableLocales.add(locale2);
          minimizedAvailableLocales.add(canonicalizedLocale);
        });
        var foundLocale;
        for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
          var l = requestedLocales_1[_i];
          if (foundLocale) {
            break;
          }
          var noExtensionLocale = l.replace(utils_1.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
          if (availableLocales.has(noExtensionLocale)) {
            foundLocale = noExtensionLocale;
            break;
          }
          if (minimizedAvailableLocales.has(noExtensionLocale)) {
            foundLocale = noExtensionLocale;
            break;
          }
          var locale = new Intl.Locale(noExtensionLocale);
          var maximizedRequestedLocale = locale.maximize().toString();
          var minimizedRequestedLocale = locale.minimize().toString();
          if (minimizedAvailableLocales.has(minimizedRequestedLocale)) {
            foundLocale = minimizedRequestedLocale;
            break;
          }
          foundLocale = (0, BestAvailableLocale_1.BestAvailableLocale)(minimizedAvailableLocales, maximizedRequestedLocale);
        }
        if (!foundLocale) {
          return { locale: getDefaultLocale() };
        }
        return {
          locale: availableLocaleMap[foundLocale] || canonicalizedLocaleMap[foundLocale] || minimizedAvailableLocaleMap[foundLocale] || foundLocale
        };
      }
      exports.BestFitMatcher = BestFitMatcher;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/abstract/UnicodeExtensionValue.js
  var require_UnicodeExtensionValue = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/abstract/UnicodeExtensionValue.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.UnicodeExtensionValue = void 0;
      var utils_1 = require_utils2();
      function UnicodeExtensionValue(extension, key) {
        (0, utils_1.invariant)(key.length === 2, "key must have 2 elements");
        var size = extension.length;
        var searchValue = "-".concat(key, "-");
        var pos = extension.indexOf(searchValue);
        if (pos !== -1) {
          var start = pos + 4;
          var end = start;
          var k = start;
          var done = false;
          while (!done) {
            var e = extension.indexOf("-", k);
            var len = void 0;
            if (e === -1) {
              len = size - k;
            } else {
              len = e - k;
            }
            if (len === 2) {
              done = true;
            } else if (e === -1) {
              end = size;
              done = true;
            } else {
              end = e;
              k = e + 1;
            }
          }
          return extension.slice(start, end);
        }
        searchValue = "-".concat(key);
        pos = extension.indexOf(searchValue);
        if (pos !== -1 && pos + 3 === size) {
          return "";
        }
        return void 0;
      }
      exports.UnicodeExtensionValue = UnicodeExtensionValue;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/abstract/ResolveLocale.js
  var require_ResolveLocale = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/abstract/ResolveLocale.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ResolveLocale = void 0;
      var LookupMatcher_1 = require_LookupMatcher();
      var BestFitMatcher_1 = require_BestFitMatcher();
      var utils_1 = require_utils2();
      var UnicodeExtensionValue_1 = require_UnicodeExtensionValue();
      function ResolveLocale2(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData, getDefaultLocale) {
        var matcher = options.localeMatcher;
        var r;
        if (matcher === "lookup") {
          r = (0, LookupMatcher_1.LookupMatcher)(availableLocales, requestedLocales, getDefaultLocale);
        } else {
          r = (0, BestFitMatcher_1.BestFitMatcher)(availableLocales, requestedLocales, getDefaultLocale);
        }
        var foundLocale = r.locale;
        var result = { locale: "", dataLocale: foundLocale };
        var supportedExtension = "-u";
        for (var _i = 0, relevantExtensionKeys_1 = relevantExtensionKeys; _i < relevantExtensionKeys_1.length; _i++) {
          var key = relevantExtensionKeys_1[_i];
          (0, utils_1.invariant)(foundLocale in localeData, "Missing locale data for ".concat(foundLocale));
          var foundLocaleData = localeData[foundLocale];
          (0, utils_1.invariant)(typeof foundLocaleData === "object" && foundLocaleData !== null, "locale data ".concat(key, " must be an object"));
          var keyLocaleData = foundLocaleData[key];
          (0, utils_1.invariant)(Array.isArray(keyLocaleData), "keyLocaleData for ".concat(key, " must be an array"));
          var value = keyLocaleData[0];
          (0, utils_1.invariant)(typeof value === "string" || value === null, "value must be string or null but got ".concat(typeof value, " in key ").concat(key));
          var supportedExtensionAddition = "";
          if (r.extension) {
            var requestedValue = (0, UnicodeExtensionValue_1.UnicodeExtensionValue)(r.extension, key);
            if (requestedValue !== void 0) {
              if (requestedValue !== "") {
                if (~keyLocaleData.indexOf(requestedValue)) {
                  value = requestedValue;
                  supportedExtensionAddition = "-".concat(key, "-").concat(value);
                }
              } else if (~requestedValue.indexOf("true")) {
                value = "true";
                supportedExtensionAddition = "-".concat(key);
              }
            }
          }
          if (key in options) {
            var optionsValue = options[key];
            (0, utils_1.invariant)(typeof optionsValue === "string" || typeof optionsValue === "undefined" || optionsValue === null, "optionsValue must be String, Undefined or Null");
            if (~keyLocaleData.indexOf(optionsValue)) {
              if (optionsValue !== value) {
                value = optionsValue;
                supportedExtensionAddition = "";
              }
            }
          }
          result[key] = value;
          supportedExtension += supportedExtensionAddition;
        }
        if (supportedExtension.length > 2) {
          var privateIndex = foundLocale.indexOf("-x-");
          if (privateIndex === -1) {
            foundLocale = foundLocale + supportedExtension;
          } else {
            var preExtension = foundLocale.slice(0, privateIndex);
            var postExtension = foundLocale.slice(privateIndex, foundLocale.length);
            foundLocale = preExtension + supportedExtension + postExtension;
          }
          foundLocale = Intl.getCanonicalLocales(foundLocale)[0];
        }
        result.locale = foundLocale;
        return result;
      }
      exports.ResolveLocale = ResolveLocale2;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/abstract/LookupSupportedLocales.js
  var require_LookupSupportedLocales = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/abstract/LookupSupportedLocales.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LookupSupportedLocales = void 0;
      var utils_1 = require_utils2();
      var BestAvailableLocale_1 = require_BestAvailableLocale();
      function LookupSupportedLocales(availableLocales, requestedLocales) {
        var subset = [];
        for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
          var locale = requestedLocales_1[_i];
          var noExtensionLocale = locale.replace(utils_1.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
          var availableLocale = (0, BestAvailableLocale_1.BestAvailableLocale)(availableLocales, noExtensionLocale);
          if (availableLocale) {
            subset.push(availableLocale);
          }
        }
        return subset;
      }
      exports.LookupSupportedLocales = LookupSupportedLocales;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/index.js
  var require_intl_localematcher = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/intl-localematcher/index.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ResolveLocale = exports.LookupSupportedLocales = exports.match = void 0;
      var CanonicalizeLocaleList_1 = require_CanonicalizeLocaleList2();
      var ResolveLocale_1 = require_ResolveLocale();
      function match2(requestedLocales, availableLocales, defaultLocale, opts) {
        var locales = availableLocales.reduce(function(all, l) {
          all.add(l);
          return all;
        }, /* @__PURE__ */ new Set());
        return (0, ResolveLocale_1.ResolveLocale)(locales, (0, CanonicalizeLocaleList_1.CanonicalizeLocaleList)(requestedLocales), {
          localeMatcher: (opts === null || opts === void 0 ? void 0 : opts.algorithm) || "best fit"
        }, [], {}, function() {
          return defaultLocale;
        }).locale;
      }
      exports.match = match2;
      var LookupSupportedLocales_1 = require_LookupSupportedLocales();
      Object.defineProperty(exports, "LookupSupportedLocales", { enumerable: true, get: function() {
        return LookupSupportedLocales_1.LookupSupportedLocales;
      } });
      var ResolveLocale_2 = require_ResolveLocale();
      Object.defineProperty(exports, "ResolveLocale", { enumerable: true, get: function() {
        return ResolveLocale_2.ResolveLocale;
      } });
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/SetNumberFormatUnitOptions.js
  var require_SetNumberFormatUnitOptions = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/SetNumberFormatUnitOptions.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SetNumberFormatUnitOptions = void 0;
      var GetOption_1 = require_GetOption();
      var IsWellFormedCurrencyCode_1 = require_IsWellFormedCurrencyCode();
      var IsWellFormedUnitIdentifier_1 = require_IsWellFormedUnitIdentifier();
      function SetNumberFormatUnitOptions(nf, options, _a) {
        if (options === void 0) {
          options = /* @__PURE__ */ Object.create(null);
        }
        var getInternalSlots = _a.getInternalSlots;
        var internalSlots = getInternalSlots(nf);
        var style = (0, GetOption_1.GetOption)(options, "style", "string", ["decimal", "percent", "currency", "unit"], "decimal");
        internalSlots.style = style;
        var currency = (0, GetOption_1.GetOption)(options, "currency", "string", void 0, void 0);
        if (currency !== void 0 && !(0, IsWellFormedCurrencyCode_1.IsWellFormedCurrencyCode)(currency)) {
          throw RangeError("Malformed currency code");
        }
        if (style === "currency" && currency === void 0) {
          throw TypeError("currency cannot be undefined");
        }
        var currencyDisplay = (0, GetOption_1.GetOption)(options, "currencyDisplay", "string", ["code", "symbol", "narrowSymbol", "name"], "symbol");
        var currencySign = (0, GetOption_1.GetOption)(options, "currencySign", "string", ["standard", "accounting"], "standard");
        var unit = (0, GetOption_1.GetOption)(options, "unit", "string", void 0, void 0);
        if (unit !== void 0 && !(0, IsWellFormedUnitIdentifier_1.IsWellFormedUnitIdentifier)(unit)) {
          throw RangeError("Invalid unit argument for Intl.NumberFormat()");
        }
        if (style === "unit" && unit === void 0) {
          throw TypeError("unit cannot be undefined");
        }
        var unitDisplay = (0, GetOption_1.GetOption)(options, "unitDisplay", "string", ["short", "narrow", "long"], "short");
        if (style === "currency") {
          internalSlots.currency = currency.toUpperCase();
          internalSlots.currencyDisplay = currencyDisplay;
          internalSlots.currencySign = currencySign;
        }
        if (style === "unit") {
          internalSlots.unit = unit;
          internalSlots.unitDisplay = unitDisplay;
        }
      }
      exports.SetNumberFormatUnitOptions = SetNumberFormatUnitOptions;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/SetNumberFormatDigitOptions.js
  var require_SetNumberFormatDigitOptions = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/SetNumberFormatDigitOptions.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SetNumberFormatDigitOptions = void 0;
      var GetNumberOption_1 = require_GetNumberOption();
      var DefaultNumberOption_1 = require_DefaultNumberOption();
      function SetNumberFormatDigitOptions(internalSlots, opts, mnfdDefault, mxfdDefault, notation) {
        var mnid = (0, GetNumberOption_1.GetNumberOption)(opts, "minimumIntegerDigits", 1, 21, 1);
        var mnfd = opts.minimumFractionDigits;
        var mxfd = opts.maximumFractionDigits;
        var mnsd = opts.minimumSignificantDigits;
        var mxsd = opts.maximumSignificantDigits;
        internalSlots.minimumIntegerDigits = mnid;
        if (mnsd !== void 0 || mxsd !== void 0) {
          internalSlots.roundingType = "significantDigits";
          mnsd = (0, DefaultNumberOption_1.DefaultNumberOption)(mnsd, 1, 21, 1);
          mxsd = (0, DefaultNumberOption_1.DefaultNumberOption)(mxsd, mnsd, 21, 21);
          internalSlots.minimumSignificantDigits = mnsd;
          internalSlots.maximumSignificantDigits = mxsd;
        } else if (mnfd !== void 0 || mxfd !== void 0) {
          internalSlots.roundingType = "fractionDigits";
          mnfd = (0, DefaultNumberOption_1.DefaultNumberOption)(mnfd, 0, 20, mnfdDefault);
          var mxfdActualDefault = Math.max(mnfd, mxfdDefault);
          mxfd = (0, DefaultNumberOption_1.DefaultNumberOption)(mxfd, mnfd, 20, mxfdActualDefault);
          internalSlots.minimumFractionDigits = mnfd;
          internalSlots.maximumFractionDigits = mxfd;
        } else if (notation === "compact") {
          internalSlots.roundingType = "compactRounding";
        } else {
          internalSlots.roundingType = "fractionDigits";
          internalSlots.minimumFractionDigits = mnfdDefault;
          internalSlots.maximumFractionDigits = mxfdDefault;
        }
      }
      exports.SetNumberFormatDigitOptions = SetNumberFormatDigitOptions;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/InitializeNumberFormat.js
  var require_InitializeNumberFormat = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/NumberFormat/InitializeNumberFormat.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.InitializeNumberFormat = void 0;
      var CanonicalizeLocaleList_1 = require_CanonicalizeLocaleList();
      var GetOption_1 = require_GetOption();
      var intl_localematcher_1 = require_intl_localematcher();
      var SetNumberFormatUnitOptions_1 = require_SetNumberFormatUnitOptions();
      var CurrencyDigits_1 = require_CurrencyDigits();
      var SetNumberFormatDigitOptions_1 = require_SetNumberFormatDigitOptions();
      var utils_1 = require_utils();
      var CoerceOptionsToObject_1 = require_CoerceOptionsToObject();
      function InitializeNumberFormat(nf, locales, opts, _a) {
        var getInternalSlots = _a.getInternalSlots, localeData = _a.localeData, availableLocales = _a.availableLocales, numberingSystemNames = _a.numberingSystemNames, getDefaultLocale = _a.getDefaultLocale, currencyDigitsData = _a.currencyDigitsData;
        var requestedLocales = (0, CanonicalizeLocaleList_1.CanonicalizeLocaleList)(locales);
        var options = (0, CoerceOptionsToObject_1.CoerceOptionsToObject)(opts);
        var opt = /* @__PURE__ */ Object.create(null);
        var matcher = (0, GetOption_1.GetOption)(options, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
        opt.localeMatcher = matcher;
        var numberingSystem = (0, GetOption_1.GetOption)(options, "numberingSystem", "string", void 0, void 0);
        if (numberingSystem !== void 0 && numberingSystemNames.indexOf(numberingSystem) < 0) {
          throw RangeError("Invalid numberingSystems: ".concat(numberingSystem));
        }
        opt.nu = numberingSystem;
        var r = (0, intl_localematcher_1.ResolveLocale)(availableLocales, requestedLocales, opt, ["nu"], localeData, getDefaultLocale);
        var dataLocaleData = localeData[r.dataLocale];
        (0, utils_1.invariant)(!!dataLocaleData, "Missing locale data for ".concat(r.dataLocale));
        var internalSlots = getInternalSlots(nf);
        internalSlots.locale = r.locale;
        internalSlots.dataLocale = r.dataLocale;
        internalSlots.numberingSystem = r.nu;
        internalSlots.dataLocaleData = dataLocaleData;
        (0, SetNumberFormatUnitOptions_1.SetNumberFormatUnitOptions)(nf, options, { getInternalSlots: getInternalSlots });
        var style = internalSlots.style;
        var mnfdDefault;
        var mxfdDefault;
        if (style === "currency") {
          var currency = internalSlots.currency;
          var cDigits = (0, CurrencyDigits_1.CurrencyDigits)(currency, { currencyDigitsData: currencyDigitsData });
          mnfdDefault = cDigits;
          mxfdDefault = cDigits;
        } else {
          mnfdDefault = 0;
          mxfdDefault = style === "percent" ? 0 : 3;
        }
        var notation = (0, GetOption_1.GetOption)(options, "notation", "string", ["standard", "scientific", "engineering", "compact"], "standard");
        internalSlots.notation = notation;
        (0, SetNumberFormatDigitOptions_1.SetNumberFormatDigitOptions)(internalSlots, options, mnfdDefault, mxfdDefault, notation);
        var compactDisplay = (0, GetOption_1.GetOption)(options, "compactDisplay", "string", ["short", "long"], "short");
        if (notation === "compact") {
          internalSlots.compactDisplay = compactDisplay;
        }
        var useGrouping = (0, GetOption_1.GetOption)(options, "useGrouping", "boolean", void 0, true);
        internalSlots.useGrouping = useGrouping;
        var signDisplay = (0, GetOption_1.GetOption)(options, "signDisplay", "string", ["auto", "never", "always", "exceptZero"], "auto");
        internalSlots.signDisplay = signDisplay;
        return nf;
      }
      exports.InitializeNumberFormat = InitializeNumberFormat;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/PartitionPattern.js
  var require_PartitionPattern = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/PartitionPattern.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.PartitionPattern = void 0;
      var utils_1 = require_utils();
      function PartitionPattern2(pattern) {
        var result = [];
        var beginIndex = pattern.indexOf("{");
        var endIndex = 0;
        var nextIndex = 0;
        var length = pattern.length;
        while (beginIndex < pattern.length && beginIndex > -1) {
          endIndex = pattern.indexOf("}", beginIndex);
          (0, utils_1.invariant)(endIndex > beginIndex, "Invalid pattern ".concat(pattern));
          if (beginIndex > nextIndex) {
            result.push({
              type: "literal",
              value: pattern.substring(nextIndex, beginIndex)
            });
          }
          result.push({
            type: pattern.substring(beginIndex + 1, endIndex),
            value: void 0
          });
          nextIndex = endIndex + 1;
          beginIndex = pattern.indexOf("{", nextIndex);
        }
        if (nextIndex < length) {
          result.push({
            type: "literal",
            value: pattern.substring(nextIndex, length)
          });
        }
        return result;
      }
      exports.PartitionPattern = PartitionPattern2;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/SupportedLocales.js
  var require_SupportedLocales = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/SupportedLocales.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SupportedLocales = void 0;
      var _262_1 = require__();
      var GetOption_1 = require_GetOption();
      var intl_localematcher_1 = require_intl_localematcher();
      function SupportedLocales2(availableLocales, requestedLocales, options) {
        var matcher = "best fit";
        if (options !== void 0) {
          options = (0, _262_1.ToObject)(options);
          matcher = (0, GetOption_1.GetOption)(options, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
        }
        if (matcher === "best fit") {
          return (0, intl_localematcher_1.LookupSupportedLocales)(availableLocales, requestedLocales);
        }
        return (0, intl_localematcher_1.LookupSupportedLocales)(availableLocales, requestedLocales);
      }
      exports.SupportedLocales = SupportedLocales2;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/data.js
  var require_data = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/data.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isMissingLocaleDataError = void 0;
      var tslib_1 = require_tslib();
      var MissingLocaleDataError = function(_super) {
        (0, tslib_1.__extends)(MissingLocaleDataError2, _super);
        function MissingLocaleDataError2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.type = "MISSING_LOCALE_DATA";
          return _this;
        }
        return MissingLocaleDataError2;
      }(Error);
      function isMissingLocaleDataError(e) {
        return e.type === "MISSING_LOCALE_DATA";
      }
      exports.isMissingLocaleDataError = isMissingLocaleDataError;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/types/relative-time.js
  var require_relative_time = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/types/relative-time.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/types/date-time.js
  var require_date_time = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/types/date-time.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.RangePatternType = void 0;
      var RangePatternType;
      (function(RangePatternType2) {
        RangePatternType2["startRange"] = "startRange";
        RangePatternType2["shared"] = "shared";
        RangePatternType2["endRange"] = "endRange";
      })(RangePatternType = exports.RangePatternType || (exports.RangePatternType = {}));
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/types/list.js
  var require_list = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/types/list.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/types/plural-rules.js
  var require_plural_rules = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/types/plural-rules.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/types/number.js
  var require_number = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/types/number.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/types/displaynames.js
  var require_displaynames = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/types/displaynames.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/index.js
  var require_ecma402_abstract = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/index.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.invariant = exports.isMissingLocaleDataError = exports.defineProperty = exports.getMagnitude = exports.setMultiInternalSlots = exports.setInternalSlot = exports.isLiteralPart = exports.getMultiInternalSlots = exports.getInternalSlot = exports._formatToParts = void 0;
      var tslib_1 = require_tslib();
      (0, tslib_1.__exportStar)(require_CanonicalizeLocaleList(), exports);
      (0, tslib_1.__exportStar)(require_CanonicalizeTimeZoneName(), exports);
      (0, tslib_1.__exportStar)(require_CoerceOptionsToObject(), exports);
      (0, tslib_1.__exportStar)(require_GetNumberOption(), exports);
      (0, tslib_1.__exportStar)(require_GetOption(), exports);
      (0, tslib_1.__exportStar)(require_GetOptionsObject(), exports);
      (0, tslib_1.__exportStar)(require_IsSanctionedSimpleUnitIdentifier(), exports);
      (0, tslib_1.__exportStar)(require_IsValidTimeZoneName(), exports);
      (0, tslib_1.__exportStar)(require_IsWellFormedCurrencyCode(), exports);
      (0, tslib_1.__exportStar)(require_IsWellFormedUnitIdentifier(), exports);
      (0, tslib_1.__exportStar)(require_ComputeExponent(), exports);
      (0, tslib_1.__exportStar)(require_ComputeExponentForMagnitude(), exports);
      (0, tslib_1.__exportStar)(require_CurrencyDigits(), exports);
      (0, tslib_1.__exportStar)(require_FormatNumericToParts(), exports);
      (0, tslib_1.__exportStar)(require_FormatNumericToString(), exports);
      (0, tslib_1.__exportStar)(require_InitializeNumberFormat(), exports);
      (0, tslib_1.__exportStar)(require_PartitionNumberPattern(), exports);
      (0, tslib_1.__exportStar)(require_SetNumberFormatDigitOptions(), exports);
      (0, tslib_1.__exportStar)(require_SetNumberFormatUnitOptions(), exports);
      (0, tslib_1.__exportStar)(require_ToRawFixed(), exports);
      (0, tslib_1.__exportStar)(require_ToRawPrecision(), exports);
      var format_to_parts_1 = require_format_to_parts();
      Object.defineProperty(exports, "_formatToParts", { enumerable: true, get: function() {
        return (0, tslib_1.__importDefault)(format_to_parts_1).default;
      } });
      (0, tslib_1.__exportStar)(require_PartitionPattern(), exports);
      (0, tslib_1.__exportStar)(require_SupportedLocales(), exports);
      var utils_1 = require_utils();
      Object.defineProperty(exports, "getInternalSlot", { enumerable: true, get: function() {
        return utils_1.getInternalSlot;
      } });
      Object.defineProperty(exports, "getMultiInternalSlots", { enumerable: true, get: function() {
        return utils_1.getMultiInternalSlots;
      } });
      Object.defineProperty(exports, "isLiteralPart", { enumerable: true, get: function() {
        return utils_1.isLiteralPart;
      } });
      Object.defineProperty(exports, "setInternalSlot", { enumerable: true, get: function() {
        return utils_1.setInternalSlot;
      } });
      Object.defineProperty(exports, "setMultiInternalSlots", { enumerable: true, get: function() {
        return utils_1.setMultiInternalSlots;
      } });
      Object.defineProperty(exports, "getMagnitude", { enumerable: true, get: function() {
        return utils_1.getMagnitude;
      } });
      Object.defineProperty(exports, "defineProperty", { enumerable: true, get: function() {
        return utils_1.defineProperty;
      } });
      var data_1 = require_data();
      Object.defineProperty(exports, "isMissingLocaleDataError", { enumerable: true, get: function() {
        return data_1.isMissingLocaleDataError;
      } });
      (0, tslib_1.__exportStar)(require_relative_time(), exports);
      (0, tslib_1.__exportStar)(require_date_time(), exports);
      (0, tslib_1.__exportStar)(require_list(), exports);
      (0, tslib_1.__exportStar)(require_plural_rules(), exports);
      (0, tslib_1.__exportStar)(require_number(), exports);
      (0, tslib_1.__exportStar)(require_displaynames(), exports);
      var utils_2 = require_utils();
      Object.defineProperty(exports, "invariant", { enumerable: true, get: function() {
        return utils_2.invariant;
      } });
      (0, tslib_1.__exportStar)(require__(), exports);
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/intl-listformat/lib/index.js
  var import_tslib = __toESM(require_tslib());
  var import_ecma402_abstract = __toESM(require_ecma402_abstract());
  var import_intl_localematcher = __toESM(require_intl_localematcher());
  function validateInstance(instance, method) {
    if (!(instance instanceof ListFormat)) {
      throw new TypeError("Method Intl.ListFormat.prototype.".concat(method, " called on incompatible receiver ").concat(String(instance)));
    }
  }
  function stringListFromIterable(list) {
    if (list === void 0) {
      return [];
    }
    var result = [];
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
      var el = list_1[_i];
      if (typeof el !== "string") {
        throw new TypeError("array list[".concat(list.indexOf(el), "] is not type String"));
      }
      result.push(el);
    }
    return result;
  }
  function createPartsFromList(internalSlotMap, lf, list) {
    var size = list.length;
    if (size === 0) {
      return [];
    }
    if (size === 2) {
      var pattern = (0, import_ecma402_abstract.getInternalSlot)(internalSlotMap, lf, "templatePair");
      var first = { type: "element", value: list[0] };
      var second = { type: "element", value: list[1] };
      return deconstructPattern(pattern, { "0": first, "1": second });
    }
    var last = {
      type: "element",
      value: list[size - 1]
    };
    var parts = last;
    var i = size - 2;
    while (i >= 0) {
      var pattern = void 0;
      if (i === 0) {
        pattern = (0, import_ecma402_abstract.getInternalSlot)(internalSlotMap, lf, "templateStart");
      } else if (i < size - 2) {
        pattern = (0, import_ecma402_abstract.getInternalSlot)(internalSlotMap, lf, "templateMiddle");
      } else {
        pattern = (0, import_ecma402_abstract.getInternalSlot)(internalSlotMap, lf, "templateEnd");
      }
      var head = { type: "element", value: list[i] };
      parts = deconstructPattern(pattern, { "0": head, "1": parts });
      i--;
    }
    return parts;
  }
  function deconstructPattern(pattern, placeables) {
    var patternParts = (0, import_ecma402_abstract.PartitionPattern)(pattern);
    var result = [];
    for (var _i = 0, patternParts_1 = patternParts; _i < patternParts_1.length; _i++) {
      var patternPart = patternParts_1[_i];
      var part = patternPart.type;
      if ((0, import_ecma402_abstract.isLiteralPart)(patternPart)) {
        result.push({
          type: "literal",
          value: patternPart.value
        });
      } else {
        (0, import_ecma402_abstract.invariant)(part in placeables, "".concat(part, " is missing from placables"));
        var subst = placeables[part];
        if (Array.isArray(subst)) {
          result.push.apply(result, subst);
        } else {
          result.push(subst);
        }
      }
    }
    return result;
  }
  var ListFormat = function() {
    function ListFormat2(locales, options) {
      var newTarget = this && this instanceof ListFormat2 ? this.constructor : void 0;
      if (!newTarget) {
        throw new TypeError("Intl.ListFormat must be called with 'new'");
      }
      (0, import_ecma402_abstract.setInternalSlot)(ListFormat2.__INTERNAL_SLOT_MAP__, this, "initializedListFormat", true);
      var requestedLocales = (0, import_ecma402_abstract.CanonicalizeLocaleList)(locales);
      var opt = /* @__PURE__ */ Object.create(null);
      var opts = (0, import_ecma402_abstract.GetOptionsObject)(options);
      var matcher = (0, import_ecma402_abstract.GetOption)(opts, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
      opt.localeMatcher = matcher;
      var localeData = ListFormat2.localeData;
      var r = (0, import_intl_localematcher.ResolveLocale)(ListFormat2.availableLocales, requestedLocales, opt, ListFormat2.relevantExtensionKeys, localeData, ListFormat2.getDefaultLocale);
      (0, import_ecma402_abstract.setInternalSlot)(ListFormat2.__INTERNAL_SLOT_MAP__, this, "locale", r.locale);
      var type = (0, import_ecma402_abstract.GetOption)(opts, "type", "string", ["conjunction", "disjunction", "unit"], "conjunction");
      (0, import_ecma402_abstract.setInternalSlot)(ListFormat2.__INTERNAL_SLOT_MAP__, this, "type", type);
      var style = (0, import_ecma402_abstract.GetOption)(opts, "style", "string", ["long", "short", "narrow"], "long");
      (0, import_ecma402_abstract.setInternalSlot)(ListFormat2.__INTERNAL_SLOT_MAP__, this, "style", style);
      var dataLocale = r.dataLocale;
      var dataLocaleData = localeData[dataLocale];
      (0, import_ecma402_abstract.invariant)(!!dataLocaleData, "Missing locale data for ".concat(dataLocale));
      var dataLocaleTypes = dataLocaleData[type];
      var templates = dataLocaleTypes[style];
      (0, import_ecma402_abstract.setInternalSlot)(ListFormat2.__INTERNAL_SLOT_MAP__, this, "templatePair", templates.pair);
      (0, import_ecma402_abstract.setInternalSlot)(ListFormat2.__INTERNAL_SLOT_MAP__, this, "templateStart", templates.start);
      (0, import_ecma402_abstract.setInternalSlot)(ListFormat2.__INTERNAL_SLOT_MAP__, this, "templateMiddle", templates.middle);
      (0, import_ecma402_abstract.setInternalSlot)(ListFormat2.__INTERNAL_SLOT_MAP__, this, "templateEnd", templates.end);
    }
    ListFormat2.prototype.format = function(elements) {
      validateInstance(this, "format");
      var result = "";
      var parts = createPartsFromList(ListFormat2.__INTERNAL_SLOT_MAP__, this, stringListFromIterable(elements));
      if (!Array.isArray(parts)) {
        return parts.value;
      }
      for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
        var p = parts_1[_i];
        result += p.value;
      }
      return result;
    };
    ListFormat2.prototype.formatToParts = function(elements) {
      validateInstance(this, "format");
      var parts = createPartsFromList(ListFormat2.__INTERNAL_SLOT_MAP__, this, stringListFromIterable(elements));
      if (!Array.isArray(parts)) {
        return [parts];
      }
      var result = [];
      for (var _i = 0, parts_2 = parts; _i < parts_2.length; _i++) {
        var part = parts_2[_i];
        result.push((0, import_tslib.__assign)({}, part));
      }
      return result;
    };
    ListFormat2.prototype.resolvedOptions = function() {
      validateInstance(this, "resolvedOptions");
      return {
        locale: (0, import_ecma402_abstract.getInternalSlot)(ListFormat2.__INTERNAL_SLOT_MAP__, this, "locale"),
        type: (0, import_ecma402_abstract.getInternalSlot)(ListFormat2.__INTERNAL_SLOT_MAP__, this, "type"),
        style: (0, import_ecma402_abstract.getInternalSlot)(ListFormat2.__INTERNAL_SLOT_MAP__, this, "style")
      };
    };
    ListFormat2.supportedLocalesOf = function(locales, options) {
      return (0, import_ecma402_abstract.SupportedLocales)(ListFormat2.availableLocales, (0, import_ecma402_abstract.CanonicalizeLocaleList)(locales), options);
    };
    ListFormat2.__addLocaleData = function() {
      var data = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
      }
      for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
        var _b = data_1[_a], d = _b.data, locale = _b.locale;
        var minimizedLocale = new Intl.Locale(locale).minimize().toString();
        ListFormat2.localeData[locale] = ListFormat2.localeData[minimizedLocale] = d;
        ListFormat2.availableLocales.add(minimizedLocale);
        ListFormat2.availableLocales.add(locale);
        if (!ListFormat2.__defaultLocale) {
          ListFormat2.__defaultLocale = minimizedLocale;
        }
      }
    };
    ListFormat2.getDefaultLocale = function() {
      return ListFormat2.__defaultLocale;
    };
    ListFormat2.localeData = {};
    ListFormat2.availableLocales = /* @__PURE__ */ new Set();
    ListFormat2.__defaultLocale = "";
    ListFormat2.relevantExtensionKeys = [];
    ListFormat2.polyfilled = true;
    ListFormat2.__INTERNAL_SLOT_MAP__ = /* @__PURE__ */ new WeakMap();
    return ListFormat2;
  }();
  var lib_default = ListFormat;
  try {
    if (typeof Symbol !== "undefined") {
      Object.defineProperty(ListFormat.prototype, Symbol.toStringTag, {
        value: "Intl.ListFormat",
        writable: false,
        enumerable: false,
        configurable: true
      });
    }
    Object.defineProperty(ListFormat.prototype.constructor, "length", {
      value: 0,
      writable: false,
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ListFormat.supportedLocalesOf, "length", {
      value: 1,
      writable: false,
      enumerable: false,
      configurable: true
    });
  } catch (e) {
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-listformat/lib/should-polyfill.js
  var import_intl_localematcher2 = __toESM(require_intl_localematcher());

  // bazel-out/darwin-fastbuild/bin/packages/intl-listformat/lib/supported-locales.js
  var supportedLocales = ["af-NA", "af", "agq", "ak", "am", "ar-AE", "ar-BH", "ar-DJ", "ar-DZ", "ar-EG", "ar-EH", "ar-ER", "ar-IL", "ar-IQ", "ar-JO", "ar-KM", "ar-KW", "ar-LB", "ar-LY", "ar-MA", "ar-MR", "ar-OM", "ar-PS", "ar-QA", "ar-SA", "ar-SD", "ar-SO", "ar-SS", "ar-SY", "ar-TD", "ar-TN", "ar-YE", "ar", "as", "asa", "ast", "az-Cyrl", "az-Latn", "az", "bas", "be-tarask", "be", "bem", "bez", "bg", "bm", "bn-IN", "bn", "bo-IN", "bo", "br", "brx", "bs-Cyrl", "bs-Latn", "bs", "ca-AD", "ca-ES-valencia", "ca-FR", "ca-IT", "ca", "ccp-IN", "ccp", "ce", "ceb", "cgg", "chr", "ckb-IR", "ckb", "cs", "cy", "da-GL", "da", "dav", "de-AT", "de-BE", "de-CH", "de-IT", "de-LI", "de-LU", "de", "dje", "doi", "dsb", "dua", "dyo", "dz", "ebu", "ee-TG", "ee", "el-CY", "el", "en-001", "en-150", "en-AE", "en-AG", "en-AI", "en-AS", "en-AT", "en-AU", "en-BB", "en-BE", "en-BI", "en-BM", "en-BS", "en-BW", "en-BZ", "en-CA", "en-CC", "en-CH", "en-CK", "en-CM", "en-CX", "en-CY", "en-DE", "en-DG", "en-DK", "en-DM", "en-ER", "en-FI", "en-FJ", "en-FK", "en-FM", "en-GB", "en-GD", "en-GG", "en-GH", "en-GI", "en-GM", "en-GU", "en-GY", "en-HK", "en-IE", "en-IL", "en-IM", "en-IN", "en-IO", "en-JE", "en-JM", "en-KE", "en-KI", "en-KN", "en-KY", "en-LC", "en-LR", "en-LS", "en-MG", "en-MH", "en-MO", "en-MP", "en-MS", "en-MT", "en-MU", "en-MW", "en-MY", "en-NA", "en-NF", "en-NG", "en-NL", "en-NR", "en-NU", "en-NZ", "en-PG", "en-PH", "en-PK", "en-PN", "en-PR", "en-PW", "en-RW", "en-SB", "en-SC", "en-SD", "en-SE", "en-SG", "en-SH", "en-SI", "en-SL", "en-SS", "en-SX", "en-SZ", "en-TC", "en-TK", "en-TO", "en-TT", "en-TV", "en-TZ", "en-UG", "en-UM", "en-VC", "en-VG", "en-VI", "en-VU", "en-WS", "en-ZA", "en-ZM", "en-ZW", "en", "eo", "es-419", "es-AR", "es-BO", "es-BR", "es-BZ", "es-CL", "es-CO", "es-CR", "es-CU", "es-DO", "es-EA", "es-EC", "es-GQ", "es-GT", "es-HN", "es-IC", "es-MX", "es-NI", "es-PA", "es-PE", "es-PH", "es-PR", "es-PY", "es-SV", "es-US", "es-UY", "es-VE", "es", "et", "eu", "ewo", "fa-AF", "fa", "ff-Adlm-BF", "ff-Adlm-CM", "ff-Adlm-GH", "ff-Adlm-GM", "ff-Adlm-GW", "ff-Adlm-LR", "ff-Adlm-MR", "ff-Adlm-NE", "ff-Adlm-NG", "ff-Adlm-SL", "ff-Adlm-SN", "ff-Adlm", "ff-Latn-BF", "ff-Latn-CM", "ff-Latn-GH", "ff-Latn-GM", "ff-Latn-GN", "ff-Latn-GW", "ff-Latn-LR", "ff-Latn-MR", "ff-Latn-NE", "ff-Latn-NG", "ff-Latn-SL", "ff-Latn", "ff", "fi", "fil", "fo-DK", "fo", "fr-BE", "fr-BF", "fr-BI", "fr-BJ", "fr-BL", "fr-CA", "fr-CD", "fr-CF", "fr-CG", "fr-CH", "fr-CI", "fr-CM", "fr-DJ", "fr-DZ", "fr-GA", "fr-GF", "fr-GN", "fr-GP", "fr-GQ", "fr-HT", "fr-KM", "fr-LU", "fr-MA", "fr-MC", "fr-MF", "fr-MG", "fr-ML", "fr-MQ", "fr-MR", "fr-MU", "fr-NC", "fr-NE", "fr-PF", "fr-PM", "fr-RE", "fr-RW", "fr-SC", "fr-SN", "fr-SY", "fr-TD", "fr-TG", "fr-TN", "fr-VU", "fr-WF", "fr-YT", "fr", "fur", "fy", "ga-GB", "ga", "gd", "gl", "gsw-FR", "gsw-LI", "gsw", "gu", "guz", "gv", "ha-GH", "ha-NE", "ha", "haw", "he", "hi", "hr-BA", "hr", "hsb", "hu", "hy", "ia", "id", "ig", "ii", "is", "it-CH", "it-SM", "it-VA", "it", "ja", "jgo", "jmc", "jv", "ka", "kab", "kam", "kde", "kea", "kgp", "khq", "ki", "kk", "kkj", "kl", "kln", "km", "kn", "ko-KP", "ko", "kok", "ks-Arab", "ks", "ksb", "ksf", "ksh", "ku", "kw", "ky", "lag", "lb", "lg", "lkt", "ln-AO", "ln-CF", "ln-CG", "ln", "lo", "lrc-IQ", "lrc", "lt", "lu", "luo", "luy", "lv", "mai", "mas-TZ", "mas", "mer", "mfe", "mg", "mgh", "mgo", "mi", "mk", "ml", "mn", "mni-Beng", "mni", "mr", "ms-BN", "ms-ID", "ms-SG", "ms", "mt", "mua", "my", "mzn", "naq", "nb-SJ", "nb", "nd", "nds-NL", "nds", "ne-IN", "ne", "nl-AW", "nl-BE", "nl-BQ", "nl-CW", "nl-SR", "nl-SX", "nl", "nmg", "nn", "nnh", "no", "nus", "nyn", "om-KE", "om", "or", "os-RU", "os", "pa-Arab", "pa-Guru", "pa", "pcm", "pl", "ps-PK", "ps", "pt-AO", "pt-CH", "pt-CV", "pt-GQ", "pt-GW", "pt-LU", "pt-MO", "pt-MZ", "pt-PT", "pt-ST", "pt-TL", "pt", "qu-BO", "qu-EC", "qu", "rm", "rn", "ro-MD", "ro", "rof", "ru-BY", "ru-KG", "ru-KZ", "ru-MD", "ru-UA", "ru", "rw", "rwk", "sa", "sah", "saq", "sat-Olck", "sat", "sbp", "sc", "sd-Arab", "sd-Deva", "sd", "se-FI", "se-SE", "se", "seh", "ses", "sg", "shi-Latn", "shi-Tfng", "shi", "si", "sk", "sl", "smn", "sn", "so-DJ", "so-ET", "so-KE", "so", "sq-MK", "sq-XK", "sq", "sr-Cyrl-BA", "sr-Cyrl-ME", "sr-Cyrl-XK", "sr-Cyrl", "sr-Latn-BA", "sr-Latn-ME", "sr-Latn-XK", "sr-Latn", "sr", "su-Latn", "su", "sv-AX", "sv-FI", "sv", "sw-CD", "sw-KE", "sw-UG", "sw", "ta-LK", "ta-MY", "ta-SG", "ta", "te", "teo-KE", "teo", "tg", "th", "ti-ER", "ti", "tk", "to", "tr-CY", "tr", "tt", "twq", "tzm", "ug", "uk", "und", "ur-IN", "ur", "uz-Arab", "uz-Cyrl", "uz-Latn", "uz", "vai-Latn", "vai-Vaii", "vai", "vi", "vun", "wae", "wo", "xh", "xog", "yav", "yi", "yo-BJ", "yo", "yrl-CO", "yrl-VE", "yrl", "yue-Hans", "yue-Hant", "yue", "zgh", "zh-Hans-HK", "zh-Hans-MO", "zh-Hans-SG", "zh-Hans", "zh-Hant-HK", "zh-Hant-MO", "zh-Hant", "zh", "zu"];

  // bazel-out/darwin-fastbuild/bin/packages/intl-listformat/lib/should-polyfill.js
  function supportedLocalesOf(locale) {
    if (!locale) {
      return true;
    }
    var locales = Array.isArray(locale) ? locale : [locale];
    return Intl.ListFormat.supportedLocalesOf(locales).length === locales.length;
  }
  function shouldPolyfill(locale) {
    if (locale === void 0) {
      locale = "en";
    }
    if (!("ListFormat" in Intl) || !supportedLocalesOf(locale)) {
      return locale ? (0, import_intl_localematcher2.match)([locale], supportedLocales, "en") : void 0;
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-listformat/lib/polyfill.js
  if (shouldPolyfill()) {
    Object.defineProperty(Intl, "ListFormat", {
      value: lib_default,
      writable: true,
      enumerable: false,
      configurable: true
    });
  }
})();
//# sourceMappingURL=polyfill.iife.js.map
