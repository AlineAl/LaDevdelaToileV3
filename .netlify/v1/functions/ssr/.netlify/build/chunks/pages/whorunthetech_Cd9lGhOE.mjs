/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent } from '../astro_BPhDXPD-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_D93nzlHC.mjs';
import { $ as $$NavBar, a as $$List } from './AFUP_BObWzwOU.mjs';

const whoRunConferences = [
  {
    title: "L’IA générative, générateur de satisfaction client !",
    description: "Par Emmanuelle Guyot et Alice Gallais",
    path: "https://whorunthetech.com/project/ia-generative-generateur-satisfaction-client/"
  },
  {
    title: "Que se cache derrière votre techno mobile préférée ?",
    description: "Par Elaine Dias Batista",
    path: "https://whorunthetech.com/project/que-se-cache-derriere-votre-techno-mobile-preferee/"
  },
  {
    title: "Guide de survie pour développeuses et développeurs juniors : le TDD comme allié pour résoudre les problèmes complexes",
    description: "Par Armelle Lelarge",
    path: "https://whorunthetech.com/project/guide-de-survie-pour-developpeuses-et-developpeurs-juniors/"
  },
  {
    title: "Faites de vos tests fronts vos meilleurs alliés",
    description: "Par Élise Récéjac et Morgane Riclet",
    path: "https://whorunthetech.com/project/faites-de-vos-tests-fronts-vos-meilleurs-allies/"
  }
];

const $$Astro = createAstro();
const $$Whorunthetech = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Whorunthetech;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Who Run The Tech ?" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${renderComponent($$result2, "List", $$List, { "data": whoRunConferences, "imagePath": "/_54a53dad-bfc1-4123-9333-c1d8027ae56b.jpeg" })} ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/conference/whorunthetech.astro", void 0);

const $$file = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/conference/whorunthetech.astro";
const $$url = "/conference/whorunthetech";

export { $$Whorunthetech as default, $$file as file, $$url as url };
