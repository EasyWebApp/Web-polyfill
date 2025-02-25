import { Polyfill } from '../Polyfill';
import { ECMAScript6 } from './ES';

export class AdoptedStyleSheets extends Polyfill {
    packageName = 'construct-style-sheets-polyfill';

    dependencies = [new ECMAScript6()];

    detect = function () {
        return 'adoptedStyleSheets' in document;
    };
}

export class AnchorPosition extends Polyfill {
    packageName = '@oddbird/css-anchor-positioning';

    get packageURLs() {
        return [`${this.packageBase}/dist/css-anchor-positioning.umd.cjs`];
    }

    detect = function () {
        return 'anchorName' in document.documentElement.style;
    };
}
