(() => {
  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/tslib@2.4.0/node_modules/tslib/tslib.es6.js
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeLocaleList.js
  function CanonicalizeLocaleList(locales) {
    return Intl.getCanonicalLocales(locales);
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/262.js
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
  var MINUTES_PER_HOUR = 60;
  var SECONDS_PER_MINUTE = 60;
  var MS_PER_SECOND = 1e3;
  var MS_PER_MINUTE = MS_PER_SECOND * SECONDS_PER_MINUTE;
  var MS_PER_HOUR = MS_PER_MINUTE * MINUTES_PER_HOUR;

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/CoerceOptionsToObject.js
  function CoerceOptionsToObject(options) {
    if (typeof options === "undefined") {
      return /* @__PURE__ */ Object.create(null);
    }
    return ToObject(options);
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/DefaultNumberOption.js
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/GetNumberOption.js
  function GetNumberOption(options, property, minimum, maximum, fallback) {
    var val = options[property];
    return DefaultNumberOption(val, minimum, maximum, fallback);
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/GetOption.js
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/IsSanctionedSimpleUnitIdentifier.js
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/utils.js
  function getMagnitude(x) {
    return Math.floor(Math.log(x) * Math.LOG10E);
  }
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
  function invariant(condition, message, Err) {
    if (Err === void 0) {
      Err = Error;
    }
    if (!condition) {
      throw new Err(message);
    }
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawPrecision.js
  function ToRawPrecision(x, minPrecision, maxPrecision) {
    var p = maxPrecision;
    var m;
    var e;
    var xFinal;
    if (x === 0) {
      m = repeat("0", p);
      e = 0;
      xFinal = 0;
    } else {
      var xToString = x.toString();
      var xToStringExponentIndex = xToString.indexOf("e");
      var _a = xToString.split("e"), xToStringMantissa = _a[0], xToStringExponent = _a[1];
      var xToStringMantissaWithoutDecimalPoint = xToStringMantissa.replace(".", "");
      if (xToStringExponentIndex >= 0 && xToStringMantissaWithoutDecimalPoint.length <= p) {
        e = +xToStringExponent;
        m = xToStringMantissaWithoutDecimalPoint + repeat("0", p - xToStringMantissaWithoutDecimalPoint.length);
        xFinal = x;
      } else {
        e = getMagnitude(x);
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
      m = m + repeat("0", e - p + 1);
      int = e + 1;
    } else if (e >= 0) {
      m = "".concat(m.slice(0, e + 1), ".").concat(m.slice(e + 1));
      int = e + 1;
    } else {
      m = "0.".concat(repeat("0", -e - 1)).concat(m);
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawFixed.js
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
      m = m + repeat("0", Math.max(+exponent - m.length + 1, 0));
    }
    var int;
    if (f !== 0) {
      var k = m.length;
      if (k <= f) {
        var z = repeat("0", f + 1 - k);
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToString.js
  function FormatNumericToString(intlObject, x) {
    var isNegative = x < 0 || SameValue(x, -0);
    if (isNegative) {
      x = -x;
    }
    var result;
    var rourndingType = intlObject.roundingType;
    switch (rourndingType) {
      case "significantDigits":
        result = ToRawPrecision(x, intlObject.minimumSignificantDigits, intlObject.maximumSignificantDigits);
        break;
      case "fractionDigits":
        result = ToRawFixed(x, intlObject.minimumFractionDigits, intlObject.maximumFractionDigits);
        break;
      default:
        result = ToRawPrecision(x, 1, 2);
        if (result.integerDigitsCount > 1) {
          result = ToRawFixed(x, 0, 0);
        }
        break;
    }
    x = result.roundedNumber;
    var string = result.formattedString;
    var int = result.integerDigitsCount;
    var minInteger = intlObject.minimumIntegerDigits;
    if (int < minInteger) {
      var forwardZeros = repeat("0", minInteger - int);
      string = forwardZeros + string;
    }
    if (isNegative) {
      x = -x;
    }
    return { roundedNumber: x, formattedString: string };
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/regex.generated.js
  var S_UNICODE_REGEX = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/;

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/format_to_parts.js
  var CARET_S_UNICODE_REGEX = new RegExp("^".concat(S_UNICODE_REGEX.source));
  var S_DOLLAR_UNICODE_REGEX = new RegExp("".concat(S_UNICODE_REGEX.source, "$"));

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeLocaleList.js
  function CanonicalizeLocaleList2(locales) {
    return Intl.getCanonicalLocales(locales);
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/languageMatching.js
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/regions.generated.js
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/BestFitMatcher.js
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/BestAvailableLocale.js
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/LookupMatcher.js
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/UnicodeExtensionValue.js
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/ResolveLocale.js
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/LookupSupportedLocales.js
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/index.js
  function match(requestedLocales, availableLocales, defaultLocale, opts) {
    return ResolveLocale(availableLocales, CanonicalizeLocaleList2(requestedLocales), {
      localeMatcher: (opts === null || opts === void 0 ? void 0 : opts.algorithm) || "best fit"
    }, [], {}, function() {
      return defaultLocale;
    }).locale;
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatDigitOptions.js
  function SetNumberFormatDigitOptions(internalSlots, opts, mnfdDefault, mxfdDefault, notation) {
    var mnid = GetNumberOption(opts, "minimumIntegerDigits", 1, 21, 1);
    var mnfd = opts.minimumFractionDigits;
    var mxfd = opts.maximumFractionDigits;
    var mnsd = opts.minimumSignificantDigits;
    var mxsd = opts.maximumSignificantDigits;
    internalSlots.minimumIntegerDigits = mnid;
    var roundingPriority = GetOption(opts, "roundingPriority", "string", ["auto", "morePrecision", "lessPrecision"], "auto");
    var hasSd = mnsd !== void 0 || mxsd !== void 0;
    var hasFd = mnfd !== void 0 || mxfd !== void 0;
    var needSd = true;
    var needFd = true;
    if (roundingPriority === "auto") {
      needSd = hasSd;
      if (hasSd || !hasFd && notation === "compact") {
        needFd = false;
      }
    }
    if (needSd) {
      if (hasSd) {
        mnsd = DefaultNumberOption(mnsd, 1, 21, 1);
        mxsd = DefaultNumberOption(mxsd, mnsd, 21, 21);
        internalSlots.minimumSignificantDigits = mnsd;
        internalSlots.maximumSignificantDigits = mxsd;
      } else {
        internalSlots.minimumSignificantDigits = 1;
        internalSlots.maximumSignificantDigits = 21;
      }
    }
    if (needFd) {
      if (hasFd) {
        mnfd = DefaultNumberOption(mnfd, 0, 20, void 0);
        mxfd = DefaultNumberOption(mxfd, 0, 20, void 0);
        if (mnfd === void 0) {
          mnfd = Math.min(mnfdDefault, mxfd);
        } else if (mxfd === void 0) {
          mxfd = Math.max(mxfdDefault, mnfd);
        } else if (mnfd > mxfd) {
          throw new RangeError("Invalid range, ".concat(mnfd, " > ").concat(mxfd));
        }
        internalSlots.minimumFractionDigits = mnfd;
        internalSlots.maximumFractionDigits = mxfd;
      } else {
        internalSlots.minimumFractionDigits = mnfdDefault;
        internalSlots.maximumFractionDigits = mxfdDefault;
      }
    }
    if (needSd || needFd) {
      if (roundingPriority === "morePrecision") {
        internalSlots.roundingType = "morePrecision";
      } else if (roundingPriority === "lessPrecision") {
        internalSlots.roundingType = "lessPrecision";
      } else if (hasSd) {
        internalSlots.roundingType = "significantDigits";
      } else {
        internalSlots.roundingType = "fractionDigits";
      }
    } else {
      internalSlots.roundingType = "morePrecision";
      internalSlots.minimumFractionDigits = 0;
      internalSlots.maximumFractionDigits = 0;
      internalSlots.minimumSignificantDigits = 1;
      internalSlots.maximumSignificantDigits = 2;
    }
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/SupportedLocales.js
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/data.js
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/types/date-time.js
  var RangePatternType;
  (function(RangePatternType2) {
    RangePatternType2["startRange"] = "startRange";
    RangePatternType2["shared"] = "shared";
    RangePatternType2["endRange"] = "endRange";
  })(RangePatternType || (RangePatternType = {}));

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/packages/intl-pluralrules/lib/abstract/InitializePluralRules.js
  function InitializePluralRules(pl, locales, options, _a) {
    var availableLocales = _a.availableLocales, relevantExtensionKeys = _a.relevantExtensionKeys, localeData = _a.localeData, getDefaultLocale = _a.getDefaultLocale, getInternalSlots2 = _a.getInternalSlots;
    var requestedLocales = CanonicalizeLocaleList(locales);
    var opt = /* @__PURE__ */ Object.create(null);
    var opts = CoerceOptionsToObject(options);
    var internalSlots = getInternalSlots2(pl);
    internalSlots.initializedPluralRules = true;
    var matcher = GetOption(opts, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
    opt.localeMatcher = matcher;
    internalSlots.type = GetOption(opts, "type", "string", ["cardinal", "ordinal"], "cardinal");
    SetNumberFormatDigitOptions(internalSlots, opts, 0, 3, "standard");
    var r = ResolveLocale(availableLocales, requestedLocales, opt, relevantExtensionKeys, localeData, getDefaultLocale);
    internalSlots.locale = r.locale;
    return pl;
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/packages/intl-pluralrules/lib/abstract/GetOperands.js
  function GetOperands(s) {
    invariant(typeof s === "string", "GetOperands should have been called with a string");
    var n = ToNumber(s);
    invariant(isFinite(n), "n should be finite");
    var dp = s.indexOf(".");
    var iv;
    var f;
    var v;
    var fv = "";
    if (dp === -1) {
      iv = n;
      f = 0;
      v = 0;
    } else {
      iv = s.slice(0, dp);
      fv = s.slice(dp, s.length);
      f = ToNumber(fv);
      v = fv.length;
    }
    var i = Math.abs(ToNumber(iv));
    var w;
    var t;
    if (f !== 0) {
      var ft = fv.replace(/0+$/, "");
      w = ft.length;
      t = ToNumber(ft);
    } else {
      w = 0;
      t = 0;
    }
    return {
      Number: n,
      IntegerDigits: i,
      NumberOfFractionDigits: v,
      NumberOfFractionDigitsWithoutTrailing: w,
      FractionDigits: f,
      FractionDigitsWithoutTrailing: t
    };
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/packages/intl-pluralrules/lib/abstract/ResolvePlural.js
  function ResolvePlural(pl, n, _a) {
    var getInternalSlots2 = _a.getInternalSlots, PluralRuleSelect2 = _a.PluralRuleSelect;
    var internalSlots = getInternalSlots2(pl);
    invariant(Type(internalSlots) === "Object", "pl has to be an object");
    invariant("initializedPluralRules" in internalSlots, "pluralrules must be initialized");
    invariant(Type(n) === "Number", "n must be a number");
    if (!isFinite(n)) {
      return "other";
    }
    var locale = internalSlots.locale, type = internalSlots.type;
    var res = FormatNumericToString(internalSlots, n);
    var s = res.formattedString;
    var operands = GetOperands(s);
    return PluralRuleSelect2(locale, type, n, operands);
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/packages/intl-pluralrules/lib/get_internal_slots.js
  var internalSlotMap = /* @__PURE__ */ new WeakMap();
  function getInternalSlots(x) {
    var internalSlots = internalSlotMap.get(x);
    if (!internalSlots) {
      internalSlots = /* @__PURE__ */ Object.create(null);
      internalSlotMap.set(x, internalSlots);
    }
    return internalSlots;
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/packages/intl-pluralrules/lib/index.js
  function validateInstance(instance, method) {
    if (!(instance instanceof PluralRules)) {
      throw new TypeError("Method Intl.PluralRules.prototype.".concat(method, " called on incompatible receiver ").concat(String(instance)));
    }
  }
  function PluralRuleSelect(locale, type, _n, _a) {
    var IntegerDigits = _a.IntegerDigits, NumberOfFractionDigits = _a.NumberOfFractionDigits, FractionDigits = _a.FractionDigits;
    return PluralRules.localeData[locale].fn(NumberOfFractionDigits ? "".concat(IntegerDigits, ".").concat(FractionDigits) : IntegerDigits, type === "ordinal");
  }
  var PluralRules = (
    /** @class */
    function() {
      function PluralRules2(locales, options) {
        var newTarget = this && this instanceof PluralRules2 ? this.constructor : void 0;
        if (!newTarget) {
          throw new TypeError("Intl.PluralRules must be called with 'new'");
        }
        return InitializePluralRules(this, locales, options, {
          availableLocales: PluralRules2.availableLocales,
          relevantExtensionKeys: PluralRules2.relevantExtensionKeys,
          localeData: PluralRules2.localeData,
          getDefaultLocale: PluralRules2.getDefaultLocale,
          getInternalSlots
        });
      }
      PluralRules2.prototype.resolvedOptions = function() {
        validateInstance(this, "resolvedOptions");
        var opts = /* @__PURE__ */ Object.create(null);
        var internalSlots = getInternalSlots(this);
        opts.locale = internalSlots.locale;
        opts.type = internalSlots.type;
        [
          "minimumIntegerDigits",
          "minimumFractionDigits",
          "maximumFractionDigits",
          "minimumSignificantDigits",
          "maximumSignificantDigits"
        ].forEach(function(field) {
          var val = internalSlots[field];
          if (val !== void 0) {
            opts[field] = val;
          }
        });
        opts.pluralCategories = __spreadArray([], PluralRules2.localeData[opts.locale].categories[opts.type], true);
        return opts;
      };
      PluralRules2.prototype.select = function(val) {
        var pr = this;
        validateInstance(pr, "select");
        var n = ToNumber(val);
        return ResolvePlural(pr, n, { getInternalSlots, PluralRuleSelect });
      };
      PluralRules2.prototype.toString = function() {
        return "[object Intl.PluralRules]";
      };
      PluralRules2.supportedLocalesOf = function(locales, options) {
        return SupportedLocales(PluralRules2.availableLocales, CanonicalizeLocaleList(locales), options);
      };
      PluralRules2.__addLocaleData = function() {
        var data2 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          data2[_i] = arguments[_i];
        }
        for (var _a = 0, data_1 = data2; _a < data_1.length; _a++) {
          var _b = data_1[_a], d = _b.data, locale = _b.locale;
          PluralRules2.localeData[locale] = d;
          PluralRules2.availableLocales.add(locale);
          if (!PluralRules2.__defaultLocale) {
            PluralRules2.__defaultLocale = locale;
          }
        }
      };
      PluralRules2.getDefaultLocale = function() {
        return PluralRules2.__defaultLocale;
      };
      PluralRules2.localeData = {};
      PluralRules2.availableLocales = /* @__PURE__ */ new Set();
      PluralRules2.__defaultLocale = "";
      PluralRules2.relevantExtensionKeys = [];
      PluralRules2.polyfilled = true;
      return PluralRules2;
    }()
  );
  try {
    if (typeof Symbol !== "undefined") {
      Object.defineProperty(PluralRules.prototype, Symbol.toStringTag, {
        value: "Intl.PluralRules",
        writable: false,
        enumerable: false,
        configurable: true
      });
    }
    try {
      Object.defineProperty(PluralRules, "length", {
        value: 0,
        writable: false,
        enumerable: false,
        configurable: true
      });
    } catch (error) {
    }
    Object.defineProperty(PluralRules.prototype.constructor, "length", {
      value: 0,
      writable: false,
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(PluralRules.supportedLocalesOf, "length", {
      value: 1,
      writable: false,
      enumerable: false,
      configurable: true
    });
  } catch (ex) {
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/packages/intl-pluralrules/lib/supported-locales.generated.js
  var supportedLocales = ["af", "ak", "am", "an", "ar", "ars", "as", "asa", "ast", "az", "bal", "be", "bem", "bez", "bg", "bho", "bm", "bn", "bo", "br", "brx", "bs", "ca", "ce", "ceb", "cgg", "chr", "ckb", "cs", "cy", "da", "de", "doi", "dsb", "dv", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fil", "fo", "fr", "fur", "fy", "ga", "gd", "gl", "gsw", "gu", "guw", "gv", "ha", "haw", "he", "hi", "hnj", "hr", "hsb", "hu", "hy", "ia", "id", "ig", "ii", "io", "is", "it", "iu", "ja", "jbo", "jgo", "jmc", "jv", "jw", "ka", "kab", "kaj", "kcg", "kde", "kea", "kk", "kkj", "kl", "km", "kn", "ko", "ks", "ksb", "ksh", "ku", "kw", "ky", "lag", "lb", "lg", "lij", "lkt", "ln", "lo", "lt", "lv", "mas", "mg", "mgo", "mk", "ml", "mn", "mo", "mr", "ms", "mt", "my", "nah", "naq", "nb", "nd", "ne", "nl", "nn", "nnh", "no", "nqo", "nr", "nso", "ny", "nyn", "om", "or", "os", "osa", "pa", "pap", "pcm", "pl", "prg", "ps", "pt", "pt-PT", "rm", "ro", "rof", "ru", "rwk", "sah", "saq", "sat", "sc", "scn", "sd", "sdh", "se", "seh", "ses", "sg", "sh", "shi", "si", "sk", "sl", "sma", "smi", "smj", "smn", "sms", "sn", "so", "sq", "sr", "ss", "ssy", "st", "su", "sv", "sw", "syr", "ta", "te", "teo", "th", "ti", "tig", "tk", "tl", "tn", "to", "tpi", "tr", "ts", "tzm", "ug", "uk", "und", "ur", "uz", "ve", "vi", "vo", "vun", "wa", "wae", "wo", "xh", "xog", "yi", "yo", "yue", "zh", "zu"];

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/packages/intl-pluralrules/lib/should-polyfill.js
  function supportedLocalesOf(locale) {
    if (!locale) {
      return true;
    }
    var locales = Array.isArray(locale) ? locale : [locale];
    return Intl.PluralRules.supportedLocalesOf(locales).length === locales.length;
  }
  function shouldPolyfill(locale) {
    if (locale === void 0) {
      locale = "en";
    }
    if (!("PluralRules" in Intl) || new Intl.PluralRules("en", { minimumFractionDigits: 2 }).select(1) === "one" || !supportedLocalesOf(locale)) {
      return locale ? match([locale], supportedLocales, "en") : void 0;
    }
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/packages/intl-pluralrules/lib/polyfill.js
  if (shouldPolyfill()) {
    Object.defineProperty(Intl, "PluralRules", {
      value: PluralRules,
      writable: true,
      enumerable: false,
      configurable: true
    });
  }
})();
//# sourceMappingURL=polyfill.iife.js.map
