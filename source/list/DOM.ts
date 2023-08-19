import { Polyfill } from '../Polyfill';
import { ECMAScript6 } from './ES';
import { EventTarget } from './BOM';

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

export class ScrollBehavior extends Polyfill {
    packageName = 'scroll-behavior-polyfill';

    detect = function () {
        return 'scrollBehavior' in document.documentElement.style;
    };
}

export class WebAnimation extends Polyfill {
    packageName = 'web-animations-js';

    dependencies = [new ECMAScript6()];

    detect = function () {
        return window.Animation instanceof Function;
    };
}

export class EventSubmitter extends Polyfill {
    packageName = 'event-submitter-polyfill';

    detect = function () {
        return true;
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
            `${packageBase}/webcomponents-bundle.js`
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

export class AdoptedStyleSheets extends Polyfill {
    packageName = 'construct-style-sheets-polyfill';

    dependencies = [new ECMAScript6()];

    detect = function () {
        return 'adoptedStyleSheets' in document;
    };
}

export class PointerEvents extends Polyfill {
    packageName = '@wessberg/pointer-events';

    dependencies = [new ECMAScript6(), new EventTarget()];

    detect = function () {
        return window.PointerEvent instanceof Function;
    };
}
