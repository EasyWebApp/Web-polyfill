import { join, parse } from 'path';
import fetch from 'node-fetch';
import { outputFile } from 'fs-extra';

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
    const { pathname } = new URL(sourceURL);

    const response = await fetch(sourceURL);
    const data = await response[type]();

    const path = join(targetPath, pathname),
        { ext } = parse(sourceURL);

    await outputFile(ext ? path : path + targetExtension, data);

    return data;
}
