/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_BPhDXPD-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_D93nzlHC.mjs';
import { $ as $$NavBar, a as $$List } from './AFUP_BObWzwOU.mjs';

const algodatas = [
  {
    title: "L'algorithmique",
    description: "Formation de Grafikart sur l'algorithmique.",
    path: "https://grafikart.fr/formations/apprendre-algorithmique"
  },
  {
    title: "Découvrez le fonctionnement des algorithmes",
    description: "Cours d'OpenClassrooms sur le fonctionnement des algorithmes.",
    path: "https://openclassrooms.com/fr/courses/7527306-decouvrez-le-fonctionnement-des-algorithmes"
  },
  {
    title: "CodinGame",
    description: "CodinGame est une plateforme qui propose des exercices algorithmiques pour apprendre à coder.",
    path: "https://www.codingame.com/start/fr/"
  },
  {
    title: "Exercism",
    description: "Exercism est une plateforme qui propose des exercices pratiques pour améliorer sa pratique sur un langage",
    path: "https://exercism.org/"
  },
  {
    title: "Codewars",
    description: "CodeWars est une plateforme pour améliorer ses compétences en programmation en résolvant des exercices.",
    path: "https://exercism.org/"
  }
];

const $$Astro = createAstro();
const $$Algo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Algo;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${maybeRenderHead()}<h1 class="text-4xl text-center font-bold mt-8">Algorithmique</h1> <p class="text-lg mt-4 mx-4">
L'algorithmique est une base fondamentale de la programmation. En réalité, elle est présente partout dans notre quotidien, puisqu'il va s'agir essentiellement de résoudre des problèmes. Et pour cela il existe plusieurs manières de faire, notamment plusieurs manières de conduire la machine à faire ce que l'on veut.
</p> ${renderComponent($$result2, "List", $$List, { "data": algodatas, "imagePath": "/_856f2967-a3c2-4a97-8a9b-da21fa531683.jpeg" })} ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/skill/algo.astro", void 0);

const $$file = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/skill/algo.astro";
const $$url = "/skill/algo";

export { $$Algo as default, $$file as file, $$url as url };
