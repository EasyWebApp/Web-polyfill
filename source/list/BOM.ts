import { Polyfill } from '../Polyfill';
import { ECMAScript, ECMAScript6 } from './ES';

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

    get packageURLs() {
        return [`${this.packageBase}@1.0.0-rc5/dist/index.umd.js`];
    }

    detect = function () {
        return window['URLPattern'] instanceof Function;
    };
}

export class Stream extends Polyfill {
    packageName = 'web-streams-polyfill';

    dependencies = [new ECMAScript()];

    get packageURLs() {
        return [`${this.packageBase}/dist/polyfill.es5.js`];
    }

    detect = function () {
        return (
            window.ReadableStream[window.Symbol.asyncIterator] instanceof
            Function
        );
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
    packageName = '@tech_query/abortcontroller-polyfill';

    dependencies = [new EventTarget(), new Fetch()];

    get packageURLs() {
        return [`${this.packageBase}/dist/polyfill-patch-fetch.js`];
    }
    detect = function () {
        return window.AbortSignal instanceof Function;
    };
}

export class Clipboard extends Polyfill {
    packageName = 'clipboard-polyfill';

    dependencies = [new ECMAScript6()];

    get packageURLs() {
        return [
            `${this.packageBase}/dist/es5/overwrite-globals/clipboard-polyfill.overwrite-globals.es5.js`
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

export class WakeLock extends Polyfill {
    packageName = 'wakelock-lazy-polyfill';

    dependencies = [new ECMAScript6()];

    detect = function () {
        return navigator.wakeLock instanceof Object;
    };
}

export class FileSystem extends Polyfill {
    packageName = '@tech_query/native-file-system-adapter';

    dependencies = [new ECMAScript6()];

    get packageURLs() {
        return [`${this.packageBase}/dist/es6.js`];
    }
    detect = function () {
        return window.FileSystemHandle instanceof Function;
    };
}
