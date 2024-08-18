/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent } from '../astro_BPhDXPD-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_D93nzlHC.mjs';
import { $ as $$NavBar, a as $$List } from './AFUP_BObWzwOU.mjs';

const devoxxconferences = [
  {
    title: "Comment écrire des mails pourris de qualité ?",
    description: "Par Adrien Ramarojohn",
    path: "https://www.youtube.com/watch?v=FhIvsl4SBVg&list=PLTbQvx84FrARars1vXos7mlPdvYJmsEoK&index=4&ab_channel=DevoxxFR"
  },
  {
    title: "Mais au fait, ça marche comment les service accounts ?",
    description: "Par Julien Wittouck",
    path: "https://www.youtube.com/watch?v=7p9NTgkOy_w&list=PLTbQvx84FrARars1vXos7mlPdvYJmsEoK&index=13&ab_channel=DevoxxFR"
  },
  {
    title: "Software teaming : onboarding, remote, productivité, 4 ans dans la vie d’une équipe",
    description: "Par Alexandre Victoor et Marjorie Aubert",
    path: "https://www.youtube.com/watch?v=IL9z_HminTo&list=PLTbQvx84FrARars1vXos7mlPdvYJmsEoK&index=21&ab_channel=DevoxxFR"
  },
  {
    title: "SQLite en Wasm... pourquoi faire et comment?",
    description: "Par François Mockers",
    path: "https://www.youtube.com/watch?v=MnEiUAv4raY&list=PLTbQvx84FrARars1vXos7mlPdvYJmsEoK&index=25&ab_channel=DevoxxFR"
  }
];

const $$Astro = createAstro();
const $$Devoxx = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Devoxx;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Devoxx" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${renderComponent($$result2, "List", $$List, { "data": devoxxconferences, "imagePath": "/_70c23bfa-cddd-41c0-9e2a-d44be27e3442.jpeg" })} ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/conference/devoxx.astro", void 0);

const $$file = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/conference/devoxx.astro";
const $$url = "/conference/devoxx";

export { $$Devoxx as default, $$file as file, $$url as url };
