var debug_render_time=function(){"use strict";var e,n={name:"debug-render-time",hooks:{prerender:function(){return e=Date.now()},postrender:function(){return console.log("rendering document took "+(Date.now()-e)+"ms")}}};return nxtx&&nxtx.registerPackage(n),n}();
//# sourceMappingURL=debug-render-time.js.map
