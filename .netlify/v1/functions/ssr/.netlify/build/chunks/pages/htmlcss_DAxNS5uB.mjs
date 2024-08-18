/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_BPhDXPD-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_D93nzlHC.mjs';
import { $ as $$NavBar, a as $$List } from './AFUP_BObWzwOU.mjs';

const htmlcssdatas = [
  {
    title: "Créez votre site web avec HTML5 et CSS3",
    description: "Cours proposé par OpenClassrooms pour apprendre à créer un site web de A à Z avec HTML5 et CSS3.",
    path: "https://openclassrooms.com/fr/courses/1603881-creez-votre-site-web-avec-html5-et-css3"
  },
  {
    title: "Introduction au HTML et CSS",
    description: "Tutoriel proposé par Grafikart pour apprendre les bases du HTML et du CSS.",
    path: "https://grafikart.fr/tutoriels/introduction-1019"
  },
  {
    title: "Learn HTML",
    description: "Cours proposé par Codecademy pour apprendre les bases du HTML.",
    path: "https://www.codecademy.com/learn/learn-html"
  },
  {
    title: "Build a Website with HTML, CSS, and GitHub Pages",
    description: "Cours proposé par Codecademy pour apprendre à créer un site web avec HTML, CSS et GitHub Pages.",
    path: "https://www.codecademy.com/learn/paths/learn-how-to-build-websites"
  },
  {
    title: "Responsive Web Design",
    description: "Cours proposé par freeCodeCamp pour apprendre à créer des sites web responsive tout en pratiquant.",
    path: "https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-css-colors-by-building-a-set-of-colored-markers"
  },
  {
    title: "HTML Tutorial",
    description: "Tutoriel proposé par W3Schools pour apprendre les bases du HTML.",
    path: "https://www.w3schools.com/html/default.asp"
  },
  {
    title: "CSS Battle",
    description: "CSS Battle est une plateforme qui propose des défis pour améliorer ses compétences en CSS.",
    path: "https://cssbattle.dev/"
  }
];

const $$Astro = createAstro();
const $$Htmlcss = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Htmlcss;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${maybeRenderHead()}<h1 class="text-4xl text-center font-bold mt-8">HTML/CSS</h1> <p class="text-lg mt-4 mx-4">
Contrairement aux apparences le HTML et CSS ne sont pas seulement de simples bases pour le développement web.
        L'apprentissage de ceux-ci nécessitent de la rigueur et de la précision pour être maîtrisés.
        Nous devons en plus de cela respecter des normes telles que celles véhiculées par le <a class="hover:font-bold" href="https://www.w3c.fr/standards/">W3C</a>.
</p> ${renderComponent($$result2, "List", $$List, { "data": htmlcssdatas, "imagePath": "/_4f5b9708-c5c0-4320-98ec-9ae675c2e71e.jpeg" })} ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/skill/htmlcss.astro", void 0);

const $$file = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/skill/htmlcss.astro";
const $$url = "/skill/htmlcss";

export { $$Htmlcss as default, $$file as file, $$url as url };
