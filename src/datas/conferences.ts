import type { Event } from "../utils/types/Event.ts";

export const conferences: Event[] = [
    {
        title: 'Paris Web',
        description: 'Grand événement annuel de la communauté francophone du web. Il est dédié aux standards, à l\'accessibilité, à la qualité et à la conception web.',
        path:  '/conferences/parisweb',
        location: {
            city: "Paris",
            address: "9-11 rue Robert et Sonia Delaunay, 75011 Paris",
            coordinates: [48.8551324, 2.3909413]
        },
    },
    {
        title: 'AFUP',
        description: 'Un des gros événements web de l\'année, l\'AFUP est une association qui a pour but de promouvoir le langage PHP et les technologies associées.',
        path: '/conferences/AFUP',
        location: {
            city: "Chessy",
            address: "Avenue René Goscinny, 77700 Chessy",
            coordinates: [48.8707602, 2.7877176]
        },
    },
    {
        title: 'Who Run The Tech ?',
        description: 'Première édition en 2023, cet événement a pour but de donner la voix et de la visibilité aux femmes dans le secteur de la tech.',
        path: '/conferences/whorunthetech',
        location: {
            city: "Rennes",
            address: "2 Cr des Alliés, 35000 Rennes",
            coordinates: [48.1050056, 1.6772005]
        },
    },
    {
        title: 'DevFest Lille',
        description: 'Le DevFest Lille propose des conférences sur deux jours autour de nombreux sujets techniques et est organisé par le GDG Lille.',
        path: '/conferences/devfestlille',
        location: {
            city: "Lille",
            address: "1 Bd des Cités Unies, 59777 Lille",
            coordinates: [50.6326691, 3.0596231]
        },
    },
    {
        title: 'Devoxx',
        description: 'Devoxx est un ensemble de conférences pour les développeurs et contient également un salon avec des stands et des exposants.',
        path: '/conferences/devoxx',
        location: {
            city: "Paris",
            address: "2 Pl de la Pte Maillot, 75017 Paris",
            coordinates: [48.8793872, 2.2810694]
        },
    },
    {
        title: "Devfest Nantes",
        description: "Le DevFest est un festival de développeurs qui se déroule à la Cité des Congrès de Nantes.",
        path: '/conferences/devfestnantes',
        location: {
            city: "Nantes",
            address: "5 rue de Valmy, 44000 Nantes",
            coordinates: [47.2131429, -1.5467108]
        },
    },
    {
        title: "BDX I/O",
        description: "BDX I/O est un événement proposant plusieurs conférences sur des thèmes techniques variés et se déroule à Bordeaux.",
        path: '/conferences/bdxio',
        location: {
            city: "Bordeaux",
            address: "Av. Jean Gabriel Domergue, 33300 Bordeaux",
            coordinates: [44.8882768, -0.5856855]
        },
    },
    {
        title: "Touraine Tech",
        description: "Touraine Tech est un événement qui se déroule à Tours et qui propose des conférences sur divers sujets. Le principe est aussi de donner la voix aux speakers qui débutent.",
        path: '/conferences/tourainetech',
        location: {
            city: "Tours",
            address: "Parc Grandmont, 31 Av. Monge Bâtiment G, 37200 Tours",
            coordinates: [47.357801, 0.702945]
        },
    },
    {
        title: "OpenTechCon",
        description: "L'OpenTechCon se veut être un événement inclusif, ouvert à tou·te·s, et bienveillant. Il se déroule en ligne, pour permettre à chacun·e de participer, quelque soit son lieu de résidence. L'événement est gratuit, pour que l'argent ne soit pas un frein à la participation.",
        path: '/conferences/opentechcon',
        location: {
            city: "France",
            address: "En ligne",
            coordinates: [45.6359428,-7.9804094]
        },
    }
];