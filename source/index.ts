#! /usr/bin/env tsx

import { outputFile } from 'fs-extra';
import './shim';

import { savePolyfills, makeHomePage } from './core';
import * as polyfills from './list';

(async () => {
    console.time('Polyfill download');

    const list = await savePolyfills(polyfills);

    await outputFile('public/index.html', await makeHomePage(list));

    console.timeEnd('Polyfill download');
})();
