import 'dotenv/config';
import { readFile } from 'fs-extra';
import { marked } from 'marked';

import * as polyfills from './list';
import { generateHomePage, SavedPolyfill } from './view';

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
    const homeBody = (await readFile('ReadMe.md')) + '';

    return `<!DocType HTML>${generateHomePage(marked(homeBody) as string, saved_polyfills)}`;
}
