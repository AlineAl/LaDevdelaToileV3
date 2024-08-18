/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_BPhDXPD-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_D93nzlHC.mjs';
import { $ as $$NavBar, a as $$List } from './AFUP_BObWzwOU.mjs';

const toolsdatas = [
  {
    title: "Visual Studio Code",
    description: "Éditeur de code source développé par Microsoft, gratuit et open-source.",
    path: "https://code.visualstudio.com/"
  },
  {
    title: "Sublime Text",
    description: "Éditeur de texte pour coder, gratuit et disponible sur Windows, Mac et Linux.",
    path: "https://www.sublimetext.com/"
  },
  {
    title: "CodePen",
    description: "Éditeur de code en ligne pour expérimenter, partager et apprendre.",
    path: "https://codepen.io/"
  },
  {
    title: "Brakets",
    description: "Éditeur de code open-source pour le développement web, gratuit et disponible sur Windows, Mac et Linux.",
    path: "https://brackets.io/"
  }
];

const $$Astro = createAstro();
const $$Tools = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tools;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${maybeRenderHead()}<h1 class="text-4xl text-center font-bold mt-8">Outils</h1> <p class="text-lg mt-4 mx-4">
En tant que développeur·euse, vous aurez besoin de votre caisse à outils et ceux-ci sont nombreux. Retrouvez donc ici une liste non-exhaustive de ce qui existe.
</p> ${renderComponent($$result2, "List", $$List, { "data": toolsdatas, "imagePath": "/_50dd8268-2df4-4fb3-b400-e6a8b7238eb4.jpeg" })} ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/skill/tools.astro", void 0);

const $$file = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/skill/tools.astro";
const $$url = "/skill/tools";

export { $$Tools as default, $$file as file, $$url as url };
