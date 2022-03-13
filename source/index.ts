#! /usr/bin/env ts-node

import * as polyfills from './list';

(async () => {
    console.time('Polyfill download');

    for (const name in polyfills)
        try {
            const polyfill = new polyfills[name as keyof typeof polyfills]();

            await polyfill.save();
        } catch (error) {
            console.error(error);
        }
    console.timeEnd('Polyfill download');
})();
