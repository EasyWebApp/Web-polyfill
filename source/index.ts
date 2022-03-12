#! /usr/bin/env ts-node

import * as polyfills from './list';

(async () => {
    console.time('Polyfill download');

    for (const name in polyfills) {
        const polyfill = new polyfills[name as keyof typeof polyfills]();

        await polyfill.save();
    }
    console.timeEnd('Polyfill download');
})();
