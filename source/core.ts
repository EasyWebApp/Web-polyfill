import { readFile } from 'fs-extra';
import { marked } from 'marked';

import { makeMarkdownTable } from './utility';
import { Polyfill } from './Polyfill';
import * as polyfills from './list';

interface SavedPolyfill
    extends Pick<Polyfill, 'packageName' | 'sourceMapURLs'> {
    name: string;
}

export async function savePolyfills(meta: typeof polyfills) {
    const polyfill_list = Object.entries(meta),
        saved_polyfills: SavedPolyfill[] = [];

    for (const [name, Package] of polyfill_list)
        try {
            const polyfill = new Package();

            await polyfill.save();

            const { packageName, sourceMapURLs } = polyfill;

            saved_polyfills.push({ name, packageName, sourceMapURLs });
        } catch (error) {
            console.error(error);
            throw error;
        }
    return saved_polyfills;
}

export async function makeHomePage(saved_polyfills: SavedPolyfill[]) {
    const table = saved_polyfills.map(
        ({ name, packageName, sourceMapURLs }) => ({
            Name: name,
            Package: `[\`${packageName}\`](https://www.npmjs.com/package/${packageName})`,
            'Source Map': sourceMapURLs[0] ? `✅` : ''
        })
    );
    const homeBody = `${await readFile('ReadMe.md')}
    
## All supported polyfills

${makeMarkdownTable(table)}`;

    return `<head>
    <title>Web polyfill</title>

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap-utilities.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css">
</head>
<body class="p-3 markdown-body">
${marked(homeBody)}
</body>`;
}
