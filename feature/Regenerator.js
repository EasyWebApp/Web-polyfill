(function () {
    var hasFeature = (function(){return"regeneratorRuntime"in window})();

    if (hasFeature) return;
    
    var isView = typeof window !== 'undefined';
    
    var currentURL = isView ? document.currentScript.src : (self.location + '');

    var origin = currentURL.split('/').slice(0, 3).join('/');

    var paths = [
    "/regenerator-runtime@0.14.1/runtime.js"
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