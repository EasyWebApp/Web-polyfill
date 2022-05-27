import { Polyfill } from '../Polyfill';
import { ECMAScript6 } from './ES';

export class TextEncoder extends Polyfill {
    packageName = 'fastestsmallesttextencoderdecoder-encodeinto';

    detect = function () {
        return window.TextEncoder instanceof Function;
    };
}

export class URL extends Polyfill {
    packageName = 'url-polyfill';

    detect = function () {
        return window.URL instanceof Function;
    };
}

export class URLPattern extends Polyfill {
    packageName = 'urlpattern-polyfill';

    detect = function () {
        return window['URLPattern'] instanceof Function;
    };
}

export class Fetch extends Polyfill {
    packageName = 'whatwg-fetch';

    dependencies = [new ECMAScript6(), new URL()];

    detect = function () {
        return window.fetch instanceof Function;
    };
}

export class EventTarget extends Polyfill {
    packageName = 'event-target-polyfill';

    detect = function () {
        return window.EventTarget instanceof Function;
    };
}

export class AbortController extends Polyfill {
    packageName = 'yet-another-abortcontroller-polyfill';

    dependencies = [new EventTarget(), new Fetch()];

    detect = function () {
        return window.AbortController instanceof Function;
    };
}

export class Clipboard extends Polyfill {
    packageName = 'clipboard-polyfill';

    dependencies = [new ECMAScript6()];

    get packageURLs() {
        return [
            `${this.packageBase}/dist/overwrite-globals/clipboard-polyfill.overwrite-globals.js`
        ];
    }
    detect = function () {
        return !!window.Clipboard;
    };
}

export class PWAManifest extends Polyfill {
    packageName = 'pwacompat';

    detect = function () {
        return !!navigator.serviceWorker;
    };
}

export class Share extends Polyfill {
    packageName = 'share-api-polyfill';

    dependencies = [new ECMAScript6()];

    detect = function () {
        return navigator.share instanceof Function;
    };
}
