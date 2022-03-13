import { Polyfill } from './Polyfill';

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
    packageName = 'intersection-observer-polyfill';

    get packageURLs() {
        return [
            'https://cdn.jsdelivr.net/npm/intersection-observer-polyfill/dist/IntersectionObserver.global.js'
        ];
    }
    detect = function () {
        return window.IntersectionObserver instanceof Function;
    };
}

export class Dialog extends Polyfill {
    packageName = 'dialog-polyfill';

    get packageURLs() {
        return [
            'https://cdn.jsdelivr.net/npm/dialog-polyfill/dist/dialog-polyfill.js',
            'https://cdn.jsdelivr.net/npm/dialog-polyfill/dist/dialog-polyfill.css'
        ];
    }
    detect = function () {
        return 'HTMLDialogElement' in window;
    };
}

export class WebComponents extends Polyfill {
    packageName = '@webcomponents/webcomponentsjs';

    get packageURLs() {
        return [
            'https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js',
            'https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/webcomponents-bundle.min.js'
        ];
    }
    detect = function () {
        return window.CustomElementRegistry instanceof Function;
    };
}

export class PWAManifest extends Polyfill {
    packageName = 'pwacompat';

    detect = function () {
        return typeof navigator.serviceWorker !== 'undefined';
    };
}

export class Share extends Polyfill {
    packageName = 'share-api-polyfill';

    detect = function () {
        return navigator.share instanceof Function;
    };
}
