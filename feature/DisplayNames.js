(function () {
    var hasFeature = (function(){return window.Intl&&window.Intl.DisplayNames instanceof Function})();

    if (hasFeature) return;
    
    var isView = typeof window !== 'undefined';
    
    var currentURL = isView ? document.currentScript.src : (self.location + '');

    var origin = currentURL.split('/').slice(0, 3).join('/');

    var paths = [
    "/@formatjs/intl-displaynames@6.8.11/polyfill.iife.js"
];
    if (!isView)
        return paths.forEach(function (path) {
            self.importScripts(origin + path);
        });

    var tags = paths.map(function (path) {
        const URL = origin + path;

        return URL.match(/\.css$/i)
            ? '<link rel="stylesheet" href="' + URL + '">'
            : '<script src="' + URL + '"></script>';
    });
    document.write(tags.join('\n'));
})();