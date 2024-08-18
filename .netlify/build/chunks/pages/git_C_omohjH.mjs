/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_BPhDXPD-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_D93nzlHC.mjs';
import { $ as $$NavBar, a as $$List } from './AFUP_BObWzwOU.mjs';

const gitdatas = [
  {
    title: "GIT CHEAT SHEET",
    description: "Cheat sheet proposé par GitHub pour apprendre les commandes de base de Git.",
    path: "https://education.github.com/git-cheat-sheet-education.pdf"
  },
  {
    title: "Gérez du code avec Git et GitHub",
    description: "Cours proposé par OpenClassrooms pour apprendre à gérer du code avec Git et GitHub.",
    path: "https://openclassrooms.com/fr/courses/7162856-gerez-du-code-avec-git-et-github"
  },
  {
    title: "Comprendre Git",
    description: "Cours proposé par Grafikart pour apprendre les bases de Git.",
    path: "https://grafikart.fr/formations/git"
  },
  {
    title: "Learn Git with Oh My Git!",
    description: "An open source game about learning Git!",
    path: "https://ohmygit.org/"
  },
  {
    title: "Learn Git Branching !",
    description: "Un jeu pour apprendre les branches avec Git.",
    path: "https://learngitbranching.js.org/?locale=fr_FR"
  }
];

const $$Astro = createAstro();
const $$Git = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Git;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${maybeRenderHead()}<h1 class="text-4xl text-center font-bold mt-8">GIT/GITHUB</h1> <p class="text-lg mt-4 mx-4">
Git est un logiciel de gestion de versions décentralisé créé par Linus Torvalds en 2005, aussi auteur du noyau Linux.
        GitHub, quant à elle, est une plateforme de développement collaboratif de logiciels propriétaires et open source. Elle propose des fonctionnalités de gestion de projet, de suivi des problèmes, de demandes de fonctionnalités, et de documentation.
        Ce sont donc des outils indispensables pour tout développeur.
</p> ${renderComponent($$result2, "List", $$List, { "data": gitdatas, "imagePath": "/_e40a63b3-6481-4c4f-bad7-3a3e1569059e.jpeg" })} ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/skill/git.astro", void 0);

const $$file = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/skill/git.astro";
const $$url = "/skill/git";

export { $$Git as default, $$file as file, $$url as url };
