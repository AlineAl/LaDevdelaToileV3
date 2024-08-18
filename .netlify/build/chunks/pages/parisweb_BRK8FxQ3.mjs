/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent } from '../astro_BPhDXPD-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_D93nzlHC.mjs';
import { $ as $$NavBar, a as $$List } from './AFUP_BObWzwOU.mjs';

const pariswebconferences = [
  {
    title: "L’IA et le handicap : progrès ou exclusion ?",
    description: "Par Thanh Lan Doublier et Emmanuelle Aboaf",
    path: "https://www.paris-web.fr/2023/conference/lia-et-le-handicap-progres-ou-exclusion"
  },
  {
    title: "Table ronde « Femmes de la tech »",
    description: "Par Gaëlle Kubila , Marcy Ericka Charollois , Anais Sparesotto , Magali Milbergue et Emmanuelle Aboaf",
    path: "https://www.paris-web.fr/2023/conference/table-ronde-femmes-dans-la-tech"
  },
  {
    title: "Le contenu doit être rédigé de la manière la plus claire et la plus simple possible : les textes dans l’accessibilité numérique",
    description: "Par Morgane Hauguel",
    path: "https://www.paris-web.fr/2023/conference/-le-contenu-doit-etre-redige-de-la-maniere-la-plus-claire-et-la-plus-simple-possible-la-question-des-1"
  },
  {
    title: "ARIA, the good parts",
    description: "Par Hidde De Vries",
    path: "https://www.paris-web.fr/2023/conference/aria-the-good-parts"
  }
];

const $$Astro = createAstro();
const $$Parisweb = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Parisweb;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Paris Web" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${renderComponent($$result2, "List", $$List, { "data": pariswebconferences, "imagePath": "/_6b8b452b-7896-4fcc-bb90-0b3487569cd1.jpeg" })} ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/conference/parisweb.astro", void 0);

const $$file = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/conference/parisweb.astro";
const $$url = "/conference/parisweb";

export { $$Parisweb as default, $$file as file, $$url as url };
