(function () {
    var hasFeature = (function(){return window.Intl&&"Segmenter"in window.Intl})();

    if (hasFeature) return;
    
    var isView = typeof window !== 'undefined';
    
    var currentURL = isView ? document.currentScript.src : (self.location + '');

    var origin = currentURL.split('/').slice(0, 3).join('/');

    var paths = [
    "/intl-segmenter-polyfill-rs-web@0.1.7/intl_segmenter_polyfill_rs.js",
    "/intl-segmenter-polyfill-rs-web@0.1.7/intl_segmenter_polyfill_rs_bg.wasm"
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