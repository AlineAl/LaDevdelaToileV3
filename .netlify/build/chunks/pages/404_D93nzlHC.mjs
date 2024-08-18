/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, h as renderComponent, m as maybeRenderHead } from '../astro_BPhDXPD-.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/logo-removebg.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "LaDevdelaToile" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"> <div class="mx-auto max-w-screen-sm text-center"> <img src="/404-image.jpeg" alt="404" class="w-96 h-96 mx-auto mb-8 rounded-lg shadow-lg object-cover object-center"> <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Oops !</p> <p class="mb-4 text-lg font-light text-gray-500">
Cette page n'existe pas.
</p> <button onclick="window.location.href = '/';" type="button" class="px-6 py-3.5 text-base font-medium text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center">
Revenir à l'accueil
</button> </div> </div> </section> ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/404.astro", void 0);

const $$file = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };
