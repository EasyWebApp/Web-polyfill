(function () {
    var hasFeature = (function(){return window.Intl&&window.Intl.DateTimeFormat instanceof Function})();

    if (hasFeature) return;
    
    var isView = typeof window !== 'undefined';
    
    var currentURL = isView ? document.currentScript.src : (self.location + '');

    var origin = currentURL.split('/').slice(0, 3).join('/');

    var paths = [
    "/@formatjs/intl-getcanonicallocales@2.5.4/polyfill.iife.js",
    "/@formatjs/intl-locale@4.2.10/polyfill.iife.js",
    "/@formatjs/intl-pluralrules@5.4.3/polyfill.iife.js",
    "/@formatjs/intl-numberformat@8.15.3/polyfill.iife.js",
    "/@formatjs/intl-datetimeformat@6.17.3/polyfill.iife.js"
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