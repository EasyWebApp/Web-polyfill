(() => {
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
  function ArrayCreate(len) {
    return new Array(len);
  }
  function HasOwnProperty(o, prop) {
    return Object.prototype.hasOwnProperty.call(o, prop);
  }
  var MINUTES_PER_HOUR = 60;
  var SECONDS_PER_MINUTE = 60;
  var MS_PER_SECOND = 1e3;
  var MS_PER_MINUTE = MS_PER_SECOND * SECONDS_PER_MINUTE;
  var MS_PER_HOUR = MS_PER_MINUTE * MINUTES_PER_HOUR;
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/GetStringOrBooleanOption.js
  function GetStringOrBooleanOption(opts, prop, values, trueValue, falsyValue, fallback) {
    var value = opts[prop];
    if (value === void 0) {
      return fallback;
    }
    if (value === true) {
      return trueValue;
    }
    var valueBoolean = Boolean(value);
    if (valueBoolean === false) {
      return falsyValue;
    }
    value = ToString(value);
    if (value === "true" || value === "false") {
      return fallback;
    }
    if ((values || []).indexOf(value) === -1) {
      throw new RangeError("Invalid value ".concat(value));
    }
    return value;
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
  function IsSanctionedSimpleUnitIdentifier(unitIdentifier) {
    return SIMPLE_UNITS.indexOf(unitIdentifier) > -1;
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/IsWellFormedCurrencyCode.js
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/IsWellFormedUnitIdentifier.js
  function toLowerCase(str) {
    return str.replace(/([A-Z])/g, function(_, c) {
      return c.toLowerCase();
    });
  }
  function IsWellFormedUnitIdentifier(unit) {
    unit = toLowerCase(unit);
    if (IsSanctionedSimpleUnitIdentifier(unit)) {
      return true;
    }
    var units = unit.split("-per-");
    if (units.length !== 2) {
      return false;
    }
    var numerator = units[0], denominator = units[1];
    if (!IsSanctionedSimpleUnitIdentifier(numerator) || !IsSanctionedSimpleUnitIdentifier(denominator)) {
      return false;
    }
    return true;
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/CollapseNumberRange.js
  function CollapseNumberRange(result) {
    return result;
  }

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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponentForMagnitude.js
  function ComputeExponentForMagnitude(numberFormat, magnitude, _a) {
    var getInternalSlots2 = _a.getInternalSlots;
    var internalSlots = getInternalSlots2(numberFormat);
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponent.js
  function ComputeExponent(numberFormat, x, _a) {
    var getInternalSlots2 = _a.getInternalSlots;
    if (x === 0) {
      return [0, 0];
    }
    if (x < 0) {
      x = -x;
    }
    var magnitude = getMagnitude(x);
    var exponent = ComputeExponentForMagnitude(numberFormat, magnitude, {
      getInternalSlots: getInternalSlots2
    });
    x = exponent < 0 ? x * Math.pow(10, -exponent) : x / Math.pow(10, exponent);
    var formatNumberResult = FormatNumericToString(getInternalSlots2(numberFormat), x);
    if (formatNumberResult.roundedNumber === 0) {
      return [exponent, magnitude];
    }
    var newMagnitude = getMagnitude(formatNumberResult.roundedNumber);
    if (newMagnitude === magnitude - exponent) {
      return [exponent, magnitude];
    }
    return [
      ComputeExponentForMagnitude(numberFormat, magnitude + 1, {
        getInternalSlots: getInternalSlots2
      }),
      magnitude + 1
    ];
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/CurrencyDigits.js
  function CurrencyDigits(c, _a) {
    var currencyDigitsData2 = _a.currencyDigitsData;
    return HasOwnProperty(currencyDigitsData2, c) ? currencyDigitsData2[c] : 2;
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatApproximately.js
  function FormatApproximately(numberFormat, result, _a) {
    var getInternalSlots2 = _a.getInternalSlots;
    var internalSlots = getInternalSlots2(numberFormat);
    var symbols = internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem];
    var approximatelySign = symbols.approximatelySign;
    result.push({ type: "approximatelySign", value: approximatelySign });
    return result;
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/digit-mapping.generated.js
  var digitMapping = {
    "adlm": [
      "\u{1E950}",
      "\u{1E951}",
      "\u{1E952}",
      "\u{1E953}",
      "\u{1E954}",
      "\u{1E955}",
      "\u{1E956}",
      "\u{1E957}",
      "\u{1E958}",
      "\u{1E959}"
    ],
    "ahom": [
      "\u{11730}",
      "\u{11731}",
      "\u{11732}",
      "\u{11733}",
      "\u{11734}",
      "\u{11735}",
      "\u{11736}",
      "\u{11737}",
      "\u{11738}",
      "\u{11739}"
    ],
    "arab": [
      "\u0660",
      "\u0661",
      "\u0662",
      "\u0663",
      "\u0664",
      "\u0665",
      "\u0666",
      "\u0667",
      "\u0668",
      "\u0669"
    ],
    "arabext": [
      "\u06F0",
      "\u06F1",
      "\u06F2",
      "\u06F3",
      "\u06F4",
      "\u06F5",
      "\u06F6",
      "\u06F7",
      "\u06F8",
      "\u06F9"
    ],
    "bali": [
      "\u1B50",
      "\u1B51",
      "\u1B52",
      "\u1B53",
      "\u1B54",
      "\u1B55",
      "\u1B56",
      "\u1B57",
      "\u1B58",
      "\u1B59"
    ],
    "beng": [
      "\u09E6",
      "\u09E7",
      "\u09E8",
      "\u09E9",
      "\u09EA",
      "\u09EB",
      "\u09EC",
      "\u09ED",
      "\u09EE",
      "\u09EF"
    ],
    "bhks": [
      "\u{11C50}",
      "\u{11C51}",
      "\u{11C52}",
      "\u{11C53}",
      "\u{11C54}",
      "\u{11C55}",
      "\u{11C56}",
      "\u{11C57}",
      "\u{11C58}",
      "\u{11C59}"
    ],
    "brah": [
      "\u{11066}",
      "\u{11067}",
      "\u{11068}",
      "\u{11069}",
      "\u{1106A}",
      "\u{1106B}",
      "\u{1106C}",
      "\u{1106D}",
      "\u{1106E}",
      "\u{1106F}"
    ],
    "cakm": [
      "\u{11136}",
      "\u{11137}",
      "\u{11138}",
      "\u{11139}",
      "\u{1113A}",
      "\u{1113B}",
      "\u{1113C}",
      "\u{1113D}",
      "\u{1113E}",
      "\u{1113F}"
    ],
    "cham": [
      "\uAA50",
      "\uAA51",
      "\uAA52",
      "\uAA53",
      "\uAA54",
      "\uAA55",
      "\uAA56",
      "\uAA57",
      "\uAA58",
      "\uAA59"
    ],
    "deva": [
      "\u0966",
      "\u0967",
      "\u0968",
      "\u0969",
      "\u096A",
      "\u096B",
      "\u096C",
      "\u096D",
      "\u096E",
      "\u096F"
    ],
    "diak": [
      "\u{11950}",
      "\u{11951}",
      "\u{11952}",
      "\u{11953}",
      "\u{11954}",
      "\u{11955}",
      "\u{11956}",
      "\u{11957}",
      "\u{11958}",
      "\u{11959}"
    ],
    "fullwide": [
      "\uFF10",
      "\uFF11",
      "\uFF12",
      "\uFF13",
      "\uFF14",
      "\uFF15",
      "\uFF16",
      "\uFF17",
      "\uFF18",
      "\uFF19"
    ],
    "gong": [
      "\u{11DA0}",
      "\u{11DA1}",
      "\u{11DA2}",
      "\u{11DA3}",
      "\u{11DA4}",
      "\u{11DA5}",
      "\u{11DA6}",
      "\u{11DA7}",
      "\u{11DA8}",
      "\u{11DA9}"
    ],
    "gonm": [
      "\u{11D50}",
      "\u{11D51}",
      "\u{11D52}",
      "\u{11D53}",
      "\u{11D54}",
      "\u{11D55}",
      "\u{11D56}",
      "\u{11D57}",
      "\u{11D58}",
      "\u{11D59}"
    ],
    "gujr": [
      "\u0AE6",
      "\u0AE7",
      "\u0AE8",
      "\u0AE9",
      "\u0AEA",
      "\u0AEB",
      "\u0AEC",
      "\u0AED",
      "\u0AEE",
      "\u0AEF"
    ],
    "guru": [
      "\u0A66",
      "\u0A67",
      "\u0A68",
      "\u0A69",
      "\u0A6A",
      "\u0A6B",
      "\u0A6C",
      "\u0A6D",
      "\u0A6E",
      "\u0A6F"
    ],
    "hanidec": [
      "\u3007",
      "\u4E00",
      "\u4E8C",
      "\u4E09",
      "\u56DB",
      "\u4E94",
      "\u516D",
      "\u4E03",
      "\u516B",
      "\u4E5D"
    ],
    "hmng": [
      "\u{16B50}",
      "\u{16B51}",
      "\u{16B52}",
      "\u{16B53}",
      "\u{16B54}",
      "\u{16B55}",
      "\u{16B56}",
      "\u{16B57}",
      "\u{16B58}",
      "\u{16B59}"
    ],
    "hmnp": [
      "\u{1E140}",
      "\u{1E141}",
      "\u{1E142}",
      "\u{1E143}",
      "\u{1E144}",
      "\u{1E145}",
      "\u{1E146}",
      "\u{1E147}",
      "\u{1E148}",
      "\u{1E149}"
    ],
    "java": [
      "\uA9D0",
      "\uA9D1",
      "\uA9D2",
      "\uA9D3",
      "\uA9D4",
      "\uA9D5",
      "\uA9D6",
      "\uA9D7",
      "\uA9D8",
      "\uA9D9"
    ],
    "kali": [
      "\uA900",
      "\uA901",
      "\uA902",
      "\uA903",
      "\uA904",
      "\uA905",
      "\uA906",
      "\uA907",
      "\uA908",
      "\uA909"
    ],
    "khmr": [
      "\u17E0",
      "\u17E1",
      "\u17E2",
      "\u17E3",
      "\u17E4",
      "\u17E5",
      "\u17E6",
      "\u17E7",
      "\u17E8",
      "\u17E9"
    ],
    "knda": [
      "\u0CE6",
      "\u0CE7",
      "\u0CE8",
      "\u0CE9",
      "\u0CEA",
      "\u0CEB",
      "\u0CEC",
      "\u0CED",
      "\u0CEE",
      "\u0CEF"
    ],
    "lana": [
      "\u1A80",
      "\u1A81",
      "\u1A82",
      "\u1A83",
      "\u1A84",
      "\u1A85",
      "\u1A86",
      "\u1A87",
      "\u1A88",
      "\u1A89"
    ],
    "lanatham": [
      "\u1A90",
      "\u1A91",
      "\u1A92",
      "\u1A93",
      "\u1A94",
      "\u1A95",
      "\u1A96",
      "\u1A97",
      "\u1A98",
      "\u1A99"
    ],
    "laoo": [
      "\u0ED0",
      "\u0ED1",
      "\u0ED2",
      "\u0ED3",
      "\u0ED4",
      "\u0ED5",
      "\u0ED6",
      "\u0ED7",
      "\u0ED8",
      "\u0ED9"
    ],
    "lepc": [
      "\u1A90",
      "\u1A91",
      "\u1A92",
      "\u1A93",
      "\u1A94",
      "\u1A95",
      "\u1A96",
      "\u1A97",
      "\u1A98",
      "\u1A99"
    ],
    "limb": [
      "\u1946",
      "\u1947",
      "\u1948",
      "\u1949",
      "\u194A",
      "\u194B",
      "\u194C",
      "\u194D",
      "\u194E",
      "\u194F"
    ],
    "mathbold": [
      "\u{1D7CE}",
      "\u{1D7CF}",
      "\u{1D7D0}",
      "\u{1D7D1}",
      "\u{1D7D2}",
      "\u{1D7D3}",
      "\u{1D7D4}",
      "\u{1D7D5}",
      "\u{1D7D6}",
      "\u{1D7D7}"
    ],
    "mathdbl": [
      "\u{1D7D8}",
      "\u{1D7D9}",
      "\u{1D7DA}",
      "\u{1D7DB}",
      "\u{1D7DC}",
      "\u{1D7DD}",
      "\u{1D7DE}",
      "\u{1D7DF}",
      "\u{1D7E0}",
      "\u{1D7E1}"
    ],
    "mathmono": [
      "\u{1D7F6}",
      "\u{1D7F7}",
      "\u{1D7F8}",
      "\u{1D7F9}",
      "\u{1D7FA}",
      "\u{1D7FB}",
      "\u{1D7FC}",
      "\u{1D7FD}",
      "\u{1D7FE}",
      "\u{1D7FF}"
    ],
    "mathsanb": [
      "\u{1D7EC}",
      "\u{1D7ED}",
      "\u{1D7EE}",
      "\u{1D7EF}",
      "\u{1D7F0}",
      "\u{1D7F1}",
      "\u{1D7F2}",
      "\u{1D7F3}",
      "\u{1D7F4}",
      "\u{1D7F5}"
    ],
    "mathsans": [
      "\u{1D7E2}",
      "\u{1D7E3}",
      "\u{1D7E4}",
      "\u{1D7E5}",
      "\u{1D7E6}",
      "\u{1D7E7}",
      "\u{1D7E8}",
      "\u{1D7E9}",
      "\u{1D7EA}",
      "\u{1D7EB}"
    ],
    "mlym": [
      "\u0D66",
      "\u0D67",
      "\u0D68",
      "\u0D69",
      "\u0D6A",
      "\u0D6B",
      "\u0D6C",
      "\u0D6D",
      "\u0D6E",
      "\u0D6F"
    ],
    "modi": [
      "\u{11650}",
      "\u{11651}",
      "\u{11652}",
      "\u{11653}",
      "\u{11654}",
      "\u{11655}",
      "\u{11656}",
      "\u{11657}",
      "\u{11658}",
      "\u{11659}"
    ],
    "mong": [
      "\u1810",
      "\u1811",
      "\u1812",
      "\u1813",
      "\u1814",
      "\u1815",
      "\u1816",
      "\u1817",
      "\u1818",
      "\u1819"
    ],
    "mroo": [
      "\u{16A60}",
      "\u{16A61}",
      "\u{16A62}",
      "\u{16A63}",
      "\u{16A64}",
      "\u{16A65}",
      "\u{16A66}",
      "\u{16A67}",
      "\u{16A68}",
      "\u{16A69}"
    ],
    "mtei": [
      "\uABF0",
      "\uABF1",
      "\uABF2",
      "\uABF3",
      "\uABF4",
      "\uABF5",
      "\uABF6",
      "\uABF7",
      "\uABF8",
      "\uABF9"
    ],
    "mymr": [
      "\u1040",
      "\u1041",
      "\u1042",
      "\u1043",
      "\u1044",
      "\u1045",
      "\u1046",
      "\u1047",
      "\u1048",
      "\u1049"
    ],
    "mymrshan": [
      "\u1090",
      "\u1091",
      "\u1092",
      "\u1093",
      "\u1094",
      "\u1095",
      "\u1096",
      "\u1097",
      "\u1098",
      "\u1099"
    ],
    "mymrtlng": [
      "\uA9F0",
      "\uA9F1",
      "\uA9F2",
      "\uA9F3",
      "\uA9F4",
      "\uA9F5",
      "\uA9F6",
      "\uA9F7",
      "\uA9F8",
      "\uA9F9"
    ],
    "newa": [
      "\u{11450}",
      "\u{11451}",
      "\u{11452}",
      "\u{11453}",
      "\u{11454}",
      "\u{11455}",
      "\u{11456}",
      "\u{11457}",
      "\u{11458}",
      "\u{11459}"
    ],
    "nkoo": [
      "\u07C0",
      "\u07C1",
      "\u07C2",
      "\u07C3",
      "\u07C4",
      "\u07C5",
      "\u07C6",
      "\u07C7",
      "\u07C8",
      "\u07C9"
    ],
    "olck": [
      "\u1C50",
      "\u1C51",
      "\u1C52",
      "\u1C53",
      "\u1C54",
      "\u1C55",
      "\u1C56",
      "\u1C57",
      "\u1C58",
      "\u1C59"
    ],
    "orya": [
      "\u0B66",
      "\u0B67",
      "\u0B68",
      "\u0B69",
      "\u0B6A",
      "\u0B6B",
      "\u0B6C",
      "\u0B6D",
      "\u0B6E",
      "\u0B6F"
    ],
    "osma": [
      "\u{104A0}",
      "\u{104A1}",
      "\u{104A2}",
      "\u{104A3}",
      "\u{104A4}",
      "\u{104A5}",
      "\u{104A6}",
      "\u{104A7}",
      "\u{104A8}",
      "\u{104A9}"
    ],
    "rohg": [
      "\u{10D30}",
      "\u{10D31}",
      "\u{10D32}",
      "\u{10D33}",
      "\u{10D34}",
      "\u{10D35}",
      "\u{10D36}",
      "\u{10D37}",
      "\u{10D38}",
      "\u{10D39}"
    ],
    "saur": [
      "\uA8D0",
      "\uA8D1",
      "\uA8D2",
      "\uA8D3",
      "\uA8D4",
      "\uA8D5",
      "\uA8D6",
      "\uA8D7",
      "\uA8D8",
      "\uA8D9"
    ],
    "segment": [
      "\u{1FBF0}",
      "\u{1FBF1}",
      "\u{1FBF2}",
      "\u{1FBF3}",
      "\u{1FBF4}",
      "\u{1FBF5}",
      "\u{1FBF6}",
      "\u{1FBF7}",
      "\u{1FBF8}",
      "\u{1FBF9}"
    ],
    "shrd": [
      "\u{111D0}",
      "\u{111D1}",
      "\u{111D2}",
      "\u{111D3}",
      "\u{111D4}",
      "\u{111D5}",
      "\u{111D6}",
      "\u{111D7}",
      "\u{111D8}",
      "\u{111D9}"
    ],
    "sind": [
      "\u{112F0}",
      "\u{112F1}",
      "\u{112F2}",
      "\u{112F3}",
      "\u{112F4}",
      "\u{112F5}",
      "\u{112F6}",
      "\u{112F7}",
      "\u{112F8}",
      "\u{112F9}"
    ],
    "sinh": [
      "\u0DE6",
      "\u0DE7",
      "\u0DE8",
      "\u0DE9",
      "\u0DEA",
      "\u0DEB",
      "\u0DEC",
      "\u0DED",
      "\u0DEE",
      "\u0DEF"
    ],
    "sora": [
      "\u{110F0}",
      "\u{110F1}",
      "\u{110F2}",
      "\u{110F3}",
      "\u{110F4}",
      "\u{110F5}",
      "\u{110F6}",
      "\u{110F7}",
      "\u{110F8}",
      "\u{110F9}"
    ],
    "sund": [
      "\u1BB0",
      "\u1BB1",
      "\u1BB2",
      "\u1BB3",
      "\u1BB4",
      "\u1BB5",
      "\u1BB6",
      "\u1BB7",
      "\u1BB8",
      "\u1BB9"
    ],
    "takr": [
      "\u{116C0}",
      "\u{116C1}",
      "\u{116C2}",
      "\u{116C3}",
      "\u{116C4}",
      "\u{116C5}",
      "\u{116C6}",
      "\u{116C7}",
      "\u{116C8}",
      "\u{116C9}"
    ],
    "talu": [
      "\u19D0",
      "\u19D1",
      "\u19D2",
      "\u19D3",
      "\u19D4",
      "\u19D5",
      "\u19D6",
      "\u19D7",
      "\u19D8",
      "\u19D9"
    ],
    "tamldec": [
      "\u0BE6",
      "\u0BE7",
      "\u0BE8",
      "\u0BE9",
      "\u0BEA",
      "\u0BEB",
      "\u0BEC",
      "\u0BED",
      "\u0BEE",
      "\u0BEF"
    ],
    "telu": [
      "\u0C66",
      "\u0C67",
      "\u0C68",
      "\u0C69",
      "\u0C6A",
      "\u0C6B",
      "\u0C6C",
      "\u0C6D",
      "\u0C6E",
      "\u0C6F"
    ],
    "thai": [
      "\u0E50",
      "\u0E51",
      "\u0E52",
      "\u0E53",
      "\u0E54",
      "\u0E55",
      "\u0E56",
      "\u0E57",
      "\u0E58",
      "\u0E59"
    ],
    "tibt": [
      "\u0F20",
      "\u0F21",
      "\u0F22",
      "\u0F23",
      "\u0F24",
      "\u0F25",
      "\u0F26",
      "\u0F27",
      "\u0F28",
      "\u0F29"
    ],
    "tirh": [
      "\u{114D0}",
      "\u{114D1}",
      "\u{114D2}",
      "\u{114D3}",
      "\u{114D4}",
      "\u{114D5}",
      "\u{114D6}",
      "\u{114D7}",
      "\u{114D8}",
      "\u{114D9}"
    ],
    "vaii": [
      "\u1620",
      "\u1621",
      "\u1622",
      "\u1623",
      "\u1624",
      "\u1625",
      "\u1626",
      "\u1627",
      "\u1628",
      "\u1629"
    ],
    "wara": [
      "\u{118E0}",
      "\u{118E1}",
      "\u{118E2}",
      "\u{118E3}",
      "\u{118E4}",
      "\u{118E5}",
      "\u{118E6}",
      "\u{118E7}",
      "\u{118E8}",
      "\u{118E9}"
    ],
    "wcho": [
      "\u{1E2F0}",
      "\u{1E2F1}",
      "\u{1E2F2}",
      "\u{1E2F3}",
      "\u{1E2F4}",
      "\u{1E2F5}",
      "\u{1E2F6}",
      "\u{1E2F7}",
      "\u{1E2F8}",
      "\u{1E2F9}"
    ]
  };

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/regex.generated.js
  var S_UNICODE_REGEX = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/;

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/format_to_parts.js
  var CARET_S_UNICODE_REGEX = new RegExp("^".concat(S_UNICODE_REGEX.source));
  var S_DOLLAR_UNICODE_REGEX = new RegExp("".concat(S_UNICODE_REGEX.source, "$"));
  var CLDR_NUMBER_PATTERN = /[#0](?:[\.,][#0]+)*/g;
  function formatToParts(numberResult, data2, pl, options) {
    var sign = numberResult.sign, exponent = numberResult.exponent, magnitude = numberResult.magnitude;
    var notation = options.notation, style = options.style, numberingSystem = options.numberingSystem;
    var defaultNumberingSystem = data2.numbers.nu[0];
    var compactNumberPattern = null;
    if (notation === "compact" && magnitude) {
      compactNumberPattern = getCompactDisplayPattern(numberResult, pl, data2, style, options.compactDisplay, options.currencyDisplay, numberingSystem);
    }
    var nonNameCurrencyPart;
    if (style === "currency" && options.currencyDisplay !== "name") {
      var byCurrencyDisplay = data2.currencies[options.currency];
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
        var decimalData = data2.numbers.decimal[numberingSystem] || data2.numbers.decimal[defaultNumberingSystem];
        numberPattern = getPatternForSign(decimalData.standard, sign);
      } else if (style === "currency") {
        var currencyData = data2.numbers.currency[numberingSystem] || data2.numbers.currency[defaultNumberingSystem];
        numberPattern = getPatternForSign(currencyData[options.currencySign], sign);
      } else {
        var percentPattern = data2.numbers.percent[numberingSystem] || data2.numbers.percent[defaultNumberingSystem];
        numberPattern = getPatternForSign(percentPattern, sign);
      }
    } else {
      numberPattern = compactNumberPattern;
    }
    var decimalNumberPattern = CLDR_NUMBER_PATTERN.exec(numberPattern)[0];
    numberPattern = numberPattern.replace(CLDR_NUMBER_PATTERN, "{0}").replace(/'(.)'/g, "$1");
    if (style === "currency" && options.currencyDisplay !== "name") {
      var currencyData = data2.numbers.currency[numberingSystem] || data2.numbers.currency[defaultNumberingSystem];
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
    var symbols = data2.numbers.symbols[numberingSystem] || data2.numbers.symbols[defaultNumberingSystem];
    for (var _i = 0, numberPatternParts_1 = numberPatternParts; _i < numberPatternParts_1.length; _i++) {
      var part = numberPatternParts_1[_i];
      if (!part) {
        continue;
      }
      switch (part) {
        case "{0}": {
          numberParts.push.apply(numberParts, paritionNumberIntoParts(
            symbols,
            numberResult,
            notation,
            exponent,
            numberingSystem,
            // If compact number pattern exists, do not insert group separators.
            !compactNumberPattern && Boolean(options.useGrouping),
            decimalNumberPattern
          ));
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
          var unitPattern = (data2.numbers.currency[numberingSystem] || data2.numbers.currency[defaultNumberingSystem]).unitPattern;
          var unitName = void 0;
          var currencyNameData = data2.currencies[options.currency];
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
        var unitData = data2.units.simple[unit];
        var unitPattern = void 0;
        if (unitData) {
          unitPattern = selectPlural(pl, numberResult.roundedNumber * Math.pow(10, exponent), data2.units.simple[unit][unitDisplay]);
        } else {
          var _b = unit.split("-per-"), numeratorUnit = _b[0], denominatorUnit = _b[1];
          unitData = data2.units.simple[numeratorUnit];
          var numeratorUnitPattern = selectPlural(pl, numberResult.roundedNumber * Math.pow(10, exponent), data2.units.simple[numeratorUnit][unitDisplay]);
          var perUnitPattern = data2.units.simple[denominatorUnit].perUnit[unitDisplay];
          if (perUnitPattern) {
            unitPattern = perUnitPattern.replace("{0}", numeratorUnitPattern);
          } else {
            var perPattern = data2.units.compound.per[unitDisplay];
            var denominatorPattern = selectPlural(pl, 1, data2.units.simple[denominatorUnit][unitDisplay]);
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
  function paritionNumberIntoParts(symbols, numberResult, notation, exponent, numberingSystem, useGrouping, decimalNumberPattern) {
    var result = [];
    var n = numberResult.formattedString, x = numberResult.roundedNumber;
    if (isNaN(x)) {
      return [{ type: "nan", value: n }];
    } else if (!isFinite(x)) {
      return [{ type: "infinity", value: n }];
    }
    var digitReplacementTable = digitMapping[numberingSystem];
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
      var exponentResult = ToRawFixed(exponent, 0, 0);
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
  function getCompactDisplayPattern(numberResult, pl, data2, style, compactDisplay, currencyDisplay, numberingSystem) {
    var _a;
    var roundedNumber = numberResult.roundedNumber, sign = numberResult.sign, magnitude = numberResult.magnitude;
    var magnitudeKey = String(Math.pow(10, magnitude));
    var defaultNumberingSystem = data2.numbers.nu[0];
    var pattern;
    if (style === "currency" && currencyDisplay !== "name") {
      var byNumberingSystem = data2.numbers.currency;
      var currencyData = byNumberingSystem[numberingSystem] || byNumberingSystem[defaultNumberingSystem];
      var compactPluralRules = (_a = currencyData.short) === null || _a === void 0 ? void 0 : _a[magnitudeKey];
      if (!compactPluralRules) {
        return null;
      }
      pattern = selectPlural(pl, roundedNumber, compactPluralRules);
    } else {
      var byNumberingSystem = data2.numbers.decimal;
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/PartitionNumberPattern.js
  function PartitionNumberPattern(numberFormat, x, _a) {
    var _b;
    var getInternalSlots2 = _a.getInternalSlots;
    var internalSlots = getInternalSlots2(numberFormat);
    var pl = internalSlots.pl, dataLocaleData = internalSlots.dataLocaleData, numberingSystem = internalSlots.numberingSystem;
    var symbols = dataLocaleData.numbers.symbols[numberingSystem] || dataLocaleData.numbers.symbols[dataLocaleData.numbers.nu[0]];
    var magnitude = 0;
    var exponent = 0;
    var n;
    if (isNaN(x)) {
      n = symbols.nan;
    } else if (x == Number.POSITIVE_INFINITY || x == Number.NEGATIVE_INFINITY) {
      n = symbols.infinity;
    } else {
      if (!SameValue(x, -0)) {
        if (!isFinite(x)) {
          throw new Error("Input must be a mathematical value");
        }
        if (internalSlots.style == "percent") {
          x *= 100;
        }
        ;
        _b = ComputeExponent(numberFormat, x, {
          getInternalSlots: getInternalSlots2
        }), exponent = _b[0], magnitude = _b[1];
        x = exponent < 0 ? x * Math.pow(10, -exponent) : x / Math.pow(10, exponent);
      }
      var formatNumberResult = FormatNumericToString(internalSlots, x);
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
        if (SameValue(x, 0) || x > 0 || isNaN(x)) {
          sign = 0;
        } else {
          sign = -1;
        }
        break;
      case "always":
        if (SameValue(x, 0) || x > 0 || isNaN(x)) {
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
    return formatToParts({ roundedNumber: x, formattedString: n, exponent, magnitude, sign }, internalSlots.dataLocaleData, pl, internalSlots);
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/PartitionNumberRangePattern.js
  function PartitionNumberRangePattern(numberFormat, x, y, _a) {
    var getInternalSlots2 = _a.getInternalSlots;
    if (isNaN(x) || isNaN(y)) {
      throw new RangeError("Input must be a number");
    }
    var result = [];
    var xResult = PartitionNumberPattern(numberFormat, x, { getInternalSlots: getInternalSlots2 });
    var yResult = PartitionNumberPattern(numberFormat, y, { getInternalSlots: getInternalSlots2 });
    if (xResult === yResult) {
      return FormatApproximately(numberFormat, xResult, { getInternalSlots: getInternalSlots2 });
    }
    for (var _i = 0, xResult_1 = xResult; _i < xResult_1.length; _i++) {
      var r = xResult_1[_i];
      r.source = "startRange";
    }
    result = result.concat(xResult);
    var internalSlots = getInternalSlots2(numberFormat);
    var symbols = internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem];
    result.push({ type: "literal", value: symbols.rangeSign, source: "shared" });
    for (var _b = 0, yResult_1 = yResult; _b < yResult_1.length; _b++) {
      var r = yResult_1[_b];
      r.source = "endRange";
    }
    result = result.concat(yResult);
    return CollapseNumberRange(result);
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericRange.js
  function FormatNumericRange(numberFormat, x, y, _a) {
    var getInternalSlots2 = _a.getInternalSlots;
    var parts = PartitionNumberRangePattern(numberFormat, x, y, {
      getInternalSlots: getInternalSlots2
    });
    return parts.map(function(part) {
      return part.value;
    }).join("");
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericRangeToParts.js
  function FormatNumericRangeToParts(numberFormat, x, y, _a) {
    var getInternalSlots2 = _a.getInternalSlots;
    var parts = PartitionNumberRangePattern(numberFormat, x, y, {
      getInternalSlots: getInternalSlots2
    });
    return parts.map(function(part, index) {
      return {
        type: part.type,
        value: part.value,
        source: part.source,
        result: index.toString()
      };
    });
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToParts.js
  function FormatNumericToParts(nf, x, implDetails) {
    var parts = PartitionNumberPattern(nf, x, implDetails);
    var result = ArrayCreate(0);
    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
      var part = parts_1[_i];
      result.push({
        type: part.type,
        value: part.value
      });
    }
    return result;
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeLocaleList.js
  function CanonicalizeLocaleList2(locales) {
    return Intl.getCanonicalLocales(locales);
  }

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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatUnitOptions.js
  function SetNumberFormatUnitOptions(nf, options, _a) {
    if (options === void 0) {
      options = /* @__PURE__ */ Object.create(null);
    }
    var getInternalSlots2 = _a.getInternalSlots;
    var internalSlots = getInternalSlots2(nf);
    var style = GetOption(options, "style", "string", ["decimal", "percent", "currency", "unit"], "decimal");
    internalSlots.style = style;
    var currency = GetOption(options, "currency", "string", void 0, void 0);
    if (currency !== void 0 && !IsWellFormedCurrencyCode(currency)) {
      throw RangeError("Malformed currency code");
    }
    if (style === "currency" && currency === void 0) {
      throw TypeError("currency cannot be undefined");
    }
    var currencyDisplay = GetOption(options, "currencyDisplay", "string", ["code", "symbol", "narrowSymbol", "name"], "symbol");
    var currencySign = GetOption(options, "currencySign", "string", ["standard", "accounting"], "standard");
    var unit = GetOption(options, "unit", "string", void 0, void 0);
    if (unit !== void 0 && !IsWellFormedUnitIdentifier(unit)) {
      throw RangeError("Invalid unit argument for Intl.NumberFormat()");
    }
    if (style === "unit" && unit === void 0) {
      throw TypeError("unit cannot be undefined");
    }
    var unitDisplay = GetOption(options, "unitDisplay", "string", ["short", "narrow", "long"], "short");
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/InitializeNumberFormat.js
  var VALID_ROUND_INCREMENT_VALUES = [
    1,
    2,
    5,
    10,
    20,
    25,
    50,
    100,
    200,
    250,
    500,
    1e3,
    2e3
  ];
  function InitializeNumberFormat(nf, locales, opts, _a) {
    var getInternalSlots2 = _a.getInternalSlots, localeData = _a.localeData, availableLocales = _a.availableLocales, numberingSystemNames2 = _a.numberingSystemNames, getDefaultLocale = _a.getDefaultLocale, currencyDigitsData2 = _a.currencyDigitsData;
    var requestedLocales = CanonicalizeLocaleList(locales);
    var options = CoerceOptionsToObject(opts);
    var opt = /* @__PURE__ */ Object.create(null);
    var matcher = GetOption(options, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
    opt.localeMatcher = matcher;
    var numberingSystem = GetOption(options, "numberingSystem", "string", void 0, void 0);
    if (numberingSystem !== void 0 && numberingSystemNames2.indexOf(numberingSystem) < 0) {
      throw RangeError("Invalid numberingSystems: ".concat(numberingSystem));
    }
    opt.nu = numberingSystem;
    var r = ResolveLocale(
      Array.from(availableLocales),
      requestedLocales,
      opt,
      // [[RelevantExtensionKeys]] slot, which is a constant
      ["nu"],
      localeData,
      getDefaultLocale
    );
    var dataLocaleData = localeData[r.dataLocale];
    invariant(!!dataLocaleData, "Missing locale data for ".concat(r.dataLocale));
    var internalSlots = getInternalSlots2(nf);
    internalSlots.locale = r.locale;
    internalSlots.dataLocale = r.dataLocale;
    internalSlots.numberingSystem = r.nu;
    internalSlots.dataLocaleData = dataLocaleData;
    SetNumberFormatUnitOptions(nf, options, { getInternalSlots: getInternalSlots2 });
    var style = internalSlots.style;
    var mnfdDefault;
    var mxfdDefault;
    if (style === "currency") {
      var currency = internalSlots.currency;
      var cDigits = CurrencyDigits(currency, { currencyDigitsData: currencyDigitsData2 });
      mnfdDefault = cDigits;
      mxfdDefault = cDigits;
    } else {
      mnfdDefault = 0;
      mxfdDefault = style === "percent" ? 0 : 3;
    }
    var notation = GetOption(options, "notation", "string", ["standard", "scientific", "engineering", "compact"], "standard");
    internalSlots.notation = notation;
    SetNumberFormatDigitOptions(internalSlots, options, mnfdDefault, mxfdDefault, notation);
    var roundingIncrement = GetNumberOption(options, "roundingIncrement", 1, 5e3, 1);
    if (VALID_ROUND_INCREMENT_VALUES.indexOf(roundingIncrement) === -1) {
      throw new RangeError("Invalid rounding increment value: ".concat(roundingIncrement, ".\nValid values are ").concat(VALID_ROUND_INCREMENT_VALUES, "."));
    }
    if (roundingIncrement !== 1 && internalSlots.roundingType !== "fractionDigits") {
      throw new TypeError("For roundingIncrement > 1 only fractionDigits is a valid roundingType");
    }
    if (roundingIncrement !== 1 && internalSlots.maximumFractionDigits !== internalSlots.minimumFractionDigits) {
      throw new RangeError("With roundingIncrement > 1, maximumFractionDigits and minimumFractionDigits must be equal.");
    }
    internalSlots.roundingIncrement = roundingIncrement;
    var trailingZeroDisplay = GetOption(options, "trailingZeroDisplay", "string", ["auto", "stripIfInteger"], "auto");
    internalSlots.trailingZeroDisplay = trailingZeroDisplay;
    var compactDisplay = GetOption(options, "compactDisplay", "string", ["short", "long"], "short");
    var defaultUseGrouping = "auto";
    if (notation === "compact") {
      internalSlots.compactDisplay = compactDisplay;
      defaultUseGrouping = "min2";
    }
    internalSlots.useGrouping = GetStringOrBooleanOption(options, "useGrouping", ["min2", "auto", "always"], "always", false, defaultUseGrouping);
    internalSlots.signDisplay = GetOption(options, "signDisplay", "string", ["auto", "never", "always", "exceptZero", "negative"], "auto");
    internalSlots.roundingMode = GetOption(options, "roundingMode", "string", [
      "ceil",
      "floor",
      "expand",
      "trunc",
      "halfCeil",
      "halfFloor",
      "halfExpand",
      "halfTrunc",
      "halfEven"
    ], "halfExpand");
    return nf;
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

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/packages/intl-numberformat/lib/src/currency-digits.generated.js
  var currencyDigitsData = {
    "ADP": 0,
    "AFN": 0,
    "ALL": 0,
    "AMD": 2,
    "BHD": 3,
    "BIF": 0,
    "BYN": 2,
    "BYR": 0,
    "CAD": 2,
    "CHF": 2,
    "CLF": 4,
    "CLP": 0,
    "COP": 2,
    "CRC": 2,
    "CZK": 2,
    "DEFAULT": 2,
    "DJF": 0,
    "DKK": 2,
    "ESP": 0,
    "GNF": 0,
    "GYD": 2,
    "HUF": 2,
    "IDR": 2,
    "IQD": 0,
    "IRR": 0,
    "ISK": 0,
    "ITL": 0,
    "JOD": 3,
    "JPY": 0,
    "KMF": 0,
    "KPW": 0,
    "KRW": 0,
    "KWD": 3,
    "LAK": 0,
    "LBP": 0,
    "LUF": 0,
    "LYD": 3,
    "MGA": 0,
    "MGF": 0,
    "MMK": 0,
    "MNT": 2,
    "MRO": 0,
    "MUR": 2,
    "NOK": 2,
    "OMR": 3,
    "PKR": 2,
    "PYG": 0,
    "RSD": 0,
    "RWF": 0,
    "SEK": 2,
    "SLE": 2,
    "SLL": 0,
    "SOS": 0,
    "STD": 0,
    "SYP": 0,
    "TMM": 0,
    "TND": 3,
    "TRL": 0,
    "TWD": 2,
    "TZS": 2,
    "UGX": 0,
    "UYI": 0,
    "UYW": 4,
    "UZS": 2,
    "VEF": 2,
    "VND": 0,
    "VUV": 0,
    "XAF": 0,
    "XOF": 0,
    "XPF": 0,
    "YER": 0,
    "ZMK": 0,
    "ZWD": 0
  };

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/packages/intl-numberformat/lib/src/numbering-systems.generated.js
  var numberingSystemNames = ["adlm", "ahom", "arab", "arabext", "armn", "armnlow", "bali", "beng", "bhks", "brah", "cakm", "cham", "cyrl", "deva", "diak", "ethi", "fullwide", "geor", "gong", "gonm", "grek", "greklow", "gujr", "guru", "hanidays", "hanidec", "hans", "hansfin", "hant", "hantfin", "hebr", "hmng", "hmnp", "java", "jpan", "jpanfin", "jpanyear", "kali", "kawi", "khmr", "knda", "lana", "lanatham", "laoo", "latn", "lepc", "limb", "mathbold", "mathdbl", "mathmono", "mathsanb", "mathsans", "mlym", "modi", "mong", "mroo", "mtei", "mymr", "mymrshan", "mymrtlng", "nagm", "newa", "nkoo", "olck", "orya", "osma", "rohg", "roman", "romanlow", "saur", "segment", "shrd", "sind", "sinh", "sora", "sund", "takr", "talu", "taml", "tamldec", "telu", "thai", "tibt", "tirh", "tnsa", "vaii", "wara", "wcho"];

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/packages/intl-numberformat/lib/src/get_internal_slots.js
  var internalSlotMap = /* @__PURE__ */ new WeakMap();
  function getInternalSlots(x) {
    var internalSlots = internalSlotMap.get(x);
    if (!internalSlots) {
      internalSlots = /* @__PURE__ */ Object.create(null);
      internalSlotMap.set(x, internalSlots);
    }
    return internalSlots;
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/packages/intl-numberformat/lib/src/core.js
  var RESOLVED_OPTIONS_KEYS = [
    "locale",
    "numberingSystem",
    "style",
    "currency",
    "currencyDisplay",
    "currencySign",
    "unit",
    "unitDisplay",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "useGrouping",
    "notation",
    "compactDisplay",
    "signDisplay"
  ];
  var NumberFormat = function(locales, options) {
    if (!this || !OrdinaryHasInstance(NumberFormat, this)) {
      return new NumberFormat(locales, options);
    }
    InitializeNumberFormat(this, locales, options, {
      getInternalSlots,
      localeData: NumberFormat.localeData,
      availableLocales: NumberFormat.availableLocales,
      getDefaultLocale: NumberFormat.getDefaultLocale,
      currencyDigitsData,
      numberingSystemNames
    });
    var internalSlots = getInternalSlots(this);
    var dataLocale = internalSlots.dataLocale;
    var dataLocaleData = NumberFormat.localeData[dataLocale];
    invariant(dataLocaleData !== void 0, "Cannot load locale-dependent data for ".concat(dataLocale, "."));
    internalSlots.pl = new Intl.PluralRules(dataLocale, {
      minimumFractionDigits: internalSlots.minimumFractionDigits,
      maximumFractionDigits: internalSlots.maximumFractionDigits,
      minimumIntegerDigits: internalSlots.minimumIntegerDigits,
      minimumSignificantDigits: internalSlots.minimumSignificantDigits,
      maximumSignificantDigits: internalSlots.maximumSignificantDigits
    });
    return this;
  };
  function formatToParts2(x) {
    return FormatNumericToParts(this, toNumeric(x), {
      getInternalSlots
    });
  }
  function formatRange(start, end) {
    return FormatNumericRange(this, start, end, { getInternalSlots });
  }
  function formatRangeToParts(start, end) {
    return FormatNumericRangeToParts(this, start, end, { getInternalSlots });
  }
  try {
    Object.defineProperty(formatToParts2, "name", {
      value: "formatToParts",
      enumerable: false,
      writable: false,
      configurable: true
    });
  } catch (e) {
  }
  defineProperty(NumberFormat.prototype, "formatToParts", {
    value: formatToParts2
  });
  defineProperty(NumberFormat.prototype, "formatRange", {
    value: formatRange
  });
  defineProperty(NumberFormat.prototype, "formatRangeToParts", {
    value: formatRangeToParts
  });
  defineProperty(NumberFormat.prototype, "resolvedOptions", {
    value: function resolvedOptions() {
      if (typeof this !== "object" || !OrdinaryHasInstance(NumberFormat, this)) {
        throw TypeError("Method Intl.NumberFormat.prototype.resolvedOptions called on incompatible receiver");
      }
      var internalSlots = getInternalSlots(this);
      var ro = {};
      for (var _i = 0, RESOLVED_OPTIONS_KEYS_1 = RESOLVED_OPTIONS_KEYS; _i < RESOLVED_OPTIONS_KEYS_1.length; _i++) {
        var key = RESOLVED_OPTIONS_KEYS_1[_i];
        var value = internalSlots[key];
        if (value !== void 0) {
          ro[key] = value;
        }
      }
      if (internalSlots.roundingType === "morePrecision") {
        ro.roundingPriority = "morePrecision";
      } else if (internalSlots.roundingType === "lessPrecision") {
        ro.roundingPriority = "lessPrecision";
      } else {
        ro.roundingPriority = "auto";
      }
      return ro;
    }
  });
  var formatDescriptor = {
    enumerable: false,
    configurable: true,
    get: function() {
      if (typeof this !== "object" || !OrdinaryHasInstance(NumberFormat, this)) {
        throw TypeError("Intl.NumberFormat format property accessor called on incompatible receiver");
      }
      var internalSlots = getInternalSlots(this);
      var numberFormat = this;
      var boundFormat = internalSlots.boundFormat;
      if (boundFormat === void 0) {
        boundFormat = function(value) {
          var x = toNumeric(value);
          return numberFormat.formatToParts(x).map(function(x2) {
            return x2.value;
          }).join("");
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
  Object.defineProperty(NumberFormat.prototype, "format", formatDescriptor);
  defineProperty(NumberFormat, "supportedLocalesOf", {
    value: function supportedLocalesOf(locales, options) {
      return SupportedLocales(NumberFormat.availableLocales, CanonicalizeLocaleList(locales), options);
    }
  });
  NumberFormat.__addLocaleData = function __addLocaleData() {
    var data2 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      data2[_i] = arguments[_i];
    }
    for (var _a = 0, data_1 = data2; _a < data_1.length; _a++) {
      var _b = data_1[_a], d = _b.data, locale = _b.locale;
      var minimizedLocale = new Intl.Locale(locale).minimize().toString();
      NumberFormat.localeData[locale] = NumberFormat.localeData[minimizedLocale] = d;
      NumberFormat.availableLocales.add(minimizedLocale);
      NumberFormat.availableLocales.add(locale);
      if (!NumberFormat.__defaultLocale) {
        NumberFormat.__defaultLocale = minimizedLocale;
      }
    }
  };
  NumberFormat.__addUnitData = function __addUnitData(locale, unitsData) {
    var _a = NumberFormat.localeData, _b = locale, existingData = _a[_b];
    if (!existingData) {
      throw new Error('Locale data for "'.concat(locale, '" has not been loaded in NumberFormat. \nPlease __addLocaleData before adding additional unit data'));
    }
    for (var unit in unitsData.simple) {
      existingData.units.simple[unit] = unitsData.simple[unit];
    }
    for (var unit in unitsData.compound) {
      existingData.units.compound[unit] = unitsData.compound[unit];
    }
  };
  NumberFormat.__defaultLocale = "";
  NumberFormat.localeData = {};
  NumberFormat.availableLocales = /* @__PURE__ */ new Set();
  NumberFormat.getDefaultLocale = function() {
    return NumberFormat.__defaultLocale;
  };
  NumberFormat.polyfilled = true;
  function toNumeric(val) {
    if (typeof val === "bigint") {
      return val;
    }
    return ToNumber(val);
  }
  try {
    if (typeof Symbol !== "undefined") {
      Object.defineProperty(NumberFormat.prototype, Symbol.toStringTag, {
        configurable: true,
        enumerable: false,
        writable: false,
        value: "Intl.NumberFormat"
      });
    }
    Object.defineProperty(NumberFormat.prototype.constructor, "length", {
      configurable: true,
      enumerable: false,
      writable: false,
      value: 0
    });
    Object.defineProperty(NumberFormat.supportedLocalesOf, "length", {
      configurable: true,
      enumerable: false,
      writable: false,
      value: 1
    });
    Object.defineProperty(NumberFormat, "prototype", {
      configurable: false,
      enumerable: false,
      writable: false,
      value: NumberFormat.prototype
    });
  } catch (e) {
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/packages/intl-numberformat/lib/src/to_locale_string.js
  function toLocaleString(x, locales, options) {
    var numberFormat = new NumberFormat(locales, options);
    return numberFormat.format(x);
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/packages/intl-numberformat/lib/supported-locales.generated.js
  var supportedLocales = ["af", "af-NA", "agq", "ak", "am", "ar", "ar-AE", "ar-BH", "ar-DJ", "ar-DZ", "ar-EG", "ar-EH", "ar-ER", "ar-IL", "ar-IQ", "ar-JO", "ar-KM", "ar-KW", "ar-LB", "ar-LY", "ar-MA", "ar-MR", "ar-OM", "ar-PS", "ar-QA", "ar-SA", "ar-SD", "ar-SO", "ar-SS", "ar-SY", "ar-TD", "ar-TN", "ar-YE", "as", "asa", "ast", "az", "az-Cyrl", "az-Latn", "bas", "be", "be-tarask", "bem", "bez", "bg", "bm", "bn", "bn-IN", "bo", "bo-IN", "br", "brx", "bs", "bs-Cyrl", "bs-Latn", "ca", "ca-AD", "ca-ES-valencia", "ca-FR", "ca-IT", "ccp", "ccp-IN", "ce", "ceb", "cgg", "chr", "ckb", "ckb-IR", "cs", "cy", "da", "da-GL", "dav", "de", "de-AT", "de-BE", "de-CH", "de-IT", "de-LI", "de-LU", "dje", "doi", "dsb", "dua", "dyo", "dz", "ebu", "ee", "ee-TG", "el", "el-CY", "en", "en-001", "en-150", "en-AE", "en-AG", "en-AI", "en-AS", "en-AT", "en-AU", "en-BB", "en-BE", "en-BI", "en-BM", "en-BS", "en-BW", "en-BZ", "en-CA", "en-CC", "en-CH", "en-CK", "en-CM", "en-CX", "en-CY", "en-DE", "en-DG", "en-DK", "en-DM", "en-ER", "en-FI", "en-FJ", "en-FK", "en-FM", "en-GB", "en-GD", "en-GG", "en-GH", "en-GI", "en-GM", "en-GU", "en-GY", "en-HK", "en-IE", "en-IL", "en-IM", "en-IN", "en-IO", "en-JE", "en-JM", "en-KE", "en-KI", "en-KN", "en-KY", "en-LC", "en-LR", "en-LS", "en-MG", "en-MH", "en-MO", "en-MP", "en-MS", "en-MT", "en-MU", "en-MW", "en-MY", "en-NA", "en-NF", "en-NG", "en-NL", "en-NR", "en-NU", "en-NZ", "en-PG", "en-PH", "en-PK", "en-PN", "en-PR", "en-PW", "en-RW", "en-SB", "en-SC", "en-SD", "en-SE", "en-SG", "en-SH", "en-SI", "en-SL", "en-SS", "en-SX", "en-SZ", "en-TC", "en-TK", "en-TO", "en-TT", "en-TV", "en-TZ", "en-UG", "en-UM", "en-VC", "en-VG", "en-VI", "en-VU", "en-WS", "en-ZA", "en-ZM", "en-ZW", "eo", "es", "es-419", "es-AR", "es-BO", "es-BR", "es-BZ", "es-CL", "es-CO", "es-CR", "es-CU", "es-DO", "es-EA", "es-EC", "es-GQ", "es-GT", "es-HN", "es-IC", "es-MX", "es-NI", "es-PA", "es-PE", "es-PH", "es-PR", "es-PY", "es-SV", "es-US", "es-UY", "es-VE", "et", "eu", "ewo", "fa", "fa-AF", "ff", "ff-Adlm", "ff-Adlm-BF", "ff-Adlm-CM", "ff-Adlm-GH", "ff-Adlm-GM", "ff-Adlm-GW", "ff-Adlm-LR", "ff-Adlm-MR", "ff-Adlm-NE", "ff-Adlm-NG", "ff-Adlm-SL", "ff-Adlm-SN", "ff-Latn", "ff-Latn-BF", "ff-Latn-CM", "ff-Latn-GH", "ff-Latn-GM", "ff-Latn-GN", "ff-Latn-GW", "ff-Latn-LR", "ff-Latn-MR", "ff-Latn-NE", "ff-Latn-NG", "ff-Latn-SL", "fi", "fil", "fo", "fo-DK", "fr", "fr-BE", "fr-BF", "fr-BI", "fr-BJ", "fr-BL", "fr-CA", "fr-CD", "fr-CF", "fr-CG", "fr-CH", "fr-CI", "fr-CM", "fr-DJ", "fr-DZ", "fr-GA", "fr-GF", "fr-GN", "fr-GP", "fr-GQ", "fr-HT", "fr-KM", "fr-LU", "fr-MA", "fr-MC", "fr-MF", "fr-MG", "fr-ML", "fr-MQ", "fr-MR", "fr-MU", "fr-NC", "fr-NE", "fr-PF", "fr-PM", "fr-RE", "fr-RW", "fr-SC", "fr-SN", "fr-SY", "fr-TD", "fr-TG", "fr-TN", "fr-VU", "fr-WF", "fr-YT", "fur", "fy", "ga", "ga-GB", "gd", "gl", "gsw", "gsw-FR", "gsw-LI", "gu", "guz", "gv", "ha", "ha-GH", "ha-NE", "haw", "he", "hi", "hr", "hr-BA", "hsb", "hu", "hy", "ia", "id", "ig", "ii", "is", "it", "it-CH", "it-SM", "it-VA", "ja", "jgo", "jmc", "jv", "ka", "kab", "kam", "kde", "kea", "kgp", "khq", "ki", "kk", "kkj", "kl", "kln", "km", "kn", "ko", "ko-KP", "kok", "ks", "ks-Arab", "ksb", "ksf", "ksh", "ku", "kw", "ky", "lag", "lb", "lg", "lkt", "ln", "ln-AO", "ln-CF", "ln-CG", "lo", "lrc", "lrc-IQ", "lt", "lu", "luo", "luy", "lv", "mai", "mas", "mas-TZ", "mer", "mfe", "mg", "mgh", "mgo", "mi", "mk", "ml", "mn", "mni", "mni-Beng", "mr", "ms", "ms-BN", "ms-ID", "ms-SG", "mt", "mua", "my", "mzn", "naq", "nb", "nb-SJ", "nd", "nds", "nds-NL", "ne", "ne-IN", "nl", "nl-AW", "nl-BE", "nl-BQ", "nl-CW", "nl-SR", "nl-SX", "nmg", "nn", "nnh", "no", "nus", "nyn", "om", "om-KE", "or", "os", "os-RU", "pa", "pa-Arab", "pa-Guru", "pcm", "pl", "ps", "ps-PK", "pt", "pt-AO", "pt-CH", "pt-CV", "pt-GQ", "pt-GW", "pt-LU", "pt-MO", "pt-MZ", "pt-PT", "pt-ST", "pt-TL", "qu", "qu-BO", "qu-EC", "rm", "rn", "ro", "ro-MD", "rof", "ru", "ru-BY", "ru-KG", "ru-KZ", "ru-MD", "ru-UA", "rw", "rwk", "sa", "sah", "saq", "sat", "sat-Olck", "sbp", "sc", "sd", "sd-Arab", "sd-Deva", "se", "se-FI", "se-SE", "seh", "ses", "sg", "shi", "shi-Latn", "shi-Tfng", "si", "sk", "sl", "smn", "sn", "so", "so-DJ", "so-ET", "so-KE", "sq", "sq-MK", "sq-XK", "sr", "sr-Cyrl", "sr-Cyrl-BA", "sr-Cyrl-ME", "sr-Cyrl-XK", "sr-Latn", "sr-Latn-BA", "sr-Latn-ME", "sr-Latn-XK", "su", "su-Latn", "sv", "sv-AX", "sv-FI", "sw", "sw-CD", "sw-KE", "sw-UG", "ta", "ta-LK", "ta-MY", "ta-SG", "te", "teo", "teo-KE", "tg", "th", "ti", "ti-ER", "tk", "to", "tr", "tr-CY", "tt", "twq", "tzm", "ug", "uk", "und", "ur", "ur-IN", "uz", "uz-Arab", "uz-Cyrl", "uz-Latn", "vai", "vai-Latn", "vai-Vaii", "vi", "vun", "wae", "wo", "xh", "xog", "yav", "yi", "yo", "yo-BJ", "yrl", "yrl-CO", "yrl-VE", "yue", "yue-Hans", "yue-Hant", "zgh", "zh", "zh-Hans", "zh-Hans-HK", "zh-Hans-MO", "zh-Hans-SG", "zh-Hant", "zh-Hant-HK", "zh-Hant-MO", "zu"];

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/packages/intl-numberformat/lib/should-polyfill.js
  function onlySupportsEn() {
    return !Intl.NumberFormat.polyfilled && !Intl.NumberFormat.supportedLocalesOf(["es"]).length;
  }
  function supportsES2020() {
    try {
      var s = new Intl.NumberFormat("en", {
        style: "unit",
        unit: "bit",
        unitDisplay: "long",
        notation: "scientific"
      }).format(1e4);
      if (s !== "1E4 bits") {
        return false;
      }
    } catch (e) {
      return false;
    }
    return true;
  }
  function supportsES2023() {
    try {
      var s = new Intl.NumberFormat("en", {
        notation: "compact",
        minimumSignificantDigits: 3,
        maximumSignificantDigits: 3,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        // @ts-ignore TS types are old
        roundingPriority: "morePrecision"
      }).format(1e8);
      return s === "100.00M";
    } catch (e) {
      return false;
    }
  }
  function supportedLocalesOf2(locale) {
    if (!locale) {
      return true;
    }
    var locales = Array.isArray(locale) ? locale : [locale];
    return Intl.NumberFormat.supportedLocalesOf(locales).length === locales.length;
  }
  function shouldPolyfill(locale) {
    if (locale === void 0) {
      locale = "en";
    }
    if (typeof Intl === "undefined" || !("NumberFormat" in Intl) || !supportsES2020() || !supportsES2023() || onlySupportsEn() || !supportedLocalesOf2(locale)) {
      return locale ? match([locale], supportedLocales, "en") : void 0;
    }
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin_arm64-fastbuild/bin/packages/intl-numberformat/lib/polyfill.js
  if (shouldPolyfill()) {
    defineProperty(Intl, "NumberFormat", { value: NumberFormat });
    defineProperty(Number.prototype, "toLocaleString", {
      value: function toLocaleString2(locales, options) {
        return toLocaleString(this, locales, options);
      }
    });
  }
})();
//# sourceMappingURL=polyfill.iife.js.map
