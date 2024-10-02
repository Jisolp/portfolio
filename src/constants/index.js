import { email, github, linkedin, resume, finassist, markit, health, travel, portfolio, stocks, zodiak, leetcode} from "../assets";

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
        id: "Travel",
        image: travel,
        title: "Travel Buddy",
        techStack: ['React','Node,js etc'],
        description: "hell0 yes why yes htis is the project ok?",
        github: 'https://github.com/Jisolp'
    },
    {
        id: "Health",
        image: health,
        title: "Health",
        techStack: ['React','Node,js etc'],
        description: "hell0 yes why yes htis is the project ok?",
        github: 'https://github.com/Jisolp'
    },
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
        title: "Financial Data Pipeline and Visualization System for Stock Market Indices",
        description: 
        `<p>I like to keep my eyes on the S&P 500 index. So I worked on this project, which involves creating a data pipeline to process financial data from the S&P 500 index and utilizing machine learning models to predict stock market movements. The main components of the project are:</p>
        <br>
        <h4><strong>Data Acquisition:</strong></h4>
        <p>The project begins with acquiring raw S&P 500 data in CSV format.<p>
        <h4><strong>Data Processing:</strong></h4>
        <p>Using the <code>process_data.py</code> script, the raw data is loaded and processed.
        <h4><strong>Model Training:</strong></h4>
        <p>The <code>model_training.py</code> script leverages the processed data to train a machine learning model. In this case, I used a Random Forest Regressor to predict stock market index values.`,
        techStack: ['Python', 'Pandas', 'Scikit-Learn', 'NumPy'],
        github: "https://github.com/Jisolp/financial-data-pipeline-project-",
    },
    {
        id: "Portfolio",
        image: portfolio,
        title: "Personal Portfolio",
        description:`<p> This is my personal portfolio page which showcases the various projects I have completed and my skill sets as a software engineer. To add a personal touch, I incorporated a component where you can explore some of my favorite (hikes, cafe, food, etc). To access this page, simply go to the home page and click on the word "<u>exploring</u>".</p>
        <br> <p> Happy exploring!</p>`,
        techStack: ['React','JavaScript','Tailwind CSS'],
        github: 'https://github.com/Jisolp/myportfolio',
        figma: 'https://www.figma.com/design/zog5fo6LR8bV4ynyGHYIrl/personal-portfolio?node-id=0-1&t=zh4QMfqoQyxbP8xS-1',
    },
    {
        id: "Zodiak",
        image: zodiak,
        title: "Zodiak",
        description: 'This project is a website that allows users to receive a daily horoscope based on their birthday. It also features a life path number calculator that provides insights into users life paths according to their birthdays, as well as a compatibility checker for assessing love compatibility. In this project, we incorporated a dynamic UI to enhance user experience and implemented Continuous Integration/Continuous Deployment (CI/CD) practices for seamless updates and testing.',
        techStack: ['JavaScript','HTML','CSS','Puppeteer','Eslint','JSDoc'],
        github: 'https://github.com/Jisolp/Zodiak',
        demo: 'https://cse110-sp23-group14.github.io/cse110-sp23-group14/source/index.html',
    },
]

export const locations =[
    {
        id:1,
        name:"Gilder Port",
        category: ['Sunset','Activity'],
        coordinate: [32.7157,-117.1611],
        rating: 4.5,
        review: 'hit or miss sunset',
        googlelink: 'https://g.co/kgs/XKM1NnD',
    },
]