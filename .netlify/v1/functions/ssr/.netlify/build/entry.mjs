import { renderers } from './renderers.mjs';
import { manifest } from './manifest_xE42fI6n.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_B5kbhVyW.mjs');
const _page1 = () => import('./chunks/404_SMU0EBbn.mjs');
const _page2 = () => import('./chunks/_.._DpP6034f.mjs');
const _page3 = () => import('./chunks/AFUP_CcM5zr2p.mjs');
const _page4 = () => import('./chunks/bdxio_DRclO5FH.mjs');
const _page5 = () => import('./chunks/devfestlille_CpR5h8Je.mjs');
const _page6 = () => import('./chunks/devfestnantes_l5uD8iyh.mjs');
const _page7 = () => import('./chunks/devoxx_CB3Xp0bY.mjs');
const _page8 = () => import('./chunks/parisweb_C4X9TT5E.mjs');
const _page9 = () => import('./chunks/tourainetech_DrlJjEX-.mjs');
const _page10 = () => import('./chunks/whorunthetech_Lsem3t1G.mjs');
const _page11 = () => import('./chunks/index_CwsD3Pb1.mjs');
const _page12 = () => import('./chunks/index_B0VRWF0-.mjs');
const _page13 = () => import('./chunks/index_AY2siIJa.mjs');
const _page14 = () => import('./chunks/index_C1lvVYav.mjs');
const _page15 = () => import('./chunks/accessibility_BGh9j-WB.mjs');
const _page16 = () => import('./chunks/algo_ysbLZZLg.mjs');
const _page17 = () => import('./chunks/crafting_CUm6R0vz.mjs');
const _page18 = () => import('./chunks/databases_ttdVrAK0.mjs');
const _page19 = () => import('./chunks/git_CbAVKVZ3.mjs');
const _page20 = () => import('./chunks/host_DZ9C2fx3.mjs');
const _page21 = () => import('./chunks/htmlcss_DHlvfszw.mjs');
const _page22 = () => import('./chunks/tools_DZzi7TKn.mjs');
const _page23 = () => import('./chunks/index_BAXbDZ3o.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog/[...slug].astro", _page2],
    ["src/pages/conference/AFUP.astro", _page3],
    ["src/pages/conference/bdxio.astro", _page4],
    ["src/pages/conference/devfestlille.astro", _page5],
    ["src/pages/conference/devfestnantes.astro", _page6],
    ["src/pages/conference/devoxx.astro", _page7],
    ["src/pages/conference/parisweb.astro", _page8],
    ["src/pages/conference/tourainetech.astro", _page9],
    ["src/pages/conference/whorunthetech.astro", _page10],
    ["src/pages/conference/index.astro", _page11],
    ["src/pages/explanation/index.astro", _page12],
    ["src/pages/meetups/index.astro", _page13],
    ["src/pages/podcasts/index.astro", _page14],
    ["src/pages/skill/accessibility.astro", _page15],
    ["src/pages/skill/algo.astro", _page16],
    ["src/pages/skill/crafting.astro", _page17],
    ["src/pages/skill/databases.astro", _page18],
    ["src/pages/skill/git.astro", _page19],
    ["src/pages/skill/host.astro", _page20],
    ["src/pages/skill/htmlcss.astro", _page21],
    ["src/pages/skill/tools.astro", _page22],
    ["src/pages/index.astro", _page23]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "fb9d0b67-7717-46b2-a4d2-06731374a39e"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
