/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderComponent } from '../astro_BPhDXPD-.mjs';
import 'kleur/colors';
import { b as $$Icon, $ as $$NavBar, a as $$List } from './AFUP_BObWzwOU.mjs';
import { $ as $$Layout } from './404_D93nzlHC.mjs';
import { $ as $$Footer } from './__DZUwnG2G.mjs';
import 'clsx';

const conferences = [
  {
    title: "Paris Web",
    description: "Grand événement annuel de la communauté francophone du web. Il est dédié aux standards, à l'accessibilité, à la qualité et à la conception web.",
    icon: "mdi:bug",
    path: "/conference/parisweb"
  },
  {
    title: "AFUP",
    description: "Un des gros événements web de l'année, l'AFUP est une association qui a pour but de promouvoir le langage PHP et les technologies associées.",
    icon: "mdi:elephant",
    path: "/conference/AFUP"
  },
  {
    title: "Who Run The Tech ?",
    description: "Première édition en 2023, cet événement a pour but de donner la voix et de la visibilité aux femmes dans le secteur de la tech.",
    icon: "mdi:butterfly",
    path: "/conference/whorunthetech"
  },
  {
    title: "DevFest Lille",
    description: "Le DevFest Lille propose des conférences sur deux jours autour de nombreux sujets techniques et est organisé par le GDG Lille.",
    icon: "mdi:bee",
    path: "/conference/devfestlille"
  },
  {
    title: "Devoxx",
    description: "Devoxx est un ensemble de conférences pour les développeurs et contient également un salon avec des stands et des exposants.",
    icon: "mdi:coffee",
    path: "/conference/devoxx"
  },
  {
    title: "Devfest Nantes",
    description: "Le DevFest est un festival de développeurs qui se déroule à la Cité des Congrès de Nantes.",
    icon: "mdi:google-downasaur",
    path: "/conference/devfestnantes"
  },
  {
    title: "BDX I/O",
    description: "BDX I/O est un événement proposant plusieurs conférences sur des thèmes techniques variés et se déroule à Bordeaux.",
    icon: "mdi:code-braces",
    path: "/conference/bdxio"
  },
  {
    title: "Touraine Tech",
    description: "Touraine Tech est un événement qui se déroule à Tours et qui propose des conférences sur divers sujets. Le principe est aussi de donner la voix aux speakers qui débutent.",
    icon: "mdi:web",
    path: "/conference/tourainetech"
  }
];

const $$Astro$9 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, description, icon, path } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(path, "href")}> ${renderComponent($$result, "astro-card", "astro-card", { "class": "min-h-full flex flex-col items-center gap-4 border border-default bg-offset p-6 transition duration-300 ease-in-out hover:cursor-pointer hover:text-white hover:bg-sky-700" }, { "default": () => renderTemplate` <div class="size-16 rounded-full border-2 border-current p-3"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-full", "name": icon })} </div> <p class="text-center font-extrabold text-xl"> ${title} </p> <p class="text-center text-offset text-sm"> ${description} </p> ` })} </a>`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/components/Card.astro", void 0);

const $$Astro$8 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index$4;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Conf\xE9rences" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${maybeRenderHead()}<h1 class="text-4xl text-center font-bold mt-8">Conférences</h1> <p class="text-center text-lg mt-4 mx-4">
Retrouvez ici une liste non-exhaustive de nombreuses conférences tech qui vous en apprendront davantage sur le monde du développement.
</p> <ul class="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[1fr]"> ${conferences.map((conference) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": conference.title, "description": conference.description, "icon": conference.icon, "path": conference.path })}`)} </ul> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/conference/index.astro", void 0);

const $$file$4 = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/conference/index.astro";
const $$url$4 = "/conference";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$4,
    file: $$file$4,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro();
const $$ExplanationHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ExplanationHeader;
  return renderTemplate`${maybeRenderHead()}<header class="flex flex-col md:flex-row items-center justify-center bg-white p-8 m-8"> <div class="md:w-1/2 space-y-6"> <h1 class="text-4xl font-bold text-sky-500">
Suivez tout un programme construis par vous-même
</h1> <p>
Ici je vais vous partager ma propre façon de faire et la manière dont je vais procéder pour continuer à améliorer mes skills.
</p> <p>
Que vous soyez débutant·e·s ou confirmé·e·s, vous avez tous·tes des choses à apprendre et à partager. Et c'est ensemble que nous pourrons y arriver.
</p> <ul class="list-none space-y-2"> <li class="flex items-center text-sky-500"> ${renderComponent($$result, "Icon", $$Icon, { "class": "mr-2", "size": 28, "name": "mdi:check-outline" })}
Ciblez ce que vous souhaitez apprendre et/ou améliorer
</li> <li class="flex items-center text-sky-500"> ${renderComponent($$result, "Icon", $$Icon, { "class": "mr-2", "size": 28, "name": "mdi:check-outline" })}
Construisez votre planning
</li> <li class="flex items-center text-sky-500"> ${renderComponent($$result, "Icon", $$Icon, { "class": "mr-2", "size": 28, "name": "mdi:check-outline" })}
Ne lâchez rien !
</li> </ul> </div> <div class="mt-8 md:mt-0 m-4"> <img${addAttribute(400, "width")}${addAttribute(400, "height")} src="/white-ferret-explanation.jpeg" alt="image représentant un furet blanc au sommet d'une montagne" class="rounded-lg shadow-lg"> </div> </header>`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/components/Explanation/ExplanationHeader.astro", void 0);

const presentationsLinks = [
  {
    title: "Ciblez vos outils",
    description: "Que vous préfériez les vidéos, les livres, les podcasts, les exercices pratiques etc... Peu importe. L'important est de trouver ce qui vous convient le mieux. Vous pouvez aussi combiner plusieurs supports. Je me contenterai de vous présenter les miens !",
    path: "/blog/ciblezvosoutils"
  },
  {
    title: "Prenez des notes",
    description: "La prise de note doit être concise et rapide. Une dizaine de minutes par jour sont suffisantes ! Vous pouvez utiliser tout ce que vous voulez: un carnet, un bloc-notes, une application de prise de notes sur votre téléphone, votre ordinateur, votre tablette. Peu importe tant que cet outil vous convient.",
    path: "/blog/prenezdesnotes"
  },
  {
    title: "Établissez un plan",
    description: "Avoir le temps, ce n'est pas toujours simple. Concilier sa vie professionnelle et personnelle est déjà un challenge en soi alors consacrer du temps à sa formation peut être compliqué. C'est pourquoi il est important de s'organiser. Vous pouvez par exemple établir un planning hebdomadaire. Cela vous permettra de voir plus clair et de vous organiser en fonction de vos disponibilités.",
    path: "/blog/etablissezunplan"
  }
  /*{
      title: "Rejoignez le Discord",
      description: "Le principe est d'être le plus autonome possible. Mais autonomie ne signifie pas solitude. Savoir demander de l'aide c'est une compétence à part entière tout aussi importante ! Alors j'ai ouvert un Discord qui sera aussi l'occasion de faire des ateliers ensemble.",
      link: "/blog/rejoignezlediscord",
  }*/
];

const $$Astro$6 = createAstro();
const $$ExplanationContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ExplanationContent;
  return renderTemplate`${maybeRenderHead()}<section class="m-4"> <div class="max-w-4xl mx-auto px-7 lg:px-0 mt-2"> <h2 class="text-2xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-neutral-100">
Voici quelques suggestions
</h2> <p class="mb-6 text-base text-neutral-600 dark:text-neutral-400">
Je ne vais rien vous décrire que ce que je ne fais pas moi-même. J'ai pris le temps de réfléchir aux outils dont j'ai besoin et qui fonctionnent pour moi. Il se pourrait que ce soit autre pour vous.
</p> ${renderComponent($$result, "List", $$List, { "data": presentationsLinks, "imagePath": "./_d9c3cfe4-4397-4630-b3a8-9d13a40390dc.jpeg" })} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </section>`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/components/Explanation/ExplanationContent.astro", void 0);

const $$Astro$5 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "LaDevdelaToile" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${renderComponent($$result2, "ExplanationHeader", $$ExplanationHeader, {})} ${renderComponent($$result2, "ExplanationContent", $$ExplanationContent, {})} ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/explanation/index.astro", void 0);

const $$file$3 = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/explanation/index.astro";
const $$url$3 = "/explanation";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$3,
    file: $$file$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const meetups = [
  {
    title: "Software Crafters Lyon",
    description: "Meetup ouvert à tous·tes les développeur·euse·s passionné·e·s par le Software Craftsmanship.",
    path: "https://www.meetup.com/fr-FR/software-craftsmanship-lyon/"
  },
  {
    title: "React Paris Meetup",
    description: "Meetup pour tous·tes les développeur·euse·s passionné·e·s par React et son écosystème.",
    path: "https://www.meetup.com/fr-FR/react-paris/"
  },
  {
    title: "Paris TypeScript",
    description: "Meetup pour tous·tes les développeur·euse·s passionné·e·s par TypeScript.",
    path: "https://www.meetup.com/fr-FR/paris-typescript/"
  }
];

const $$Astro$4 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${renderComponent($$result2, "List", $$List, { "data": meetups, "imagePath": "/_c5c446a5-e1c2-48d2-9b76-4bef75c1274e.jpeg" })} ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/meetups/index.astro", void 0);

const $$file$2 = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/meetups/index.astro";
const $$url$2 = "/meetups";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const podcasts = [
  {
    title: "DOUBLE SLASH",
    description: "Podcasts animés par Patrick FARAMAZ et Alex DUVAL sur le développement web particulièrement côté front-end.",
    path: "https://double-slash.dev/podcasts/"
  },
  {
    title: "Les Cast Codeurs",
    description: "Podcasts animés par Emmanuel Bernard, Guillaume Laforge, Vincent Massol, Arnaud Héritier, Audrey Neveu, Katia Aresti et Antonio Goncalves sur le développement Java et les technologies associées.",
    path: "https://lescastcodeurs.com/"
  },
  {
    title: "Code Garage, le podcast",
    description: "Podcasts animés par Nicolas Brondin-Bernard sur le développement web, son fonctionnement et toute la culture tech autour.",
    path: "https://code-garage.fr/podcast/"
  }
];

const $$Astro$3 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${renderComponent($$result2, "List", $$List, { "data": podcasts, "imagePath": "/_daf75c7d-80b0-4753-935d-5db3cb6ea901.jpeg" })} ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/podcasts/index.astro", void 0);

const $$file$1 = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/podcasts/index.astro";
const $$url$1 = "/podcasts";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="relative"> <img src="../../public/header.jpg" class="w-full h-[34rem] object-cover"> <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-start"> <h1 class="p-4 pl-10 text-white text-4xl xl:text-6xl font-bold lg:tracking-tight xl:tracking-tighter [text-wrap:balance] text-start">
Apprenons ensemble !
</h1> <p class="p-4 pl-10 text-white text-xl mt-4 max-w-lg [text-wrap:balance] text-center lg:text-start">
Tu veux améliorer tes skills ? Préparer un entretien ? Ou encore préparer ton CDA en totale indépendance et pour pas un centime ? Alors viens te joindre à mon aventure !
</p> <button onclick="window.location.href = '/explanation';" type="button" class="px-6 py-3.5 ml-10 mt-4 text-base font-medium text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center">
Voir ce que je propose
</button> </div> </header>`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/components/Header.astro", void 0);

const skills = [
  {
    title: "Git",
    description: "Les bases de versionning avec Git. Vous pouvez utiliser Git pour gérer vos sites Web et vos projets. Ce sera un outil essentiel pour travailler en équipe.",
    icon: "mdi:git",
    path: "/skill/git"
  },
  {
    title: "Outils",
    description: "Configurer un environnement de développement, utiliser des outils de développement, comprendre les commandes de base du terminal, etc...",
    icon: "mdi:tools",
    path: "/skill/tools"
  },
  {
    title: "HTML/CSS",
    description: "Nous pensons souvent que nous savons déjà tout sur HTML et CSS, mais les balisages et les styles évoluent constamment en plus d'être nombreux !",
    icon: "mdi:language-html5",
    path: "/skill/htmlcss"
  },
  {
    title: "Design",
    description: "Un peu de notions en UI/UX pour mieux comprendre les enjeux visuels et ergonomiques d'un site web. Cela peut être un atout pour mieux comprendre les besoins de nos chers utilisateurs et/ou clients.",
    icon: "mdi:design",
    path: "/skill/design"
  },
  {
    title: "Algorithmique",
    description: `Je ne suis pas une partisante de l'algorithmique vide de sens s'arguant d'une logique "pure". Mais il est important de comprendre les bases pour résoudre des problèmes, de connaître les concepts, les modèles etc...`,
    icon: "mdi:math-log",
    path: "/skill/algo"
  },
  {
    title: "Réseau",
    description: "Le développement web c'est aussi comprendre comment fonctionne le réseau, les requêtes, les protocoles, les serveurs etc... Wow on va en avoir plein la caboche!",
    icon: "mdi:mixed-martial-arts",
    path: "/skill/network"
  },
  {
    title: "Base de données",
    description: "SQL, NoSQL, BDD relationnelles, BDD non-relationnelles, les bases de données sont présentes partout. Il serait temps pour moi de me mettre aux requêtes avec vous et de creuser tout ça !",
    icon: "mdi:sql-query",
    path: "/skill/databases"
  },
  {
    title: "Accessibilité",
    description: "Rendre un site accessible à la plus grande majorité de personne possible est un enjeu à ne pas négliger. Il est grand temps que j'en apprenne enfin les grandes lignes pour les appliquer au mieux !",
    icon: "mdi:account-multiple",
    path: "/skill/accessibility"
  },
  {
    title: "Éco-conception",
    description: "Le numérique est un des secteurs les plus polluants. Il est important de prendre en compte l'impact environnemental de nos sites web. Alors là aussi il est temps de se former !",
    icon: "mdi:green-circle-outline",
    path: "/skill/ecodesign"
  },
  {
    title: "SEO",
    description: "Des connaissances en référencement peuvent être un atout pour rendre son site visible sur les moteurs de recherche. Trouver les bons clés, penser à bien renseigner les métas, réfléchir à la performance etc... Il y a du travail !",
    icon: "mdi:computer",
    path: "/skill/seo"
  },
  {
    title: "Hébergement",
    description: "Déployer un site, le mettre en ligne, le maintenir, le sécuriser, le monitorer, le sauvegarder, le mettre à jour... Encore une belle liste de choses à savoir",
    icon: "mdi:ghost",
    path: "/skill/host"
  },
  {
    title: "Crafting",
    description: "Art ou non, il est important de prendre le temps de bien faire les choses, de réfléchir à la structure de son code, de le rendre lisible, testable et maintenable. C'est un travail de longue haleine mais qui en vaut la peine !",
    icon: "mdi:mixed-martial-arts",
    path: "/skill/crafting"
  }
];

const $$Astro$1 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${maybeRenderHead()}<ul class="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[1fr]"> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "title": skill.title, "description": skill.description, "icon": skill.icon, "path": skill.path })}`)} </ul>`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/components/Skills.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "LaDevdelaToile" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` })}`;
}, "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/index.astro", void 0);

const $$file = "/Users/aline/Desktop/Projects/LaDevdelaToile/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$3 as a, index$2 as b, index$1 as c, index as d, index$4 as i };
