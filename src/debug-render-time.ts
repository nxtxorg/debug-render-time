/*  Package printing rendering time for diagnostics
    Author: Malte Rosenbjerg
    License: MIT */

import {Package, INxtx} from '../nxtx-interface';
declare const nxtx: INxtx;

let started;
const pkg : Package = {
    name: 'debug-render-time',
    hooks: {
        prerender: () => started = Date.now(),
        midrender: () => {
            console.log(`executing preprocessors for the document took ${Date.now() - started}ms`);
            started = Date.now();
        },
        postrender: () => console.log(`executing commands and rendering the document took ${Date.now() - started}ms`)
    }
};

if (nxtx) nxtx.registerPackage(pkg);

export default pkg;