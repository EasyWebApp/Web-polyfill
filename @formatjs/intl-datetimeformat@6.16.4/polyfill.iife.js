(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __pow = Math.pow;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeLocaleList.js
  function CanonicalizeLocaleList(locales) {
    return Intl.getCanonicalLocales(locales);
  }

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeTimeZoneName.js
  function CanonicalizeTimeZoneName(tz, _a) {
    var zoneNames = _a.zoneNames, uppercaseLinks = _a.uppercaseLinks;
    var uppercasedTz = tz.toUpperCase();
    var uppercasedZones = zoneNames.reduce(function(all, z) {
      all[z.toUpperCase()] = z;
      return all;
    }, {});
    var ianaTimeZone = uppercaseLinks[uppercasedTz] || uppercasedZones[uppercasedTz];
    if (ianaTimeZone === "Etc/UTC" || ianaTimeZone === "Etc/GMT") {
      return "UTC";
    }
    return ianaTimeZone;
  }

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/262.js
  function ToString(o) {
    if (typeof o === "symbol") {
      throw TypeError("Cannot convert a Symbol value to a string");
    }
    return String(o);
  }
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
  function ToObject(arg) {
    if (arg == null) {
      throw new TypeError("undefined/null cannot be converted to object");
    }
    return Object(arg);
  }
  function SameValue(x, y) {
    if (Object.is) {
      return Object.is(x, y);
    }
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    }
    return x !== x && y !== y;
  }
  function ArrayCreate(len) {
    return new Array(len);
  }
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
  var MS_PER_DAY = 864e5;
  function mod(x, y) {
    return x - Math.floor(x / y) * y;
  }
  function Day(t) {
    return Math.floor(t / MS_PER_DAY);
  }
  function WeekDay(t) {
    return mod(Day(t) + 4, 7);
  }
  function DayFromYear(y) {
    return Date.UTC(y, 0) / MS_PER_DAY;
  }
  function YearFromTime(t) {
    return new Date(t).getUTCFullYear();
  }
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
  function DayWithinYear(t) {
    return Day(t) - DayFromYear(YearFromTime(t));
  }
  function InLeapYear(t) {
    return DaysInYear(YearFromTime(t)) === 365 ? 0 : 1;
  }
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
  var HOURS_PER_DAY = 24;
  var MINUTES_PER_HOUR = 60;
  var SECONDS_PER_MINUTE = 60;
  var MS_PER_SECOND = 1e3;
  var MS_PER_MINUTE = MS_PER_SECOND * SECONDS_PER_MINUTE;
  var MS_PER_HOUR = MS_PER_MINUTE * MINUTES_PER_HOUR;
  function HourFromTime(t) {
    return mod(Math.floor(t / MS_PER_HOUR), HOURS_PER_DAY);
  }
  function MinFromTime(t) {
    return mod(Math.floor(t / MS_PER_MINUTE), MINUTES_PER_HOUR);
  }
  function SecFromTime(t) {
    return mod(Math.floor(t / MS_PER_SECOND), SECONDS_PER_MINUTE);
  }
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
  function msFromTime(t) {
    return mod(t, MS_PER_SECOND);
  }

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/DefaultNumberOption.js
  function DefaultNumberOption(inputVal, min, max, fallback) {
    if (inputVal === void 0) {
      return fallback;
    }
    var val = Number(inputVal);
    if (isNaN(val) || val < min || val > max) {
      throw new RangeError("".concat(val, " is outside of range [").concat(min, ", ").concat(max, "]"));
    }
    return Math.floor(val);
  }

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/GetNumberOption.js
  function GetNumberOption(options, property, minimum, maximum, fallback) {
    var val = options[property];
    return DefaultNumberOption(val, minimum, maximum, fallback);
  }

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/GetOption.js
  function GetOption(opts, prop, type, values, fallback) {
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
        value = ToString(value);
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

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/IsSanctionedSimpleUnitIdentifier.js
  var SANCTIONED_UNITS = [
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
  var SIMPLE_UNITS = SANCTIONED_UNITS.map(removeUnitNamespace);

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/IsValidTimeZoneName.js
  function IsValidTimeZoneName(tz, _a) {
    var zoneNamesFromData = _a.zoneNamesFromData, uppercaseLinks = _a.uppercaseLinks;
    var uppercasedTz = tz.toUpperCase();
    var zoneNames = /* @__PURE__ */ new Set();
    var linkNames = /* @__PURE__ */ new Set();
    zoneNamesFromData.map(function(z) {
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

  // node_modules/.aspect_rules_js/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar)
            ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  }

  // node_modules/.aspect_rules_js/@formatjs+fast-memoize@0.0.0/node_modules/@formatjs/fast-memoize/lib/index.js
  function memoize(fn, options) {
    var cache = options && options.cache ? options.cache : cacheDefault;
    var serializer = options && options.serializer ? options.serializer : serializerDefault;
    var strategy = options && options.strategy ? options.strategy : strategyDefault;
    return strategy(fn, {
      cache,
      serializer
    });
  }
  function isPrimitive(value) {
    return value == null || typeof value === "number" || typeof value === "boolean";
  }
  function monadic(fn, cache, serializer, arg) {
    var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === "undefined") {
      computedValue = fn.call(this, arg);
      cache.set(cacheKey, computedValue);
    }
    return computedValue;
  }
  function variadic(fn, cache, serializer) {
    var args = Array.prototype.slice.call(arguments, 3);
    var cacheKey = serializer(args);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === "undefined") {
      computedValue = fn.apply(this, args);
      cache.set(cacheKey, computedValue);
    }
    return computedValue;
  }
  function assemble(fn, context, strategy, cache, serialize) {
    return strategy.bind(context, fn, cache, serialize);
  }
  function strategyDefault(fn, options) {
    var strategy = fn.length === 1 ? monadic : variadic;
    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
  }
  function strategyVariadic(fn, options) {
    return assemble(fn, this, variadic, options.cache.create(), options.serializer);
  }
  function strategyMonadic(fn, options) {
    return assemble(fn, this, monadic, options.cache.create(), options.serializer);
  }
  var serializerDefault = function() {
    return JSON.stringify(arguments);
  };
  function ObjectWithoutPrototypeCache() {
    this.cache = /* @__PURE__ */ Object.create(null);
  }
  ObjectWithoutPrototypeCache.prototype.get = function(key) {
    return this.cache[key];
  };
  ObjectWithoutPrototypeCache.prototype.set = function(key, value) {
    this.cache[key] = value;
  };
  var cacheDefault = {
    create: function create() {
      return new ObjectWithoutPrototypeCache();
    }
  };
  var strategies = {
    variadic: strategyVariadic,
    monadic: strategyMonadic
  };

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/utils.js
  function defineProperty(target, name, _a) {
    var value = _a.value;
    Object.defineProperty(target, name, {
      configurable: true,
      enumerable: false,
      writable: true,
      value
    });
  }
  function invariant(condition, message, Err) {
    if (Err === void 0) {
      Err = Error;
    }
    if (!condition) {
      throw new Err(message);
    }
  }
  var createMemoizedNumberFormat = memoize(function() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return new ((_a = Intl.NumberFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
  }, {
    strategy: strategies.variadic
  });
  var createMemoizedDateTimeFormat = memoize(function() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return new ((_a = Intl.DateTimeFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
  }, {
    strategy: strategies.variadic
  });
  var createMemoizedPluralRules = memoize(function() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return new ((_a = Intl.PluralRules).bind.apply(_a, __spreadArray([void 0], args, false)))();
  }, {
    strategy: strategies.variadic
  });
  var createMemoizedLocale = memoize(function() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return new ((_a = Intl.Locale).bind.apply(_a, __spreadArray([void 0], args, false)))();
  }, {
    strategy: strategies.variadic
  });
  var createMemoizedListFormat = memoize(function() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return new ((_a = Intl.ListFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
  }, {
    strategy: strategies.variadic
  });

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/regex.generated.js
  var S_UNICODE_REGEX = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/;

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/format_to_parts.js
  var CARET_S_UNICODE_REGEX = new RegExp("^".concat(S_UNICODE_REGEX.source));
  var S_DOLLAR_UNICODE_REGEX = new RegExp("".concat(S_UNICODE_REGEX.source, "$"));

  // node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeLocaleList.js
  function CanonicalizeLocaleList2(locales) {
    return Intl.getCanonicalLocales(locales);
  }

  // node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/languageMatching.js
  var data = {
    supplemental: {
      languageMatching: {
        "written-new": [
          {
            paradigmLocales: {
              _locales: "en en_GB es es_419 pt_BR pt_PT"
            }
          },
          {
            $enUS: {
              _value: "AS+CA+GU+MH+MP+PH+PR+UM+US+VI"
            }
          },
          {
            $cnsar: {
              _value: "HK+MO"
            }
          },
          {
            $americas: {
              _value: "019"
            }
          },
          {
            $maghreb: {
              _value: "MA+DZ+TN+LY+MR+EH"
            }
          },
          {
            no: {
              _desired: "nb",
              _distance: "1"
            }
          },
          {
            bs: {
              _desired: "hr",
              _distance: "4"
            }
          },
          {
            bs: {
              _desired: "sh",
              _distance: "4"
            }
          },
          {
            hr: {
              _desired: "sh",
              _distance: "4"
            }
          },
          {
            sr: {
              _desired: "sh",
              _distance: "4"
            }
          },
          {
            aa: {
              _desired: "ssy",
              _distance: "4"
            }
          },
          {
            de: {
              _desired: "gsw",
              _distance: "4",
              _oneway: "true"
            }
          },
          {
            de: {
              _desired: "lb",
              _distance: "4",
              _oneway: "true"
            }
          },
          {
            no: {
              _desired: "da",
              _distance: "8"
            }
          },
          {
            nb: {
              _desired: "da",
              _distance: "8"
            }
          },
          {
            ru: {
              _desired: "ab",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "ach",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            nl: {
              _desired: "af",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "ak",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "am",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            es: {
              _desired: "ay",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            ru: {
              _desired: "az",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            ur: {
              _desired: "bal",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            ru: {
              _desired: "be",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "bem",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            hi: {
              _desired: "bh",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "bn",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            zh: {
              _desired: "bo",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            fr: {
              _desired: "br",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            es: {
              _desired: "ca",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            fil: {
              _desired: "ceb",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "chr",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "ckb",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            fr: {
              _desired: "co",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            fr: {
              _desired: "crs",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            sk: {
              _desired: "cs",
              _distance: "20"
            }
          },
          {
            en: {
              _desired: "cy",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "ee",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "eo",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            es: {
              _desired: "eu",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            da: {
              _desired: "fo",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            nl: {
              _desired: "fy",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "ga",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "gaa",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "gd",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            es: {
              _desired: "gl",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            es: {
              _desired: "gn",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            hi: {
              _desired: "gu",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "ha",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "haw",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            fr: {
              _desired: "ht",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            ru: {
              _desired: "hy",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "ia",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "ig",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "is",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            id: {
              _desired: "jv",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "ka",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            fr: {
              _desired: "kg",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            ru: {
              _desired: "kk",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "km",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "kn",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "kri",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            tr: {
              _desired: "ku",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            ru: {
              _desired: "ky",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            it: {
              _desired: "la",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "lg",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            fr: {
              _desired: "ln",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "lo",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "loz",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            fr: {
              _desired: "lua",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            hi: {
              _desired: "mai",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "mfe",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            fr: {
              _desired: "mg",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "mi",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "ml",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            ru: {
              _desired: "mn",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            hi: {
              _desired: "mr",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            id: {
              _desired: "ms",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "mt",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "my",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "ne",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            nb: {
              _desired: "nn",
              _distance: "20"
            }
          },
          {
            no: {
              _desired: "nn",
              _distance: "20"
            }
          },
          {
            en: {
              _desired: "nso",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "ny",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "nyn",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            fr: {
              _desired: "oc",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "om",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "or",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "pa",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "pcm",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "ps",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            es: {
              _desired: "qu",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            de: {
              _desired: "rm",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "rn",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            fr: {
              _desired: "rw",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            hi: {
              _desired: "sa",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "sd",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "si",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "sn",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "so",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "sq",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "st",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            id: {
              _desired: "su",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "sw",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "ta",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "te",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            ru: {
              _desired: "tg",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "ti",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            ru: {
              _desired: "tk",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "tlh",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "tn",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "to",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            ru: {
              _desired: "tt",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "tum",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            zh: {
              _desired: "ug",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            ru: {
              _desired: "uk",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "ur",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            ru: {
              _desired: "uz",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            fr: {
              _desired: "wo",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "xh",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "yi",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "yo",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            zh: {
              _desired: "za",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            en: {
              _desired: "zu",
              _distance: "30",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "aao",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "abh",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "abv",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "acm",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "acq",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "acw",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "acx",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "acy",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "adf",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "aeb",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "aec",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "afb",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "ajp",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "apc",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "apd",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "arq",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "ars",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "ary",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "arz",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "auz",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "avl",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "ayh",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "ayl",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "ayn",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "ayp",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "bbz",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "pga",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "shu",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ar: {
              _desired: "ssh",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            az: {
              _desired: "azb",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            et: {
              _desired: "vro",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ff: {
              _desired: "ffm",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ff: {
              _desired: "fub",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ff: {
              _desired: "fue",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ff: {
              _desired: "fuf",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ff: {
              _desired: "fuh",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ff: {
              _desired: "fui",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ff: {
              _desired: "fuq",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ff: {
              _desired: "fuv",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            gn: {
              _desired: "gnw",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            gn: {
              _desired: "gui",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            gn: {
              _desired: "gun",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            gn: {
              _desired: "nhd",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            iu: {
              _desired: "ikt",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            kln: {
              _desired: "enb",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            kln: {
              _desired: "eyo",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            kln: {
              _desired: "niq",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            kln: {
              _desired: "oki",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            kln: {
              _desired: "pko",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            kln: {
              _desired: "sgc",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            kln: {
              _desired: "tec",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            kln: {
              _desired: "tuy",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            kok: {
              _desired: "gom",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            kpe: {
              _desired: "gkp",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            luy: {
              _desired: "ida",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            luy: {
              _desired: "lkb",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            luy: {
              _desired: "lko",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            luy: {
              _desired: "lks",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            luy: {
              _desired: "lri",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            luy: {
              _desired: "lrm",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            luy: {
              _desired: "lsm",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            luy: {
              _desired: "lto",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            luy: {
              _desired: "lts",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            luy: {
              _desired: "lwg",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            luy: {
              _desired: "nle",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            luy: {
              _desired: "nyd",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            luy: {
              _desired: "rag",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            lv: {
              _desired: "ltg",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            mg: {
              _desired: "bhr",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            mg: {
              _desired: "bjq",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            mg: {
              _desired: "bmm",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            mg: {
              _desired: "bzc",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            mg: {
              _desired: "msh",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            mg: {
              _desired: "skg",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            mg: {
              _desired: "tdx",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            mg: {
              _desired: "tkg",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            mg: {
              _desired: "txy",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            mg: {
              _desired: "xmv",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            mg: {
              _desired: "xmw",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            mn: {
              _desired: "mvf",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "bjn",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "btj",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "bve",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "bvu",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "coa",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "dup",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "hji",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "id",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "jak",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "jax",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "kvb",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "kvr",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "kxd",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "lce",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "lcf",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "liw",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "max",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "meo",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "mfa",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "mfb",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "min",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "mqg",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "msi",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "mui",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "orn",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "ors",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "pel",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "pse",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "tmw",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "urk",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "vkk",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "vkt",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "xmm",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "zlm",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ms: {
              _desired: "zmi",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ne: {
              _desired: "dty",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            om: {
              _desired: "gax",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            om: {
              _desired: "hae",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            om: {
              _desired: "orc",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            or: {
              _desired: "spv",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ps: {
              _desired: "pbt",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            ps: {
              _desired: "pst",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qub",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qud",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "quf",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qug",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "quh",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "quk",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qul",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qup",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qur",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qus",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "quw",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qux",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "quy",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qva",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qvc",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qve",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qvh",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qvi",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qvj",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qvl",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qvm",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qvn",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qvo",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qvp",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qvs",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qvw",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qvz",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qwa",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qwc",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qwh",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qws",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qxa",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qxc",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qxh",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qxl",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qxn",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qxo",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qxp",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qxr",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qxt",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qxu",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            qu: {
              _desired: "qxw",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            sc: {
              _desired: "sdc",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            sc: {
              _desired: "sdn",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            sc: {
              _desired: "sro",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            sq: {
              _desired: "aae",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            sq: {
              _desired: "aat",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            sq: {
              _desired: "aln",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            syr: {
              _desired: "aii",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            uz: {
              _desired: "uzs",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            yi: {
              _desired: "yih",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            zh: {
              _desired: "cdo",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            zh: {
              _desired: "cjy",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            zh: {
              _desired: "cpx",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            zh: {
              _desired: "czh",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            zh: {
              _desired: "czo",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            zh: {
              _desired: "gan",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            zh: {
              _desired: "hak",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            zh: {
              _desired: "hsn",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            zh: {
              _desired: "lzh",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            zh: {
              _desired: "mnp",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            zh: {
              _desired: "nan",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            zh: {
              _desired: "wuu",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            zh: {
              _desired: "yue",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "*": {
              _desired: "*",
              _distance: "80"
            }
          },
          {
            "en-Latn": {
              _desired: "am-Ethi",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "ru-Cyrl": {
              _desired: "az-Latn",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "en-Latn": {
              _desired: "bn-Beng",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "zh-Hans": {
              _desired: "bo-Tibt",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "ru-Cyrl": {
              _desired: "hy-Armn",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "en-Latn": {
              _desired: "ka-Geor",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "en-Latn": {
              _desired: "km-Khmr",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "en-Latn": {
              _desired: "kn-Knda",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "en-Latn": {
              _desired: "lo-Laoo",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "en-Latn": {
              _desired: "ml-Mlym",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "en-Latn": {
              _desired: "my-Mymr",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "en-Latn": {
              _desired: "ne-Deva",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "en-Latn": {
              _desired: "or-Orya",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "en-Latn": {
              _desired: "pa-Guru",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "en-Latn": {
              _desired: "ps-Arab",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "en-Latn": {
              _desired: "sd-Arab",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "en-Latn": {
              _desired: "si-Sinh",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "en-Latn": {
              _desired: "ta-Taml",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "en-Latn": {
              _desired: "te-Telu",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "en-Latn": {
              _desired: "ti-Ethi",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "ru-Cyrl": {
              _desired: "tk-Latn",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "en-Latn": {
              _desired: "ur-Arab",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "ru-Cyrl": {
              _desired: "uz-Latn",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "en-Latn": {
              _desired: "yi-Hebr",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "sr-Cyrl": {
              _desired: "sr-Latn",
              _distance: "5"
            }
          },
          {
            "zh-Hans": {
              _desired: "za-Latn",
              _distance: "10",
              _oneway: "true"
            }
          },
          {
            "zh-Hans": {
              _desired: "zh-Hani",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            "zh-Hant": {
              _desired: "zh-Hani",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            "ar-Arab": {
              _desired: "ar-Latn",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            "bn-Beng": {
              _desired: "bn-Latn",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            "gu-Gujr": {
              _desired: "gu-Latn",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            "hi-Deva": {
              _desired: "hi-Latn",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            "kn-Knda": {
              _desired: "kn-Latn",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            "ml-Mlym": {
              _desired: "ml-Latn",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            "mr-Deva": {
              _desired: "mr-Latn",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            "ta-Taml": {
              _desired: "ta-Latn",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            "te-Telu": {
              _desired: "te-Latn",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            "zh-Hans": {
              _desired: "zh-Latn",
              _distance: "20",
              _oneway: "true"
            }
          },
          {
            "ja-Jpan": {
              _desired: "ja-Latn",
              _distance: "5",
              _oneway: "true"
            }
          },
          {
            "ja-Jpan": {
              _desired: "ja-Hani",
              _distance: "5",
              _oneway: "true"
            }
          },
          {
            "ja-Jpan": {
              _desired: "ja-Hira",
              _distance: "5",
              _oneway: "true"
            }
          },
          {
            "ja-Jpan": {
              _desired: "ja-Kana",
              _distance: "5",
              _oneway: "true"
            }
          },
          {
            "ja-Jpan": {
              _desired: "ja-Hrkt",
              _distance: "5",
              _oneway: "true"
            }
          },
          {
            "ja-Hrkt": {
              _desired: "ja-Hira",
              _distance: "5",
              _oneway: "true"
            }
          },
          {
            "ja-Hrkt": {
              _desired: "ja-Kana",
              _distance: "5",
              _oneway: "true"
            }
          },
          {
            "ko-Kore": {
              _desired: "ko-Hani",
              _distance: "5",
              _oneway: "true"
            }
          },
          {
            "ko-Kore": {
              _desired: "ko-Hang",
              _distance: "5",
              _oneway: "true"
            }
          },
          {
            "ko-Kore": {
              _desired: "ko-Jamo",
              _distance: "5",
              _oneway: "true"
            }
          },
          {
            "ko-Hang": {
              _desired: "ko-Jamo",
              _distance: "5",
              _oneway: "true"
            }
          },
          {
            "*-*": {
              _desired: "*-*",
              _distance: "50"
            }
          },
          {
            "ar-*-$maghreb": {
              _desired: "ar-*-$maghreb",
              _distance: "4"
            }
          },
          {
            "ar-*-$!maghreb": {
              _desired: "ar-*-$!maghreb",
              _distance: "4"
            }
          },
          {
            "ar-*-*": {
              _desired: "ar-*-*",
              _distance: "5"
            }
          },
          {
            "en-*-$enUS": {
              _desired: "en-*-$enUS",
              _distance: "4"
            }
          },
          {
            "en-*-GB": {
              _desired: "en-*-$!enUS",
              _distance: "3"
            }
          },
          {
            "en-*-$!enUS": {
              _desired: "en-*-$!enUS",
              _distance: "4"
            }
          },
          {
            "en-*-*": {
              _desired: "en-*-*",
              _distance: "5"
            }
          },
          {
            "es-*-$americas": {
              _desired: "es-*-$americas",
              _distance: "4"
            }
          },
          {
            "es-*-$!americas": {
              _desired: "es-*-$!americas",
              _distance: "4"
            }
          },
          {
            "es-*-*": {
              _desired: "es-*-*",
              _distance: "5"
            }
          },
          {
            "pt-*-$americas": {
              _desired: "pt-*-$americas",
              _distance: "4"
            }
          },
          {
            "pt-*-$!americas": {
              _desired: "pt-*-$!americas",
              _distance: "4"
            }
          },
          {
            "pt-*-*": {
              _desired: "pt-*-*",
              _distance: "5"
            }
          },
          {
            "zh-Hant-$cnsar": {
              _desired: "zh-Hant-$cnsar",
              _distance: "4"
            }
          },
          {
            "zh-Hant-$!cnsar": {
              _desired: "zh-Hant-$!cnsar",
              _distance: "4"
            }
          },
          {
            "zh-Hant-*": {
              _desired: "zh-Hant-*",
              _distance: "5"
            }
          },
          {
            "*-*-*": {
              _desired: "*-*-*",
              _distance: "4"
            }
          }
        ]
      }
    }
  };

  // node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/regions.generated.js
  var regions = {
    "001": [
      "001",
      "001-status-grouping",
      "002",
      "005",
      "009",
      "011",
      "013",
      "014",
      "015",
      "017",
      "018",
      "019",
      "021",
      "029",
      "030",
      "034",
      "035",
      "039",
      "053",
      "054",
      "057",
      "061",
      "142",
      "143",
      "145",
      "150",
      "151",
      "154",
      "155",
      "AC",
      "AD",
      "AE",
      "AF",
      "AG",
      "AI",
      "AL",
      "AM",
      "AO",
      "AQ",
      "AR",
      "AS",
      "AT",
      "AU",
      "AW",
      "AX",
      "AZ",
      "BA",
      "BB",
      "BD",
      "BE",
      "BF",
      "BG",
      "BH",
      "BI",
      "BJ",
      "BL",
      "BM",
      "BN",
      "BO",
      "BQ",
      "BR",
      "BS",
      "BT",
      "BV",
      "BW",
      "BY",
      "BZ",
      "CA",
      "CC",
      "CD",
      "CF",
      "CG",
      "CH",
      "CI",
      "CK",
      "CL",
      "CM",
      "CN",
      "CO",
      "CP",
      "CQ",
      "CR",
      "CU",
      "CV",
      "CW",
      "CX",
      "CY",
      "CZ",
      "DE",
      "DG",
      "DJ",
      "DK",
      "DM",
      "DO",
      "DZ",
      "EA",
      "EC",
      "EE",
      "EG",
      "EH",
      "ER",
      "ES",
      "ET",
      "EU",
      "EZ",
      "FI",
      "FJ",
      "FK",
      "FM",
      "FO",
      "FR",
      "GA",
      "GB",
      "GD",
      "GE",
      "GF",
      "GG",
      "GH",
      "GI",
      "GL",
      "GM",
      "GN",
      "GP",
      "GQ",
      "GR",
      "GS",
      "GT",
      "GU",
      "GW",
      "GY",
      "HK",
      "HM",
      "HN",
      "HR",
      "HT",
      "HU",
      "IC",
      "ID",
      "IE",
      "IL",
      "IM",
      "IN",
      "IO",
      "IQ",
      "IR",
      "IS",
      "IT",
      "JE",
      "JM",
      "JO",
      "JP",
      "KE",
      "KG",
      "KH",
      "KI",
      "KM",
      "KN",
      "KP",
      "KR",
      "KW",
      "KY",
      "KZ",
      "LA",
      "LB",
      "LC",
      "LI",
      "LK",
      "LR",
      "LS",
      "LT",
      "LU",
      "LV",
      "LY",
      "MA",
      "MC",
      "MD",
      "ME",
      "MF",
      "MG",
      "MH",
      "MK",
      "ML",
      "MM",
      "MN",
      "MO",
      "MP",
      "MQ",
      "MR",
      "MS",
      "MT",
      "MU",
      "MV",
      "MW",
      "MX",
      "MY",
      "MZ",
      "NA",
      "NC",
      "NE",
      "NF",
      "NG",
      "NI",
      "NL",
      "NO",
      "NP",
      "NR",
      "NU",
      "NZ",
      "OM",
      "PA",
      "PE",
      "PF",
      "PG",
      "PH",
      "PK",
      "PL",
      "PM",
      "PN",
      "PR",
      "PS",
      "PT",
      "PW",
      "PY",
      "QA",
      "QO",
      "RE",
      "RO",
      "RS",
      "RU",
      "RW",
      "SA",
      "SB",
      "SC",
      "SD",
      "SE",
      "SG",
      "SH",
      "SI",
      "SJ",
      "SK",
      "SL",
      "SM",
      "SN",
      "SO",
      "SR",
      "SS",
      "ST",
      "SV",
      "SX",
      "SY",
      "SZ",
      "TA",
      "TC",
      "TD",
      "TF",
      "TG",
      "TH",
      "TJ",
      "TK",
      "TL",
      "TM",
      "TN",
      "TO",
      "TR",
      "TT",
      "TV",
      "TW",
      "TZ",
      "UA",
      "UG",
      "UM",
      "UN",
      "US",
      "UY",
      "UZ",
      "VA",
      "VC",
      "VE",
      "VG",
      "VI",
      "VN",
      "VU",
      "WF",
      "WS",
      "XK",
      "YE",
      "YT",
      "ZA",
      "ZM",
      "ZW"
    ],
    "002": [
      "002",
      "002-status-grouping",
      "011",
      "014",
      "015",
      "017",
      "018",
      "202",
      "AO",
      "BF",
      "BI",
      "BJ",
      "BW",
      "CD",
      "CF",
      "CG",
      "CI",
      "CM",
      "CV",
      "DJ",
      "DZ",
      "EA",
      "EG",
      "EH",
      "ER",
      "ET",
      "GA",
      "GH",
      "GM",
      "GN",
      "GQ",
      "GW",
      "IC",
      "IO",
      "KE",
      "KM",
      "LR",
      "LS",
      "LY",
      "MA",
      "MG",
      "ML",
      "MR",
      "MU",
      "MW",
      "MZ",
      "NA",
      "NE",
      "NG",
      "RE",
      "RW",
      "SC",
      "SD",
      "SH",
      "SL",
      "SN",
      "SO",
      "SS",
      "ST",
      "SZ",
      "TD",
      "TF",
      "TG",
      "TN",
      "TZ",
      "UG",
      "YT",
      "ZA",
      "ZM",
      "ZW"
    ],
    "003": [
      "003",
      "013",
      "021",
      "029",
      "AG",
      "AI",
      "AW",
      "BB",
      "BL",
      "BM",
      "BQ",
      "BS",
      "BZ",
      "CA",
      "CR",
      "CU",
      "CW",
      "DM",
      "DO",
      "GD",
      "GL",
      "GP",
      "GT",
      "HN",
      "HT",
      "JM",
      "KN",
      "KY",
      "LC",
      "MF",
      "MQ",
      "MS",
      "MX",
      "NI",
      "PA",
      "PM",
      "PR",
      "SV",
      "SX",
      "TC",
      "TT",
      "US",
      "VC",
      "VG",
      "VI"
    ],
    "005": [
      "005",
      "AR",
      "BO",
      "BR",
      "BV",
      "CL",
      "CO",
      "EC",
      "FK",
      "GF",
      "GS",
      "GY",
      "PE",
      "PY",
      "SR",
      "UY",
      "VE"
    ],
    "009": [
      "009",
      "053",
      "054",
      "057",
      "061",
      "AC",
      "AQ",
      "AS",
      "AU",
      "CC",
      "CK",
      "CP",
      "CX",
      "DG",
      "FJ",
      "FM",
      "GU",
      "HM",
      "KI",
      "MH",
      "MP",
      "NC",
      "NF",
      "NR",
      "NU",
      "NZ",
      "PF",
      "PG",
      "PN",
      "PW",
      "QO",
      "SB",
      "TA",
      "TK",
      "TO",
      "TV",
      "UM",
      "VU",
      "WF",
      "WS"
    ],
    "011": [
      "011",
      "BF",
      "BJ",
      "CI",
      "CV",
      "GH",
      "GM",
      "GN",
      "GW",
      "LR",
      "ML",
      "MR",
      "NE",
      "NG",
      "SH",
      "SL",
      "SN",
      "TG"
    ],
    "013": [
      "013",
      "BZ",
      "CR",
      "GT",
      "HN",
      "MX",
      "NI",
      "PA",
      "SV"
    ],
    "014": [
      "014",
      "BI",
      "DJ",
      "ER",
      "ET",
      "IO",
      "KE",
      "KM",
      "MG",
      "MU",
      "MW",
      "MZ",
      "RE",
      "RW",
      "SC",
      "SO",
      "SS",
      "TF",
      "TZ",
      "UG",
      "YT",
      "ZM",
      "ZW"
    ],
    "015": [
      "015",
      "DZ",
      "EA",
      "EG",
      "EH",
      "IC",
      "LY",
      "MA",
      "SD",
      "TN"
    ],
    "017": [
      "017",
      "AO",
      "CD",
      "CF",
      "CG",
      "CM",
      "GA",
      "GQ",
      "ST",
      "TD"
    ],
    "018": [
      "018",
      "BW",
      "LS",
      "NA",
      "SZ",
      "ZA"
    ],
    "019": [
      "003",
      "005",
      "013",
      "019",
      "019-status-grouping",
      "021",
      "029",
      "419",
      "AG",
      "AI",
      "AR",
      "AW",
      "BB",
      "BL",
      "BM",
      "BO",
      "BQ",
      "BR",
      "BS",
      "BV",
      "BZ",
      "CA",
      "CL",
      "CO",
      "CR",
      "CU",
      "CW",
      "DM",
      "DO",
      "EC",
      "FK",
      "GD",
      "GF",
      "GL",
      "GP",
      "GS",
      "GT",
      "GY",
      "HN",
      "HT",
      "JM",
      "KN",
      "KY",
      "LC",
      "MF",
      "MQ",
      "MS",
      "MX",
      "NI",
      "PA",
      "PE",
      "PM",
      "PR",
      "PY",
      "SR",
      "SV",
      "SX",
      "TC",
      "TT",
      "US",
      "UY",
      "VC",
      "VE",
      "VG",
      "VI"
    ],
    "021": [
      "021",
      "BM",
      "CA",
      "GL",
      "PM",
      "US"
    ],
    "029": [
      "029",
      "AG",
      "AI",
      "AW",
      "BB",
      "BL",
      "BQ",
      "BS",
      "CU",
      "CW",
      "DM",
      "DO",
      "GD",
      "GP",
      "HT",
      "JM",
      "KN",
      "KY",
      "LC",
      "MF",
      "MQ",
      "MS",
      "PR",
      "SX",
      "TC",
      "TT",
      "VC",
      "VG",
      "VI"
    ],
    "030": [
      "030",
      "CN",
      "HK",
      "JP",
      "KP",
      "KR",
      "MN",
      "MO",
      "TW"
    ],
    "034": [
      "034",
      "AF",
      "BD",
      "BT",
      "IN",
      "IR",
      "LK",
      "MV",
      "NP",
      "PK"
    ],
    "035": [
      "035",
      "BN",
      "ID",
      "KH",
      "LA",
      "MM",
      "MY",
      "PH",
      "SG",
      "TH",
      "TL",
      "VN"
    ],
    "039": [
      "039",
      "AD",
      "AL",
      "BA",
      "ES",
      "GI",
      "GR",
      "HR",
      "IT",
      "ME",
      "MK",
      "MT",
      "PT",
      "RS",
      "SI",
      "SM",
      "VA",
      "XK"
    ],
    "053": [
      "053",
      "AU",
      "CC",
      "CX",
      "HM",
      "NF",
      "NZ"
    ],
    "054": [
      "054",
      "FJ",
      "NC",
      "PG",
      "SB",
      "VU"
    ],
    "057": [
      "057",
      "FM",
      "GU",
      "KI",
      "MH",
      "MP",
      "NR",
      "PW",
      "UM"
    ],
    "061": [
      "061",
      "AS",
      "CK",
      "NU",
      "PF",
      "PN",
      "TK",
      "TO",
      "TV",
      "WF",
      "WS"
    ],
    "142": [
      "030",
      "034",
      "035",
      "142",
      "143",
      "145",
      "AE",
      "AF",
      "AM",
      "AZ",
      "BD",
      "BH",
      "BN",
      "BT",
      "CN",
      "CY",
      "GE",
      "HK",
      "ID",
      "IL",
      "IN",
      "IQ",
      "IR",
      "JO",
      "JP",
      "KG",
      "KH",
      "KP",
      "KR",
      "KW",
      "KZ",
      "LA",
      "LB",
      "LK",
      "MM",
      "MN",
      "MO",
      "MV",
      "MY",
      "NP",
      "OM",
      "PH",
      "PK",
      "PS",
      "QA",
      "SA",
      "SG",
      "SY",
      "TH",
      "TJ",
      "TL",
      "TM",
      "TR",
      "TW",
      "UZ",
      "VN",
      "YE"
    ],
    "143": [
      "143",
      "KG",
      "KZ",
      "TJ",
      "TM",
      "UZ"
    ],
    "145": [
      "145",
      "AE",
      "AM",
      "AZ",
      "BH",
      "CY",
      "GE",
      "IL",
      "IQ",
      "JO",
      "KW",
      "LB",
      "OM",
      "PS",
      "QA",
      "SA",
      "SY",
      "TR",
      "YE"
    ],
    "150": [
      "039",
      "150",
      "151",
      "154",
      "155",
      "AD",
      "AL",
      "AT",
      "AX",
      "BA",
      "BE",
      "BG",
      "BY",
      "CH",
      "CQ",
      "CZ",
      "DE",
      "DK",
      "EE",
      "ES",
      "FI",
      "FO",
      "FR",
      "GB",
      "GG",
      "GI",
      "GR",
      "HR",
      "HU",
      "IE",
      "IM",
      "IS",
      "IT",
      "JE",
      "LI",
      "LT",
      "LU",
      "LV",
      "MC",
      "MD",
      "ME",
      "MK",
      "MT",
      "NL",
      "NO",
      "PL",
      "PT",
      "RO",
      "RS",
      "RU",
      "SE",
      "SI",
      "SJ",
      "SK",
      "SM",
      "UA",
      "VA",
      "XK"
    ],
    "151": [
      "151",
      "BG",
      "BY",
      "CZ",
      "HU",
      "MD",
      "PL",
      "RO",
      "RU",
      "SK",
      "UA"
    ],
    "154": [
      "154",
      "AX",
      "CQ",
      "DK",
      "EE",
      "FI",
      "FO",
      "GB",
      "GG",
      "IE",
      "IM",
      "IS",
      "JE",
      "LT",
      "LV",
      "NO",
      "SE",
      "SJ"
    ],
    "155": [
      "155",
      "AT",
      "BE",
      "CH",
      "DE",
      "FR",
      "LI",
      "LU",
      "MC",
      "NL"
    ],
    "202": [
      "011",
      "014",
      "017",
      "018",
      "202",
      "AO",
      "BF",
      "BI",
      "BJ",
      "BW",
      "CD",
      "CF",
      "CG",
      "CI",
      "CM",
      "CV",
      "DJ",
      "ER",
      "ET",
      "GA",
      "GH",
      "GM",
      "GN",
      "GQ",
      "GW",
      "IO",
      "KE",
      "KM",
      "LR",
      "LS",
      "MG",
      "ML",
      "MR",
      "MU",
      "MW",
      "MZ",
      "NA",
      "NE",
      "NG",
      "RE",
      "RW",
      "SC",
      "SH",
      "SL",
      "SN",
      "SO",
      "SS",
      "ST",
      "SZ",
      "TD",
      "TF",
      "TG",
      "TZ",
      "UG",
      "YT",
      "ZA",
      "ZM",
      "ZW"
    ],
    "419": [
      "005",
      "013",
      "029",
      "419",
      "AG",
      "AI",
      "AR",
      "AW",
      "BB",
      "BL",
      "BO",
      "BQ",
      "BR",
      "BS",
      "BV",
      "BZ",
      "CL",
      "CO",
      "CR",
      "CU",
      "CW",
      "DM",
      "DO",
      "EC",
      "FK",
      "GD",
      "GF",
      "GP",
      "GS",
      "GT",
      "GY",
      "HN",
      "HT",
      "JM",
      "KN",
      "KY",
      "LC",
      "MF",
      "MQ",
      "MS",
      "MX",
      "NI",
      "PA",
      "PE",
      "PR",
      "PY",
      "SR",
      "SV",
      "SX",
      "TC",
      "TT",
      "UY",
      "VC",
      "VE",
      "VG",
      "VI"
    ],
    "EU": [
      "AT",
      "BE",
      "BG",
      "CY",
      "CZ",
      "DE",
      "DK",
      "EE",
      "ES",
      "EU",
      "FI",
      "FR",
      "GR",
      "HR",
      "HU",
      "IE",
      "IT",
      "LT",
      "LU",
      "LV",
      "MT",
      "NL",
      "PL",
      "PT",
      "RO",
      "SE",
      "SI",
      "SK"
    ],
    "EZ": [
      "AT",
      "BE",
      "CY",
      "DE",
      "EE",
      "ES",
      "EZ",
      "FI",
      "FR",
      "GR",
      "IE",
      "IT",
      "LT",
      "LU",
      "LV",
      "MT",
      "NL",
      "PT",
      "SI",
      "SK"
    ],
    "QO": [
      "AC",
      "AQ",
      "CP",
      "DG",
      "QO",
      "TA"
    ],
    "UN": [
      "AD",
      "AE",
      "AF",
      "AG",
      "AL",
      "AM",
      "AO",
      "AR",
      "AT",
      "AU",
      "AZ",
      "BA",
      "BB",
      "BD",
      "BE",
      "BF",
      "BG",
      "BH",
      "BI",
      "BJ",
      "BN",
      "BO",
      "BR",
      "BS",
      "BT",
      "BW",
      "BY",
      "BZ",
      "CA",
      "CD",
      "CF",
      "CG",
      "CH",
      "CI",
      "CL",
      "CM",
      "CN",
      "CO",
      "CR",
      "CU",
      "CV",
      "CY",
      "CZ",
      "DE",
      "DJ",
      "DK",
      "DM",
      "DO",
      "DZ",
      "EC",
      "EE",
      "EG",
      "ER",
      "ES",
      "ET",
      "FI",
      "FJ",
      "FM",
      "FR",
      "GA",
      "GB",
      "GD",
      "GE",
      "GH",
      "GM",
      "GN",
      "GQ",
      "GR",
      "GT",
      "GW",
      "GY",
      "HN",
      "HR",
      "HT",
      "HU",
      "ID",
      "IE",
      "IL",
      "IN",
      "IQ",
      "IR",
      "IS",
      "IT",
      "JM",
      "JO",
      "JP",
      "KE",
      "KG",
      "KH",
      "KI",
      "KM",
      "KN",
      "KP",
      "KR",
      "KW",
      "KZ",
      "LA",
      "LB",
      "LC",
      "LI",
      "LK",
      "LR",
      "LS",
      "LT",
      "LU",
      "LV",
      "LY",
      "MA",
      "MC",
      "MD",
      "ME",
      "MG",
      "MH",
      "MK",
      "ML",
      "MM",
      "MN",
      "MR",
      "MT",
      "MU",
      "MV",
      "MW",
      "MX",
      "MY",
      "MZ",
      "NA",
      "NE",
      "NG",
      "NI",
      "NL",
      "NO",
      "NP",
      "NR",
      "NZ",
      "OM",
      "PA",
      "PE",
      "PG",
      "PH",
      "PK",
      "PL",
      "PT",
      "PW",
      "PY",
      "QA",
      "RO",
      "RS",
      "RU",
      "RW",
      "SA",
      "SB",
      "SC",
      "SD",
      "SE",
      "SG",
      "SI",
      "SK",
      "SL",
      "SM",
      "SN",
      "SO",
      "SR",
      "SS",
      "ST",
      "SV",
      "SY",
      "SZ",
      "TD",
      "TG",
      "TH",
      "TJ",
      "TL",
      "TM",
      "TN",
      "TO",
      "TR",
      "TT",
      "TV",
      "TZ",
      "UA",
      "UG",
      "UN",
      "US",
      "UY",
      "UZ",
      "VC",
      "VE",
      "VN",
      "VU",
      "WS",
      "YE",
      "ZA",
      "ZM",
      "ZW"
    ]
  };

  // node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js
  var UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
  function invariant2(condition, message, Err) {
    if (Err === void 0) {
      Err = Error;
    }
    if (!condition) {
      throw new Err(message);
    }
  }
  var DEFAULT_MATCHING_THRESHOLD = 838;
  var PROCESSED_DATA;
  function processData() {
    var _a, _b;
    if (!PROCESSED_DATA) {
      var paradigmLocales = (_b = (_a = data.supplemental.languageMatching["written-new"][0]) === null || _a === void 0 ? void 0 : _a.paradigmLocales) === null || _b === void 0 ? void 0 : _b._locales.split(" ");
      var matchVariables = data.supplemental.languageMatching["written-new"].slice(1, 5);
      var data2 = data.supplemental.languageMatching["written-new"].slice(5);
      var matches = data2.map(function(d) {
        var key = Object.keys(d)[0];
        var value = d[key];
        return {
          supported: key,
          desired: value._desired,
          distance: +value._distance,
          oneway: value.oneway === "true" ? true : false
        };
      }, {});
      PROCESSED_DATA = {
        matches,
        matchVariables: matchVariables.reduce(function(all, d) {
          var key = Object.keys(d)[0];
          var value = d[key];
          all[key.slice(1)] = value._value.split("+");
          return all;
        }, {}),
        paradigmLocales: __spreadArray(__spreadArray([], paradigmLocales, true), paradigmLocales.map(function(l) {
          return new Intl.Locale(l.replace(/_/g, "-")).maximize().toString();
        }), true)
      };
    }
    return PROCESSED_DATA;
  }
  function isMatched(locale, languageMatchInfoLocale, matchVariables) {
    var _a = languageMatchInfoLocale.split("-"), language = _a[0], script = _a[1], region = _a[2];
    var matches = true;
    if (region && region[0] === "$") {
      var shouldInclude = region[1] !== "!";
      var matchRegions = shouldInclude ? matchVariables[region.slice(1)] : matchVariables[region.slice(2)];
      var expandedMatchedRegions = matchRegions.map(function(r) {
        return regions[r] || [r];
      }).reduce(function(all, list) {
        return __spreadArray(__spreadArray([], all, true), list, true);
      }, []);
      matches && (matches = !(expandedMatchedRegions.indexOf(locale.region || "") > 1 != shouldInclude));
    } else {
      matches && (matches = locale.region ? region === "*" || region === locale.region : true);
    }
    matches && (matches = locale.script ? script === "*" || script === locale.script : true);
    matches && (matches = locale.language ? language === "*" || language === locale.language : true);
    return matches;
  }
  function serializeLSR(lsr) {
    return [lsr.language, lsr.script, lsr.region].filter(Boolean).join("-");
  }
  function findMatchingDistanceForLSR(desired, supported, data2) {
    for (var _i = 0, _a = data2.matches; _i < _a.length; _i++) {
      var d = _a[_i];
      var matches = isMatched(desired, d.desired, data2.matchVariables) && isMatched(supported, d.supported, data2.matchVariables);
      if (!d.oneway && !matches) {
        matches = isMatched(desired, d.supported, data2.matchVariables) && isMatched(supported, d.desired, data2.matchVariables);
      }
      if (matches) {
        var distance = d.distance * 10;
        if (data2.paradigmLocales.indexOf(serializeLSR(desired)) > -1 != data2.paradigmLocales.indexOf(serializeLSR(supported)) > -1) {
          return distance - 1;
        }
        return distance;
      }
    }
    throw new Error("No matching distance found");
  }
  function findMatchingDistance(desired, supported) {
    var desiredLocale = new Intl.Locale(desired).maximize();
    var supportedLocale = new Intl.Locale(supported).maximize();
    var desiredLSR = {
      language: desiredLocale.language,
      script: desiredLocale.script || "",
      region: desiredLocale.region || ""
    };
    var supportedLSR = {
      language: supportedLocale.language,
      script: supportedLocale.script || "",
      region: supportedLocale.region || ""
    };
    var matchingDistance = 0;
    var data2 = processData();
    if (desiredLSR.language !== supportedLSR.language) {
      matchingDistance += findMatchingDistanceForLSR({
        language: desiredLocale.language,
        script: "",
        region: ""
      }, {
        language: supportedLocale.language,
        script: "",
        region: ""
      }, data2);
    }
    if (desiredLSR.script !== supportedLSR.script) {
      matchingDistance += findMatchingDistanceForLSR({
        language: desiredLocale.language,
        script: desiredLSR.script,
        region: ""
      }, {
        language: supportedLocale.language,
        script: desiredLSR.script,
        region: ""
      }, data2);
    }
    if (desiredLSR.region !== supportedLSR.region) {
      matchingDistance += findMatchingDistanceForLSR(desiredLSR, supportedLSR, data2);
    }
    return matchingDistance;
  }
  function findBestMatch(requestedLocales, supportedLocales2, threshold) {
    if (threshold === void 0) {
      threshold = DEFAULT_MATCHING_THRESHOLD;
    }
    var lowestDistance = Infinity;
    var result = {
      matchedDesiredLocale: "",
      distances: {}
    };
    requestedLocales.forEach(function(desired, i) {
      if (!result.distances[desired]) {
        result.distances[desired] = {};
      }
      supportedLocales2.forEach(function(supported) {
        var distance = findMatchingDistance(desired, supported) + 0 + i * 40;
        result.distances[desired][supported] = distance;
        if (distance < lowestDistance) {
          lowestDistance = distance;
          result.matchedDesiredLocale = desired;
          result.matchedSupportedLocale = supported;
        }
      });
    });
    if (lowestDistance >= threshold) {
      result.matchedDesiredLocale = void 0;
      result.matchedSupportedLocale = void 0;
    }
    return result;
  }

  // node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/BestFitMatcher.js
  function BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale) {
    var foundLocale;
    var extension;
    var noExtensionLocales = [];
    var noExtensionLocaleMap = requestedLocales.reduce(function(all, l) {
      var noExtensionLocale = l.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
      noExtensionLocales.push(noExtensionLocale);
      all[noExtensionLocale] = l;
      return all;
    }, {});
    var result = findBestMatch(noExtensionLocales, availableLocales);
    if (result.matchedSupportedLocale && result.matchedDesiredLocale) {
      foundLocale = result.matchedSupportedLocale;
      extension = noExtensionLocaleMap[result.matchedDesiredLocale].slice(result.matchedDesiredLocale.length) || void 0;
    }
    if (!foundLocale) {
      return { locale: getDefaultLocale() };
    }
    return {
      locale: foundLocale,
      extension
    };
  }

  // node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/BestAvailableLocale.js
  function BestAvailableLocale(availableLocales, locale) {
    var candidate = locale;
    while (true) {
      if (availableLocales.indexOf(candidate) > -1) {
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

  // node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/LookupMatcher.js
  function LookupMatcher(availableLocales, requestedLocales, getDefaultLocale) {
    var result = { locale: "" };
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
      var locale = requestedLocales_1[_i];
      var noExtensionLocale = locale.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
      var availableLocale = BestAvailableLocale(availableLocales, noExtensionLocale);
      if (availableLocale) {
        result.locale = availableLocale;
        if (locale !== noExtensionLocale) {
          result.extension = locale.slice(noExtensionLocale.length, locale.length);
        }
        return result;
      }
    }
    result.locale = getDefaultLocale();
    return result;
  }

  // node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/UnicodeExtensionValue.js
  function UnicodeExtensionValue(extension, key) {
    invariant2(key.length === 2, "key must have 2 elements");
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

  // node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/ResolveLocale.js
  function ResolveLocale(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData, getDefaultLocale) {
    var matcher = options.localeMatcher;
    var r;
    if (matcher === "lookup") {
      r = LookupMatcher(Array.from(availableLocales), requestedLocales, getDefaultLocale);
    } else {
      r = BestFitMatcher(Array.from(availableLocales), requestedLocales, getDefaultLocale);
    }
    var foundLocale = r.locale;
    var result = { locale: "", dataLocale: foundLocale };
    var supportedExtension = "-u";
    for (var _i = 0, relevantExtensionKeys_1 = relevantExtensionKeys; _i < relevantExtensionKeys_1.length; _i++) {
      var key = relevantExtensionKeys_1[_i];
      invariant2(foundLocale in localeData, "Missing locale data for ".concat(foundLocale));
      var foundLocaleData = localeData[foundLocale];
      invariant2(typeof foundLocaleData === "object" && foundLocaleData !== null, "locale data ".concat(key, " must be an object"));
      var keyLocaleData = foundLocaleData[key];
      invariant2(Array.isArray(keyLocaleData), "keyLocaleData for ".concat(key, " must be an array"));
      var value = keyLocaleData[0];
      invariant2(typeof value === "string" || value === null, "value must be string or null but got ".concat(typeof value, " in key ").concat(key));
      var supportedExtensionAddition = "";
      if (r.extension) {
        var requestedValue = UnicodeExtensionValue(r.extension, key);
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
        invariant2(typeof optionsValue === "string" || typeof optionsValue === "undefined" || optionsValue === null, "optionsValue must be String, Undefined or Null");
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

  // node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/LookupSupportedLocales.js
  function LookupSupportedLocales(availableLocales, requestedLocales) {
    var subset = [];
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
      var locale = requestedLocales_1[_i];
      var noExtensionLocale = locale.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
      var availableLocale = BestAvailableLocale(availableLocales, noExtensionLocale);
      if (availableLocale) {
        subset.push(availableLocale);
      }
    }
    return subset;
  }

  // node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/index.js
  function match(requestedLocales, availableLocales, defaultLocale, opts) {
    return ResolveLocale(availableLocales, CanonicalizeLocaleList2(requestedLocales), {
      localeMatcher: (opts === null || opts === void 0 ? void 0 : opts.algorithm) || "best fit"
    }, [], {}, function() {
      return defaultLocale;
    }).locale;
  }

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/PartitionPattern.js
  function PartitionPattern(pattern) {
    var result = [];
    var beginIndex = pattern.indexOf("{");
    var endIndex = 0;
    var nextIndex = 0;
    var length = pattern.length;
    while (beginIndex < pattern.length && beginIndex > -1) {
      endIndex = pattern.indexOf("}", beginIndex);
      invariant(endIndex > beginIndex, "Invalid pattern ".concat(pattern));
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

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/SupportedLocales.js
  function SupportedLocales(availableLocales, requestedLocales, options) {
    var matcher = "best fit";
    if (options !== void 0) {
      options = ToObject(options);
      matcher = GetOption(options, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
    }
    if (matcher === "best fit") {
      return LookupSupportedLocales(Array.from(availableLocales), requestedLocales);
    }
    return LookupSupportedLocales(Array.from(availableLocales), requestedLocales);
  }

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/data.js
  var MissingLocaleDataError = (
    /** @class */
    function(_super) {
      __extends(MissingLocaleDataError2, _super);
      function MissingLocaleDataError2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "MISSING_LOCALE_DATA";
        return _this;
      }
      return MissingLocaleDataError2;
    }(Error)
  );

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/types/date-time.js
  var RangePatternType;
  (function(RangePatternType2) {
    RangePatternType2["startRange"] = "startRange";
    RangePatternType2["shared"] = "shared";
    RangePatternType2["endRange"] = "endRange";
  })(RangePatternType || (RangePatternType = {}));

  // packages/intl-datetimeformat/src/abstract/ToLocalTime.ts
  function getApplicableZoneData(t, timeZone, tzData) {
    const zoneData = tzData[timeZone];
    if (!zoneData) {
      return [0, false];
    }
    let i = 0;
    let offset = 0;
    let dst = false;
    for (; i <= zoneData.length; i++) {
      if (i === zoneData.length || zoneData[i][0] * 1e3 > t) {
        ;
        [, , offset, dst] = zoneData[i - 1];
        break;
      }
    }
    return [offset * 1e3, dst];
  }
  function ToLocalTime(t, calendar, timeZone, { tzData }) {
    invariant(Type(t) === "Number", "invalid time");
    invariant(
      calendar === "gregory",
      "We only support Gregory calendar right now"
    );
    const [timeZoneOffset, inDST] = getApplicableZoneData(t, timeZone, tzData);
    const tz = t + timeZoneOffset;
    const year = YearFromTime(tz);
    return {
      weekday: WeekDay(tz),
      era: year < 0 ? "BC" : "AD",
      year,
      relatedYear: void 0,
      yearName: void 0,
      month: MonthFromTime(tz),
      day: DateFromTime(tz),
      hour: HourFromTime(tz),
      minute: MinFromTime(tz),
      second: SecFromTime(tz),
      millisecond: msFromTime(tz),
      inDST,
      // IMPORTANT: Not in spec
      timeZoneOffset
    };
  }

  // packages/intl-datetimeformat/src/abstract/utils.ts
  var DATE_TIME_PROPS = [
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "dayPeriod",
    "hour",
    "minute",
    "second",
    "fractionalSecondDigits",
    "timeZoneName"
  ];
  var removalPenalty = 120;
  var additionPenalty = 20;
  var differentNumericTypePenalty = 15;
  var longLessPenalty = 8;
  var longMorePenalty = 6;
  var shortLessPenalty = 6;
  var shortMorePenalty = 3;
  var offsetPenalty = 1;

  // packages/intl-datetimeformat/src/abstract/FormatDateTimePattern.ts
  function pad(n) {
    if (n < 10) {
      return `0${n}`;
    }
    return String(n);
  }
  function offsetToGmtString(gmtFormat, hourFormat, offsetInMs, style) {
    const offsetInMinutes = Math.floor(offsetInMs / 6e4);
    const mins = Math.abs(offsetInMinutes) % 60;
    const hours = Math.floor(Math.abs(offsetInMinutes) / 60);
    const [positivePattern, negativePattern] = hourFormat.split(";");
    let offsetStr = "";
    let pattern = offsetInMs < 0 ? negativePattern : positivePattern;
    if (style === "long") {
      offsetStr = pattern.replace("HH", pad(hours)).replace("H", String(hours)).replace("mm", pad(mins)).replace("m", String(mins));
    } else if (mins || hours) {
      if (!mins) {
        pattern = pattern.replace(/:?m+/, "");
      }
      offsetStr = pattern.replace(/H+/, String(hours)).replace(/m+/, String(mins));
    }
    return gmtFormat.replace("{0}", offsetStr);
  }
  function FormatDateTimePattern(dtf, patternParts, x, {
    getInternalSlots: getInternalSlots2,
    localeData,
    getDefaultTimeZone,
    tzData
  }) {
    x = TimeClip(x);
    const internalSlots = getInternalSlots2(dtf);
    const dataLocale = internalSlots.dataLocale;
    const dataLocaleData = localeData[dataLocale];
    const locale = internalSlots.locale;
    const nfOptions = /* @__PURE__ */ Object.create(null);
    nfOptions.useGrouping = false;
    const nf = createMemoizedNumberFormat(locale, nfOptions);
    const nf2Options = /* @__PURE__ */ Object.create(null);
    nf2Options.minimumIntegerDigits = 2;
    nf2Options.useGrouping = false;
    const nf2 = createMemoizedNumberFormat(locale, nf2Options);
    const fractionalSecondDigits = internalSlots.fractionalSecondDigits;
    let nf3;
    if (fractionalSecondDigits !== void 0) {
      const nf3Options = /* @__PURE__ */ Object.create(null);
      nf3Options.minimumIntegerDigits = fractionalSecondDigits;
      nf3Options.useGrouping = false;
      nf3 = createMemoizedNumberFormat(locale, nf3Options);
    }
    const tm = ToLocalTime(
      x,
      // @ts-ignore
      internalSlots.calendar,
      internalSlots.timeZone,
      { tzData }
    );
    const result = [];
    for (const patternPart of patternParts) {
      const p = patternPart.type;
      if (p === "literal") {
        result.push({
          type: "literal",
          value: patternPart.value
        });
      } else if (p === "fractionalSecondDigits") {
        const v = Math.floor(
          tm.millisecond * __pow(10, (fractionalSecondDigits || 0) - 3)
        );
        result.push({
          type: "fractionalSecond",
          value: nf3.format(v)
        });
      } else if (p === "dayPeriod") {
        const f = internalSlots.dayPeriod;
        const fv = tm[f];
        result.push({ type: p, value: fv });
      } else if (p === "timeZoneName") {
        const f = internalSlots.timeZoneName;
        let fv;
        const { timeZoneName, gmtFormat, hourFormat } = dataLocaleData;
        const timeZone = internalSlots.timeZone || getDefaultTimeZone();
        const timeZoneData = timeZoneName[timeZone];
        if (timeZoneData && timeZoneData[f]) {
          fv = timeZoneData[f][+tm.inDST];
        } else {
          fv = offsetToGmtString(
            gmtFormat,
            hourFormat,
            tm.timeZoneOffset,
            f
          );
        }
        result.push({ type: p, value: fv });
      } else if (DATE_TIME_PROPS.indexOf(p) > -1) {
        let fv = "";
        const f = internalSlots[p];
        let v = tm[p];
        if (p === "year" && v <= 0) {
          v = 1 - v;
        }
        if (p === "month") {
          v++;
        }
        const hourCycle = internalSlots.hourCycle;
        if (p === "hour" && (hourCycle === "h11" || hourCycle === "h12")) {
          v = v % 12;
          if (v === 0 && hourCycle === "h12") {
            v = 12;
          }
        }
        if (p === "hour" && hourCycle === "h24") {
          if (v === 0) {
            v = 24;
          }
        }
        if (f === "numeric") {
          fv = nf.format(v);
        } else if (f === "2-digit") {
          fv = nf2.format(v);
          if (fv.length > 2) {
            fv = fv.slice(fv.length - 2, fv.length);
          }
        } else if (f === "narrow" || f === "short" || f === "long") {
          if (p === "era") {
            fv = dataLocaleData[p][f][v];
          } else if (p === "month") {
            fv = dataLocaleData.month[f][v - 1];
          } else {
            fv = dataLocaleData[p][f][v];
          }
        }
        result.push({
          type: p,
          value: fv
        });
      } else if (p === "ampm") {
        const v = tm.hour;
        let fv;
        if (v > 11) {
          fv = dataLocaleData.pm;
        } else {
          fv = dataLocaleData.am;
        }
        result.push({
          type: "dayPeriod",
          value: fv
        });
      } else if (p === "relatedYear") {
        const v = tm.relatedYear;
        const fv = nf.format(v);
        result.push({
          // @ts-ignore TODO: Fix TS type
          type: "relatedYear",
          value: fv
        });
      } else if (p === "yearName") {
        const v = tm.yearName;
        const fv = nf.format(v);
        result.push({
          // @ts-ignore TODO: Fix TS type
          type: "yearName",
          value: fv
        });
      }
    }
    return result;
  }

  // packages/intl-datetimeformat/src/abstract/PartitionDateTimePattern.ts
  function PartitionDateTimePattern(dtf, x, implDetails) {
    x = TimeClip(x);
    if (isNaN(x)) {
      throw new RangeError("invalid time");
    }
    const { getInternalSlots: getInternalSlots2 } = implDetails;
    const internalSlots = getInternalSlots2(dtf);
    const { pattern } = internalSlots;
    return FormatDateTimePattern(
      dtf,
      PartitionPattern(pattern),
      x,
      implDetails
    );
  }

  // packages/intl-datetimeformat/src/abstract/FormatDateTime.ts
  function FormatDateTime(dtf, x, implDetails) {
    const parts = PartitionDateTimePattern(dtf, x, implDetails);
    let result = "";
    for (const part of parts) {
      result += part.value;
    }
    return result;
  }

  // packages/intl-datetimeformat/src/abstract/PartitionDateTimeRangePattern.ts
  var TABLE_2_FIELDS = [
    "era",
    "year",
    "month",
    "day",
    "dayPeriod",
    "ampm",
    "hour",
    "minute",
    "second",
    "fractionalSecondDigits"
  ];
  function PartitionDateTimeRangePattern(dtf, x, y, implDetails) {
    x = TimeClip(x);
    if (isNaN(x)) {
      throw new RangeError("Invalid start time");
    }
    y = TimeClip(y);
    if (isNaN(y)) {
      throw new RangeError("Invalid end time");
    }
    const { getInternalSlots: getInternalSlots2, tzData } = implDetails;
    const internalSlots = getInternalSlots2(dtf);
    const tm1 = ToLocalTime(
      x,
      // @ts-ignore
      internalSlots.calendar,
      internalSlots.timeZone,
      { tzData }
    );
    const tm2 = ToLocalTime(
      y,
      // @ts-ignore
      internalSlots.calendar,
      internalSlots.timeZone,
      { tzData }
    );
    const { pattern, rangePatterns } = internalSlots;
    let rangePattern;
    let dateFieldsPracticallyEqual = true;
    let patternContainsLargerDateField = false;
    for (const fieldName of TABLE_2_FIELDS) {
      if (dateFieldsPracticallyEqual && !patternContainsLargerDateField) {
        let rp = fieldName in rangePatterns ? rangePatterns[fieldName] : void 0;
        if (rangePattern !== void 0 && rp === void 0) {
          patternContainsLargerDateField = true;
        } else {
          rangePattern = rp;
          if (fieldName === "ampm") {
            let v1 = tm1.hour;
            let v2 = tm2.hour;
            if (v1 > 11 && v2 < 11 || v1 < 11 && v2 > 11) {
              dateFieldsPracticallyEqual = false;
            }
          } else if (fieldName === "dayPeriod") {
          } else if (fieldName === "fractionalSecondDigits") {
            let fractionalSecondDigits = internalSlots.fractionalSecondDigits;
            if (fractionalSecondDigits === void 0) {
              fractionalSecondDigits = 3;
            }
            let v1 = Math.floor(
              tm1.millisecond * __pow(10, fractionalSecondDigits - 3)
            );
            let v2 = Math.floor(
              tm2.millisecond * __pow(10, fractionalSecondDigits - 3)
            );
            if (!SameValue(v1, v2)) {
              dateFieldsPracticallyEqual = false;
            }
          } else {
            let v1 = tm1[fieldName];
            let v2 = tm2[fieldName];
            if (!SameValue(v1, v2)) {
              dateFieldsPracticallyEqual = false;
            }
          }
        }
      }
    }
    if (dateFieldsPracticallyEqual) {
      let result2 = FormatDateTimePattern(
        dtf,
        PartitionPattern(pattern),
        x,
        implDetails
      );
      for (const r of result2) {
        r.source = RangePatternType.shared;
      }
      return result2;
    }
    let result = [];
    if (rangePattern === void 0) {
      rangePattern = rangePatterns.default;
      for (const patternPart of rangePattern.patternParts) {
        if (patternPart.pattern === "{0}" || patternPart.pattern === "{1}") {
          patternPart.pattern = pattern;
        }
      }
    }
    for (const rangePatternPart of rangePattern.patternParts) {
      const { source, pattern: pattern2 } = rangePatternPart;
      let z;
      if (source === RangePatternType.startRange || source === RangePatternType.shared) {
        z = x;
      } else {
        z = y;
      }
      const patternParts = PartitionPattern(pattern2);
      let partResult = FormatDateTimePattern(dtf, patternParts, z, implDetails);
      for (const r of partResult) {
        r.source = source;
      }
      result = result.concat(partResult);
    }
    return result;
  }

  // packages/intl-datetimeformat/src/abstract/FormatDateTimeRange.ts
  function FormatDateTimeRange(dtf, x, y, implDetails) {
    const parts = PartitionDateTimeRangePattern(dtf, x, y, implDetails);
    let result = "";
    for (const part of parts) {
      result += part.value;
    }
    return result;
  }

  // packages/intl-datetimeformat/src/abstract/FormatDateTimeRangeToParts.ts
  function FormatDateTimeRangeToParts(dtf, x, y, implDetails) {
    const parts = PartitionDateTimeRangePattern(dtf, x, y, implDetails);
    const result = new Array(0);
    for (const part of parts) {
      result.push({
        type: part.type,
        value: part.value,
        source: part.source
      });
    }
    return result;
  }

  // packages/intl-datetimeformat/src/abstract/FormatDateTimeToParts.ts
  function FormatDateTimeToParts(dtf, x, implDetails) {
    const parts = PartitionDateTimePattern(dtf, x, implDetails);
    const result = ArrayCreate(0);
    for (const part of parts) {
      result.push({
        type: part.type,
        value: part.value
      });
    }
    return result;
  }

  // packages/intl-datetimeformat/src/abstract/BasicFormatMatcher.ts
  function BasicFormatMatcher(options, formats) {
    let bestScore = -Infinity;
    let bestFormat = formats[0];
    invariant(Array.isArray(formats), "formats should be a list of things");
    for (const format of formats) {
      let score = 0;
      for (const prop of DATE_TIME_PROPS) {
        const optionsProp = options[prop];
        const formatProp = format[prop];
        if (optionsProp === void 0 && formatProp !== void 0) {
          score -= additionPenalty;
        } else if (optionsProp !== void 0 && formatProp === void 0) {
          score -= removalPenalty;
        } else if (prop === "timeZoneName") {
          if (optionsProp === "short" || optionsProp === "shortGeneric") {
            if (formatProp === "shortOffset") {
              score -= offsetPenalty;
            } else if (formatProp === "longOffset") {
              score -= offsetPenalty + shortMorePenalty;
            } else if (optionsProp === "short" && formatProp === "long") {
              score -= shortMorePenalty;
            } else if (optionsProp === "shortGeneric" && formatProp === "longGeneric") {
              score -= shortMorePenalty;
            } else if (optionsProp !== formatProp) {
              score -= removalPenalty;
            }
          } else if (optionsProp === "shortOffset" && formatProp === "longOffset") {
            score -= shortMorePenalty;
          } else if (optionsProp === "long" || optionsProp === "longGeneric") {
            if (formatProp === "longOffset") {
              score -= offsetPenalty;
            } else if (formatProp === "shortOffset") {
              score -= offsetPenalty + longLessPenalty;
            } else if (optionsProp === "long" && formatProp === "short") {
              score -= longLessPenalty;
            } else if (optionsProp === "longGeneric" && formatProp === "shortGeneric") {
              score -= longLessPenalty;
            } else if (optionsProp !== formatProp) {
              score -= removalPenalty;
            }
          } else if (optionsProp === "longOffset" && formatProp === "shortOffset") {
            score -= longLessPenalty;
          } else if (optionsProp !== formatProp) {
            score -= removalPenalty;
          }
        } else if (optionsProp !== formatProp) {
          let values;
          if (prop === "fractionalSecondDigits") {
            values = [1, 2, 3];
          } else {
            values = ["2-digit", "numeric", "narrow", "short", "long"];
          }
          const optionsPropIndex = values.indexOf(optionsProp);
          const formatPropIndex = values.indexOf(formatProp);
          const delta = Math.max(
            -2,
            Math.min(formatPropIndex - optionsPropIndex, 2)
          );
          if (delta === 2) {
            score -= longMorePenalty;
          } else if (delta === 1) {
            score -= shortMorePenalty;
          } else if (delta === -1) {
            score -= shortLessPenalty;
          } else if (delta === -2) {
            score -= longLessPenalty;
          }
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestFormat = format;
      }
    }
    return __spreadValues({}, bestFormat);
  }

  // packages/intl-datetimeformat/src/abstract/skeleton.ts
  var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
  var expPatternTrimmer = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function matchSkeletonPattern(match2, result) {
    const len = match2.length;
    switch (match2[0]) {
      case "G":
        result.era = len === 4 ? "long" : len === 5 ? "narrow" : "short";
        return "{era}";
      case "y":
      case "Y":
      case "u":
      case "U":
      case "r":
        result.year = len === 2 ? "2-digit" : "numeric";
        return "{year}";
      case "q":
      case "Q":
        throw new RangeError("`w/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        result.month = ["numeric", "2-digit", "short", "long", "narrow"][len - 1];
        return "{month}";
      case "w":
      case "W":
        throw new RangeError("`w/W` (week of year) patterns are not supported");
      case "d":
        result.day = ["numeric", "2-digit"][len - 1];
        return "{day}";
      case "D":
      case "F":
      case "g":
        result.day = "numeric";
        return "{day}";
      case "E":
        result.weekday = len === 4 ? "long" : len === 5 ? "narrow" : "short";
        return "{weekday}";
      case "e":
        result.weekday = [
          void 0,
          void 0,
          "short",
          "long",
          "narrow",
          "short"
        ][len - 1];
        return "{weekday}";
      case "c":
        result.weekday = [
          void 0,
          void 0,
          "short",
          "long",
          "narrow",
          "short"
        ][len - 1];
        return "{weekday}";
      case "a":
      case "b":
      case "B":
        result.hour12 = true;
        return "{ampm}";
      case "h":
        result.hour = ["numeric", "2-digit"][len - 1];
        result.hour12 = true;
        return "{hour}";
      case "H":
        result.hour = ["numeric", "2-digit"][len - 1];
        return "{hour}";
      case "K":
        result.hour = ["numeric", "2-digit"][len - 1];
        result.hour12 = true;
        return "{hour}";
      case "k":
        result.hour = ["numeric", "2-digit"][len - 1];
        return "{hour}";
      case "j":
      case "J":
      case "C":
        throw new RangeError(
          "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead"
        );
      case "m":
        result.minute = ["numeric", "2-digit"][len - 1];
        return "{minute}";
      case "s":
        result.second = ["numeric", "2-digit"][len - 1];
        return "{second}";
      case "S":
      case "A":
        result.second = "numeric";
        return "{second}";
      case "z":
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        result.timeZoneName = len < 4 ? "short" : "long";
        return "{timeZoneName}";
    }
    return "";
  }
  function skeletonTokenToTable2(c) {
    switch (c) {
      case "G":
        return "era";
      case "y":
      case "Y":
      case "u":
      case "U":
      case "r":
        return "year";
      case "M":
      case "L":
        return "month";
      case "d":
      case "D":
      case "F":
      case "g":
        return "day";
      case "a":
      case "b":
      case "B":
        return "ampm";
      case "h":
      case "H":
      case "K":
      case "k":
        return "hour";
      case "m":
        return "minute";
      case "s":
      case "S":
      case "A":
        return "second";
      default:
        throw new RangeError("Invalid range pattern token");
    }
  }
  function processDateTimePattern(pattern, result) {
    const literals = [];
    let pattern12 = pattern.replace(/'{2}/g, "{apostrophe}").replace(/'(.*?)'/g, (_, literal) => {
      literals.push(literal);
      return `$$${literals.length - 1}$$`;
    }).replace(DATE_TIME_REGEX, (m) => matchSkeletonPattern(m, result || {}));
    if (literals.length) {
      pattern12 = pattern12.replace(/\$\$(\d+)\$\$/g, (_, i) => {
        return literals[+i];
      }).replace(/\{apostrophe\}/g, "'");
    }
    return [
      pattern12.replace(/([\s\uFEFF\xA0])\{ampm\}([\s\uFEFF\xA0])/, "$1").replace("{ampm}", "").replace(expPatternTrimmer, ""),
      pattern12
    ];
  }
  function parseDateTimeSkeleton(skeleton, rawPattern = skeleton, rangePatterns, intervalFormatFallback) {
    const result = {
      pattern: "",
      pattern12: "",
      skeleton,
      rawPattern,
      rangePatterns: {},
      rangePatterns12: {}
    };
    if (rangePatterns) {
      for (const k in rangePatterns) {
        const key = skeletonTokenToTable2(k);
        const rawPattern2 = rangePatterns[k];
        const intervalResult = {
          patternParts: []
        };
        const [pattern2, pattern122] = processDateTimePattern(
          rawPattern2,
          intervalResult
        );
        result.rangePatterns[key] = __spreadProps(__spreadValues({}, intervalResult), {
          patternParts: splitRangePattern(pattern2)
        });
        result.rangePatterns12[key] = __spreadProps(__spreadValues({}, intervalResult), {
          patternParts: splitRangePattern(pattern122)
        });
      }
    }
    if (intervalFormatFallback) {
      const patternParts = splitFallbackRangePattern(intervalFormatFallback);
      result.rangePatterns.default = {
        patternParts
      };
      result.rangePatterns12.default = {
        patternParts
      };
    }
    skeleton.replace(DATE_TIME_REGEX, (m) => matchSkeletonPattern(m, result));
    const [pattern, pattern12] = processDateTimePattern(rawPattern);
    result.pattern = pattern;
    result.pattern12 = pattern12;
    return result;
  }
  function splitFallbackRangePattern(pattern) {
    const parts = pattern.split(/(\{[0|1]\})/g).filter(Boolean);
    return parts.map((pattern2) => {
      switch (pattern2) {
        case "{0}":
          return {
            source: RangePatternType.startRange,
            pattern: pattern2
          };
        case "{1}":
          return {
            source: RangePatternType.endRange,
            pattern: pattern2
          };
        default:
          return {
            source: RangePatternType.shared,
            pattern: pattern2
          };
      }
    });
  }
  function splitRangePattern(pattern) {
    const PART_REGEX = /\{(.*?)\}/g;
    const parts = {};
    let match2;
    let splitIndex = 0;
    while (match2 = PART_REGEX.exec(pattern)) {
      if (!(match2[0] in parts)) {
        parts[match2[0]] = match2.index;
      } else {
        splitIndex = match2.index;
        break;
      }
    }
    if (!splitIndex) {
      return [
        {
          source: RangePatternType.startRange,
          pattern
        }
      ];
    }
    return [
      {
        source: RangePatternType.startRange,
        pattern: pattern.slice(0, splitIndex)
      },
      {
        source: RangePatternType.endRange,
        pattern: pattern.slice(splitIndex)
      }
    ];
  }

  // packages/intl-datetimeformat/src/abstract/BestFitFormatMatcher.ts
  function isNumericType(t) {
    return t === "numeric" || t === "2-digit";
  }
  function bestFitFormatMatcherScore(options, format) {
    let score = 0;
    if (options.hour12 && !format.hour12) {
      score -= removalPenalty;
    } else if (!options.hour12 && format.hour12) {
      score -= additionPenalty;
    }
    for (const prop of DATE_TIME_PROPS) {
      const optionsProp = options[prop];
      const formatProp = format[prop];
      if (optionsProp === void 0 && formatProp !== void 0) {
        score -= additionPenalty;
      } else if (optionsProp !== void 0 && formatProp === void 0) {
        score -= removalPenalty;
      } else if (optionsProp !== formatProp) {
        if (isNumericType(optionsProp) !== isNumericType(formatProp)) {
          score -= differentNumericTypePenalty;
        } else {
          const values = ["2-digit", "numeric", "narrow", "short", "long"];
          const optionsPropIndex = values.indexOf(optionsProp);
          const formatPropIndex = values.indexOf(formatProp);
          const delta = Math.max(
            -2,
            Math.min(formatPropIndex - optionsPropIndex, 2)
          );
          if (delta === 2) {
            score -= longMorePenalty;
          } else if (delta === 1) {
            score -= shortMorePenalty;
          } else if (delta === -1) {
            score -= shortLessPenalty;
          } else if (delta === -2) {
            score -= longLessPenalty;
          }
        }
      }
    }
    return score;
  }
  function BestFitFormatMatcher(options, formats) {
    let bestScore = -Infinity;
    let bestFormat = formats[0];
    invariant(Array.isArray(formats), "formats should be a list of things");
    for (const format of formats) {
      const score = bestFitFormatMatcherScore(options, format);
      if (score > bestScore) {
        bestScore = score;
        bestFormat = format;
      }
    }
    const skeletonFormat = __spreadValues({}, bestFormat);
    const patternFormat = { rawPattern: bestFormat.rawPattern };
    processDateTimePattern(bestFormat.rawPattern, patternFormat);
    for (const prop in skeletonFormat) {
      const skeletonValue = skeletonFormat[prop];
      const patternValue = patternFormat[prop];
      const requestedValue = options[prop];
      if (prop === "minute" || prop === "second") {
        continue;
      }
      if (!requestedValue) {
        continue;
      }
      if (isNumericType(patternValue) && !isNumericType(requestedValue)) {
        continue;
      }
      if (skeletonValue === requestedValue) {
        continue;
      }
      patternFormat[prop] = requestedValue;
    }
    patternFormat.pattern = skeletonFormat.pattern;
    patternFormat.pattern12 = skeletonFormat.pattern12;
    patternFormat.skeleton = skeletonFormat.skeleton;
    patternFormat.rangePatterns = skeletonFormat.rangePatterns;
    patternFormat.rangePatterns12 = skeletonFormat.rangePatterns12;
    return patternFormat;
  }

  // packages/intl-datetimeformat/src/abstract/DateTimeStyleFormat.ts
  function DateTimeStyleFormat(dateStyle, timeStyle, dataLocaleData) {
    let dateFormat, timeFormat;
    if (timeStyle !== void 0) {
      invariant(
        timeStyle === "full" || timeStyle === "long" || timeStyle === "medium" || timeStyle === "short",
        "invalid timeStyle"
      );
      timeFormat = dataLocaleData.timeFormat[timeStyle];
    }
    if (dateStyle !== void 0) {
      invariant(
        dateStyle === "full" || dateStyle === "long" || dateStyle === "medium" || dateStyle === "short",
        "invalid dateStyle"
      );
      dateFormat = dataLocaleData.dateFormat[dateStyle];
    }
    if (dateStyle !== void 0 && timeStyle !== void 0) {
      const format = {};
      for (const field in dateFormat) {
        if (field !== "pattern") {
          format[field] = dateFormat[field];
        }
      }
      for (const field in timeFormat) {
        if (field !== "pattern" && field !== "pattern12") {
          format[field] = timeFormat[field];
        }
      }
      const connector = dataLocaleData.dateTimeFormat[dateStyle];
      const pattern = connector.replace("{0}", timeFormat.pattern).replace("{1}", dateFormat.pattern);
      format.pattern = pattern;
      if ("pattern12" in timeFormat) {
        const pattern12 = connector.replace("{0}", timeFormat.pattern12).replace("{1}", dateFormat.pattern);
        format.pattern12 = pattern12;
      }
      return format;
    }
    if (timeStyle !== void 0) {
      return timeFormat;
    }
    invariant(dateStyle !== void 0, "dateStyle should not be undefined");
    return dateFormat;
  }

  // packages/intl-datetimeformat/src/abstract/ToDateTimeOptions.ts
  function ToDateTimeOptions(options, required, defaults) {
    if (options === void 0) {
      options = null;
    } else {
      options = ToObject(options);
    }
    options = Object.create(options);
    let needDefaults = true;
    if (required === "date" || required === "any") {
      for (const prop of ["weekday", "year", "month", "day"]) {
        const value = options[prop];
        if (value !== void 0) {
          needDefaults = false;
        }
      }
    }
    if (required === "time" || required === "any") {
      for (const prop of [
        "dayPeriod",
        "hour",
        "minute",
        "second",
        "fractionalSecondDigits"
      ]) {
        const value = options[prop];
        if (value !== void 0) {
          needDefaults = false;
        }
      }
    }
    if (options.dateStyle !== void 0 || options.timeStyle !== void 0) {
      needDefaults = false;
    }
    if (required === "date" && options.timeStyle) {
      throw new TypeError(
        "Intl.DateTimeFormat date was required but timeStyle was included"
      );
    }
    if (required === "time" && options.dateStyle) {
      throw new TypeError(
        "Intl.DateTimeFormat time was required but dateStyle was included"
      );
    }
    if (needDefaults && (defaults === "date" || defaults === "all")) {
      for (const prop of ["year", "month", "day"]) {
        options[prop] = "numeric";
      }
    }
    if (needDefaults && (defaults === "time" || defaults === "all")) {
      for (const prop of ["hour", "minute", "second"]) {
        options[prop] = "numeric";
      }
    }
    return options;
  }

  // packages/intl-datetimeformat/src/abstract/InitializeDateTimeFormat.ts
  function isTimeRelated(opt) {
    for (const prop of ["hour", "minute", "second"]) {
      const value = opt[prop];
      if (value !== void 0) {
        return true;
      }
    }
    return false;
  }
  function resolveHourCycle(hc, hcDefault, hour12) {
    if (hc == null) {
      hc = hcDefault;
    }
    if (hour12 !== void 0) {
      if (hour12) {
        if (hcDefault === "h11" || hcDefault === "h23") {
          hc = "h11";
        } else {
          hc = "h12";
        }
      } else {
        invariant(!hour12, "hour12 must not be set");
        if (hcDefault === "h11" || hcDefault === "h23") {
          hc = "h23";
        } else {
          hc = "h24";
        }
      }
    }
    return hc;
  }
  var TYPE_REGEX = /^[a-z0-9]{3,8}$/i;
  function InitializeDateTimeFormat(dtf, locales, opts, {
    getInternalSlots: getInternalSlots2,
    availableLocales,
    localeData,
    getDefaultLocale,
    getDefaultTimeZone,
    relevantExtensionKeys,
    tzData,
    uppercaseLinks
  }) {
    const requestedLocales = CanonicalizeLocaleList(locales);
    const options = ToDateTimeOptions(opts, "any", "date");
    let opt = /* @__PURE__ */ Object.create(null);
    let matcher = GetOption(
      options,
      "localeMatcher",
      "string",
      ["lookup", "best fit"],
      "best fit"
    );
    opt.localeMatcher = matcher;
    let calendar = GetOption(options, "calendar", "string", void 0, void 0);
    if (calendar !== void 0 && !TYPE_REGEX.test(calendar)) {
      throw new RangeError("Malformed calendar");
    }
    const internalSlots = getInternalSlots2(dtf);
    opt.ca = calendar;
    const numberingSystem = GetOption(
      options,
      "numberingSystem",
      "string",
      void 0,
      void 0
    );
    if (numberingSystem !== void 0 && !TYPE_REGEX.test(numberingSystem)) {
      throw new RangeError("Malformed numbering system");
    }
    opt.nu = numberingSystem;
    const hour12 = GetOption(options, "hour12", "boolean", void 0, void 0);
    let hourCycle = GetOption(
      options,
      "hourCycle",
      "string",
      ["h11", "h12", "h23", "h24"],
      void 0
    );
    if (hour12 !== void 0) {
      hourCycle = null;
    }
    opt.hc = hourCycle;
    const r = ResolveLocale(
      availableLocales,
      requestedLocales,
      opt,
      relevantExtensionKeys,
      localeData,
      getDefaultLocale
    );
    internalSlots.locale = r.locale;
    calendar = r.ca;
    internalSlots.calendar = calendar;
    internalSlots.hourCycle = r.hc;
    internalSlots.numberingSystem = r.nu;
    const { dataLocale } = r;
    internalSlots.dataLocale = dataLocale;
    let { timeZone } = options;
    if (timeZone !== void 0) {
      timeZone = String(timeZone);
      if (!IsValidTimeZoneName(timeZone, {
        zoneNamesFromData: Object.keys(tzData),
        uppercaseLinks
      })) {
        throw new RangeError("Invalid timeZoneName");
      }
      timeZone = CanonicalizeTimeZoneName(timeZone, {
        zoneNames: Object.keys(tzData),
        uppercaseLinks
      });
    } else {
      timeZone = getDefaultTimeZone();
    }
    internalSlots.timeZone = timeZone;
    opt = /* @__PURE__ */ Object.create(null);
    opt.weekday = GetOption(
      options,
      "weekday",
      "string",
      ["narrow", "short", "long"],
      void 0
    );
    opt.era = GetOption(
      options,
      "era",
      "string",
      ["narrow", "short", "long"],
      void 0
    );
    opt.year = GetOption(
      options,
      "year",
      "string",
      ["2-digit", "numeric"],
      void 0
    );
    opt.month = GetOption(
      options,
      "month",
      "string",
      ["2-digit", "numeric", "narrow", "short", "long"],
      void 0
    );
    opt.day = GetOption(
      options,
      "day",
      "string",
      ["2-digit", "numeric"],
      void 0
    );
    opt.hour = GetOption(
      options,
      "hour",
      "string",
      ["2-digit", "numeric"],
      void 0
    );
    opt.minute = GetOption(
      options,
      "minute",
      "string",
      ["2-digit", "numeric"],
      void 0
    );
    opt.second = GetOption(
      options,
      "second",
      "string",
      ["2-digit", "numeric"],
      void 0
    );
    opt.timeZoneName = GetOption(
      options,
      "timeZoneName",
      "string",
      [
        "long",
        "short",
        "longOffset",
        "shortOffset",
        "longGeneric",
        "shortGeneric"
      ],
      void 0
    );
    opt.fractionalSecondDigits = GetNumberOption(
      options,
      "fractionalSecondDigits",
      1,
      3,
      void 0
    );
    const dataLocaleData = localeData[dataLocale];
    invariant(!!dataLocaleData, `Missing locale data for ${dataLocale}`);
    const formats = dataLocaleData.formats[calendar];
    if (!formats) {
      throw new RangeError(
        `Calendar "${calendar}" is not supported. Try setting "calendar" to 1 of the following: ${Object.keys(
          dataLocaleData.formats
        ).join(", ")}`
      );
    }
    const formatMatcher = GetOption(
      options,
      "formatMatcher",
      "string",
      ["basic", "best fit"],
      "best fit"
    );
    const dateStyle = GetOption(
      options,
      "dateStyle",
      "string",
      ["full", "long", "medium", "short"],
      void 0
    );
    internalSlots.dateStyle = dateStyle;
    const timeStyle = GetOption(
      options,
      "timeStyle",
      "string",
      ["full", "long", "medium", "short"],
      void 0
    );
    internalSlots.timeStyle = timeStyle;
    let bestFormat;
    if (dateStyle === void 0 && timeStyle === void 0) {
      if (formatMatcher === "basic") {
        bestFormat = BasicFormatMatcher(opt, formats);
      } else {
        if (isTimeRelated(opt)) {
          const hc = resolveHourCycle(
            internalSlots.hourCycle,
            dataLocaleData.hourCycle,
            hour12
          );
          opt.hour12 = hc === "h11" || hc === "h12";
        }
        bestFormat = BestFitFormatMatcher(opt, formats);
      }
    } else {
      for (const prop of DATE_TIME_PROPS) {
        const p = opt[prop];
        if (p !== void 0) {
          throw new TypeError(
            `Intl.DateTimeFormat can't set option ${prop} when ${dateStyle ? "dateStyle" : "timeStyle"} is used`
          );
        }
      }
      bestFormat = DateTimeStyleFormat(dateStyle, timeStyle, dataLocaleData);
    }
    internalSlots.format = bestFormat;
    for (const prop in opt) {
      const p = bestFormat[prop];
      if (p !== void 0) {
        internalSlots[prop] = p;
      }
    }
    let pattern;
    let rangePatterns;
    if (internalSlots.hour !== void 0) {
      const hc = resolveHourCycle(
        internalSlots.hourCycle,
        dataLocaleData.hourCycle,
        hour12
      );
      internalSlots.hourCycle = hc;
      if (hc === "h11" || hc === "h12") {
        pattern = bestFormat.pattern12;
        rangePatterns = bestFormat.rangePatterns12;
      } else {
        pattern = bestFormat.pattern;
        rangePatterns = bestFormat.rangePatterns;
      }
    } else {
      internalSlots.hourCycle = void 0;
      pattern = bestFormat.pattern;
      rangePatterns = bestFormat.rangePatterns;
    }
    internalSlots.pattern = pattern;
    internalSlots.rangePatterns = rangePatterns;
    return dtf;
  }

  // packages/intl-datetimeformat/src/data/links.ts
  var links_default = {
    "Africa/Accra": "Africa/Abidjan",
    "Africa/Addis_Ababa": "Africa/Nairobi",
    "Africa/Asmara": "Africa/Nairobi",
    "Africa/Asmera": "Africa/Nairobi",
    "Africa/Bamako": "Africa/Abidjan",
    "Africa/Bangui": "Africa/Lagos",
    "Africa/Banjul": "Africa/Abidjan",
    "Africa/Blantyre": "Africa/Maputo",
    "Africa/Brazzaville": "Africa/Lagos",
    "Africa/Bujumbura": "Africa/Maputo",
    "Africa/Conakry": "Africa/Abidjan",
    "Africa/Dakar": "Africa/Abidjan",
    "Africa/Dar_es_Salaam": "Africa/Nairobi",
    "Africa/Djibouti": "Africa/Nairobi",
    "Africa/Douala": "Africa/Lagos",
    "Africa/Freetown": "Africa/Abidjan",
    "Africa/Gaborone": "Africa/Maputo",
    "Africa/Harare": "Africa/Maputo",
    "Africa/Kampala": "Africa/Nairobi",
    "Africa/Kigali": "Africa/Maputo",
    "Africa/Kinshasa": "Africa/Lagos",
    "Africa/Libreville": "Africa/Lagos",
    "Africa/Lome": "Africa/Abidjan",
    "Africa/Luanda": "Africa/Lagos",
    "Africa/Lubumbashi": "Africa/Maputo",
    "Africa/Lusaka": "Africa/Maputo",
    "Africa/Malabo": "Africa/Lagos",
    "Africa/Maseru": "Africa/Johannesburg",
    "Africa/Mbabane": "Africa/Johannesburg",
    "Africa/Mogadishu": "Africa/Nairobi",
    "Africa/Niamey": "Africa/Lagos",
    "Africa/Nouakchott": "Africa/Abidjan",
    "Africa/Ouagadougou": "Africa/Abidjan",
    "Africa/Porto-Novo": "Africa/Lagos",
    "Africa/Timbuktu": "Africa/Abidjan",
    "America/Anguilla": "America/Puerto_Rico",
    "America/Antigua": "America/Puerto_Rico",
    "America/Argentina/ComodRivadavia": "America/Argentina/Catamarca",
    "America/Aruba": "America/Puerto_Rico",
    "America/Atikokan": "America/Panama",
    "America/Atka": "America/Adak",
    "America/Blanc-Sablon": "America/Puerto_Rico",
    "America/Buenos_Aires": "America/Argentina/Buenos_Aires",
    "America/Catamarca": "America/Argentina/Catamarca",
    "America/Cayman": "America/Panama",
    "America/Coral_Harbour": "America/Panama",
    "America/Cordoba": "America/Argentina/Cordoba",
    "America/Creston": "America/Phoenix",
    "America/Curacao": "America/Puerto_Rico",
    "America/Dominica": "America/Puerto_Rico",
    "America/Ensenada": "America/Tijuana",
    "America/Fort_Wayne": "America/Indiana/Indianapolis",
    "America/Godthab": "America/Nuuk",
    "America/Grenada": "America/Puerto_Rico",
    "America/Guadeloupe": "America/Puerto_Rico",
    "America/Indianapolis": "America/Indiana/Indianapolis",
    "America/Jujuy": "America/Argentina/Jujuy",
    "America/Knox_IN": "America/Indiana/Knox",
    "America/Kralendijk": "America/Puerto_Rico",
    "America/Louisville": "America/Kentucky/Louisville",
    "America/Lower_Princes": "America/Puerto_Rico",
    "America/Marigot": "America/Puerto_Rico",
    "America/Mendoza": "America/Argentina/Mendoza",
    "America/Montreal": "America/Toronto",
    "America/Montserrat": "America/Puerto_Rico",
    "America/Nassau": "America/Toronto",
    "America/Nipigon": "America/Toronto",
    "America/Pangnirtung": "America/Iqaluit",
    "America/Port_of_Spain": "America/Puerto_Rico",
    "America/Porto_Acre": "America/Rio_Branco",
    "America/Rainy_River": "America/Winnipeg",
    "America/Rosario": "America/Argentina/Cordoba",
    "America/Santa_Isabel": "America/Tijuana",
    "America/Shiprock": "America/Denver",
    "America/St_Barthelemy": "America/Puerto_Rico",
    "America/St_Kitts": "America/Puerto_Rico",
    "America/St_Lucia": "America/Puerto_Rico",
    "America/St_Thomas": "America/Puerto_Rico",
    "America/St_Vincent": "America/Puerto_Rico",
    "America/Thunder_Bay": "America/Toronto",
    "America/Tortola": "America/Puerto_Rico",
    "America/Virgin": "America/Puerto_Rico",
    "America/Yellowknife": "America/Edmonton",
    "Antarctica/DumontDUrville": "Pacific/Port_Moresby",
    "Antarctica/McMurdo": "Pacific/Auckland",
    "Antarctica/South_Pole": "Pacific/Auckland",
    "Antarctica/Syowa": "Asia/Riyadh",
    "Arctic/Longyearbyen": "Europe/Berlin",
    "Asia/Aden": "Asia/Riyadh",
    "Asia/Ashkhabad": "Asia/Ashgabat",
    "Asia/Bahrain": "Asia/Qatar",
    "Asia/Brunei": "Asia/Kuching",
    "Asia/Calcutta": "Asia/Kolkata",
    "Asia/Choibalsan": "Asia/Ulaanbaatar",
    "Asia/Chongqing": "Asia/Shanghai",
    "Asia/Chungking": "Asia/Shanghai",
    "Asia/Dacca": "Asia/Dhaka",
    "Asia/Harbin": "Asia/Shanghai",
    "Asia/Istanbul": "Europe/Istanbul",
    "Asia/Kashgar": "Asia/Urumqi",
    "Asia/Katmandu": "Asia/Kathmandu",
    "Asia/Kuala_Lumpur": "Asia/Singapore",
    "Asia/Kuwait": "Asia/Riyadh",
    "Asia/Macao": "Asia/Macau",
    "Asia/Muscat": "Asia/Dubai",
    "Asia/Phnom_Penh": "Asia/Bangkok",
    "Asia/Rangoon": "Asia/Yangon",
    "Asia/Saigon": "Asia/Ho_Chi_Minh",
    "Asia/Tel_Aviv": "Asia/Jerusalem",
    "Asia/Thimbu": "Asia/Thimphu",
    "Asia/Ujung_Pandang": "Asia/Makassar",
    "Asia/Ulan_Bator": "Asia/Ulaanbaatar",
    "Asia/Vientiane": "Asia/Bangkok",
    "Atlantic/Faeroe": "Atlantic/Faroe",
    "Atlantic/Jan_Mayen": "Europe/Berlin",
    "Atlantic/Reykjavik": "Africa/Abidjan",
    "Atlantic/St_Helena": "Africa/Abidjan",
    "Australia/ACT": "Australia/Sydney",
    "Australia/Canberra": "Australia/Sydney",
    "Australia/Currie": "Australia/Hobart",
    "Australia/LHI": "Australia/Lord_Howe",
    "Australia/NSW": "Australia/Sydney",
    "Australia/North": "Australia/Darwin",
    "Australia/Queensland": "Australia/Brisbane",
    "Australia/South": "Australia/Adelaide",
    "Australia/Tasmania": "Australia/Hobart",
    "Australia/Victoria": "Australia/Melbourne",
    "Australia/West": "Australia/Perth",
    "Australia/Yancowinna": "Australia/Broken_Hill",
    "Brazil/Acre": "America/Rio_Branco",
    "Brazil/DeNoronha": "America/Noronha",
    "Brazil/East": "America/Sao_Paulo",
    "Brazil/West": "America/Manaus",
    "CET": "Europe/Brussels",
    "CST6CDT": "America/Chicago",
    "Canada/Atlantic": "America/Halifax",
    "Canada/Central": "America/Winnipeg",
    "Canada/Eastern": "America/Toronto",
    "Canada/Mountain": "America/Edmonton",
    "Canada/Newfoundland": "America/St_Johns",
    "Canada/Pacific": "America/Vancouver",
    "Canada/Saskatchewan": "America/Regina",
    "Canada/Yukon": "America/Whitehorse",
    "Chile/Continental": "America/Santiago",
    "Chile/EasterIsland": "Pacific/Easter",
    "Cuba": "America/Havana",
    "EET": "Europe/Athens",
    "EST": "America/Panama",
    "EST5EDT": "America/New_York",
    "Egypt": "Africa/Cairo",
    "Eire": "Europe/Dublin",
    "Etc/GMT+0": "Etc/GMT",
    "Etc/GMT-0": "Etc/GMT",
    "Etc/GMT0": "Etc/GMT",
    "Etc/Greenwich": "Etc/GMT",
    "Etc/UCT": "Etc/UTC",
    "Etc/Universal": "Etc/UTC",
    "Etc/Zulu": "Etc/UTC",
    "Europe/Amsterdam": "Europe/Brussels",
    "Europe/Belfast": "Europe/London",
    "Europe/Bratislava": "Europe/Prague",
    "Europe/Busingen": "Europe/Zurich",
    "Europe/Copenhagen": "Europe/Berlin",
    "Europe/Guernsey": "Europe/London",
    "Europe/Isle_of_Man": "Europe/London",
    "Europe/Jersey": "Europe/London",
    "Europe/Kiev": "Europe/Kyiv",
    "Europe/Ljubljana": "Europe/Belgrade",
    "Europe/Luxembourg": "Europe/Brussels",
    "Europe/Mariehamn": "Europe/Helsinki",
    "Europe/Monaco": "Europe/Paris",
    "Europe/Nicosia": "Asia/Nicosia",
    "Europe/Oslo": "Europe/Berlin",
    "Europe/Podgorica": "Europe/Belgrade",
    "Europe/San_Marino": "Europe/Rome",
    "Europe/Sarajevo": "Europe/Belgrade",
    "Europe/Skopje": "Europe/Belgrade",
    "Europe/Stockholm": "Europe/Berlin",
    "Europe/Tiraspol": "Europe/Chisinau",
    "Europe/Uzhgorod": "Europe/Kyiv",
    "Europe/Vaduz": "Europe/Zurich",
    "Europe/Vatican": "Europe/Rome",
    "Europe/Zagreb": "Europe/Belgrade",
    "Europe/Zaporozhye": "Europe/Kyiv",
    "GB": "Europe/London",
    "GB-Eire": "Europe/London",
    "GMT+0": "Etc/GMT",
    "GMT-0": "Etc/GMT",
    "GMT0": "Etc/GMT",
    "Greenwich": "Etc/GMT",
    "HST": "Pacific/Honolulu",
    "Hongkong": "Asia/Hong_Kong",
    "Iceland": "Africa/Abidjan",
    "Indian/Antananarivo": "Africa/Nairobi",
    "Indian/Christmas": "Asia/Bangkok",
    "Indian/Cocos": "Asia/Yangon",
    "Indian/Comoro": "Africa/Nairobi",
    "Indian/Kerguelen": "Indian/Maldives",
    "Indian/Mahe": "Asia/Dubai",
    "Indian/Mayotte": "Africa/Nairobi",
    "Indian/Reunion": "Asia/Dubai",
    "Iran": "Asia/Tehran",
    "Israel": "Asia/Jerusalem",
    "Jamaica": "America/Jamaica",
    "Japan": "Asia/Tokyo",
    "Kwajalein": "Pacific/Kwajalein",
    "Libya": "Africa/Tripoli",
    "MET": "Europe/Brussels",
    "MST": "America/Phoenix",
    "MST7MDT": "America/Denver",
    "Mexico/BajaNorte": "America/Tijuana",
    "Mexico/BajaSur": "America/Mazatlan",
    "Mexico/General": "America/Mexico_City",
    "NZ": "Pacific/Auckland",
    "NZ-CHAT": "Pacific/Chatham",
    "Navajo": "America/Denver",
    "PRC": "Asia/Shanghai",
    "PST8PDT": "America/Los_Angeles",
    "Pacific/Chuuk": "Pacific/Port_Moresby",
    "Pacific/Enderbury": "Pacific/Kanton",
    "Pacific/Funafuti": "Pacific/Tarawa",
    "Pacific/Johnston": "Pacific/Honolulu",
    "Pacific/Majuro": "Pacific/Tarawa",
    "Pacific/Midway": "Pacific/Pago_Pago",
    "Pacific/Pohnpei": "Pacific/Guadalcanal",
    "Pacific/Ponape": "Pacific/Guadalcanal",
    "Pacific/Saipan": "Pacific/Guam",
    "Pacific/Samoa": "Pacific/Pago_Pago",
    "Pacific/Truk": "Pacific/Port_Moresby",
    "Pacific/Wake": "Pacific/Tarawa",
    "Pacific/Wallis": "Pacific/Tarawa",
    "Pacific/Yap": "Pacific/Port_Moresby",
    "Poland": "Europe/Warsaw",
    "Portugal": "Europe/Lisbon",
    "ROC": "Asia/Taipei",
    "ROK": "Asia/Seoul",
    "Singapore": "Asia/Singapore",
    "Turkey": "Europe/Istanbul",
    "UCT": "Etc/UTC",
    "US/Alaska": "America/Anchorage",
    "US/Aleutian": "America/Adak",
    "US/Arizona": "America/Phoenix",
    "US/Central": "America/Chicago",
    "US/East-Indiana": "America/Indiana/Indianapolis",
    "US/Eastern": "America/New_York",
    "US/Hawaii": "Pacific/Honolulu",
    "US/Indiana-Starke": "America/Indiana/Knox",
    "US/Michigan": "America/Detroit",
    "US/Mountain": "America/Denver",
    "US/Pacific": "America/Los_Angeles",
    "US/Samoa": "Pacific/Pago_Pago",
    "UTC": "Etc/UTC",
    "Universal": "Etc/UTC",
    "W-SU": "Europe/Moscow",
    "WET": "Europe/Lisbon",
    "Zulu": "Etc/UTC"
  };

  // packages/intl-datetimeformat/src/get_internal_slots.ts
  var internalSlotMap = /* @__PURE__ */ new WeakMap();
  function getInternalSlots(x) {
    let internalSlots = internalSlotMap.get(x);
    if (!internalSlots) {
      internalSlots = /* @__PURE__ */ Object.create(null);
      internalSlotMap.set(x, internalSlots);
    }
    return internalSlots;
  }

  // packages/intl-datetimeformat/src/packer.ts
  function unpack(data2) {
    const abbrvs = data2.abbrvs.split("|");
    const offsets = data2.offsets.split("|").map((n) => parseInt(n, 36));
    const packedZones = data2.zones;
    const zones = {};
    for (const d of packedZones) {
      const [zone, ...zoneData] = d.split("|");
      zones[zone] = zoneData.map((z) => z.split(",")).map(([ts, abbrvIndex, offsetIndex, dst]) => [
        ts === "" ? -Infinity : parseInt(ts, 36),
        abbrvs[+abbrvIndex],
        offsets[+offsetIndex],
        dst === "1"
      ]);
    }
    return zones;
  }

  // packages/intl-datetimeformat/src/core.ts
  var UPPERCASED_LINKS = Object.keys(links_default).reduce(
    (all, l) => {
      all[l.toUpperCase()] = links_default[l];
      return all;
    },
    {}
  );
  var RESOLVED_OPTIONS_KEYS = [
    "locale",
    "calendar",
    "numberingSystem",
    "dateStyle",
    "timeStyle",
    "timeZone",
    "hourCycle",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName"
  ];
  var formatDescriptor = {
    enumerable: false,
    configurable: true,
    get() {
      if (typeof this !== "object" || !OrdinaryHasInstance(DateTimeFormat4, this)) {
        throw TypeError(
          "Intl.DateTimeFormat format property accessor called on incompatible receiver"
        );
      }
      const internalSlots = getInternalSlots(this);
      const dtf = this;
      let boundFormat = internalSlots.boundFormat;
      if (boundFormat === void 0) {
        boundFormat = (date) => {
          let x;
          if (date === void 0) {
            x = Date.now();
          } else {
            x = Number(date);
          }
          return FormatDateTime(dtf, x, {
            getInternalSlots,
            localeData: DateTimeFormat4.localeData,
            tzData: DateTimeFormat4.tzData,
            getDefaultTimeZone: DateTimeFormat4.getDefaultTimeZone
          });
        };
        try {
          Object.defineProperty(boundFormat, "name", {
            configurable: true,
            enumerable: false,
            writable: false,
            value: ""
          });
        } catch (e) {
        }
        internalSlots.boundFormat = boundFormat;
      }
      return boundFormat;
    }
  };
  try {
    Object.defineProperty(formatDescriptor.get, "name", {
      configurable: true,
      enumerable: false,
      writable: false,
      value: "get format"
    });
  } catch (e) {
  }
  var DateTimeFormat4 = function(locales, options) {
    if (!this || !OrdinaryHasInstance(DateTimeFormat4, this)) {
      return new DateTimeFormat4(locales, options);
    }
    InitializeDateTimeFormat(this, locales, options, {
      tzData: DateTimeFormat4.tzData,
      uppercaseLinks: UPPERCASED_LINKS,
      availableLocales: DateTimeFormat4.availableLocales,
      relevantExtensionKeys: DateTimeFormat4.relevantExtensionKeys,
      getDefaultLocale: DateTimeFormat4.getDefaultLocale,
      getDefaultTimeZone: DateTimeFormat4.getDefaultTimeZone,
      getInternalSlots,
      localeData: DateTimeFormat4.localeData
    });
    const internalSlots = getInternalSlots(this);
    const dataLocale = internalSlots.dataLocale;
    const dataLocaleData = DateTimeFormat4.localeData[dataLocale];
    invariant(
      dataLocaleData !== void 0,
      `Cannot load locale-dependent data for ${dataLocale}.`
    );
  };
  defineProperty(DateTimeFormat4, "supportedLocalesOf", {
    value: function supportedLocalesOf(locales, options) {
      return SupportedLocales(
        DateTimeFormat4.availableLocales,
        CanonicalizeLocaleList(locales),
        options
      );
    }
  });
  defineProperty(DateTimeFormat4.prototype, "resolvedOptions", {
    value: function resolvedOptions() {
      if (typeof this !== "object" || !OrdinaryHasInstance(DateTimeFormat4, this)) {
        throw TypeError(
          "Method Intl.DateTimeFormat.prototype.resolvedOptions called on incompatible receiver"
        );
      }
      const internalSlots = getInternalSlots(this);
      const ro = {};
      for (const key of RESOLVED_OPTIONS_KEYS) {
        let value = internalSlots[key];
        if (key === "hourCycle") {
          const hour12 = value === "h11" || value === "h12" ? true : value === "h23" || value === "h24" ? false : void 0;
          if (hour12 !== void 0) {
            ro.hour12 = hour12;
          }
        }
        if (DATE_TIME_PROPS.indexOf(key) > -1) {
          if (internalSlots.dateStyle !== void 0 || internalSlots.timeStyle !== void 0) {
            value = void 0;
          }
        }
        if (value !== void 0) {
          ro[key] = value;
        }
      }
      return ro;
    }
  });
  defineProperty(DateTimeFormat4.prototype, "formatToParts", {
    value: function formatToParts2(date) {
      if (date === void 0) {
        date = Date.now();
      } else {
        date = ToNumber(date);
      }
      return FormatDateTimeToParts(this, date, {
        getInternalSlots,
        localeData: DateTimeFormat4.localeData,
        tzData: DateTimeFormat4.tzData,
        getDefaultTimeZone: DateTimeFormat4.getDefaultTimeZone
      });
    }
  });
  defineProperty(DateTimeFormat4.prototype, "formatRangeToParts", {
    value: function formatRangeToParts(startDate, endDate) {
      const dtf = this;
      if (typeof dtf !== "object") {
        throw new TypeError();
      }
      if (startDate === void 0 || endDate === void 0) {
        throw new TypeError("startDate/endDate cannot be undefined");
      }
      const x = ToNumber(startDate);
      const y = ToNumber(endDate);
      return FormatDateTimeRangeToParts(dtf, x, y, {
        getInternalSlots,
        localeData: DateTimeFormat4.localeData,
        tzData: DateTimeFormat4.tzData,
        getDefaultTimeZone: DateTimeFormat4.getDefaultTimeZone
      });
    }
  });
  defineProperty(DateTimeFormat4.prototype, "formatRange", {
    value: function formatRange(startDate, endDate) {
      const dtf = this;
      if (typeof dtf !== "object") {
        throw new TypeError();
      }
      if (startDate === void 0 || endDate === void 0) {
        throw new TypeError("startDate/endDate cannot be undefined");
      }
      const x = ToNumber(startDate);
      const y = ToNumber(endDate);
      return FormatDateTimeRange(dtf, x, y, {
        getInternalSlots,
        localeData: DateTimeFormat4.localeData,
        tzData: DateTimeFormat4.tzData,
        getDefaultTimeZone: DateTimeFormat4.getDefaultTimeZone
      });
    }
  });
  var DEFAULT_TIMEZONE = "UTC";
  DateTimeFormat4.__setDefaultTimeZone = (timeZone) => {
    if (timeZone !== void 0) {
      timeZone = String(timeZone);
      if (!IsValidTimeZoneName(timeZone, {
        zoneNamesFromData: Object.keys(DateTimeFormat4.tzData),
        uppercaseLinks: UPPERCASED_LINKS
      })) {
        throw new RangeError("Invalid timeZoneName");
      }
      timeZone = CanonicalizeTimeZoneName(timeZone, {
        zoneNames: Object.keys(DateTimeFormat4.tzData),
        uppercaseLinks: UPPERCASED_LINKS
      });
    } else {
      timeZone = DEFAULT_TIMEZONE;
    }
    DateTimeFormat4.__defaultTimeZone = timeZone;
  };
  DateTimeFormat4.relevantExtensionKeys = ["nu", "ca", "hc"];
  DateTimeFormat4.__defaultTimeZone = DEFAULT_TIMEZONE;
  DateTimeFormat4.getDefaultTimeZone = () => DateTimeFormat4.__defaultTimeZone;
  DateTimeFormat4.__addLocaleData = function __addLocaleData(...data2) {
    for (const { data: d, locale } of data2) {
      const _a = d, {
        dateFormat,
        timeFormat,
        dateTimeFormat,
        formats,
        intervalFormats
      } = _a, rawData = __objRest(_a, [
        "dateFormat",
        "timeFormat",
        "dateTimeFormat",
        "formats",
        "intervalFormats"
      ]);
      const processedData = __spreadProps(__spreadValues({}, rawData), {
        dateFormat: {
          full: parseDateTimeSkeleton(dateFormat.full),
          long: parseDateTimeSkeleton(dateFormat.long),
          medium: parseDateTimeSkeleton(dateFormat.medium),
          short: parseDateTimeSkeleton(dateFormat.short)
        },
        timeFormat: {
          full: parseDateTimeSkeleton(timeFormat.full),
          long: parseDateTimeSkeleton(timeFormat.long),
          medium: parseDateTimeSkeleton(timeFormat.medium),
          short: parseDateTimeSkeleton(timeFormat.short)
        },
        dateTimeFormat: {
          full: parseDateTimeSkeleton(dateTimeFormat.full).pattern,
          long: parseDateTimeSkeleton(dateTimeFormat.long).pattern,
          medium: parseDateTimeSkeleton(dateTimeFormat.medium).pattern,
          short: parseDateTimeSkeleton(dateTimeFormat.short).pattern
        },
        formats: {}
      });
      for (const calendar in formats) {
        processedData.formats[calendar] = Object.keys(formats[calendar]).map(
          (skeleton) => parseDateTimeSkeleton(
            skeleton,
            formats[calendar][skeleton],
            intervalFormats[skeleton],
            intervalFormats.intervalFormatFallback
          )
        );
      }
      const minimizedLocale = new Intl.Locale(locale).minimize().toString();
      DateTimeFormat4.localeData[locale] = DateTimeFormat4.localeData[minimizedLocale] = processedData;
      DateTimeFormat4.availableLocales.add(locale);
      DateTimeFormat4.availableLocales.add(minimizedLocale);
      if (!DateTimeFormat4.__defaultLocale) {
        DateTimeFormat4.__defaultLocale = minimizedLocale;
      }
    }
  };
  Object.defineProperty(DateTimeFormat4.prototype, "format", formatDescriptor);
  DateTimeFormat4.__defaultLocale = "";
  DateTimeFormat4.localeData = {};
  DateTimeFormat4.availableLocales = /* @__PURE__ */ new Set();
  DateTimeFormat4.getDefaultLocale = () => {
    return DateTimeFormat4.__defaultLocale;
  };
  DateTimeFormat4.polyfilled = true;
  DateTimeFormat4.tzData = {};
  DateTimeFormat4.__addTZData = function(d) {
    DateTimeFormat4.tzData = unpack(d);
  };
  try {
    if (typeof Symbol !== "undefined") {
      Object.defineProperty(DateTimeFormat4.prototype, Symbol.toStringTag, {
        value: "Intl.DateTimeFormat",
        writable: false,
        enumerable: false,
        configurable: true
      });
    }
    Object.defineProperty(DateTimeFormat4.prototype.constructor, "length", {
      value: 1,
      writable: false,
      enumerable: false,
      configurable: true
    });
  } catch (e) {
  }

  // packages/intl-datetimeformat/supported-locales.generated.ts
  var supportedLocales = ["af", "af-NA", "agq", "ak", "am", "ar", "ar-AE", "ar-BH", "ar-DJ", "ar-DZ", "ar-EG", "ar-EH", "ar-ER", "ar-IL", "ar-IQ", "ar-JO", "ar-KM", "ar-KW", "ar-LB", "ar-LY", "ar-MA", "ar-MR", "ar-OM", "ar-PS", "ar-QA", "ar-SA", "ar-SD", "ar-SO", "ar-SS", "ar-SY", "ar-TD", "ar-TN", "ar-YE", "as", "asa", "ast", "az", "az-Cyrl", "az-Latn", "bas", "be", "be-tarask", "bem", "bez", "bg", "bm", "bn", "bn-IN", "bo", "bo-IN", "br", "brx", "bs", "bs-Cyrl", "bs-Latn", "ca", "ca-AD", "ca-ES-valencia", "ca-FR", "ca-IT", "ccp", "ccp-IN", "ce", "ceb", "cgg", "chr", "ckb", "ckb-IR", "cs", "cy", "da", "da-GL", "dav", "de", "de-AT", "de-BE", "de-CH", "de-IT", "de-LI", "de-LU", "dje", "doi", "dsb", "dua", "dyo", "dz", "ebu", "ee", "ee-TG", "el", "el-CY", "en", "en-001", "en-150", "en-AE", "en-AG", "en-AI", "en-AS", "en-AT", "en-AU", "en-BB", "en-BE", "en-BI", "en-BM", "en-BS", "en-BW", "en-BZ", "en-CA", "en-CC", "en-CH", "en-CK", "en-CM", "en-CX", "en-CY", "en-DE", "en-DG", "en-DK", "en-DM", "en-ER", "en-FI", "en-FJ", "en-FK", "en-FM", "en-GB", "en-GD", "en-GG", "en-GH", "en-GI", "en-GM", "en-GU", "en-GY", "en-HK", "en-IE", "en-IL", "en-IM", "en-IN", "en-IO", "en-JE", "en-JM", "en-KE", "en-KI", "en-KN", "en-KY", "en-LC", "en-LR", "en-LS", "en-MG", "en-MH", "en-MO", "en-MP", "en-MS", "en-MT", "en-MU", "en-MW", "en-MY", "en-NA", "en-NF", "en-NG", "en-NL", "en-NR", "en-NU", "en-NZ", "en-PG", "en-PH", "en-PK", "en-PN", "en-PR", "en-PW", "en-RW", "en-SB", "en-SC", "en-SD", "en-SE", "en-SG", "en-SH", "en-SI", "en-SL", "en-SS", "en-SX", "en-SZ", "en-TC", "en-TK", "en-TO", "en-TT", "en-TV", "en-TZ", "en-UG", "en-UM", "en-VC", "en-VG", "en-VI", "en-VU", "en-WS", "en-ZA", "en-ZM", "en-ZW", "eo", "es", "es-419", "es-AR", "es-BO", "es-BR", "es-BZ", "es-CL", "es-CO", "es-CR", "es-CU", "es-DO", "es-EA", "es-EC", "es-GQ", "es-GT", "es-HN", "es-IC", "es-MX", "es-NI", "es-PA", "es-PE", "es-PH", "es-PR", "es-PY", "es-SV", "es-US", "es-UY", "es-VE", "et", "eu", "ewo", "fa", "fa-AF", "ff", "ff-Adlm", "ff-Adlm-BF", "ff-Adlm-CM", "ff-Adlm-GH", "ff-Adlm-GM", "ff-Adlm-GW", "ff-Adlm-LR", "ff-Adlm-MR", "ff-Adlm-NE", "ff-Adlm-NG", "ff-Adlm-SL", "ff-Adlm-SN", "ff-Latn", "ff-Latn-BF", "ff-Latn-CM", "ff-Latn-GH", "ff-Latn-GM", "ff-Latn-GN", "ff-Latn-GW", "ff-Latn-LR", "ff-Latn-MR", "ff-Latn-NE", "ff-Latn-NG", "ff-Latn-SL", "fi", "fil", "fo", "fo-DK", "fr", "fr-BE", "fr-BF", "fr-BI", "fr-BJ", "fr-BL", "fr-CA", "fr-CD", "fr-CF", "fr-CG", "fr-CH", "fr-CI", "fr-CM", "fr-DJ", "fr-DZ", "fr-GA", "fr-GF", "fr-GN", "fr-GP", "fr-GQ", "fr-HT", "fr-KM", "fr-LU", "fr-MA", "fr-MC", "fr-MF", "fr-MG", "fr-ML", "fr-MQ", "fr-MR", "fr-MU", "fr-NC", "fr-NE", "fr-PF", "fr-PM", "fr-RE", "fr-RW", "fr-SC", "fr-SN", "fr-SY", "fr-TD", "fr-TG", "fr-TN", "fr-VU", "fr-WF", "fr-YT", "fur", "fy", "ga", "ga-GB", "gd", "gl", "gsw", "gsw-FR", "gsw-LI", "gu", "guz", "gv", "ha", "ha-GH", "ha-NE", "haw", "he", "hi", "hr", "hr-BA", "hsb", "hu", "hy", "ia", "id", "ig", "ii", "is", "it", "it-CH", "it-SM", "it-VA", "ja", "jgo", "jmc", "jv", "ka", "kab", "kam", "kde", "kea", "kgp", "khq", "ki", "kk", "kkj", "kl", "kln", "km", "kn", "ko", "ko-KP", "kok", "ks", "ks-Arab", "ksb", "ksf", "ksh", "ku", "kw", "ky", "lag", "lb", "lg", "lkt", "ln", "ln-AO", "ln-CF", "ln-CG", "lo", "lrc", "lrc-IQ", "lt", "lu", "luo", "luy", "lv", "mai", "mas", "mas-TZ", "mer", "mfe", "mg", "mgh", "mgo", "mi", "mk", "ml", "mn", "mni", "mni-Beng", "mr", "ms", "ms-BN", "ms-ID", "ms-SG", "mt", "mua", "my", "mzn", "naq", "nb", "nb-SJ", "nd", "nds", "nds-NL", "ne", "ne-IN", "nl", "nl-AW", "nl-BE", "nl-BQ", "nl-CW", "nl-SR", "nl-SX", "nmg", "nn", "nnh", "no", "nus", "nyn", "om", "om-KE", "or", "os", "os-RU", "pa", "pa-Arab", "pa-Guru", "pcm", "pl", "ps", "ps-PK", "pt", "pt-AO", "pt-CH", "pt-CV", "pt-GQ", "pt-GW", "pt-LU", "pt-MO", "pt-MZ", "pt-PT", "pt-ST", "pt-TL", "qu", "qu-BO", "qu-EC", "rm", "rn", "ro", "ro-MD", "rof", "ru", "ru-BY", "ru-KG", "ru-KZ", "ru-MD", "ru-UA", "rw", "rwk", "sa", "sah", "saq", "sat", "sat-Olck", "sbp", "sc", "sd", "sd-Arab", "sd-Deva", "se", "se-FI", "se-SE", "seh", "ses", "sg", "shi", "shi-Latn", "shi-Tfng", "si", "sk", "sl", "smn", "sn", "so", "so-DJ", "so-ET", "so-KE", "sq", "sq-MK", "sq-XK", "sr", "sr-Cyrl", "sr-Cyrl-BA", "sr-Cyrl-ME", "sr-Cyrl-XK", "sr-Latn", "sr-Latn-BA", "sr-Latn-ME", "sr-Latn-XK", "su", "su-Latn", "sv", "sv-AX", "sv-FI", "sw", "sw-CD", "sw-KE", "sw-UG", "ta", "ta-LK", "ta-MY", "ta-SG", "te", "teo", "teo-KE", "tg", "th", "ti", "ti-ER", "tk", "to", "tr", "tr-CY", "tt", "twq", "tzm", "ug", "uk", "und", "ur", "ur-IN", "uz", "uz-Arab", "uz-Cyrl", "uz-Latn", "vai", "vai-Latn", "vai-Vaii", "vi", "vun", "wae", "wo", "xh", "xog", "yav", "yi", "yo", "yo-BJ", "yrl", "yrl-CO", "yrl-VE", "yue", "yue-Hans", "yue-Hant", "zgh", "zh", "zh-Hans", "zh-Hans-HK", "zh-Hans-MO", "zh-Hans-SG", "zh-Hant", "zh-Hant-HK", "zh-Hant-MO", "zu"];

  // packages/intl-datetimeformat/should-polyfill.ts
  function supportsDateStyle() {
    try {
      return !!new Intl.DateTimeFormat(void 0, {
        dateStyle: "short"
      }).resolvedOptions().dateStyle;
    } catch (e) {
      return false;
    }
  }
  function hasChromeLt71Bug() {
    try {
      return new Intl.DateTimeFormat("en", {
        hourCycle: "h11",
        hour: "numeric"
      }).formatToParts(0)[2].type !== "dayPeriod";
    } catch (e) {
      return false;
    }
  }
  function hasUnthrownDateTimeStyleBug() {
    try {
      return !!new Intl.DateTimeFormat("en", {
        dateStyle: "short",
        hour: "numeric"
      }).format(/* @__PURE__ */ new Date(0));
    } catch (e) {
      return false;
    }
  }
  function supportedLocalesOf2(locale) {
    if (!locale) {
      return true;
    }
    const locales = Array.isArray(locale) ? locale : [locale];
    return Intl.DateTimeFormat.supportedLocalesOf(locales).length === locales.length;
  }
  function shouldPolyfill(locale = "en") {
    if (!("DateTimeFormat" in Intl) || !("formatToParts" in Intl.DateTimeFormat.prototype) || !("formatRange" in Intl.DateTimeFormat.prototype) || hasChromeLt71Bug() || hasUnthrownDateTimeStyleBug() || !supportsDateStyle() || !supportedLocalesOf2(locale)) {
      return locale ? match([locale], supportedLocales, "en") : void 0;
    }
  }

  // packages/intl-datetimeformat/src/to_locale_string.ts
  function toLocaleString(x, locales, options) {
    const dtf = new DateTimeFormat4(locales, options);
    return dtf.format(x);
  }
  function toLocaleDateString(x, locales, options) {
    const dtf = new DateTimeFormat4(
      locales,
      ToDateTimeOptions(options, "date", "date")
    );
    return dtf.format(x);
  }
  function toLocaleTimeString(x, locales, options) {
    const dtf = new DateTimeFormat4(
      locales,
      ToDateTimeOptions(options, "time", "time")
    );
    return dtf.format(x);
  }

  // packages/intl-datetimeformat/polyfill.ts
  if (shouldPolyfill()) {
    defineProperty(Intl, "DateTimeFormat", { value: DateTimeFormat4 });
    defineProperty(Date.prototype, "toLocaleString", {
      value: function toLocaleString2(locales, options) {
        try {
          return toLocaleString(this, locales, options);
        } catch (error) {
          return "Invalid Date";
        }
      }
    });
    defineProperty(Date.prototype, "toLocaleDateString", {
      value: function toLocaleDateString2(locales, options) {
        try {
          return toLocaleDateString(this, locales, options);
        } catch (error) {
          return "Invalid Date";
        }
      }
    });
    defineProperty(Date.prototype, "toLocaleTimeString", {
      value: function toLocaleTimeString2(locales, options) {
        try {
          return toLocaleTimeString(this, locales, options);
        } catch (error) {
          return "Invalid Date";
        }
      }
    });
  }
})();
//# sourceMappingURL=polyfill.iife.js.map
