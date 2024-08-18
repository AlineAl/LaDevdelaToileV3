/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent } from '../astro_BPhDXPD-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_D93nzlHC.mjs';
import { $ as $$NavBar, a as $$List } from './AFUP_BObWzwOU.mjs';

const devfestlilleconferences = [
  {
    title: "Faire évoluer vos APIs HTTP, une approche pas-à-pas",
    description: "Par Nicolas Fränkel",
    path: "https://www.youtube.com/watch?v=JuXB7ZHjCD4&list=PLuZ_sYdawLiXf92Uq5iE5LlYKrOv1IUvx&index=2&ab_channel=GDGFrance"
  },
  {
    title: "Quand la cybersécurité n'est pas qu'une affaire de failles",
    description: "Par Sonia Seddiki",
    path: "https://www.youtube.com/watch?v=nBxu4UutNqo&list=PLuZ_sYdawLiXf92Uq5iE5LlYKrOv1IUvx&index=6&ab_channel=GDGFrance"
  },
  {
    title: "Survivre dans la JS-jungle des outils de tests",
    description: "Par Lise Quesnel",
    path: "https://www.youtube.com/watch?v=LqwfhxyiwXU&list=PLuZ_sYdawLiXf92Uq5iE5LlYKrOv1IUvx&index=7&ab_channel=GDGFrance"
  },
  {
    title: "La dette technique : comment communiquer aux équipes, au delà de la technique",
    description: "Par Suzanne Daurat",
    path: "https://www.youtube.com/watch?v=tE4l0YVfqDE&list=PLuZ_sYdawLiXf92Uq5iE5LlYKrOv1IUvx&index=18&ab_channel=GDGFrance"
  }
];

const $$Astro = createAstro();
const $$Devfestlille = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Devfestlille;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "DevFest Lille" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${renderComponent($$result2, "List", $$List, { "data": devfestlilleconferences, "imagePath": "/_1f91b06f-d22f-4418-92aa-1d41ff547ba5.jpeg" })} ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/conference/devfestlille.astro", void 0);

const $$file = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/conference/devfestlille.astro";
const $$url = "/conference/devfestlille";

export { $$Devfestlille as default, $$file as file, $$url as url };
