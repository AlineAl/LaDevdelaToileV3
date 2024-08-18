/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_BPhDXPD-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_D93nzlHC.mjs';
import { $ as $$NavBar, a as $$List } from './AFUP_BObWzwOU.mjs';

const databasesdatas = [
  {
    title: "MySQL for Developers",
    description: "Cours proposé par Aaron Francis pour apprendre MySQL.",
    path: "https://aaronfrancis.com/?type=course#content"
  },
  {
    title: "Apprendre et maîtriser SQL",
    description: "Cours proposé par Grafikart pour apprendre SQL.",
    path: "https://grafikart.fr/formations/apprendre-sql"
  }
];

const $$Astro = createAstro();
const $$Databases = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Databases;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${maybeRenderHead()}<h1 class="text-4xl text-center font-bold mt-8">Base de données</h1> <p class="text-lg mt-4 mx-4">
Les bases de données sont des outils indispensables pour stocker, sécuriser et organiser des données. Il existe plusieurs types de bases de données, chacune ayant ses spécificités.
</p> ${renderComponent($$result2, "List", $$List, { "data": databasesdatas, "imagePath": "/_ad5a567a-90a1-470c-bf46-78f39bf701db.jpeg" })} ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/skill/databases.astro", void 0);

const $$file = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/skill/databases.astro";
const $$url = "/skill/databases";

export { $$Databases as default, $$file as file, $$url as url };
