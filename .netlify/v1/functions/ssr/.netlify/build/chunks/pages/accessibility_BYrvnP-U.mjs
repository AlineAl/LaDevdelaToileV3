/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_BPhDXPD-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_D93nzlHC.mjs';
import { $ as $$NavBar, a as $$List } from './AFUP_BObWzwOU.mjs';

const accessibilitydatas = [
  {
    title: "Rendre les sites et services numériques accessibles à toutes et à tous",
    description: "Référentiel d'accessibilité numérique",
    path: "https://accessibilite.numerique.gouv.fr/"
  },
  {
    title: "Accessibility in government",
    description: "Blog du gouvernement britannique sur l'accessibilité.",
    path: "https://accessibility.blog.gov.uk/"
  },
  {
    title: "A collection of accessible scripts, made in ES2015",
    description: "Van11y (for Vanilla-Accessibility) is a collection of accessible scripts for rich interfaces elements, built using progressive enhancement and customisable.",
    path: "https://van11y.net/"
  },
  {
    title: "Mostly Coherent Thoughts",
    description: "Blog de Scott O'Hara sur l'accessibilité.",
    path: "https://www.scottohara.me/writing/"
  },
  {
    title: "Hiding content accessibly",
    description: "Article de Jess Budd sur comment cacher du contenu de manière accessible.",
    path: "https://jessbudd.com/blog/hiding-content-accessibly/"
  }
];

const $$Astro = createAstro();
const $$Accessibility = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Accessibility;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${maybeRenderHead()}<h1 class="text-4xl text-center font-bold mt-8">Accessibilité</h1> <p class="text-lg mt-4 mx-4">
L'accessibilité numérique est un enjeu majeur pour rendre le web accessible à toutes personnes dont les personnes en situation de handicap. En tant que développeur·euse, vous avez un rôle à jouer pour rendre le web accessible à tous·tes.
        Retrouvez ici des ressources pour vous aider à rendre vos sites web accessibles et à en comprendre les enjeux.
</p> ${renderComponent($$result2, "List", $$List, { "data": accessibilitydatas, "imagePath": "/_2f8cc6cb-3260-4f11-87dc-b3604672ff9d.jpeg" })} ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/skill/accessibility.astro", void 0);

const $$file = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/skill/accessibility.astro";
const $$url = "/skill/accessibility";

export { $$Accessibility as default, $$file as file, $$url as url };
