/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_BPhDXPD-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_D93nzlHC.mjs';
import { $ as $$NavBar, a as $$List } from './AFUP_BObWzwOU.mjs';

const craftingdatas = [
  {
    title: "Understand Legacy Code",
    description: 'Blog de Nicolas Carlo apportant des conseils pour comprendre et travailler sur du code dit "legacy".',
    path: "https://understandlegacycode.com/"
  }
];

const $$Astro = createAstro();
const $$Crafting = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Crafting;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${maybeRenderHead()}<h1 class="text-4xl text-center font-bold mt-8">Crafting</h1> <p class="text-lg mt-4 mx-4">
Le craft est une approche de développement, un concept qui va consister à réfléchir à la manière dont on va structurer le code. Il ne va pas s'agir seulement de faire du fonctionnel mais aussi de faire du code propre, bien conçu, lisible, testable, structuré et maintenable.
</p> ${renderComponent($$result2, "List", $$List, { "data": craftingdatas, "imagePath": "/_ae8ae75a-469b-4e86-aa83-4ac76c6c6589.jpeg" })} ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/skill/crafting.astro", void 0);

const $$file = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/skill/crafting.astro";
const $$url = "/skill/crafting";

export { $$Crafting as default, $$file as file, $$url as url };
