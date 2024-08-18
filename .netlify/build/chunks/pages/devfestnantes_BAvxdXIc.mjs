/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent } from '../astro_BPhDXPD-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_D93nzlHC.mjs';
import { $ as $$NavBar, a as $$List } from './AFUP_BObWzwOU.mjs';

const devfestnantesconferences = [
  {
    title: "Dogmes et Design Systems, comment faire autrement",
    description: "Par Morgane Peng",
    path: "https://www.youtube.com/watch?v=2viq6HZ8PaI&list=PLuZ_sYdawLiUHU4E1i5RrFsRN_lQcgPwT&index=22&ab_channel=GDGFrance"
  },
  {
    title: "Lazy Hydrate Never Hydrate Resumable JS : astuces des frameworks pour réduire le Total Blocking Time",
    description: "Par Martin Guillier",
    path: "https://youtube.com/watch?v=UkzbK1zthLE&list=PLuZ_sYdawLiUHU4E1i5RrFsRN_lQcgPwT&index=24&ab_channel=GDGFrance"
  },
  {
    title: "Comment hacker vos applications mobiles ?",
    description: "Par Amélie Avignon et Julien Jimenez",
    path: "https://www.youtube.com/watch?v=rHuqa5dejhY&list=PLuZ_sYdawLiUHU4E1i5RrFsRN_lQcgPwT&index=34&ab_channel=GDGFrance"
  },
  {
    title: "Sous le capot des navigateurs web",
    description: "Par Anthony Le Goas",
    path: "https://www.youtube.com/watch?v=6iOqNTOzGPk&list=PLuZ_sYdawLiUHU4E1i5RrFsRN_lQcgPwT&index=39&ab_channel=GDGFrance"
  }
];

const $$Astro = createAstro();
const $$Devfestnantes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Devfestnantes;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "DevFest Nantes" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${renderComponent($$result2, "List", $$List, { "data": devfestnantesconferences, "imagePath": "/_7978a229-23d4-43b1-b704-02401575e4bb.jpeg" })} ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/conference/devfestnantes.astro", void 0);

const $$file = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/conference/devfestnantes.astro";
const $$url = "/conference/devfestnantes";

export { $$Devfestnantes as default, $$file as file, $$url as url };
