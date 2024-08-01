import { exists, outputFile } from 'fs-extra';
import { parse } from 'path';

import { saveAs } from './utility';

export abstract class Polyfill {
    mirrorBase = 'https://unpkg.com/';

    abstract packageName: string;

    dependencies: Polyfill[] = [];

    get packageBase() {
        return this.mirrorBase + this.packageName;
    }

    get packageURLs() {
        return [this.packageBase];
    }

    get allPackageURLs(): string[] {
        const dependencyURLs = this.dependencies
            .map(({ allPackageURLs }) => allPackageURLs)
            .flat(Infinity) as string[];

        return [...new Set([...dependencyURLs, ...this.sourceURLs])];
    }

    sourceURLs: string[] = [];
    sourceMapURLs: string[] = [];

    get detectorPath() {
        return `public/feature/${this.constructor.name}.js`;
    }
    abstract detect(): boolean;

    clientPathOf(packageURL: string) {
        const { pathname } = new URL(packageURL);
        const { ext } = parse(pathname);

        return `${pathname}${ext ? '' : '.js'}`;
    }

    async saveDetector() {
        const { dependencies, detectorPath, detect } = this;

        for (const polyfill of dependencies) await polyfill.save();

        return outputFile(
            detectorPath,
            `(function () {
    var hasFeature = (${detect})();

    if (hasFeature) return;
    
    var isView = typeof window !== 'undefined';
    
    var currentURL = isView ? document.currentScript.src : (self.location + '');

    var origin = currentURL.split('/').slice(0, 3).join('/');

    var paths = ${JSON.stringify(
        this.allPackageURLs.map(packageURL => this.clientPathOf(packageURL)),
        null,
        4
    )};
    if (!isView)
        return paths.forEach(function (path) {
            self.importScripts(origin + path);
        });

    var tags = paths.map(function (path) {
        const URL = origin + path;

        return URL.match(/\\.css$/i)
            ? '<link rel="stylesheet" href="' + URL + '">'
            : '<script src="' + URL + '"></script>';
    });
    document.write(tags.join('\\n'));
})();`
        );
    }

    async saveSourceMap(sourceURL: string, sourceCode: string) {
        const [_, mapPath] =
            sourceCode.match(/^\/\/# sourceMappingURL=(\S+)/m) || [];

        if (!mapPath) return;

        const { ext } = parse(sourceURL);
        const mapURL =
            new URL(
                mapPath,
                ext || sourceURL.endsWith('/') ? sourceURL : `${sourceURL}/`
            ) + '';
        const { finalURL } = await saveAs({
            sourceURL: mapURL,
            targetPath: 'public'
        });
        this.sourceMapURLs.push(finalURL);

        console.log(`[save] ${finalURL}`);
    }

    async save() {
        if (await exists(this.detectorPath)) return;

        for (const sourceURL of this.packageURLs) {
            const { finalURL, data } = await saveAs({
                sourceURL,
                targetExtension: '.js',
                targetPath: 'public'
            });
            this.sourceURLs.push(finalURL);

            console.log(`[save] ${finalURL}`);

            try {
                await this.saveSourceMap(finalURL, data);
            } catch (error) {
                console.error(error);
            }
        }
        await this.saveDetector();
    }
}
