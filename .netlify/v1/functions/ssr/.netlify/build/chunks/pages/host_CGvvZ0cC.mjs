/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_BPhDXPD-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_D93nzlHC.mjs';
import { $ as $$NavBar, a as $$List } from './AFUP_BObWzwOU.mjs';

const hostdatas = [
  {
    title: "Mettre son site en ligne",
    description: "Cours proposé par Grafikart pour apprendre à mettre son site en ligne.",
    path: "https://grafikart.fr/formations/upload-site"
  }
];

const $$Astro = createAstro();
const $$Host = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Host;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${maybeRenderHead()}<h1 class="text-4xl text-center font-bold mt-8">Hébergement</h1> <p class="text-lg mt-4 mx-4">
Pour héberger votre site web, il existe beaucoup d'alternatives. Certaines sont gratuites, d'autres payantes. Il est important de bien choisir son hébergeur en fonction de ses besoins et de comprendre comment cela fonctionne.
</p> ${renderComponent($$result2, "List", $$List, { "data": hostdatas, "imagePath": "/_ad5a567a-90a1-470c-bf46-78f39bf701db.jpeg" })} ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/skill/host.astro", void 0);

const $$file = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/skill/host.astro";
const $$url = "/skill/host";

export { $$Host as default, $$file as file, $$url as url };
