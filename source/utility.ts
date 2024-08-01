import { outputFile } from 'fs-extra';
import { join, parse } from 'path';

interface SaveOption {
    type?: 'text';
    sourceURL: string;
    targetExtension?: string;
    targetPath?: string;
}

export async function saveAs({
    type = 'text',
    sourceURL,
    targetExtension = '',
    targetPath = process.cwd()
}: SaveOption) {
    const response = await fetch(sourceURL);
    const { href, pathname } = new URL(response.url);

    if (response.status > 299) {
        const text = await response.text();
        try {
            var message = JSON.parse(text);
        } catch {}

        throw Object.assign(new URIError(response.statusText), {
            cause: { sourceURL, message }
        });
    }
    const data = await response[type]();

    const path = join(targetPath, pathname),
        { ext } = parse(href);

    await outputFile(ext ? path : path + targetExtension, data);

    return { finalURL: href, data };
}
