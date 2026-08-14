import { Project } from '../project/project';

export abstract class Content {
    static readonly about = "Hey! I’m Gideon, an enthusiastic and creative computer science student. I’ve experience in multiple frameworks like the .NET ecosystem, multiple web frameworks and App Development with both Android and iOS. My speciality is building user-friendly and efficient applications. I work both independently and in a team. Currently, I’m studying Computer Science (specialization Software Enginering) at NHL Stenden in Emmen.";
    static readonly project = "A mix of personal projects and work I've built for others. Most sync straight from GitHub, some of them are private and are shown without a repository link."
    static readonly github_username = "GADijkhuis";
    static readonly projects: Project[] = [
        {
            title: "Klokking",
            description: "Timeregistration system Klokking for canoesprint/canoemarathon with (national) registration system.",
            bulletpoints: [
                "Made with React Native using FluentUI Components",
                "Supabase for Authentication and Database with RLS policies",
                "Using Electron for running on Windows and macOS devices"
            ],
            link: "https://klokking.nl/"
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
    ];
    static readonly skip_project_titles: string[] = [
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