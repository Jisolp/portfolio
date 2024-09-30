import { email, github, linkedin, portfolio, resume} from "../assets";

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
        id: "project",
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
        id: "portfolio",
        icon: portfolio,
    }
]
