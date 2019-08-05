var debug_render_time = (function () {
    'use strict';

    var started;
    var pkg = {
        name: 'debug-render-time',
        hooks: {
            prerender: function () { return started = Date.now(); },
            midrender: function () {
                console.log("executing preprocessors for the document took " + (Date.now() - started) + "ms");
                started = Date.now();
            },
            postrender: function () { return console.log("executing commands and rendering the document took " + (Date.now() - started) + "ms"); }
        }
    };
    if (nxtx)
        nxtx.registerPackage(pkg);

    return pkg;

}());
//# sourceMappingURL=debug-render-time.js.map
