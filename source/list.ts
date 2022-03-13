import { Polyfill } from './Polyfill';

export class URL extends Polyfill {
    packageName = 'url-polyfill';

    detect = function () {
        return window.URL instanceof Function;
    };
}

export class Fetch extends Polyfill {
    packageName = 'whatwg-fetch';

    dependencies = [new URL()];

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

export class Regenerator extends Polyfill {
    packageName = 'regenerator-runtime';

    detect = function () {
        return 'regeneratorRuntime' in window;
    };
}

export class ResizeObserver extends Polyfill {
    packageName = 'resize-observer-polyfill';

    detect = function () {
        return window.ResizeObserver instanceof Function;
    };
}

export class IntersectionObserver extends Polyfill {
    packageName = 'intersection-observer';

    get packageURLs() {
        return [`${this.packageBase}/intersection-observer.js`];
    }
    detect = function () {
        return window.IntersectionObserver instanceof Function;
    };
}

export class EventSubmitter extends Polyfill {
    packageName = 'event-submitter-polyfill';

    detect = function () {
        return true;
    };
}

export class ScrollBehavior extends Polyfill {
    packageName = 'scroll-behavior-polyfill';

    detect = function () {
        return 'scrollBehavior' in document.documentElement.style;
    };
}

export class Dialog extends Polyfill {
    packageName = 'dialog-polyfill';

    get packageURLs() {
        const { packageBase } = this;

        return [
            `${packageBase}/dist/dialog-polyfill.js`,
            `${packageBase}/dist/dialog-polyfill.css`
        ];
    }
    detect = function () {
        return 'HTMLDialogElement' in window;
    };
}

export class WebComponents extends Polyfill {
    packageName = '@webcomponents/webcomponentsjs';

    get packageURLs() {
        const { packageBase } = this;

        return [
            `${packageBase}/custom-elements-es5-adapter.js`,
            `${packageBase}/webcomponents-bundle.min.js`
        ];
    }
    detect = function () {
        return window.CustomElementRegistry instanceof Function;
    };
}

export class ElementInternals extends Polyfill {
    packageName = 'element-internals-polyfill';

    detect = function () {
        return window.ElementInternals instanceof Function;
    };
}

export class Clipboard extends Polyfill {
    packageName = 'clipboard-polyfill';

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

    detect = function () {
        return navigator.share instanceof Function;
    };
}
