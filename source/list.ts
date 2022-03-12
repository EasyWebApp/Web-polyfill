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

    get packageURL() {
        return 'https://cdn.jsdelivr.net/npm/intersection-observer-polyfill@0.1.0/dist/IntersectionObserver.global.js';
    }
    detect = function () {
        return window.IntersectionObserver instanceof Function;
    };
}
