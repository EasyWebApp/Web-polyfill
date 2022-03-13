#! /usr/bin/env ts-node

import { outputFile, readFile } from 'fs-extra';
import { marked } from 'marked';

import * as polyfills from './list';

const polyfill_list = Object.entries(polyfills),
    polyfill_names: string[] = [];

(async () => {
    console.time('Polyfill download');

    for (const [name, Package] of polyfill_list)
        try {
            const polyfill = new Package();

            await polyfill.save();

            polyfill_names.push(name);
        } catch (error) {
            console.error(error);
        }

    const homeBody = `${await readFile('ReadMe.md')}
    
## All supported polyfills

${polyfill_names
    .map((name, index) => `${++index}. [${name}](feature/${name}.js)`)
    .join('\n')}`;

    const homePage = `<head>
    <title>Web polyfill</title>

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap-utilities.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css">
</head>
<body class="p-3 markdown-body">
${marked(homeBody)}
</body>`;

    await outputFile('public/index.html', homePage);

    console.timeEnd('Polyfill download');
})();
