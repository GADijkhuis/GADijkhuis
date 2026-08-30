import { Project } from '../project/project';

export type Localized<T = string> = { default: T } & Record<string, T>;

export abstract class Content {
    static readonly about: Localized = {
        default: `Hey! I'm Gideon, born in 2006 and a Software Engineering student at NHL Stenden in Emmen.
          <br>Before I got into programming, I was already into canoeing. Canoe sprint is an Olympic discipline where you race on flat water, without waves or currents, in your own lane, as fast as possible from start to finish.
          <br>That sport was also where my first big project came from. I wanted my programming work to contribute something to the sport I do myself, and that's how Klokking came about: a timing system with online registration for canoe sprint and marathon races. Since I compete in races myself, I know from experience what such a system needs to deliver. I still maintain and keep expanding it.
          <br>In 2024 I carried out my first major project for an external client: an employee app for Biologisch Bouwbedrijf Dijkhuis. This app is meant to make managing all sorts of useful links easy through a single app, for photos, for example. By now the app also includes an hours-registration system. In 2025 I did a six-month internship at <a href="https://teamfoster.nl/over-ons?teamlid=gideon" target="_blank">Foster</a> in Zwolle. <a href="https://teamfoster.nl/over-ons?teamlid=gideon" target="_blank">Foster</a> is a team of creative tech folks who help clients with questions around digitalization. After my internship, I've worked there part-time as a software developer, and besides the technical side, I've learned a lot about professional collaboration and backing up decisions.`,
        nl: `Hey! Ik ben Gideon, geboren in 2006 en student Software Engineering aan NHL Stenden in Emmen.
          <br>Voordat ik ging programmeren, zat ik al in de kano. Kanosprint is een Olympische discipline waarbij je op vlak water, zonder golven of stroming, in een eigen baan zo snel mogelijk van start naar finish vaart.
          <br>Uit die sport kwam ook mijn eerste grote project voort. Ik wilde met mijn programmeerwerk graag iets bijdragen aan de sport die ik zelf beoefen, en zo ontstond Klokking: een tijdregistratiesysteem met online inschrijvingen voor kanosprint- en marathonwedstrijden. Omdat ik zelf wedstrijden vaar, weet ik uit ervaring waar zo'n systeem aan moet voldoen. Ik onderhoud en breid het nog steeds uit.
          <br>In 2024 voerde ik mijn eerste grote project voor een externe opdrachtgever uit: een werknemersapp voor Biologisch Bouwbedrijf Dijkhuis. Deze app is bedoeld om alle handige links makkelijk te beheren via één app, voor bijvoorbeeld foto’s. Inmiddels bevat de app ook een urenregistratiesysteem . In 2025 liep ik een half jaar stage bij <a href="https://teamfoster.nl/over-ons?teamlid=gideon" target="_blank">Foster</a> in Zwolle. <a href="https://teamfoster.nl/over-ons?teamlid=gideon" target="_blank">Foster</a> is een team van creatieve	techneuten die klanten helpt met vraagstukken rondom digitalisering. Na mijn stage werk ik er parttime als software developer, en leer er naast de techniek vooral veel over professioneel samenwerken en het onderbouwen van keuzes.`,
    };
    static readonly project: Localized = {
        default: "A mix of personal projects and work I've built for others. Most sync straight from GitHub, some of them are private and are shown without a repository link.",
        nl: "Een mix van persoonlijke projecten en werk dat ik voor anderen heb gebouwd. De meeste laden rechtstreeks vanuit GitHub, een aantal zijn privé en worden getoond zonder link naar de repository.",
    };
    static readonly github_username = "GADijkhuis";
    static readonly projects: Project[] = [
        {
            title: "Klokking",
            description: "Timeregistration system Klokking for canoesprint / canoemarathon with (national) registration system.",
            bulletpoints: [
                "Made with React Native using FluentUI Components",
                "Supabase for Authentication and Database with RLS policies",
                "Using Electron for running on Windows and macOS devices"
            ],
            homepage: "https://klokking.nl/"
        },
        {
            title: "Dijkhuis",
            description: "Employee-app for biological builder Dijkhuis, including Timeregistration for employees.",
            bulletpoints: [
                "Made with Flutter",
                "For Android, iOS and Windows",
                "Supabase for Authentication and Database with RLS policies"
            ],
        },
        {
            title: "Boom Legal",
            description: "Website for law form Boom Legal at Leiden",
            homepage: "https://boomadvocaten.nl/"
        },
        {
            title: "Watersport Drenthe",
            description: "Website for watersports association Watersport Drenthe at Emmen",
            homepage: "https://watersportdrenthe.nl/"
        }
    ];
    static readonly skip_project_titles: string[] = [
        "VereniQ",
        "DijkhuisAppOnline",
        "GADijkhuis",
        "Klokking-2026-Beta",
        "Klokking-2026-Registration-Beta"
    ];
    static readonly skill_appdev = [
        "Swift",
        "Skip.dev",
        "Flutter",
        "Kotlin",
        "Java",
        "Xamarin.forms",
        "MAUI",
        "WinForms",
        "UWP"
    ];
    static readonly skill_webdev = [
        "ReactJS",
        "Angular",
        "ASP.NET",
        "Typescript",
        "Javascript",
        "Laravel",
        "PHP"
    ];
    static readonly skill_db = [
        "MySQL",
        "Supabase",
        "Firebase",
    ];
}
