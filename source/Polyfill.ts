import { outputFile } from 'fs-extra';
import { parse } from 'path';

import { saveAs } from './utility';

export abstract class Polyfill {
    mirrorBase = 'https://cdn.jsdelivr.net/npm/';

    abstract packageName: string;

    get packageURL() {
        return this.mirrorBase + this.packageName;
    }
    abstract detect(): boolean;

    saveDetector() {
        const { name } = this.constructor;
        const { packageURL, detect } = this;
        const { pathname } = new URL(packageURL);
        const { ext } = parse(pathname);

        return outputFile(
            `public/feature/${name}.js`,
            `(function () {
    var hasFeature = (${detect})();

    if (hasFeature) return;
    
    var isView = typeof window !== 'undefined';
    
    var currentURL = isView ? document.currentScript.src : (self.location + '');

    var packageURL = currentURL.split('/').slice(0, 3).join('/') +
        '${pathname}${ext ? '' : '.js'}';

    if (isView)
        document.write(packageURL);
    else
        self.importScripts(packageURL);
})();`
        );
    }

    async saveSourceMap(sourceCode: string) {
        const [_, mapPath] =
            sourceCode.match(/^\/\/# sourceMappingURL=(\S+)/m) || [];

        if (!mapPath) return;

        const sourceURL = new URL(mapPath, this.mirrorBase) + '';

        await saveAs({ sourceURL, targetPath: 'public' });

        console.log(`[save] ${sourceURL}`);
    }

    async save() {
        const { packageURL } = this;

        const code = await saveAs({
            sourceURL: packageURL,
            targetExtension: '.js',
            targetPath: 'public'
        });
        console.log(`[save] ${packageURL}`);

        await this.saveSourceMap(code);
        await this.saveDetector();
    }
}
