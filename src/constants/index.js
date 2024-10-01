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
    },
    {
        id: "Zodiak",
        image: zodiak,
        title: "Zodiak",
        techStack: ['React','Node,js etc'],
    },
    {
        id: "Cipher",
        image: cipher,
        title: "Cipher",
        techStack: ['React','Node,js etc'],
    },
]

