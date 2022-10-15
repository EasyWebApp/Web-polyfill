import 'dotenv/config';
import { readFile } from 'fs-extra';
import { marked } from 'marked';
import { makeMarkdownTable } from '@tech_query/node-toolkit';

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

const { WAN_ICON, WAN_HOST, LAN_ICON, LAN_HOST } = process.env;

export async function makeHomePage(saved_polyfills: SavedPolyfill[]) {
    const table = saved_polyfills.map(
        ({ name, packageName, sourceMapURLs }, index) => ({
            'No.': ++index + '',
            Name: name,
            Package: `[\`${packageName}\`](https://www.npmjs.com/package/${packageName})`,
            'Source Map': sourceMapURLs[0] ? `✅` : '',
            Network: [
                `[${WAN_ICON}](${WAN_HOST}/feature/${name}.js)`,
                `[${LAN_ICON}](${LAN_HOST}/feature/${name}.js)`
            ].join(' ')
        })
    );
    const homeBody = `${await readFile('ReadMe.md')}
    
## All supported polyfills

${makeMarkdownTable(table)}`;

    return `<head>
    <meta charset="utf-8">

    <title>Web polyfill</title>
    <link rel="icon" href="https://github.com/EasyWebApp.png">

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://unpkg.com/bootstrap/dist/css/bootstrap-utilities.min.css">
    <link rel="stylesheet" href="https://unpkg.com/github-markdown-css">
    <link rel="stylesheet" href="https://unpkg.com/prismjs@1.29.0/themes/prism-okaidia.min.css">
</head>
<body class="p-3 markdown-body">
${marked(homeBody)}
</body>`;
}
