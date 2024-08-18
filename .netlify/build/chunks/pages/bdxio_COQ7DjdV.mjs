/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent } from '../astro_BPhDXPD-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_D93nzlHC.mjs';
import { $ as $$NavBar, a as $$List } from './AFUP_BObWzwOU.mjs';

const bdxioconferences = [
  {
    title: "Micro-frontends : Angular, React et Vue dans une même application, oui c'est possible !",
    description: "Par Sébastien Oddo",
    path: "https://www.youtube.com/watch?v=HFMBC-upNQ8&list=PLUJzERpatfsVMOzcD4ZpsOvrZzQW-5O1F&ab_channel=bdxio"
  },
  {
    title: "Je te promets le chaos",
    description: "Par Anne-Laure Gaillard",
    path: "https://www.youtube.com/watch?v=o0jUWTER-5M&list=PLUJzERpatfsVMOzcD4ZpsOvrZzQW-5O1F&index=8&ab_channel=bdxio"
  },
  {
    title: "La Guerre des Rendus HTML: SSR, CSR et Hybrid Rendering, qui sera le plus performant ?",
    description: "Par Thomas Rumas et Johann Reboulleau",
    path: "https://www.youtube.com/watch?v=iA8cUwB06pE&list=PLUJzERpatfsVMOzcD4ZpsOvrZzQW-5O1F&index=13&ab_channel=bdxio"
  },
  {
    title: "Une architecture pour tester son front-end",
    description: "Par Alexia Souvane",
    path: "https://www.youtube.com/watch?v=gLkdcoJjga8&list=PLUJzERpatfsVMOzcD4ZpsOvrZzQW-5O1F&index=25&ab_channel=bdxio"
  }
];

const $$Astro = createAstro();
const $$Bdxio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Bdxio;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "BDX I/O" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${renderComponent($$result2, "List", $$List, { "data": bdxioconferences, "imagePath": "/_79983ef3-1298-4d1b-a450-42cae92abdd2.jpeg" })} ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/conference/bdxio.astro", void 0);

const $$file = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/conference/bdxio.astro";
const $$url = "/conference/bdxio";

export { $$Bdxio as default, $$file as file, $$url as url };
