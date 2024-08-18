/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent } from '../astro_BPhDXPD-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_D93nzlHC.mjs';
import { $ as $$NavBar, a as $$List } from './AFUP_BObWzwOU.mjs';

const tourainetechconferences = [
  {
    title: "CSS renaît de ses cendres: (re)devenez copains avec votre feuille de style",
    description: "Par Olivier Leplus et Yohan Lasorsa",
    path: "https://2024.touraine.tech/talk/jxFaIS5OTMkZEkFL8bHR"
  },
  {
    title: "DevGreenOps : mettons un peu de Green dans le DevOps 🌱",
    description: "Par Matthieu Vincent",
    path: "https://2024.touraine.tech/talk/sdg8NifVhjZfA7XW0NrT"
  },
  {
    title: "⚡ Une application résiliente, dans un monde partiellement dégradé ⚡",
    description: "Par Pascal Martin",
    path: "https://2024.touraine.tech/talk/PtSf1rNOWg5jSetBVKvO"
  },
  {
    title: "Et pourquoi pas les monorepo ?",
    description: "Par Jérémy Chauvin",
    path: "https://2024.touraine.tech/talk/piIH6zwUdHJHMAwuBEE2"
  }
];

const $$Astro = createAstro();
const $$Tourainetech = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tourainetech;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "TouraineTech" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${renderComponent($$result2, "List", $$List, { "data": tourainetechconferences, "imagePath": "/_ff2b8a68-5a3b-4db1-910e-d036d10d1596.jpeg" })} ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/conference/tourainetech.astro", void 0);

const $$file = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/conference/tourainetech.astro";
const $$url = "/conference/tourainetech";

export { $$Tourainetech as default, $$file as file, $$url as url };
