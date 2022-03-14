import { Polyfill } from '../Polyfill';

abstract class IntlPolyfill extends Polyfill {
    get packageURLs() {
        return [`${this.packageBase}/polyfill.iife.js`];
    }
}

export class GetCanonicalLocales extends IntlPolyfill {
    packageName = '@formatjs/intl-getcanonicallocates';

    detect = function () {
        return window.Intl && 'getCanonicalLocates' in window.Intl;
    };
}

export class Locale extends IntlPolyfill {
    packageName = '@formatjs/intl-locale';

    dependencies = [new GetCanonicalLocales()];

    detect = function () {
        return window.Intl && window.Intl.Locale instanceof Function;
    };
}

export class PluralRules extends IntlPolyfill {
    packageName = '@formatjs/intl-pluralrules';

    dependencies = [new Locale()];

    detect = function () {
        return window.Intl && window.Intl.PluralRules instanceof Function;
    };
}

export class DisplayNames extends IntlPolyfill {
    packageName = '@formatjs/intl-displaynames';

    dependencies = [new Locale()];

    detect = function () {
        return window.Intl && window.Intl.DisplayNames instanceof Function;
    };
}

export class ListFormat extends IntlPolyfill {
    packageName = '@formatjs/intl-listformat';

    dependencies = [new Locale()];

    detect = function () {
        return window.Intl && 'ListFormat' in window.Intl;
    };
}

export class NumberFormat extends IntlPolyfill {
    packageName = '@formatjs/intl-numberformat';

    dependencies = [new PluralRules()];

    detect = function () {
        return window.Intl && window.Intl.NumberFormat instanceof Function;
    };
}

export class DateTimeFormat extends IntlPolyfill {
    packageName = '@formatjs/intl-datetimeformat';

    dependencies = [new NumberFormat()];

    detect = function () {
        return window.Intl && window.Intl.DateTimeFormat instanceof Function;
    };
}

export class RelativeTimeFormat extends IntlPolyfill {
    packageName = '@formatjs/intl-relativetimeformat';

    dependencies = [new NumberFormat()];

    detect = function () {
        return (
            window.Intl && window.Intl.RelativeTimeFormat instanceof Function
        );
    };
}
