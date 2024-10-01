import { email, github, linkedin, resume, cipher, finassist, markit, portfolio, stocks, zodiak} from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "resume",
        title: "Resume",
        link: resume
    },
];

export const socialMedia = [
    {
        id: "linkedin",
        icon: linkedin,
        link: "https://www.linkedin.com/in/jisol-park/",
    },
    {
        id: "github",
        icon: github,
        link: "https://github.com/Jisolp",
    },
    {
        id: "email",
        icon: email,
        link: "mailto:jisolp7@gmail.com"
    },
];

export const projectsLink = [
    {
        id: "Finassist",
        image: finassist,
        title: "AI-Powered Personal Finance Assistant",
        techStack: ['React','Node,js etc'],
        description: "hell0 yes why yes htis is the project ok?",
        github: 'https://github.com/Jisolp'
    },
    {
        id: "MarkIt",
        image: markit,
        title: "MarkIt",
        techStack: ['React','Node,js etc'],
    },
    {
        id: "Stocks",
        image: stocks,
        title: "Financial Data Pipeline and Visualization System for Stock Market Indice",
        techStack: ['React','Node,js etc'],
    },
    {
        id: "Portfolio",
        image: portfolio,
        title: "Personal Portfolio",
        techStack: ['React','Node,js etc'],
        github: 'https://github.com/Jisolp/myportfolio',
        figma: 'https://www.figma.com/design/zog5fo6LR8bV4ynyGHYIrl/personal-portfolio?node-id=0-1&t=zh4QMfqoQyxbP8xS-1',
    },
    {
        id: "Zodiak",
        image: zodiak,
        title: "Zodiak",
        techStack: ['React','Node,js etc'],
    },
]

