(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeLocaleList.js
  function CanonicalizeLocaleList(locales) {
    return Intl.getCanonicalLocales(locales);
  }

  // node_modules/.aspect_rules_js/decimal.js@10.5.0/node_modules/decimal.js/decimal.mjs
  var EXP_LIMIT = 9e15;
  var MAX_DIGITS = 1e9;
  var NUMERALS = "0123456789abcdef";
  var LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
  var PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
  var DEFAULTS = {
    // These values must be integers within the stated ranges (inclusive).
    // Most of these values can be changed at run-time using the `Decimal.config` method.
    // The maximum number of significant digits of the result of a calculation or base conversion.
    // E.g. `Decimal.config({ precision: 20 });`
    precision: 20,
    // 1 to MAX_DIGITS
    // The rounding mode used when rounding to `precision`.
    //
    // ROUND_UP         0 Away from zero.
    // ROUND_DOWN       1 Towards zero.
    // ROUND_CEIL       2 Towards +Infinity.
    // ROUND_FLOOR      3 Towards -Infinity.
    // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
    // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
    // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
    // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
    // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
    //
    // E.g.
    // `Decimal.rounding = 4;`
    // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
    rounding: 4,
    // 0 to 8
    // The modulo mode used when calculating the modulus: a mod n.
    // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
    // The remainder (r) is calculated as: r = a - n * q.
    //
    // UP         0 The remainder is positive if the dividend is negative, else is negative.
    // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
    // FLOOR      3 The remainder has the same sign as the divisor (Python %).
    // HALF_EVEN  6 The IEEE 754 remainder function.
    // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
    //
    // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
    // division (9) are commonly used for the modulus operation. The other rounding modes can also
    // be used, but they may not give useful results.
    modulo: 1,
    // 0 to 9
    // The exponent value at and beneath which `toString` returns exponential notation.
    // JavaScript numbers: -7
    toExpNeg: -7,
    // 0 to -EXP_LIMIT
    // The exponent value at and above which `toString` returns exponential notation.
    // JavaScript numbers: 21
    toExpPos: 21,
    // 0 to EXP_LIMIT
    // The minimum exponent value, beneath which underflow to zero occurs.
    // JavaScript numbers: -324  (5e-324)
    minE: -EXP_LIMIT,
    // -1 to -EXP_LIMIT
    // The maximum exponent value, above which overflow to Infinity occurs.
    // JavaScript numbers: 308  (1.7976931348623157e+308)
    maxE: EXP_LIMIT,
    // 1 to EXP_LIMIT
    // Whether to use cryptographically-secure random number generation, if available.
    crypto: false
    // true/false
  };
  var inexact;
  var quadrant;
  var external = true;
  var decimalError = "[DecimalError] ";
  var invalidArgument = decimalError + "Invalid argument: ";
  var precisionLimitExceeded = decimalError + "Precision limit exceeded";
  var cryptoUnavailable = decimalError + "crypto unavailable";
  var tag = "[object Decimal]";
  var mathfloor = Math.floor;
  var mathpow = Math.pow;
  var isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
  var isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
  var isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
  var isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  var BASE = 1e7;
  var LOG_BASE = 7;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var LN10_PRECISION = LN10.length - 1;
  var PI_PRECISION = PI.length - 1;
  var P = { toStringTag: tag };
  P.absoluteValue = P.abs = function() {
    var x = new this.constructor(this);
    if (x.s < 0)
      x.s = 1;
    return finalise(x);
  };
  P.ceil = function() {
    return finalise(new this.constructor(this), this.e + 1, 2);
  };
  P.clampedTo = P.clamp = function(min2, max2) {
    var k, x = this, Ctor = x.constructor;
    min2 = new Ctor(min2);
    max2 = new Ctor(max2);
    if (!min2.s || !max2.s)
      return new Ctor(NaN);
    if (min2.gt(max2))
      throw Error(invalidArgument + max2);
    k = x.cmp(min2);
    return k < 0 ? min2 : x.cmp(max2) > 0 ? max2 : new Ctor(x);
  };
  P.comparedTo = P.cmp = function(y) {
    var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs = x.s, ys = y.s;
    if (!xd || !yd) {
      return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
    }
    if (!xd[0] || !yd[0])
      return xd[0] ? xs : yd[0] ? -ys : 0;
    if (xs !== ys)
      return xs;
    if (x.e !== y.e)
      return x.e > y.e ^ xs < 0 ? 1 : -1;
    xdL = xd.length;
    ydL = yd.length;
    for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
      if (xd[i] !== yd[i])
        return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
    }
    return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
  };
  P.cosine = P.cos = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.d)
      return new Ctor(NaN);
    if (!x.d[0])
      return new Ctor(1);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
    Ctor.rounding = 1;
    x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
  };
  P.cubeRoot = P.cbrt = function() {
    var e, m, n, r, rep, s, sd, t, t3, t3plusx, x = this, Ctor = x.constructor;
    if (!x.isFinite() || x.isZero())
      return new Ctor(x);
    external = false;
    s = x.s * mathpow(x.s * x, 1 / 3);
    if (!s || Math.abs(s) == 1 / 0) {
      n = digitsToString(x.d);
      e = x.e;
      if (s = (e - n.length + 1) % 3)
        n += s == 1 || s == -2 ? "0" : "00";
      s = mathpow(n, 1 / 3);
      e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
      if (s == 1 / 0) {
        n = "5e" + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf("e") + 1) + e;
      }
      r = new Ctor(n);
      r.s = x.s;
    } else {
      r = new Ctor(s.toString());
    }
    sd = (e = Ctor.precision) + 3;
    for (; ; ) {
      t = r;
      t3 = t.times(t).times(t);
      t3plusx = t3.plus(x);
      r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
      if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
        n = n.slice(sd - 3, sd + 1);
        if (n == "9999" || !rep && n == "4999") {
          if (!rep) {
            finalise(t, e + 1, 0);
            if (t.times(t).times(t).eq(x)) {
              r = t;
              break;
            }
          }
          sd += 4;
          rep = 1;
        } else {
          if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
            finalise(r, e + 1, 1);
            m = !r.times(r).times(r).eq(x);
          }
          break;
        }
      }
    }
    external = true;
    return finalise(r, e, Ctor.rounding, m);
  };
  P.decimalPlaces = P.dp = function() {
    var w, d = this.d, n = NaN;
    if (d) {
      w = d.length - 1;
      n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
      w = d[w];
      if (w)
        for (; w % 10 == 0; w /= 10)
          n--;
      if (n < 0)
        n = 0;
    }
    return n;
  };
  P.dividedBy = P.div = function(y) {
    return divide(this, new this.constructor(y));
  };
  P.dividedToIntegerBy = P.divToInt = function(y) {
    var x = this, Ctor = x.constructor;
    return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
  };
  P.equals = P.eq = function(y) {
    return this.cmp(y) === 0;
  };
  P.floor = function() {
    return finalise(new this.constructor(this), this.e + 1, 3);
  };
  P.greaterThan = P.gt = function(y) {
    return this.cmp(y) > 0;
  };
  P.greaterThanOrEqualTo = P.gte = function(y) {
    var k = this.cmp(y);
    return k == 1 || k === 0;
  };
  P.hyperbolicCosine = P.cosh = function() {
    var k, n, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
    if (!x.isFinite())
      return new Ctor(x.s ? 1 / 0 : NaN);
    if (x.isZero())
      return one;
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
    Ctor.rounding = 1;
    len = x.d.length;
    if (len < 32) {
      k = Math.ceil(len / 3);
      n = (1 / tinyPow(4, k)).toString();
    } else {
      k = 16;
      n = "2.3283064365386962890625e-10";
    }
    x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
    var cosh2_x, i = k, d8 = new Ctor(8);
    for (; i--; ) {
      cosh2_x = x.times(x);
      x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
    }
    return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
  };
  P.hyperbolicSine = P.sinh = function() {
    var k, pr, rm, len, x = this, Ctor = x.constructor;
    if (!x.isFinite() || x.isZero())
      return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
    Ctor.rounding = 1;
    len = x.d.length;
    if (len < 3) {
      x = taylorSeries(Ctor, 2, x, x, true);
    } else {
      k = 1.4 * Math.sqrt(len);
      k = k > 16 ? 16 : k | 0;
      x = x.times(1 / tinyPow(5, k));
      x = taylorSeries(Ctor, 2, x, x, true);
      var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
      for (; k--; ) {
        sinh2_x = x.times(x);
        x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
      }
    }
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return finalise(x, pr, rm, true);
  };
  P.hyperbolicTangent = P.tanh = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.isFinite())
      return new Ctor(x.s);
    if (x.isZero())
      return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 7;
    Ctor.rounding = 1;
    return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
  };
  P.inverseCosine = P.acos = function() {
    var x = this, Ctor = x.constructor, k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
    if (k !== -1) {
      return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
    }
    if (x.isZero())
      return getPi(Ctor, pr + 4, rm).times(0.5);
    Ctor.precision = pr + 6;
    Ctor.rounding = 1;
    x = new Ctor(1).minus(x).div(x.plus(1)).sqrt().atan();
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.times(2);
  };
  P.inverseHyperbolicCosine = P.acosh = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (x.lte(1))
      return new Ctor(x.eq(1) ? 0 : NaN);
    if (!x.isFinite())
      return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
    Ctor.rounding = 1;
    external = false;
    x = x.times(x).minus(1).sqrt().plus(x);
    external = true;
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.ln();
  };
  P.inverseHyperbolicSine = P.asinh = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.isFinite() || x.isZero())
      return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
    Ctor.rounding = 1;
    external = false;
    x = x.times(x).plus(1).sqrt().plus(x);
    external = true;
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.ln();
  };
  P.inverseHyperbolicTangent = P.atanh = function() {
    var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
    if (!x.isFinite())
      return new Ctor(NaN);
    if (x.e >= 0)
      return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    xsd = x.sd();
    if (Math.max(xsd, pr) < 2 * -x.e - 1)
      return finalise(new Ctor(x), pr, rm, true);
    Ctor.precision = wpr = xsd - x.e;
    x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
    Ctor.precision = pr + 4;
    Ctor.rounding = 1;
    x = x.ln();
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.times(0.5);
  };
  P.inverseSine = P.asin = function() {
    var halfPi, k, pr, rm, x = this, Ctor = x.constructor;
    if (x.isZero())
      return new Ctor(x);
    k = x.abs().cmp(1);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    if (k !== -1) {
      if (k === 0) {
        halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
        halfPi.s = x.s;
        return halfPi;
      }
      return new Ctor(NaN);
    }
    Ctor.precision = pr + 6;
    Ctor.rounding = 1;
    x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.times(2);
  };
  P.inverseTangent = P.atan = function() {
    var i, j, k, n, px, t, r, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
    if (!x.isFinite()) {
      if (!x.s)
        return new Ctor(NaN);
      if (pr + 4 <= PI_PRECISION) {
        r = getPi(Ctor, pr + 4, rm).times(0.5);
        r.s = x.s;
        return r;
      }
    } else if (x.isZero()) {
      return new Ctor(x);
    } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
      r = getPi(Ctor, pr + 4, rm).times(0.25);
      r.s = x.s;
      return r;
    }
    Ctor.precision = wpr = pr + 10;
    Ctor.rounding = 1;
    k = Math.min(28, wpr / LOG_BASE + 2 | 0);
    for (i = k; i; --i)
      x = x.div(x.times(x).plus(1).sqrt().plus(1));
    external = false;
    j = Math.ceil(wpr / LOG_BASE);
    n = 1;
    x2 = x.times(x);
    r = new Ctor(x);
    px = x;
    for (; i !== -1; ) {
      px = px.times(x2);
      t = r.minus(px.div(n += 2));
      px = px.times(x2);
      r = t.plus(px.div(n += 2));
      if (r.d[j] !== void 0)
        for (i = j; r.d[i] === t.d[i] && i--; )
          ;
    }
    if (k)
      r = r.times(2 << k - 1);
    external = true;
    return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
  };
  P.isFinite = function() {
    return !!this.d;
  };
  P.isInteger = P.isInt = function() {
    return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
  };
  P.isNaN = function() {
    return !this.s;
  };
  P.isNegative = P.isNeg = function() {
    return this.s < 0;
  };
  P.isPositive = P.isPos = function() {
    return this.s > 0;
  };
  P.isZero = function() {
    return !!this.d && this.d[0] === 0;
  };
  P.lessThan = P.lt = function(y) {
    return this.cmp(y) < 0;
  };
  P.lessThanOrEqualTo = P.lte = function(y) {
    return this.cmp(y) < 1;
  };
  P.logarithm = P.log = function(base) {
    var isBase10, d, denominator, k, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
    if (base == null) {
      base = new Ctor(10);
      isBase10 = true;
    } else {
      base = new Ctor(base);
      d = base.d;
      if (base.s < 0 || !d || !d[0] || base.eq(1))
        return new Ctor(NaN);
      isBase10 = base.eq(10);
    }
    d = arg.d;
    if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
      return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
    }
    if (isBase10) {
      if (d.length > 1) {
        inf = true;
      } else {
        for (k = d[0]; k % 10 === 0; )
          k /= 10;
        inf = k !== 1;
      }
    }
    external = false;
    sd = pr + guard;
    num = naturalLogarithm(arg, sd);
    denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
    r = divide(num, denominator, sd, 1);
    if (checkRoundingDigits(r.d, k = pr, rm)) {
      do {
        sd += 10;
        num = naturalLogarithm(arg, sd);
        denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
        r = divide(num, denominator, sd, 1);
        if (!inf) {
          if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
            r = finalise(r, pr + 1, 0);
          }
          break;
        }
      } while (checkRoundingDigits(r.d, k += 10, rm));
    }
    external = true;
    return finalise(r, pr, rm);
  };
  P.minus = P.sub = function(y) {
    var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
    y = new Ctor(y);
    if (!x.d || !y.d) {
      if (!x.s || !y.s)
        y = new Ctor(NaN);
      else if (x.d)
        y.s = -y.s;
      else
        y = new Ctor(y.d || x.s !== y.s ? x : NaN);
      return y;
    }
    if (x.s != y.s) {
      y.s = -y.s;
      return x.plus(y);
    }
    xd = x.d;
    yd = y.d;
    pr = Ctor.precision;
    rm = Ctor.rounding;
    if (!xd[0] || !yd[0]) {
      if (yd[0])
        y.s = -y.s;
      else if (xd[0])
        y = new Ctor(x);
      else
        return new Ctor(rm === 3 ? -0 : 0);
      return external ? finalise(y, pr, rm) : y;
    }
    e = mathfloor(y.e / LOG_BASE);
    xe = mathfloor(x.e / LOG_BASE);
    xd = xd.slice();
    k = xe - e;
    if (k) {
      xLTy = k < 0;
      if (xLTy) {
        d = xd;
        k = -k;
        len = yd.length;
      } else {
        d = yd;
        e = xe;
        len = xd.length;
      }
      i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
      if (k > i) {
        k = i;
        d.length = 1;
      }
      d.reverse();
      for (i = k; i--; )
        d.push(0);
      d.reverse();
    } else {
      i = xd.length;
      len = yd.length;
      xLTy = i < len;
      if (xLTy)
        len = i;
      for (i = 0; i < len; i++) {
        if (xd[i] != yd[i]) {
          xLTy = xd[i] < yd[i];
          break;
        }
      }
      k = 0;
    }
    if (xLTy) {
      d = xd;
      xd = yd;
      yd = d;
      y.s = -y.s;
    }
    len = xd.length;
    for (i = yd.length - len; i > 0; --i)
      xd[len++] = 0;
    for (i = yd.length; i > k; ) {
      if (xd[--i] < yd[i]) {
        for (j = i; j && xd[--j] === 0; )
          xd[j] = BASE - 1;
        --xd[j];
        xd[i] += BASE;
      }
      xd[i] -= yd[i];
    }
    for (; xd[--len] === 0; )
      xd.pop();
    for (; xd[0] === 0; xd.shift())
      --e;
    if (!xd[0])
      return new Ctor(rm === 3 ? -0 : 0);
    y.d = xd;
    y.e = getBase10Exponent(xd, e);
    return external ? finalise(y, pr, rm) : y;
  };
  P.modulo = P.mod = function(y) {
    var q, x = this, Ctor = x.constructor;
    y = new Ctor(y);
    if (!x.d || !y.s || y.d && !y.d[0])
      return new Ctor(NaN);
    if (!y.d || x.d && !x.d[0]) {
      return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
    }
    external = false;
    if (Ctor.modulo == 9) {
      q = divide(x, y.abs(), 0, 3, 1);
      q.s *= y.s;
    } else {
      q = divide(x, y, 0, Ctor.modulo, 1);
    }
    q = q.times(y);
    external = true;
    return x.minus(q);
  };
  P.naturalExponential = P.exp = function() {
    return naturalExponential(this);
  };
  P.naturalLogarithm = P.ln = function() {
    return naturalLogarithm(this);
  };
  P.negated = P.neg = function() {
    var x = new this.constructor(this);
    x.s = -x.s;
    return finalise(x);
  };
  P.plus = P.add = function(y) {
    var carry, d, e, i, k, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
    y = new Ctor(y);
    if (!x.d || !y.d) {
      if (!x.s || !y.s)
        y = new Ctor(NaN);
      else if (!x.d)
        y = new Ctor(y.d || x.s === y.s ? x : NaN);
      return y;
    }
    if (x.s != y.s) {
      y.s = -y.s;
      return x.minus(y);
    }
    xd = x.d;
    yd = y.d;
    pr = Ctor.precision;
    rm = Ctor.rounding;
    if (!xd[0] || !yd[0]) {
      if (!yd[0])
        y = new Ctor(x);
      return external ? finalise(y, pr, rm) : y;
    }
    k = mathfloor(x.e / LOG_BASE);
    e = mathfloor(y.e / LOG_BASE);
    xd = xd.slice();
    i = k - e;
    if (i) {
      if (i < 0) {
        d = xd;
        i = -i;
        len = yd.length;
      } else {
        d = yd;
        e = k;
        len = xd.length;
      }
      k = Math.ceil(pr / LOG_BASE);
      len = k > len ? k + 1 : len + 1;
      if (i > len) {
        i = len;
        d.length = 1;
      }
      d.reverse();
      for (; i--; )
        d.push(0);
      d.reverse();
    }
    len = xd.length;
    i = yd.length;
    if (len - i < 0) {
      i = len;
      d = yd;
      yd = xd;
      xd = d;
    }
    for (carry = 0; i; ) {
      carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
      xd[i] %= BASE;
    }
    if (carry) {
      xd.unshift(carry);
      ++e;
    }
    for (len = xd.length; xd[--len] == 0; )
      xd.pop();
    y.d = xd;
    y.e = getBase10Exponent(xd, e);
    return external ? finalise(y, pr, rm) : y;
  };
  P.precision = P.sd = function(z) {
    var k, x = this;
    if (z !== void 0 && z !== !!z && z !== 1 && z !== 0)
      throw Error(invalidArgument + z);
    if (x.d) {
      k = getPrecision(x.d);
      if (z && x.e + 1 > k)
        k = x.e + 1;
    } else {
      k = NaN;
    }
    return k;
  };
  P.round = function() {
    var x = this, Ctor = x.constructor;
    return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
  };
  P.sine = P.sin = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.isFinite())
      return new Ctor(NaN);
    if (x.isZero())
      return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
    Ctor.rounding = 1;
    x = sine(Ctor, toLessThanHalfPi(Ctor, x));
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
  };
  P.squareRoot = P.sqrt = function() {
    var m, n, sd, r, rep, t, x = this, d = x.d, e = x.e, s = x.s, Ctor = x.constructor;
    if (s !== 1 || !d || !d[0]) {
      return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
    }
    external = false;
    s = Math.sqrt(+x);
    if (s == 0 || s == 1 / 0) {
      n = digitsToString(d);
      if ((n.length + e) % 2 == 0)
        n += "0";
      s = Math.sqrt(n);
      e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
      if (s == 1 / 0) {
        n = "5e" + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf("e") + 1) + e;
      }
      r = new Ctor(n);
    } else {
      r = new Ctor(s.toString());
    }
    sd = (e = Ctor.precision) + 3;
    for (; ; ) {
      t = r;
      r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);
      if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
        n = n.slice(sd - 3, sd + 1);
        if (n == "9999" || !rep && n == "4999") {
          if (!rep) {
            finalise(t, e + 1, 0);
            if (t.times(t).eq(x)) {
              r = t;
              break;
            }
          }
          sd += 4;
          rep = 1;
        } else {
          if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
            finalise(r, e + 1, 1);
            m = !r.times(r).eq(x);
          }
          break;
        }
      }
    }
    external = true;
    return finalise(r, e, Ctor.rounding, m);
  };
  P.tangent = P.tan = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.isFinite())
      return new Ctor(NaN);
    if (x.isZero())
      return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 10;
    Ctor.rounding = 1;
    x = x.sin();
    x.s = 1;
    x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
  };
  P.times = P.mul = function(y) {
    var carry, e, i, k, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
    y.s *= x.s;
    if (!xd || !xd[0] || !yd || !yd[0]) {
      return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
    }
    e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
    xdL = xd.length;
    ydL = yd.length;
    if (xdL < ydL) {
      r = xd;
      xd = yd;
      yd = r;
      rL = xdL;
      xdL = ydL;
      ydL = rL;
    }
    r = [];
    rL = xdL + ydL;
    for (i = rL; i--; )
      r.push(0);
    for (i = ydL; --i >= 0; ) {
      carry = 0;
      for (k = xdL + i; k > i; ) {
        t = r[k] + yd[i] * xd[k - i - 1] + carry;
        r[k--] = t % BASE | 0;
        carry = t / BASE | 0;
      }
      r[k] = (r[k] + carry) % BASE | 0;
    }
    for (; !r[--rL]; )
      r.pop();
    if (carry)
      ++e;
    else
      r.shift();
    y.d = r;
    y.e = getBase10Exponent(r, e);
    return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
  };
  P.toBinary = function(sd, rm) {
    return toStringBinary(this, 2, sd, rm);
  };
  P.toDecimalPlaces = P.toDP = function(dp, rm) {
    var x = this, Ctor = x.constructor;
    x = new Ctor(x);
    if (dp === void 0)
      return x;
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    return finalise(x, dp + x.e + 1, rm);
  };
  P.toExponential = function(dp, rm) {
    var str, x = this, Ctor = x.constructor;
    if (dp === void 0) {
      str = finiteToString(x, true);
    } else {
      checkInt32(dp, 0, MAX_DIGITS);
      if (rm === void 0)
        rm = Ctor.rounding;
      else
        checkInt32(rm, 0, 8);
      x = finalise(new Ctor(x), dp + 1, rm);
      str = finiteToString(x, true, dp + 1);
    }
    return x.isNeg() && !x.isZero() ? "-" + str : str;
  };
  P.toFixed = function(dp, rm) {
    var str, y, x = this, Ctor = x.constructor;
    if (dp === void 0) {
      str = finiteToString(x);
    } else {
      checkInt32(dp, 0, MAX_DIGITS);
      if (rm === void 0)
        rm = Ctor.rounding;
      else
        checkInt32(rm, 0, 8);
      y = finalise(new Ctor(x), dp + x.e + 1, rm);
      str = finiteToString(y, false, dp + y.e + 1);
    }
    return x.isNeg() && !x.isZero() ? "-" + str : str;
  };
  P.toFraction = function(maxD) {
    var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r, x = this, xd = x.d, Ctor = x.constructor;
    if (!xd)
      return new Ctor(x);
    n1 = d0 = new Ctor(1);
    d1 = n0 = new Ctor(0);
    d = new Ctor(d1);
    e = d.e = getPrecision(xd) - x.e - 1;
    k = e % LOG_BASE;
    d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
    if (maxD == null) {
      maxD = e > 0 ? d : n1;
    } else {
      n = new Ctor(maxD);
      if (!n.isInt() || n.lt(n1))
        throw Error(invalidArgument + n);
      maxD = n.gt(d) ? e > 0 ? d : n1 : n;
    }
    external = false;
    n = new Ctor(digitsToString(xd));
    pr = Ctor.precision;
    Ctor.precision = e = xd.length * LOG_BASE * 2;
    for (; ; ) {
      q = divide(n, d, 0, 1, 1);
      d2 = d0.plus(q.times(d1));
      if (d2.cmp(maxD) == 1)
        break;
      d0 = d1;
      d1 = d2;
      d2 = n1;
      n1 = n0.plus(q.times(d2));
      n0 = d2;
      d2 = d;
      d = n.minus(q.times(d2));
      n = d2;
    }
    d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
    n0 = n0.plus(d2.times(n1));
    d0 = d0.plus(d2.times(d1));
    n0.s = n1.s = x.s;
    r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
    Ctor.precision = pr;
    external = true;
    return r;
  };
  P.toHexadecimal = P.toHex = function(sd, rm) {
    return toStringBinary(this, 16, sd, rm);
  };
  P.toNearest = function(y, rm) {
    var x = this, Ctor = x.constructor;
    x = new Ctor(x);
    if (y == null) {
      if (!x.d)
        return x;
      y = new Ctor(1);
      rm = Ctor.rounding;
    } else {
      y = new Ctor(y);
      if (rm === void 0) {
        rm = Ctor.rounding;
      } else {
        checkInt32(rm, 0, 8);
      }
      if (!x.d)
        return y.s ? x : y;
      if (!y.d) {
        if (y.s)
          y.s = x.s;
        return y;
      }
    }
    if (y.d[0]) {
      external = false;
      x = divide(x, y, 0, rm, 1).times(y);
      external = true;
      finalise(x);
    } else {
      y.s = x.s;
      x = y;
    }
    return x;
  };
  P.toNumber = function() {
    return +this;
  };
  P.toOctal = function(sd, rm) {
    return toStringBinary(this, 8, sd, rm);
  };
  P.toPower = P.pow = function(y) {
    var e, k, pr, r, rm, s, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
    if (!x.d || !y.d || !x.d[0] || !y.d[0])
      return new Ctor(mathpow(+x, yn));
    x = new Ctor(x);
    if (x.eq(1))
      return x;
    pr = Ctor.precision;
    rm = Ctor.rounding;
    if (y.eq(1))
      return finalise(x, pr, rm);
    e = mathfloor(y.e / LOG_BASE);
    if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
      r = intPow(Ctor, x, k, pr);
      return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
    }
    s = x.s;
    if (s < 0) {
      if (e < y.d.length - 1)
        return new Ctor(NaN);
      if ((y.d[e] & 1) == 0)
        s = 1;
      if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
        x.s = s;
        return x;
      }
    }
    k = mathpow(+x, yn);
    e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + "").e;
    if (e > Ctor.maxE + 1 || e < Ctor.minE - 1)
      return new Ctor(e > 0 ? s / 0 : 0);
    external = false;
    Ctor.rounding = x.s = 1;
    k = Math.min(12, (e + "").length);
    r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
    if (r.d) {
      r = finalise(r, pr + 5, 1);
      if (checkRoundingDigits(r.d, pr, rm)) {
        e = pr + 10;
        r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
        if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
          r = finalise(r, pr + 1, 0);
        }
      }
    }
    r.s = s;
    external = true;
    Ctor.rounding = rm;
    return finalise(r, pr, rm);
  };
  P.toPrecision = function(sd, rm) {
    var str, x = this, Ctor = x.constructor;
    if (sd === void 0) {
      str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
    } else {
      checkInt32(sd, 1, MAX_DIGITS);
      if (rm === void 0)
        rm = Ctor.rounding;
      else
        checkInt32(rm, 0, 8);
      x = finalise(new Ctor(x), sd, rm);
      str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
    }
    return x.isNeg() && !x.isZero() ? "-" + str : str;
  };
  P.toSignificantDigits = P.toSD = function(sd, rm) {
    var x = this, Ctor = x.constructor;
    if (sd === void 0) {
      sd = Ctor.precision;
      rm = Ctor.rounding;
    } else {
      checkInt32(sd, 1, MAX_DIGITS);
      if (rm === void 0)
        rm = Ctor.rounding;
      else
        checkInt32(rm, 0, 8);
    }
    return finalise(new Ctor(x), sd, rm);
  };
  P.toString = function() {
    var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
    return x.isNeg() && !x.isZero() ? "-" + str : str;
  };
  P.truncated = P.trunc = function() {
    return finalise(new this.constructor(this), this.e + 1, 1);
  };
  P.valueOf = P.toJSON = function() {
    var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
    return x.isNeg() ? "-" + str : str;
  };
  function digitsToString(d) {
    var i, k, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
    if (indexOfLastWord > 0) {
      str += w;
      for (i = 1; i < indexOfLastWord; i++) {
        ws = d[i] + "";
        k = LOG_BASE - ws.length;
        if (k)
          str += getZeroString(k);
        str += ws;
      }
      w = d[i];
      ws = w + "";
      k = LOG_BASE - ws.length;
      if (k)
        str += getZeroString(k);
    } else if (w === 0) {
      return "0";
    }
    for (; w % 10 === 0; )
      w /= 10;
    return str + w;
  }
  function checkInt32(i, min2, max2) {
    if (i !== ~~i || i < min2 || i > max2) {
      throw Error(invalidArgument + i);
    }
  }
  function checkRoundingDigits(d, i, rm, repeating) {
    var di, k, r, rd;
    for (k = d[0]; k >= 10; k /= 10)
      --i;
    if (--i < 0) {
      i += LOG_BASE;
      di = 0;
    } else {
      di = Math.ceil((i + 1) / LOG_BASE);
      i %= LOG_BASE;
    }
    k = mathpow(10, LOG_BASE - i);
    rd = d[di] % k | 0;
    if (repeating == null) {
      if (i < 3) {
        if (i == 0)
          rd = rd / 100 | 0;
        else if (i == 1)
          rd = rd / 10 | 0;
        r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 5e4 || rd == 0;
      } else {
        r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
      }
    } else {
      if (i < 4) {
        if (i == 0)
          rd = rd / 1e3 | 0;
        else if (i == 1)
          rd = rd / 100 | 0;
        else if (i == 2)
          rd = rd / 10 | 0;
        r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
      } else {
        r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1e3 | 0) == mathpow(10, i - 3) - 1;
      }
    }
    return r;
  }
  function convertBase(str, baseIn, baseOut) {
    var j, arr = [0], arrL, i = 0, strL = str.length;
    for (; i < strL; ) {
      for (arrL = arr.length; arrL--; )
        arr[arrL] *= baseIn;
      arr[0] += NUMERALS.indexOf(str.charAt(i++));
      for (j = 0; j < arr.length; j++) {
        if (arr[j] > baseOut - 1) {
          if (arr[j + 1] === void 0)
            arr[j + 1] = 0;
          arr[j + 1] += arr[j] / baseOut | 0;
          arr[j] %= baseOut;
        }
      }
    }
    return arr.reverse();
  }
  function cosine(Ctor, x) {
    var k, len, y;
    if (x.isZero())
      return x;
    len = x.d.length;
    if (len < 32) {
      k = Math.ceil(len / 3);
      y = (1 / tinyPow(4, k)).toString();
    } else {
      k = 16;
      y = "2.3283064365386962890625e-10";
    }
    Ctor.precision += k;
    x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
    for (var i = k; i--; ) {
      var cos2x = x.times(x);
      x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
    }
    Ctor.precision -= k;
    return x;
  }
  var divide = /* @__PURE__ */ function() {
    function multiplyInteger(x, k, base) {
      var temp, carry = 0, i = x.length;
      for (x = x.slice(); i--; ) {
        temp = x[i] * k + carry;
        x[i] = temp % base | 0;
        carry = temp / base | 0;
      }
      if (carry)
        x.unshift(carry);
      return x;
    }
    function compare(a, b, aL, bL) {
      var i, r;
      if (aL != bL) {
        r = aL > bL ? 1 : -1;
      } else {
        for (i = r = 0; i < aL; i++) {
          if (a[i] != b[i]) {
            r = a[i] > b[i] ? 1 : -1;
            break;
          }
        }
      }
      return r;
    }
    function subtract(a, b, aL, base) {
      var i = 0;
      for (; aL--; ) {
        a[aL] -= i;
        i = a[aL] < b[aL] ? 1 : 0;
        a[aL] = i * base + a[aL] - b[aL];
      }
      for (; !a[0] && a.length > 1; )
        a.shift();
    }
    return function(x, y, pr, rm, dp, base) {
      var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign2 = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
      if (!xd || !xd[0] || !yd || !yd[0]) {
        return new Ctor(
          // Return NaN if either NaN, or both Infinity or 0.
          !x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : (
            // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
            xd && xd[0] == 0 || !yd ? sign2 * 0 : sign2 / 0
          )
        );
      }
      if (base) {
        logBase = 1;
        e = x.e - y.e;
      } else {
        base = BASE;
        logBase = LOG_BASE;
        e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
      }
      yL = yd.length;
      xL = xd.length;
      q = new Ctor(sign2);
      qd = q.d = [];
      for (i = 0; yd[i] == (xd[i] || 0); i++)
        ;
      if (yd[i] > (xd[i] || 0))
        e--;
      if (pr == null) {
        sd = pr = Ctor.precision;
        rm = Ctor.rounding;
      } else if (dp) {
        sd = pr + (x.e - y.e) + 1;
      } else {
        sd = pr;
      }
      if (sd < 0) {
        qd.push(1);
        more = true;
      } else {
        sd = sd / logBase + 2 | 0;
        i = 0;
        if (yL == 1) {
          k = 0;
          yd = yd[0];
          sd++;
          for (; (i < xL || k) && sd--; i++) {
            t = k * base + (xd[i] || 0);
            qd[i] = t / yd | 0;
            k = t % yd | 0;
          }
          more = k || i < xL;
        } else {
          k = base / (yd[0] + 1) | 0;
          if (k > 1) {
            yd = multiplyInteger(yd, k, base);
            xd = multiplyInteger(xd, k, base);
            yL = yd.length;
            xL = xd.length;
          }
          xi = yL;
          rem = xd.slice(0, yL);
          remL = rem.length;
          for (; remL < yL; )
            rem[remL++] = 0;
          yz = yd.slice();
          yz.unshift(0);
          yd0 = yd[0];
          if (yd[1] >= base / 2)
            ++yd0;
          do {
            k = 0;
            cmp = compare(yd, rem, yL, remL);
            if (cmp < 0) {
              rem0 = rem[0];
              if (yL != remL)
                rem0 = rem0 * base + (rem[1] || 0);
              k = rem0 / yd0 | 0;
              if (k > 1) {
                if (k >= base)
                  k = base - 1;
                prod = multiplyInteger(yd, k, base);
                prodL = prod.length;
                remL = rem.length;
                cmp = compare(prod, rem, prodL, remL);
                if (cmp == 1) {
                  k--;
                  subtract(prod, yL < prodL ? yz : yd, prodL, base);
                }
              } else {
                if (k == 0)
                  cmp = k = 1;
                prod = yd.slice();
              }
              prodL = prod.length;
              if (prodL < remL)
                prod.unshift(0);
              subtract(rem, prod, remL, base);
              if (cmp == -1) {
                remL = rem.length;
                cmp = compare(yd, rem, yL, remL);
                if (cmp < 1) {
                  k++;
                  subtract(rem, yL < remL ? yz : yd, remL, base);
                }
              }
              remL = rem.length;
            } else if (cmp === 0) {
              k++;
              rem = [0];
            }
            qd[i++] = k;
            if (cmp && rem[0]) {
              rem[remL++] = xd[xi] || 0;
            } else {
              rem = [xd[xi]];
              remL = 1;
            }
          } while ((xi++ < xL || rem[0] !== void 0) && sd--);
          more = rem[0] !== void 0;
        }
        if (!qd[0])
          qd.shift();
      }
      if (logBase == 1) {
        q.e = e;
        inexact = more;
      } else {
        for (i = 1, k = qd[0]; k >= 10; k /= 10)
          i++;
        q.e = i + e * logBase - 1;
        finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
      }
      return q;
    };
  }();
  function finalise(x, sd, rm, isTruncated) {
    var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
    out:
      if (sd != null) {
        xd = x.d;
        if (!xd)
          return x;
        for (digits = 1, k = xd[0]; k >= 10; k /= 10)
          digits++;
        i = sd - digits;
        if (i < 0) {
          i += LOG_BASE;
          j = sd;
          w = xd[xdi = 0];
          rd = w / mathpow(10, digits - j - 1) % 10 | 0;
        } else {
          xdi = Math.ceil((i + 1) / LOG_BASE);
          k = xd.length;
          if (xdi >= k) {
            if (isTruncated) {
              for (; k++ <= xdi; )
                xd.push(0);
              w = rd = 0;
              digits = 1;
              i %= LOG_BASE;
              j = i - LOG_BASE + 1;
            } else {
              break out;
            }
          } else {
            w = k = xd[xdi];
            for (digits = 1; k >= 10; k /= 10)
              digits++;
            i %= LOG_BASE;
            j = i - LOG_BASE + digits;
            rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
          }
        }
        isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));
        roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
        if (sd < 1 || !xd[0]) {
          xd.length = 0;
          if (roundUp) {
            sd -= x.e + 1;
            xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
            x.e = -sd || 0;
          } else {
            xd[0] = x.e = 0;
          }
          return x;
        }
        if (i == 0) {
          xd.length = xdi;
          k = 1;
          xdi--;
        } else {
          xd.length = xdi + 1;
          k = mathpow(10, LOG_BASE - i);
          xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
        }
        if (roundUp) {
          for (; ; ) {
            if (xdi == 0) {
              for (i = 1, j = xd[0]; j >= 10; j /= 10)
                i++;
              j = xd[0] += k;
              for (k = 1; j >= 10; j /= 10)
                k++;
              if (i != k) {
                x.e++;
                if (xd[0] == BASE)
                  xd[0] = 1;
              }
              break;
            } else {
              xd[xdi] += k;
              if (xd[xdi] != BASE)
                break;
              xd[xdi--] = 0;
              k = 1;
            }
          }
        }
        for (i = xd.length; xd[--i] === 0; )
          xd.pop();
      }
    if (external) {
      if (x.e > Ctor.maxE) {
        x.d = null;
        x.e = NaN;
      } else if (x.e < Ctor.minE) {
        x.e = 0;
        x.d = [0];
      }
    }
    return x;
  }
  function finiteToString(x, isExp, sd) {
    if (!x.isFinite())
      return nonFiniteToString(x);
    var k, e = x.e, str = digitsToString(x.d), len = str.length;
    if (isExp) {
      if (sd && (k = sd - len) > 0) {
        str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
      } else if (len > 1) {
        str = str.charAt(0) + "." + str.slice(1);
      }
      str = str + (x.e < 0 ? "e" : "e+") + x.e;
    } else if (e < 0) {
      str = "0." + getZeroString(-e - 1) + str;
      if (sd && (k = sd - len) > 0)
        str += getZeroString(k);
    } else if (e >= len) {
      str += getZeroString(e + 1 - len);
      if (sd && (k = sd - e - 1) > 0)
        str = str + "." + getZeroString(k);
    } else {
      if ((k = e + 1) < len)
        str = str.slice(0, k) + "." + str.slice(k);
      if (sd && (k = sd - len) > 0) {
        if (e + 1 === len)
          str += ".";
        str += getZeroString(k);
      }
    }
    return str;
  }
  function getBase10Exponent(digits, e) {
    var w = digits[0];
    for (e *= LOG_BASE; w >= 10; w /= 10)
      e++;
    return e;
  }
  function getLn10(Ctor, sd, pr) {
    if (sd > LN10_PRECISION) {
      external = true;
      if (pr)
        Ctor.precision = pr;
      throw Error(precisionLimitExceeded);
    }
    return finalise(new Ctor(LN10), sd, 1, true);
  }
  function getPi(Ctor, sd, rm) {
    if (sd > PI_PRECISION)
      throw Error(precisionLimitExceeded);
    return finalise(new Ctor(PI), sd, rm, true);
  }
  function getPrecision(digits) {
    var w = digits.length - 1, len = w * LOG_BASE + 1;
    w = digits[w];
    if (w) {
      for (; w % 10 == 0; w /= 10)
        len--;
      for (w = digits[0]; w >= 10; w /= 10)
        len++;
    }
    return len;
  }
  function getZeroString(k) {
    var zs = "";
    for (; k--; )
      zs += "0";
    return zs;
  }
  function intPow(Ctor, x, n, pr) {
    var isTruncated, r = new Ctor(1), k = Math.ceil(pr / LOG_BASE + 4);
    external = false;
    for (; ; ) {
      if (n % 2) {
        r = r.times(x);
        if (truncate(r.d, k))
          isTruncated = true;
      }
      n = mathfloor(n / 2);
      if (n === 0) {
        n = r.d.length - 1;
        if (isTruncated && r.d[n] === 0)
          ++r.d[n];
        break;
      }
      x = x.times(x);
      truncate(x.d, k);
    }
    external = true;
    return r;
  }
  function isOdd(n) {
    return n.d[n.d.length - 1] & 1;
  }
  function maxOrMin(Ctor, args, n) {
    var k, y, x = new Ctor(args[0]), i = 0;
    for (; ++i < args.length; ) {
      y = new Ctor(args[i]);
      if (!y.s) {
        x = y;
        break;
      }
      k = x.cmp(y);
      if (k === n || k === 0 && x.s === n) {
        x = y;
      }
    }
    return x;
  }
  function naturalExponential(x, sd) {
    var denominator, guard, j, pow2, sum2, t, wpr, rep = 0, i = 0, k = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
    if (!x.d || !x.d[0] || x.e > 17) {
      return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
    }
    if (sd == null) {
      external = false;
      wpr = pr;
    } else {
      wpr = sd;
    }
    t = new Ctor(0.03125);
    while (x.e > -2) {
      x = x.times(t);
      k += 5;
    }
    guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
    wpr += guard;
    denominator = pow2 = sum2 = new Ctor(1);
    Ctor.precision = wpr;
    for (; ; ) {
      pow2 = finalise(pow2.times(x), wpr, 1);
      denominator = denominator.times(++i);
      t = sum2.plus(divide(pow2, denominator, wpr, 1));
      if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
        j = k;
        while (j--)
          sum2 = finalise(sum2.times(sum2), wpr, 1);
        if (sd == null) {
          if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
            Ctor.precision = wpr += 10;
            denominator = pow2 = t = new Ctor(1);
            i = 0;
            rep++;
          } else {
            return finalise(sum2, Ctor.precision = pr, rm, external = true);
          }
        } else {
          Ctor.precision = pr;
          return sum2;
        }
      }
      sum2 = t;
    }
  }
  function naturalLogarithm(y, sd) {
    var c, c0, denominator, e, numerator, rep, sum2, t, wpr, x1, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
    if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
      return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
    }
    if (sd == null) {
      external = false;
      wpr = pr;
    } else {
      wpr = sd;
    }
    Ctor.precision = wpr += guard;
    c = digitsToString(xd);
    c0 = c.charAt(0);
    if (Math.abs(e = x.e) < 15e14) {
      while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
        x = x.times(y);
        c = digitsToString(x.d);
        c0 = c.charAt(0);
        n++;
      }
      e = x.e;
      if (c0 > 1) {
        x = new Ctor("0." + c);
        e++;
      } else {
        x = new Ctor(c0 + "." + c.slice(1));
      }
    } else {
      t = getLn10(Ctor, wpr + 2, pr).times(e + "");
      x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
      Ctor.precision = pr;
      return sd == null ? finalise(x, pr, rm, external = true) : x;
    }
    x1 = x;
    sum2 = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
    x2 = finalise(x.times(x), wpr, 1);
    denominator = 3;
    for (; ; ) {
      numerator = finalise(numerator.times(x2), wpr, 1);
      t = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
      if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
        sum2 = sum2.times(2);
        if (e !== 0)
          sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
        sum2 = divide(sum2, new Ctor(n), wpr, 1);
        if (sd == null) {
          if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
            Ctor.precision = wpr += guard;
            t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
            x2 = finalise(x.times(x), wpr, 1);
            denominator = rep = 1;
          } else {
            return finalise(sum2, Ctor.precision = pr, rm, external = true);
          }
        } else {
          Ctor.precision = pr;
          return sum2;
        }
      }
      sum2 = t;
      denominator += 2;
    }
  }
  function nonFiniteToString(x) {
    return String(x.s * x.s / 0);
  }
  function parseDecimal(x, str) {
    var e, i, len;
    if ((e = str.indexOf(".")) > -1)
      str = str.replace(".", "");
    if ((i = str.search(/e/i)) > 0) {
      if (e < 0)
        e = i;
      e += +str.slice(i + 1);
      str = str.substring(0, i);
    } else if (e < 0) {
      e = str.length;
    }
    for (i = 0; str.charCodeAt(i) === 48; i++)
      ;
    for (len = str.length; str.charCodeAt(len - 1) === 48; --len)
      ;
    str = str.slice(i, len);
    if (str) {
      len -= i;
      x.e = e = e - i - 1;
      x.d = [];
      i = (e + 1) % LOG_BASE;
      if (e < 0)
        i += LOG_BASE;
      if (i < len) {
        if (i)
          x.d.push(+str.slice(0, i));
        for (len -= LOG_BASE; i < len; )
          x.d.push(+str.slice(i, i += LOG_BASE));
        str = str.slice(i);
        i = LOG_BASE - str.length;
      } else {
        i -= len;
      }
      for (; i--; )
        str += "0";
      x.d.push(+str);
      if (external) {
        if (x.e > x.constructor.maxE) {
          x.d = null;
          x.e = NaN;
        } else if (x.e < x.constructor.minE) {
          x.e = 0;
          x.d = [0];
        }
      }
    } else {
      x.e = 0;
      x.d = [0];
    }
    return x;
  }
  function parseOther(x, str) {
    var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
    if (str.indexOf("_") > -1) {
      str = str.replace(/(\d)_(?=\d)/g, "$1");
      if (isDecimal.test(str))
        return parseDecimal(x, str);
    } else if (str === "Infinity" || str === "NaN") {
      if (!+str)
        x.s = NaN;
      x.e = NaN;
      x.d = null;
      return x;
    }
    if (isHex.test(str)) {
      base = 16;
      str = str.toLowerCase();
    } else if (isBinary.test(str)) {
      base = 2;
    } else if (isOctal.test(str)) {
      base = 8;
    } else {
      throw Error(invalidArgument + str);
    }
    i = str.search(/p/i);
    if (i > 0) {
      p = +str.slice(i + 1);
      str = str.substring(2, i);
    } else {
      str = str.slice(2);
    }
    i = str.indexOf(".");
    isFloat = i >= 0;
    Ctor = x.constructor;
    if (isFloat) {
      str = str.replace(".", "");
      len = str.length;
      i = len - i;
      divisor = intPow(Ctor, new Ctor(base), i, i * 2);
    }
    xd = convertBase(str, base, BASE);
    xe = xd.length - 1;
    for (i = xe; xd[i] === 0; --i)
      xd.pop();
    if (i < 0)
      return new Ctor(x.s * 0);
    x.e = getBase10Exponent(xd, xe);
    x.d = xd;
    external = false;
    if (isFloat)
      x = divide(x, divisor, len * 4);
    if (p)
      x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
    external = true;
    return x;
  }
  function sine(Ctor, x) {
    var k, len = x.d.length;
    if (len < 3) {
      return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
    }
    k = 1.4 * Math.sqrt(len);
    k = k > 16 ? 16 : k | 0;
    x = x.times(1 / tinyPow(5, k));
    x = taylorSeries(Ctor, 2, x, x);
    var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
    for (; k--; ) {
      sin2_x = x.times(x);
      x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
    }
    return x;
  }
  function taylorSeries(Ctor, n, x, y, isHyperbolic) {
    var j, t, u, x2, i = 1, pr = Ctor.precision, k = Math.ceil(pr / LOG_BASE);
    external = false;
    x2 = x.times(x);
    u = new Ctor(y);
    for (; ; ) {
      t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
      u = isHyperbolic ? y.plus(t) : y.minus(t);
      y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
      t = u.plus(y);
      if (t.d[k] !== void 0) {
        for (j = k; t.d[j] === u.d[j] && j--; )
          ;
        if (j == -1)
          break;
      }
      j = u;
      u = y;
      y = t;
      t = j;
      i++;
    }
    external = true;
    t.d.length = k + 1;
    return t;
  }
  function tinyPow(b, e) {
    var n = b;
    while (--e)
      n *= b;
    return n;
  }
  function toLessThanHalfPi(Ctor, x) {
    var t, isNeg = x.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
    x = x.abs();
    if (x.lte(halfPi)) {
      quadrant = isNeg ? 4 : 1;
      return x;
    }
    t = x.divToInt(pi);
    if (t.isZero()) {
      quadrant = isNeg ? 3 : 2;
    } else {
      x = x.minus(t.times(pi));
      if (x.lte(halfPi)) {
        quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
        return x;
      }
      quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
    }
    return x.minus(pi).abs();
  }
  function toStringBinary(x, baseOut, sd, rm) {
    var base, e, i, k, len, roundUp, str, xd, y, Ctor = x.constructor, isExp = sd !== void 0;
    if (isExp) {
      checkInt32(sd, 1, MAX_DIGITS);
      if (rm === void 0)
        rm = Ctor.rounding;
      else
        checkInt32(rm, 0, 8);
    } else {
      sd = Ctor.precision;
      rm = Ctor.rounding;
    }
    if (!x.isFinite()) {
      str = nonFiniteToString(x);
    } else {
      str = finiteToString(x);
      i = str.indexOf(".");
      if (isExp) {
        base = 2;
        if (baseOut == 16) {
          sd = sd * 4 - 3;
        } else if (baseOut == 8) {
          sd = sd * 3 - 2;
        }
      } else {
        base = baseOut;
      }
      if (i >= 0) {
        str = str.replace(".", "");
        y = new Ctor(1);
        y.e = str.length - i;
        y.d = convertBase(finiteToString(y), 10, base);
        y.e = y.d.length;
      }
      xd = convertBase(str, 10, base);
      e = len = xd.length;
      for (; xd[--len] == 0; )
        xd.pop();
      if (!xd[0]) {
        str = isExp ? "0p+0" : "0";
      } else {
        if (i < 0) {
          e--;
        } else {
          x = new Ctor(x);
          x.d = xd;
          x.e = e;
          x = divide(x, y, sd, rm, 0, base);
          xd = x.d;
          e = x.e;
          roundUp = inexact;
        }
        i = xd[sd];
        k = base / 2;
        roundUp = roundUp || xd[sd + 1] !== void 0;
        roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
        xd.length = sd;
        if (roundUp) {
          for (; ++xd[--sd] > base - 1; ) {
            xd[sd] = 0;
            if (!sd) {
              ++e;
              xd.unshift(1);
            }
          }
        }
        for (len = xd.length; !xd[len - 1]; --len)
          ;
        for (i = 0, str = ""; i < len; i++)
          str += NUMERALS.charAt(xd[i]);
        if (isExp) {
          if (len > 1) {
            if (baseOut == 16 || baseOut == 8) {
              i = baseOut == 16 ? 4 : 3;
              for (--len; len % i; len++)
                str += "0";
              xd = convertBase(str, base, baseOut);
              for (len = xd.length; !xd[len - 1]; --len)
                ;
              for (i = 1, str = "1."; i < len; i++)
                str += NUMERALS.charAt(xd[i]);
            } else {
              str = str.charAt(0) + "." + str.slice(1);
            }
          }
          str = str + (e < 0 ? "p" : "p+") + e;
        } else if (e < 0) {
          for (; ++e; )
            str = "0" + str;
          str = "0." + str;
        } else {
          if (++e > len)
            for (e -= len; e--; )
              str += "0";
          else if (e < len)
            str = str.slice(0, e) + "." + str.slice(e);
        }
      }
      str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
    }
    return x.s < 0 ? "-" + str : str;
  }
  function truncate(arr, len) {
    if (arr.length > len) {
      arr.length = len;
      return true;
    }
  }
  function abs(x) {
    return new this(x).abs();
  }
  function acos(x) {
    return new this(x).acos();
  }
  function acosh(x) {
    return new this(x).acosh();
  }
  function add(x, y) {
    return new this(x).plus(y);
  }
  function asin(x) {
    return new this(x).asin();
  }
  function asinh(x) {
    return new this(x).asinh();
  }
  function atan(x) {
    return new this(x).atan();
  }
  function atanh(x) {
    return new this(x).atanh();
  }
  function atan2(y, x) {
    y = new this(y);
    x = new this(x);
    var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
    if (!y.s || !x.s) {
      r = new this(NaN);
    } else if (!y.d && !x.d) {
      r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
      r.s = y.s;
    } else if (!x.d || y.isZero()) {
      r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
      r.s = y.s;
    } else if (!y.d || x.isZero()) {
      r = getPi(this, wpr, 1).times(0.5);
      r.s = y.s;
    } else if (x.s < 0) {
      this.precision = wpr;
      this.rounding = 1;
      r = this.atan(divide(y, x, wpr, 1));
      x = getPi(this, wpr, 1);
      this.precision = pr;
      this.rounding = rm;
      r = y.s < 0 ? r.minus(x) : r.plus(x);
    } else {
      r = this.atan(divide(y, x, wpr, 1));
    }
    return r;
  }
  function cbrt(x) {
    return new this(x).cbrt();
  }
  function ceil(x) {
    return finalise(x = new this(x), x.e + 1, 2);
  }
  function clamp(x, min2, max2) {
    return new this(x).clamp(min2, max2);
  }
  function config(obj) {
    if (!obj || typeof obj !== "object")
      throw Error(decimalError + "Object expected");
    var i, p, v, useDefaults = obj.defaults === true, ps = [
      "precision",
      1,
      MAX_DIGITS,
      "rounding",
      0,
      8,
      "toExpNeg",
      -EXP_LIMIT,
      0,
      "toExpPos",
      0,
      EXP_LIMIT,
      "maxE",
      0,
      EXP_LIMIT,
      "minE",
      -EXP_LIMIT,
      0,
      "modulo",
      0,
      9
    ];
    for (i = 0; i < ps.length; i += 3) {
      if (p = ps[i], useDefaults)
        this[p] = DEFAULTS[p];
      if ((v = obj[p]) !== void 0) {
        if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2])
          this[p] = v;
        else
          throw Error(invalidArgument + p + ": " + v);
      }
    }
    if (p = "crypto", useDefaults)
      this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== void 0) {
      if (v === true || v === false || v === 0 || v === 1) {
        if (v) {
          if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
            this[p] = true;
          } else {
            throw Error(cryptoUnavailable);
          }
        } else {
          this[p] = false;
        }
      } else {
        throw Error(invalidArgument + p + ": " + v);
      }
    }
    return this;
  }
  function cos(x) {
    return new this(x).cos();
  }
  function cosh(x) {
    return new this(x).cosh();
  }
  function clone(obj) {
    var i, p, ps;
    function Decimal2(v) {
      var e, i2, t, x = this;
      if (!(x instanceof Decimal2))
        return new Decimal2(v);
      x.constructor = Decimal2;
      if (isDecimalInstance(v)) {
        x.s = v.s;
        if (external) {
          if (!v.d || v.e > Decimal2.maxE) {
            x.e = NaN;
            x.d = null;
          } else if (v.e < Decimal2.minE) {
            x.e = 0;
            x.d = [0];
          } else {
            x.e = v.e;
            x.d = v.d.slice();
          }
        } else {
          x.e = v.e;
          x.d = v.d ? v.d.slice() : v.d;
        }
        return;
      }
      t = typeof v;
      if (t === "number") {
        if (v === 0) {
          x.s = 1 / v < 0 ? -1 : 1;
          x.e = 0;
          x.d = [0];
          return;
        }
        if (v < 0) {
          v = -v;
          x.s = -1;
        } else {
          x.s = 1;
        }
        if (v === ~~v && v < 1e7) {
          for (e = 0, i2 = v; i2 >= 10; i2 /= 10)
            e++;
          if (external) {
            if (e > Decimal2.maxE) {
              x.e = NaN;
              x.d = null;
            } else if (e < Decimal2.minE) {
              x.e = 0;
              x.d = [0];
            } else {
              x.e = e;
              x.d = [v];
            }
          } else {
            x.e = e;
            x.d = [v];
          }
          return;
        }
        if (v * 0 !== 0) {
          if (!v)
            x.s = NaN;
          x.e = NaN;
          x.d = null;
          return;
        }
        return parseDecimal(x, v.toString());
      }
      if (t === "string") {
        if ((i2 = v.charCodeAt(0)) === 45) {
          v = v.slice(1);
          x.s = -1;
        } else {
          if (i2 === 43)
            v = v.slice(1);
          x.s = 1;
        }
        return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
      }
      if (t === "bigint") {
        if (v < 0) {
          v = -v;
          x.s = -1;
        } else {
          x.s = 1;
        }
        return parseDecimal(x, v.toString());
      }
      throw Error(invalidArgument + v);
    }
    Decimal2.prototype = P;
    Decimal2.ROUND_UP = 0;
    Decimal2.ROUND_DOWN = 1;
    Decimal2.ROUND_CEIL = 2;
    Decimal2.ROUND_FLOOR = 3;
    Decimal2.ROUND_HALF_UP = 4;
    Decimal2.ROUND_HALF_DOWN = 5;
    Decimal2.ROUND_HALF_EVEN = 6;
    Decimal2.ROUND_HALF_CEIL = 7;
    Decimal2.ROUND_HALF_FLOOR = 8;
    Decimal2.EUCLID = 9;
    Decimal2.config = Decimal2.set = config;
    Decimal2.clone = clone;
    Decimal2.isDecimal = isDecimalInstance;
    Decimal2.abs = abs;
    Decimal2.acos = acos;
    Decimal2.acosh = acosh;
    Decimal2.add = add;
    Decimal2.asin = asin;
    Decimal2.asinh = asinh;
    Decimal2.atan = atan;
    Decimal2.atanh = atanh;
    Decimal2.atan2 = atan2;
    Decimal2.cbrt = cbrt;
    Decimal2.ceil = ceil;
    Decimal2.clamp = clamp;
    Decimal2.cos = cos;
    Decimal2.cosh = cosh;
    Decimal2.div = div;
    Decimal2.exp = exp;
    Decimal2.floor = floor;
    Decimal2.hypot = hypot;
    Decimal2.ln = ln;
    Decimal2.log = log;
    Decimal2.log10 = log10;
    Decimal2.log2 = log2;
    Decimal2.max = max;
    Decimal2.min = min;
    Decimal2.mod = mod;
    Decimal2.mul = mul;
    Decimal2.pow = pow;
    Decimal2.random = random;
    Decimal2.round = round;
    Decimal2.sign = sign;
    Decimal2.sin = sin;
    Decimal2.sinh = sinh;
    Decimal2.sqrt = sqrt;
    Decimal2.sub = sub;
    Decimal2.sum = sum;
    Decimal2.tan = tan;
    Decimal2.tanh = tanh;
    Decimal2.trunc = trunc;
    if (obj === void 0)
      obj = {};
    if (obj) {
      if (obj.defaults !== true) {
        ps = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
        for (i = 0; i < ps.length; )
          if (!obj.hasOwnProperty(p = ps[i++]))
            obj[p] = this[p];
      }
    }
    Decimal2.config(obj);
    return Decimal2;
  }
  function div(x, y) {
    return new this(x).div(y);
  }
  function exp(x) {
    return new this(x).exp();
  }
  function floor(x) {
    return finalise(x = new this(x), x.e + 1, 3);
  }
  function hypot() {
    var i, n, t = new this(0);
    external = false;
    for (i = 0; i < arguments.length; ) {
      n = new this(arguments[i++]);
      if (!n.d) {
        if (n.s) {
          external = true;
          return new this(1 / 0);
        }
        t = n;
      } else if (t.d) {
        t = t.plus(n.times(n));
      }
    }
    external = true;
    return t.sqrt();
  }
  function isDecimalInstance(obj) {
    return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
  }
  function ln(x) {
    return new this(x).ln();
  }
  function log(x, y) {
    return new this(x).log(y);
  }
  function log2(x) {
    return new this(x).log(2);
  }
  function log10(x) {
    return new this(x).log(10);
  }
  function max() {
    return maxOrMin(this, arguments, -1);
  }
  function min() {
    return maxOrMin(this, arguments, 1);
  }
  function mod(x, y) {
    return new this(x).mod(y);
  }
  function mul(x, y) {
    return new this(x).mul(y);
  }
  function pow(x, y) {
    return new this(x).pow(y);
  }
  function random(sd) {
    var d, e, k, n, i = 0, r = new this(1), rd = [];
    if (sd === void 0)
      sd = this.precision;
    else
      checkInt32(sd, 1, MAX_DIGITS);
    k = Math.ceil(sd / LOG_BASE);
    if (!this.crypto) {
      for (; i < k; )
        rd[i++] = Math.random() * 1e7 | 0;
    } else if (crypto.getRandomValues) {
      d = crypto.getRandomValues(new Uint32Array(k));
      for (; i < k; ) {
        n = d[i];
        if (n >= 429e7) {
          d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
        } else {
          rd[i++] = n % 1e7;
        }
      }
    } else if (crypto.randomBytes) {
      d = crypto.randomBytes(k *= 4);
      for (; i < k; ) {
        n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
        if (n >= 214e7) {
          crypto.randomBytes(4).copy(d, i);
        } else {
          rd.push(n % 1e7);
          i += 4;
        }
      }
      i = k / 4;
    } else {
      throw Error(cryptoUnavailable);
    }
    k = rd[--i];
    sd %= LOG_BASE;
    if (k && sd) {
      n = mathpow(10, LOG_BASE - sd);
      rd[i] = (k / n | 0) * n;
    }
    for (; rd[i] === 0; i--)
      rd.pop();
    if (i < 0) {
      e = 0;
      rd = [0];
    } else {
      e = -1;
      for (; rd[0] === 0; e -= LOG_BASE)
        rd.shift();
      for (k = 1, n = rd[0]; n >= 10; n /= 10)
        k++;
      if (k < LOG_BASE)
        e -= LOG_BASE - k;
    }
    r.e = e;
    r.d = rd;
    return r;
  }
  function round(x) {
    return finalise(x = new this(x), x.e + 1, this.rounding);
  }
  function sign(x) {
    x = new this(x);
    return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
  }
  function sin(x) {
    return new this(x).sin();
  }
  function sinh(x) {
    return new this(x).sinh();
  }
  function sqrt(x) {
    return new this(x).sqrt();
  }
  function sub(x, y) {
    return new this(x).sub(y);
  }
  function sum() {
    var i = 0, args = arguments, x = new this(args[i]);
    external = false;
    for (; x.s && ++i < args.length; )
      x = x.plus(args[i]);
    external = true;
    return finalise(x, this.precision, this.rounding);
  }
  function tan(x) {
    return new this(x).tan();
  }
  function tanh(x) {
    return new this(x).tanh();
  }
  function trunc(x) {
    return finalise(x = new this(x), x.e + 1, 1);
  }
  P[Symbol.for("nodejs.util.inspect.custom")] = P.toString;
  P[Symbol.toStringTag] = "Decimal";
  var Decimal = P.constructor = clone(DEFAULTS);
  LN10 = new Decimal(LN10);
  PI = new Decimal(PI);
  var decimal_default = Decimal;

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/constants.js
  var TEN = new decimal_default(10);
  var ZERO = new decimal_default(0);
  var NEGATIVE_ZERO = new decimal_default(-0);

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
  var ObjectWithoutPrototypeCache = (
    /** @class */
    function() {
      function ObjectWithoutPrototypeCache2() {
        this.cache = /* @__PURE__ */ Object.create(null);
      }
      ObjectWithoutPrototypeCache2.prototype.get = function(key) {
        return this.cache[key];
      };
      ObjectWithoutPrototypeCache2.prototype.set = function(key, value) {
        this.cache[key] = value;
      };
      return ObjectWithoutPrototypeCache2;
    }()
  );
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

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/262.js
  function ToString(o) {
    if (typeof o === "symbol") {
      throw TypeError("Cannot convert a Symbol value to a string");
    }
    return String(o);
  }
  function ToNumber(arg) {
    if (typeof arg === "number") {
      return new Decimal(arg);
    }
    invariant(typeof arg !== "bigint" && typeof arg !== "symbol", "BigInt and Symbol are not supported", TypeError);
    if (arg === void 0) {
      return new Decimal(NaN);
    }
    if (arg === null || arg === 0) {
      return ZERO;
    }
    if (arg === true) {
      return new Decimal(1);
    }
    if (typeof arg === "string") {
      try {
        return new Decimal(arg);
      } catch (e) {
        return new Decimal(NaN);
      }
    }
    invariant(typeof arg === "object", "object expected", TypeError);
    var primValue = ToPrimitive(arg, "number");
    invariant(typeof primValue !== "object", "object expected", TypeError);
    return ToNumber(primValue);
  }
  function ToObject(arg) {
    if (arg == null) {
      throw new TypeError("undefined/null cannot be converted to object");
    }
    return Object(arg);
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
  function IsCallable(fn) {
    return typeof fn === "function";
  }
  function OrdinaryToPrimitive(O, hint) {
    var methodNames;
    if (hint === "string") {
      methodNames = ["toString", "valueOf"];
    } else {
      methodNames = ["valueOf", "toString"];
    }
    for (var _i = 0, methodNames_1 = methodNames; _i < methodNames_1.length; _i++) {
      var name_1 = methodNames_1[_i];
      var method = O[name_1];
      if (IsCallable(method)) {
        var result = method.call(O);
        if (typeof result !== "object") {
          return result;
        }
      }
    }
    throw new TypeError("Cannot convert object to primitive value");
  }
  function ToPrimitive(input, preferredType) {
    if (typeof input === "object" && input != null) {
      var exoticToPrim = Symbol.toPrimitive in input ? input[Symbol.toPrimitive] : void 0;
      var hint = void 0;
      if (exoticToPrim !== void 0) {
        if (preferredType === void 0) {
          hint = "default";
        } else if (preferredType === "string") {
          hint = "string";
        } else {
          invariant(preferredType === "number", 'preferredType must be "string" or "number"');
          hint = "number";
        }
        var result = exoticToPrim.call(input, hint);
        if (typeof result !== "object") {
          return result;
        }
        throw new TypeError("Cannot convert exotic object to primitive.");
      }
      if (preferredType === void 0) {
        preferredType = "number";
      }
      return OrdinaryToPrimitive(input, preferredType);
    }
    return input;
  }

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/CoerceOptionsToObject.js
  function CoerceOptionsToObject(options) {
    if (typeof options === "undefined") {
      return /* @__PURE__ */ Object.create(null);
    }
    return ToObject(options);
  }

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/DefaultNumberOption.js
  function DefaultNumberOption(inputVal, min2, max2, fallback) {
    if (inputVal === void 0) {
      return fallback;
    }
    var val = Number(inputVal);
    if (isNaN(val) || val < min2 || val > max2) {
      throw new RangeError("".concat(val, " is outside of range [").concat(min2, ", ").concat(max2, "]"));
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

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ApplyUnsignedRoundingMode.js
  function ApplyUnsignedRoundingMode(x, r1, r2, unsignedRoundingMode) {
    if (x.eq(r1))
      return r1;
    invariant(r1.lessThan(x) && x.lessThan(r2), "x should be between r1 and r2 but x=".concat(x, ", r1=").concat(r1, ", r2=").concat(r2));
    if (unsignedRoundingMode === "zero") {
      return r1;
    }
    if (unsignedRoundingMode === "infinity") {
      return r2;
    }
    var d1 = x.minus(r1);
    var d2 = r2.minus(x);
    if (d1.lessThan(d2)) {
      return r1;
    }
    if (d2.lessThan(d1)) {
      return r2;
    }
    invariant(d1.eq(d2), "d1 should be equal to d2");
    if (unsignedRoundingMode === "half-zero") {
      return r1;
    }
    if (unsignedRoundingMode === "half-infinity") {
      return r2;
    }
    invariant(unsignedRoundingMode === "half-even", "unsignedRoundingMode should be half-even");
    var cardinality = r1.div(r2.minus(r1)).mod(2);
    if (cardinality.isZero()) {
      return r1;
    }
    return r2;
  }

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponentForMagnitude.js
  decimal_default.set({
    toExpPos: 100
  });

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/GetUnsignedRoundingMode.js
  var negativeMapping = {
    ceil: "zero",
    floor: "infinity",
    expand: "infinity",
    trunc: "zero",
    halfCeil: "half-zero",
    halfFloor: "half-infinity",
    halfExpand: "half-infinity",
    halfTrunc: "half-zero",
    halfEven: "half-even"
  };
  var positiveMapping = {
    ceil: "infinity",
    floor: "zero",
    expand: "infinity",
    trunc: "zero",
    halfCeil: "half-infinity",
    halfFloor: "half-zero",
    halfExpand: "half-infinity",
    halfTrunc: "half-zero",
    halfEven: "half-even"
  };
  function GetUnsignedRoundingMode(roundingMode, isNegative) {
    if (isNegative) {
      return negativeMapping[roundingMode];
    }
    return positiveMapping[roundingMode];
  }

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawFixed.js
  decimal_default.set({
    toExpPos: 100
  });
  function ToRawFixedFn(n, f) {
    return n.times(decimal_default.pow(10, -f));
  }
  function findN1R1(x, f, roundingIncrement) {
    var nx = x.times(decimal_default.pow(10, f)).floor();
    var n1 = nx.div(roundingIncrement).floor().times(roundingIncrement);
    var r1 = ToRawFixedFn(n1, f);
    return {
      n1,
      r1
    };
  }
  function findN2R2(x, f, roundingIncrement) {
    var nx = x.times(decimal_default.pow(10, f)).ceil();
    var n2 = nx.div(roundingIncrement).ceil().times(roundingIncrement);
    var r2 = ToRawFixedFn(n2, f);
    return {
      n2,
      r2
    };
  }
  function ToRawFixed(x, minFraction, maxFraction, roundingIncrement, unsignedRoundingMode) {
    var f = maxFraction;
    var _a = findN1R1(x, f, roundingIncrement), n1 = _a.n1, r1 = _a.r1;
    var _b = findN2R2(x, f, roundingIncrement), n2 = _b.n2, r2 = _b.r2;
    var r = ApplyUnsignedRoundingMode(x, r1, r2, unsignedRoundingMode);
    var n, xFinal;
    var m;
    if (r.eq(r1)) {
      n = n1;
      xFinal = r1;
    } else {
      n = n2;
      xFinal = r2;
    }
    if (n.isZero()) {
      m = "0";
    } else {
      m = n.toString();
    }
    var int;
    if (f !== 0) {
      var k = m.length;
      if (k <= f) {
        var z = repeat("0", f - k + 1);
        m = z + m;
        k = f + 1;
      }
      var a = m.slice(0, k - f);
      var b = m.slice(m.length - f);
      m = a + "." + b;
      int = a.length;
    } else {
      int = m.length;
    }
    var cut = maxFraction - minFraction;
    while (cut > 0 && m[m.length - 1] === "0") {
      m = m.slice(0, m.length - 1);
      cut--;
    }
    if (m[m.length - 1] === ".") {
      m = m.slice(0, m.length - 1);
    }
    return {
      formattedString: m,
      roundedNumber: xFinal,
      integerDigitsCount: int,
      roundingMagnitude: -f
    };
  }

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawPrecision.js
  function findN1E1R1(x, p) {
    var maxN1 = decimal_default.pow(10, p);
    var minN1 = decimal_default.pow(10, p - 1);
    var maxE1 = x.div(minN1).log(10).plus(p).minus(1).ceil();
    var currentE1 = maxE1;
    while (true) {
      var currentN1 = x.div(decimal_default.pow(10, currentE1.minus(p).plus(1))).floor();
      if (currentN1.lessThan(maxN1) && currentN1.greaterThanOrEqualTo(minN1)) {
        var currentR1 = currentN1.times(decimal_default.pow(10, currentE1.minus(p).plus(1)));
        if (currentR1.lessThanOrEqualTo(x)) {
          return {
            n1: currentN1,
            e1: currentE1,
            r1: currentR1
          };
        }
      }
      currentE1 = currentE1.minus(1);
    }
  }
  function findN2E2R2(x, p) {
    var maxN2 = decimal_default.pow(10, p);
    var minN2 = decimal_default.pow(10, p - 1);
    var minE2 = x.div(maxN2).log(10).plus(p).minus(1).floor();
    var currentE2 = minE2;
    while (true) {
      var currentN2 = x.div(decimal_default.pow(10, currentE2.minus(p).plus(1))).ceil();
      if (currentN2.lessThan(maxN2) && currentN2.greaterThanOrEqualTo(minN2)) {
        var currentR2 = currentN2.times(decimal_default.pow(10, currentE2.minus(p).plus(1)));
        if (currentR2.greaterThanOrEqualTo(x)) {
          return {
            n2: currentN2,
            e2: currentE2,
            r2: currentR2
          };
        }
      }
      currentE2 = currentE2.plus(1);
    }
  }
  function ToRawPrecision(x, minPrecision, maxPrecision, unsignedRoundingMode) {
    var p = maxPrecision;
    var m;
    var e;
    var xFinal;
    if (x.isZero()) {
      m = repeat("0", p);
      e = 0;
      xFinal = ZERO;
    } else {
      var _a = findN1E1R1(x, p), n1 = _a.n1, e1 = _a.e1, r1 = _a.r1;
      var _b = findN2E2R2(x, p), n2 = _b.n2, e2 = _b.e2, r2 = _b.r2;
      var r = ApplyUnsignedRoundingMode(x, r1, r2, unsignedRoundingMode);
      var n = void 0;
      if (r.eq(r1)) {
        n = n1;
        e = e1.toNumber();
        xFinal = r1;
      } else {
        n = n2;
        e = e2.toNumber();
        xFinal = r2;
      }
      m = n.toString();
    }
    var int;
    if (e >= p - 1) {
      m = m + repeat("0", e - p + 1);
      int = e + 1;
    } else if (e >= 0) {
      m = m.slice(0, e + 1) + "." + m.slice(m.length - (p - (e + 1)));
      int = e + 1;
    } else {
      invariant(e < 0, "e should be less than 0");
      m = "0." + repeat("0", -e - 1) + m;
      int = 1;
    }
    if (m.includes(".") && maxPrecision > minPrecision) {
      var cut = maxPrecision - minPrecision;
      while (cut > 0 && m[m.length - 1] === "0") {
        m = m.slice(0, m.length - 1);
        cut--;
      }
      if (m[m.length - 1] === ".") {
        m = m.slice(0, m.length - 1);
      }
    }
    return {
      formattedString: m,
      roundedNumber: xFinal,
      integerDigitsCount: int,
      roundingMagnitude: e
    };
  }

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToString.js
  function FormatNumericToString(intlObject, _x) {
    var x = _x;
    var sign2;
    if (x.isZero() && x.isNegative()) {
      sign2 = "negative";
      x = ZERO;
    } else {
      invariant(x.isFinite(), "NumberFormatDigitInternalSlots value is not finite");
      if (x.lessThan(0)) {
        sign2 = "negative";
      } else {
        sign2 = "positive";
      }
      if (sign2 === "negative") {
        x = x.negated();
      }
    }
    var result;
    var roundingType = intlObject.roundingType;
    var unsignedRoundingMode = GetUnsignedRoundingMode(intlObject.roundingMode, sign2 === "negative");
    switch (roundingType) {
      case "significantDigits":
        result = ToRawPrecision(x, intlObject.minimumSignificantDigits, intlObject.maximumSignificantDigits, unsignedRoundingMode);
        break;
      case "fractionDigits":
        result = ToRawFixed(x, intlObject.minimumFractionDigits, intlObject.maximumFractionDigits, intlObject.roundingIncrement, unsignedRoundingMode);
        break;
      default:
        var sResult = ToRawPrecision(x, intlObject.minimumSignificantDigits, intlObject.maximumSignificantDigits, unsignedRoundingMode);
        var fResult = ToRawFixed(x, intlObject.minimumFractionDigits, intlObject.maximumFractionDigits, intlObject.roundingIncrement, unsignedRoundingMode);
        if (intlObject.roundingType === "morePrecision") {
          if (sResult.roundingMagnitude <= fResult.roundingMagnitude) {
            result = sResult;
          } else {
            result = fResult;
          }
        } else {
          invariant(intlObject.roundingType === "lessPrecision", "Invalid roundingType");
          if (sResult.roundingMagnitude <= fResult.roundingMagnitude) {
            result = fResult;
          } else {
            result = sResult;
          }
        }
        break;
    }
    x = result.roundedNumber;
    var string = result.formattedString;
    if (intlObject.trailingZeroDisplay === "stripIfInteger" && x.isInteger()) {
      var i = string.indexOf(".");
      if (i > -1) {
        string = string.slice(0, i);
      }
    }
    var int = result.integerDigitsCount;
    var minInteger = intlObject.minimumIntegerDigits;
    if (int < minInteger) {
      var forwardZeros = repeat("0", minInteger - int);
      string = forwardZeros + string;
    }
    if (sign2 === "negative") {
      if (x.isZero()) {
        x = NEGATIVE_ZERO;
      } else {
        x = x.negated();
      }
    }
    return { roundedNumber: x, formattedString: string };
  }

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
      matches && (matches = !(expandedMatchedRegions.indexOf(locale.region || "") > -1 != shouldInclude));
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
        script: supportedLSR.script,
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

  // node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeUValue.js
  function CanonicalizeUValue(ukey, uvalue) {
    var lowerValue = uvalue.toLowerCase();
    invariant2(ukey !== void 0, "ukey must be defined");
    var canonicalized = lowerValue;
    return canonicalized;
  }

  // node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeUnicodeLocaleId.js
  function CanonicalizeUnicodeLocaleId(locale) {
    return Intl.getCanonicalLocales(locale)[0];
  }

  // node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/InsertUnicodeExtensionAndCanonicalize.js
  function InsertUnicodeExtensionAndCanonicalize(locale, attributes, keywords) {
    invariant2(locale.indexOf("-u-") === -1, "Expected locale to not have a Unicode locale extension");
    var extension = "-u";
    for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
      var attr = attributes_1[_i];
      extension += "-".concat(attr);
    }
    for (var _a = 0, keywords_1 = keywords; _a < keywords_1.length; _a++) {
      var kw = keywords_1[_a];
      var key = kw.key, value = kw.value;
      extension += "-".concat(key);
      if (value !== "") {
        extension += "-".concat(value);
      }
    }
    if (extension === "-u") {
      return CanonicalizeUnicodeLocaleId(locale);
    }
    var privateIndex = locale.indexOf("-x-");
    var newLocale;
    if (privateIndex === -1) {
      newLocale = locale + extension;
    } else {
      var preExtension = locale.slice(0, privateIndex);
      var postExtension = locale.slice(privateIndex);
      newLocale = preExtension + extension + postExtension;
    }
    return CanonicalizeUnicodeLocaleId(newLocale);
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

  // node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/UnicodeExtensionComponents.js
  function UnicodeExtensionComponents(extension) {
    invariant2(extension === extension.toLowerCase(), "Expected extension to be lowercase");
    invariant2(extension.slice(0, 3) === "-u-", "Expected extension to be a Unicode locale extension");
    var attributes = [];
    var keywords = [];
    var keyword;
    var size = extension.length;
    var k = 3;
    while (k < size) {
      var e = extension.indexOf("-", k);
      var len = void 0;
      if (e === -1) {
        len = size - k;
      } else {
        len = e - k;
      }
      var subtag = extension.slice(k, k + len);
      invariant2(len >= 2, "Expected a subtag to have at least 2 characters");
      if (keyword === void 0 && len != 2) {
        if (attributes.indexOf(subtag) === -1) {
          attributes.push(subtag);
        }
      } else if (len === 2) {
        keyword = { key: subtag, value: "" };
        if (keywords.find(function(k2) {
          return k2.key === (keyword === null || keyword === void 0 ? void 0 : keyword.key);
        }) === void 0) {
          keywords.push(keyword);
        }
      } else if ((keyword === null || keyword === void 0 ? void 0 : keyword.value) === "") {
        keyword.value = subtag;
      } else {
        invariant2(keyword !== void 0, "Expected keyword to be defined");
        keyword.value += "-" + subtag;
      }
      k += len + 1;
    }
    return { attributes, keywords };
  }

  // node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/ResolveLocale.js
  function ResolveLocale(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData, getDefaultLocale) {
    var _a;
    var matcher = options.localeMatcher;
    var r;
    if (matcher === "lookup") {
      r = LookupMatcher(Array.from(availableLocales), requestedLocales, getDefaultLocale);
    } else {
      r = BestFitMatcher(Array.from(availableLocales), requestedLocales, getDefaultLocale);
    }
    if (r == null) {
      r = {
        locale: getDefaultLocale(),
        extension: ""
      };
    }
    var foundLocale = r.locale;
    var foundLocaleData = localeData[foundLocale];
    var result = { locale: "en", dataLocale: foundLocale };
    var components;
    var keywords;
    if (r.extension) {
      components = UnicodeExtensionComponents(r.extension);
      keywords = components.keywords;
    } else {
      keywords = [];
    }
    var supportedKeywords = [];
    var _loop_1 = function(key2) {
      var keyLocaleData = (_a = foundLocaleData === null || foundLocaleData === void 0 ? void 0 : foundLocaleData[key2]) !== null && _a !== void 0 ? _a : [];
      invariant2(Array.isArray(keyLocaleData), "keyLocaleData for ".concat(key2, " must be an array"));
      var value = keyLocaleData[0];
      invariant2(value === void 0 || typeof value === "string", "value must be a string or undefined");
      var supportedKeyword = void 0;
      var entry = keywords.find(function(k) {
        return k.key === key2;
      });
      if (entry) {
        var requestedValue = entry.value;
        if (requestedValue !== "") {
          if (keyLocaleData.indexOf(requestedValue) > -1) {
            value = requestedValue;
            supportedKeyword = {
              key: key2,
              value
            };
          }
        } else if (keyLocaleData.indexOf("true") > -1) {
          value = "true";
          supportedKeyword = {
            key: key2,
            value
          };
        }
      }
      var optionsValue = options[key2];
      invariant2(optionsValue == null || typeof optionsValue === "string", "optionsValue must be a string or undefined");
      if (typeof optionsValue === "string") {
        var ukey = key2.toLowerCase();
        optionsValue = CanonicalizeUValue(ukey, optionsValue);
        if (optionsValue === "") {
          optionsValue = "true";
        }
      }
      if (optionsValue !== value && keyLocaleData.indexOf(optionsValue) > -1) {
        value = optionsValue;
        supportedKeyword = void 0;
      }
      if (supportedKeyword) {
        supportedKeywords.push(supportedKeyword);
      }
      result[key2] = value;
    };
    for (var _i = 0, relevantExtensionKeys_1 = relevantExtensionKeys; _i < relevantExtensionKeys_1.length; _i++) {
      var key = relevantExtensionKeys_1[_i];
      _loop_1(key);
    }
    var supportedAttributes = [];
    if (supportedKeywords.length > 0) {
      supportedAttributes = [];
      foundLocale = InsertUnicodeExtensionAndCanonicalize(foundLocale, supportedAttributes, supportedKeywords);
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

  // node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatDigitOptions.js
  var VALID_ROUNDING_INCREMENTS = /* @__PURE__ */ new Set([
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
    2e3,
    2500,
    5e3
  ]);
  function SetNumberFormatDigitOptions(internalSlots, opts, mnfdDefault, mxfdDefault, notation) {
    var mnid = GetNumberOption(opts, "minimumIntegerDigits", 1, 21, 1);
    var mnfd = opts.minimumFractionDigits;
    var mxfd = opts.maximumFractionDigits;
    var mnsd = opts.minimumSignificantDigits;
    var mxsd = opts.maximumSignificantDigits;
    internalSlots.minimumIntegerDigits = mnid;
    var roundingIncrement = GetNumberOption(opts, "roundingIncrement", 1, 5e3, 1);
    invariant(VALID_ROUNDING_INCREMENTS.has(roundingIncrement), "Invalid rounding increment value: ".concat(roundingIncrement, ".\nValid values are ").concat(Array.from(VALID_ROUNDING_INCREMENTS).join(", "), "."));
    var roundingMode = GetOption(opts, "roundingMode", "string", [
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
    var roundingPriority = GetOption(opts, "roundingPriority", "string", ["auto", "morePrecision", "lessPrecision"], "auto");
    var trailingZeroDisplay = GetOption(opts, "trailingZeroDisplay", "string", ["auto", "stripIfInteger"], "auto");
    if (roundingIncrement !== 1) {
      mxfdDefault = mnfdDefault;
    }
    internalSlots.roundingIncrement = roundingIncrement;
    internalSlots.roundingMode = roundingMode;
    internalSlots.trailingZeroDisplay = trailingZeroDisplay;
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
        internalSlots.minimumSignificantDigits = DefaultNumberOption(mnsd, 1, 21, 1);
        internalSlots.maximumSignificantDigits = DefaultNumberOption(mxsd, internalSlots.minimumSignificantDigits, 21, 21);
      } else {
        internalSlots.minimumSignificantDigits = 1;
        internalSlots.maximumSignificantDigits = 21;
      }
    }
    if (needFd) {
      if (hasFd) {
        mnfd = DefaultNumberOption(mnfd, 0, 100, void 0);
        mxfd = DefaultNumberOption(mxfd, 0, 100, void 0);
        if (mnfd === void 0) {
          invariant(mxfd !== void 0, "maximumFractionDigits must be defined");
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
    if (!needSd && !needFd) {
      internalSlots.minimumFractionDigits = 0;
      internalSlots.maximumFractionDigits = 0;
      internalSlots.minimumSignificantDigits = 1;
      internalSlots.maximumSignificantDigits = 2;
      internalSlots.roundingType = "morePrecision";
      internalSlots.roundingPriority = "morePrecision";
    } else if (roundingPriority === "morePrecision") {
      internalSlots.roundingType = "morePrecision";
      internalSlots.roundingPriority = "morePrecision";
    } else if (roundingPriority === "lessPrecision") {
      internalSlots.roundingType = "lessPrecision";
      internalSlots.roundingPriority = "lessPrecision";
    } else if (hasSd) {
      internalSlots.roundingType = "significantDigits";
      internalSlots.roundingPriority = "auto";
    } else {
      internalSlots.roundingType = "fractionDigits";
      internalSlots.roundingPriority = "auto";
    }
    if (roundingIncrement !== 1) {
      invariant(internalSlots.roundingType === "fractionDigits", "Invalid roundingType", TypeError);
      invariant(internalSlots.maximumFractionDigits === internalSlots.minimumFractionDigits, "With roundingIncrement > 1, maximumFractionDigits and minimumFractionDigits must be equal.", RangeError);
    }
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

  // packages/intl-pluralrules/abstract/InitializePluralRules.ts
  function InitializePluralRules(pl, locales, options, {
    availableLocales,
    relevantExtensionKeys,
    localeData,
    getDefaultLocale,
    getInternalSlots: getInternalSlots2
  }) {
    const requestedLocales = CanonicalizeLocaleList(locales);
    const opt = /* @__PURE__ */ Object.create(null);
    const opts = CoerceOptionsToObject(options);
    const internalSlots = getInternalSlots2(pl);
    internalSlots.initializedPluralRules = true;
    const matcher = GetOption(
      opts,
      "localeMatcher",
      "string",
      ["best fit", "lookup"],
      "best fit"
    );
    opt.localeMatcher = matcher;
    const r = ResolveLocale(
      availableLocales,
      requestedLocales,
      opt,
      relevantExtensionKeys,
      localeData,
      getDefaultLocale
    );
    internalSlots.locale = r.locale;
    internalSlots.type = GetOption(
      opts,
      "type",
      "string",
      ["cardinal", "ordinal"],
      "cardinal"
    );
    SetNumberFormatDigitOptions(internalSlots, opts, 0, 3, "standard");
    return pl;
  }

  // packages/intl-pluralrules/abstract/GetOperands.ts
  function GetOperands(s) {
    invariant(
      typeof s === "string",
      `GetOperands should have been called with a string`
    );
    const n = ToNumber(s);
    invariant(n.isFinite(), "n should be finite");
    let dp = s.indexOf(".");
    let iv;
    let f;
    let v;
    let fv = "";
    if (dp === -1) {
      iv = n;
      f = ZERO;
      v = 0;
    } else {
      iv = s.slice(0, dp);
      fv = s.slice(dp, s.length);
      f = ToNumber(fv);
      v = fv.length;
    }
    const i = ToNumber(iv).abs();
    let w;
    let t;
    if (!f.isZero()) {
      const ft = fv.replace(/0+$/, "");
      w = ft.length;
      t = ToNumber(ft);
    } else {
      w = 0;
      t = ZERO;
    }
    return {
      Number: n,
      IntegerDigits: i.toNumber(),
      NumberOfFractionDigits: v,
      NumberOfFractionDigitsWithoutTrailing: w,
      FractionDigits: f.toNumber(),
      FractionDigitsWithoutTrailing: t.toNumber()
    };
  }

  // packages/intl-pluralrules/abstract/ResolvePlural.ts
  function ResolvePlural(pl, n, {
    getInternalSlots: getInternalSlots2,
    PluralRuleSelect: PluralRuleSelect2
  }) {
    const internalSlots = getInternalSlots2(pl);
    invariant(Type(internalSlots) === "Object", "pl has to be an object");
    invariant(
      "initializedPluralRules" in internalSlots,
      "pluralrules must be initialized"
    );
    if (!n.isFinite()) {
      return "other";
    }
    const { locale, type } = internalSlots;
    const res = FormatNumericToString(internalSlots, n);
    const s = res.formattedString;
    const operands = GetOperands(s);
    return PluralRuleSelect2(locale, type, n, operands);
  }

  // packages/intl-pluralrules/get_internal_slots.ts
  var internalSlotMap = /* @__PURE__ */ new WeakMap();
  function getInternalSlots(x) {
    let internalSlots = internalSlotMap.get(x);
    if (!internalSlots) {
      internalSlots = /* @__PURE__ */ Object.create(null);
      internalSlotMap.set(x, internalSlots);
    }
    return internalSlots;
  }

  // packages/intl-pluralrules/index.ts
  function validateInstance(instance, method) {
    if (!(instance instanceof PluralRules)) {
      throw new TypeError(
        `Method Intl.PluralRules.prototype.${method} called on incompatible receiver ${String(
          instance
        )}`
      );
    }
  }
  function PluralRuleSelect(locale, type, _n, { IntegerDigits, NumberOfFractionDigits, FractionDigits }) {
    return PluralRules.localeData[locale].fn(
      NumberOfFractionDigits ? `${IntegerDigits}.${FractionDigits}` : IntegerDigits,
      type === "ordinal"
    );
  }
  var _PluralRules = class _PluralRules {
    constructor(locales, options) {
      const newTarget = this && this instanceof _PluralRules ? this.constructor : void 0;
      if (!newTarget) {
        throw new TypeError("Intl.PluralRules must be called with 'new'");
      }
      return InitializePluralRules(this, locales, options, {
        availableLocales: _PluralRules.availableLocales,
        relevantExtensionKeys: _PluralRules.relevantExtensionKeys,
        localeData: _PluralRules.localeData,
        getDefaultLocale: _PluralRules.getDefaultLocale,
        getInternalSlots
      });
    }
    resolvedOptions() {
      validateInstance(this, "resolvedOptions");
      const opts = /* @__PURE__ */ Object.create(null);
      const internalSlots = getInternalSlots(this);
      opts.locale = internalSlots.locale;
      opts.type = internalSlots.type;
      [
        "minimumIntegerDigits",
        "minimumFractionDigits",
        "maximumFractionDigits",
        "minimumSignificantDigits",
        "maximumSignificantDigits"
      ].forEach((field) => {
        const val = internalSlots[field];
        if (val !== void 0) {
          opts[field] = val;
        }
      });
      opts.pluralCategories = [
        ..._PluralRules.localeData[opts.locale].categories[opts.type]
      ];
      return opts;
    }
    select(val) {
      const pr = this;
      validateInstance(pr, "select");
      const n = ToNumber(val);
      return ResolvePlural(pr, n, { getInternalSlots, PluralRuleSelect });
    }
    toString() {
      return "[object Intl.PluralRules]";
    }
    static supportedLocalesOf(locales, options) {
      return SupportedLocales(
        _PluralRules.availableLocales,
        CanonicalizeLocaleList(locales),
        options
      );
    }
    static __addLocaleData(...data2) {
      for (const { data: d, locale } of data2) {
        _PluralRules.localeData[locale] = d;
        _PluralRules.availableLocales.add(locale);
        if (!_PluralRules.__defaultLocale) {
          _PluralRules.__defaultLocale = locale;
        }
      }
    }
    static getDefaultLocale() {
      return _PluralRules.__defaultLocale;
    }
  };
  __publicField(_PluralRules, "localeData", {});
  __publicField(_PluralRules, "availableLocales", /* @__PURE__ */ new Set());
  __publicField(_PluralRules, "__defaultLocale", "");
  __publicField(_PluralRules, "relevantExtensionKeys", []);
  __publicField(_PluralRules, "polyfilled", true);
  var PluralRules = _PluralRules;
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
    Object.defineProperty(PluralRules, "name", {
      value: "PluralRules",
      writable: false,
      enumerable: false,
      configurable: true
    });
  } catch (ex) {
  }

  // packages/intl-pluralrules/supported-locales.generated.ts
  var supportedLocales = ["af", "ak", "am", "an", "ar", "ars", "as", "asa", "ast", "az", "bal", "be", "bem", "bez", "bg", "bho", "bm", "bn", "bo", "br", "brx", "bs", "ca", "ce", "ceb", "cgg", "chr", "ckb", "cs", "cy", "da", "de", "doi", "dsb", "dv", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fil", "fo", "fr", "fur", "fy", "ga", "gd", "gl", "gsw", "gu", "guw", "gv", "ha", "haw", "he", "hi", "hnj", "hr", "hsb", "hu", "hy", "ia", "id", "ig", "ii", "io", "is", "it", "iu", "ja", "jbo", "jgo", "jmc", "jv", "jw", "ka", "kab", "kaj", "kcg", "kde", "kea", "kk", "kkj", "kl", "km", "kn", "ko", "ks", "ksb", "ksh", "ku", "kw", "ky", "lag", "lb", "lg", "lij", "lkt", "ln", "lo", "lt", "lv", "mas", "mg", "mgo", "mk", "ml", "mn", "mo", "mr", "ms", "mt", "my", "nah", "naq", "nb", "nd", "ne", "nl", "nn", "nnh", "no", "nqo", "nr", "nso", "ny", "nyn", "om", "or", "os", "osa", "pa", "pap", "pcm", "pl", "prg", "ps", "pt", "pt-PT", "rm", "ro", "rof", "ru", "rwk", "sah", "saq", "sat", "sc", "scn", "sd", "sdh", "se", "seh", "ses", "sg", "sh", "shi", "si", "sk", "sl", "sma", "smi", "smj", "smn", "sms", "sn", "so", "sq", "sr", "ss", "ssy", "st", "su", "sv", "sw", "syr", "ta", "te", "teo", "th", "ti", "tig", "tk", "tl", "tn", "to", "tpi", "tr", "ts", "tzm", "ug", "uk", "und", "ur", "uz", "ve", "vi", "vo", "vun", "wa", "wae", "wo", "xh", "xog", "yi", "yo", "yue", "zh", "zu"];

  // packages/intl-pluralrules/should-polyfill.ts
  function supportedLocalesOf(locale) {
    if (!locale) {
      return true;
    }
    const locales = Array.isArray(locale) ? locale : [locale];
    return Intl.PluralRules.supportedLocalesOf(locales).length === locales.length;
  }
  function shouldPolyfill(locale = "en") {
    if (!("PluralRules" in Intl) || new Intl.PluralRules("en", { minimumFractionDigits: 2 }).select(1) === "one" || !supportedLocalesOf(locale)) {
      return locale ? match([locale], supportedLocales, "en") : void 0;
    }
  }

  // packages/intl-pluralrules/polyfill.ts
  if (shouldPolyfill()) {
    Object.defineProperty(Intl, "PluralRules", {
      value: PluralRules,
      writable: true,
      enumerable: false,
      configurable: true
    });
  }
})();
/*! Bundled license information:

decimal.js/decimal.mjs:
  (*!
   *  decimal.js v10.5.0
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
*/
//# sourceMappingURL=polyfill.iife.js.map
