import { Polyfill } from '../Polyfill';

export class ECMAScript6 extends Polyfill {
    packageName = 'es6-shim';

    get packageURLs(): string[] {
        return [`${this.packageBase}/es6-shim.min.js`];
    }
    detect = function () {
        return window.Promise instanceof Function;
    };
}

export class Proxy extends Polyfill {
    packageName = 'es6-proxy-polyfill';

    detect = function () {
        return window.Proxy instanceof Function;
    };
}

export class ECMAScript7 extends Polyfill {
    packageName = 'es7-shim';

    dependencies = [new ECMAScript6()];

    detect = function () {
        return Object.values instanceof Function;
    };
}

export class ECMAScript extends Polyfill {
    packageName = 'core-js-bundle';

    detect = function () {
        return ''.at instanceof Function;
    };
}

export class Regenerator extends Polyfill {
    packageName = 'regenerator-runtime';

    detect = function () {
        return 'regeneratorRuntime' in window;
    };
}
