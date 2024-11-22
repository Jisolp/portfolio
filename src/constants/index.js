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
        description: "I’m developing a personalized travel planning app that brings together the best experiences tailored to each user’s unique interests and budget. Unlike other travel apps, this platform goes beyond generic recommendations by allowing users to select specific preferences—such as nature, city exploration, food, or nightlife—and by incorporating detailed budget and activity-level constraints. Users simply enter their travel dates, budget, and preferences, and the app generates a curated itinerary featuring optimized routes, activity suggestions, packing lists, and recommended flights, accommodations, and car rentals. What sets this app apart is its focus on real-time adaptability (for updates like weather changes), budget-conscious planning, and an eco-friendly travel option for sustainability-focused travelers. With downloadable itineraries and notifications for last-minute recommendations, my goal is to make travel both seamless and memorable for every type of adventurer.",
        github: 'https://github.com/Jisolp'
    },
    {
        id: "Health",
        image: health,
        title: "Health",
        techStack: ['React','Node,js etc'],
        github: 'https://github.com/Jisolp'
    },
    {
        id: "Finassist",
        image: finassist,
        title: "AI-Powered Personal Finance Assistant",
        techStack: ['React','Node,js etc'],
        description: "This full-stack web application provides a personalized finance management experience, enabling users to easily track income, expenses, and savings across accounts like HYSA and Roth IRA. Built with React, Node.js, and MongoDB, the app empowers users to set financial goals, analyze spending patterns, and make data-driven decisions. Features include budgeting tools, personalized spending insights, and email reminders to help users stay on track with their goals. A machine learning component leverages Python and TensorFlow to predict expenses and offer budgeting and investment recommendations, ensuring that users receive tailored, proactive financial advice for smarter financial planning.",
        github: 'https://github.com/Jisolp'
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
        name:"Gilderport",
        category: ['Sunset Spots','Trails/Hiking'],
        coordinate: [32.8899,-117.2512],
        rating: 4.5,
        review: 'good sunset (sometimes hit or miss), fun hike down to the beach',
        googlelink: 'https://www.google.com/maps/dir//Gliderport+Trl,+San+Diego,+CA+92037/@32.8886415,-117.2717261,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80dc06965d8d9477:0xc820af2967845659!2m2!1d-117.2511266!2d32.8886432?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D',
    },
    {
        id:2,
        name:"Annie's Canyon",
        category: ['Trails/Hiking'],
        coordinate: [33.00572198, -117.26389127],
        rating: 3.5,
        review: 'short cool hike',
        googlelink: 'https://www.google.com/maps?sca_esv=a68d2f8b7b299017&output=search&q=annie%27s+canyon&source=lnms&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J5fCQuDw5vrzPt_cVO2GgWUj9lYp6rkuKNKs7T0vX7Q81Ek5YpPyUVFe3W7KrgIFN0yr210hnrD8iUeaBLQnVQx6xj_2rK51OT45p2-pNecGYGnmKIXSx0uVV4QrbXN8rzF_OS7YkBBO-_3NzudI87-yS3TEd_g5PthVlYyBSDYpFG4Prg&entry=mc&ved=1t:200715&ictx=111',
    },
    {
        id:3,
        name:"Secret Swings",
        category: ['Activity','Sunset Spots'],
        coordinate: [32.848577, -117.267805],
        rating: 4.5,
        review: 'little scary, but beautiful',
        googlelink: 'https://www.google.com/maps/place/1327+Coast+Walk+Trail,+La+Jolla,+CA+92037/@32.8490839,-117.2792727,15z/data=!3m1!4b1!4m6!3m5!1s0x80dc03fd9f50c0d9:0x61300b5bbe66f76e!8m2!3d32.8490843!4d-117.268973!16s%2Fg%2F11tfkh4l7h?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D',
    },
    {
        id:4,
        name:"The Cat Lounge Rescue and Adoption Center",
        category: ['Cafe'],
        coordinate: [32.842373200493604, -117.27274144817292],
        rating: 3.5,
        review: 'cheaper for students',
        googlelink: 'https://www.google.com/maps/dir//1006+Torrey+Pines+Rd,+La+Jolla,+CA+92037/@32.8422262,-117.3552241,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80dc03d8bac08b95:0xedfa6edf8fcf661b!2m2!1d-117.2728229!2d32.8422532?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D',
    },
    {
        id:5,
        name:"The Flower Pot Cafe and Bakery",
        category: ['Cafe'],
        coordinate: [32.84073281852215, -117.27411399000351],
        rating: 4,
        review: 'not the best coffee, but the best cafe to study',
        googlelink: 'https://www.google.com/maps/place/The+Flower+Pot+Cafe+and+Bakery/@32.8404898,-117.2744469,20z/data=!4m14!1m7!3m6!1s0x80dc034cc52f3c19:0x9c6402422cb12ad0!2sThe+Flower+Pot+Cafe+and+Bakery!8m2!3d32.8407249!4d-117.2742124!16s%2Fg%2F11sysr9ykf!3m5!1s0x80dc034cc52f3c19:0x9c6402422cb12ad0!8m2!3d32.8407249!4d-117.2742124!16s%2Fg%2F11sysr9ykf?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D',
    },
    {
        id:5,
        name:"Chaba Thai Kitchen",
        category: ['Food'],
        coordinate: [32.83343086903567, -117.15000264775038],
        rating: 4.5,
        review: 'good pad see ew, free dessert!!',
        googlelink: 'https://www.google.com/maps/place/Chaba+Thai+Kitchen/@32.833192,-117.1525239,17z/data=!3m1!4b1!4m6!3m5!1s0x80dbffa2afc3bb9f:0x7fc7ac2afc18ca14!8m2!3d32.833192!4d-117.149949!16s%2Fg%2F12ml2y2dp?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D',
    },
    {
        id:6,
        name:"Bahn Thai",
        category: ['Food'],
        coordinate: [32.76218803094191, -117.14651075767051],
        rating: 4.9,
        review: 'best thai food in sd, near a little park',
        googlelink: 'https://www.google.com/maps/place/4646+Park+Blvd,+San+Diego,+CA+92116/@32.7618903,-117.1464893,16z/data=!4m15!1m8!3m7!1s0x80d9551e4fd5ad43:0x67470c52cf4e87a3!2s4646+Park+Blvd,+San+Diego,+CA+92116!3b1!8m2!3d32.7618903!4d-117.1464893!16s%2Fg%2F11b8z9kpb4!3m5!1s0x80d9551e4fd5ad43:0x67470c52cf4e87a3!8m2!3d32.7618903!4d-117.1464893!16s%2Fg%2F11b8z9kpb4?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D',
    },
    {
        id:7,
        name:"Sizzling Pot King",
        category: ['Food'],
        coordinate: [32.83356960461292, -117.1495116922281],
        rating: 4.5,
        review: 'mala is not as strong but such a good dry hotpot place',
        googlelink: 'https://www.google.com/maps/place/Sizzling+Pot+King/@32.8334299,-117.1519793,17z/data=!3m1!4b1!4m6!3m5!1s0x80dbffa2a36d7005:0x152815c8eeb8ef19!8m2!3d32.8334299!4d-117.1494044!16s%2Fg%2F11b69ww31h?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D',
    },
    {
        id:8,
        name:"Szechuan Chef ",
        category: ['Food'],
        coordinate: [32.81939213315955, -117.15587488465903],
        rating: 4.9,
        review: 'AMAZING PLACE: dried pepper chicken and fish in thickening sauce',
        googlelink: 'https://www.google.com/maps/place/Szechuan+Chef+Chinese+Cuisine/@32.8322115,-117.1494363,16z/data=!4m6!3m5!1s0x80dbffeb602695b9:0x854be34423f8419b!8m2!3d32.8191532!4d-117.1559178!16s%2Fg%2F11b67ng24k?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D',
    },
    {
        id:9,
        name:"Camellia Rd Tea Bar",
        category: ['Cafe'],
        coordinate: [32.8326712466169, -117.14681848788152],
        rating: 4,
        review: 'good fruit tea boba - their seasonal flavors are unique',
        googlelink: 'https://www.google.com/maps/place/Camellia+Rd+Tea+Bar/@32.8322115,-117.1494363,16z/data=!3m1!4b1!4m6!3m5!1s0x80dbffbd27f98beb:0xcb20159c15170e9d!8m2!3d32.832207!4d-117.1468614!16s%2Fg%2F11dztsxxhc?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D',
    },
    {
        id:10,
        name:"Main Chick Hot Chicken",
        category: ['Food'],
        coordinate: [32.83805835911444, -117.20718400686059],
        rating: 4,
        review: 'best hot chicken in sd',
        googlelink: 'https://www.google.com/maps/place/Main+Chick+Hot+Chicken/@32.8296926,-117.4701692,11z/data=!4m10!1m2!2m1!1smain+chick!3m6!1s0x80dc01de09d8e531:0x690af0721c924573!8m2!3d32.8296586!4d-117.2053252!15sCgptYWluIGNoaWNrIgOIAQFaDCIKbWFpbiBjaGlja5IBFGZhc3RfZm9vZF9yZXN0YXVyYW504AEA!16s%2Fg%2F11lgx46s7k?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D',
    },
    {
        id:11,
        name:"Sugar and Scribe",
        category: ['Food'],
        coordinate: [32.84316866013667, -117.27511402883525],
        rating: 4,
        review: 'pretty brunch place their blueberry pancake is so good (without the glitter tho) they also have a cute bakery section',
        googlelink: 'https://www.google.com/maps/place/Sugar+and+Scribe/@32.843065,-117.2751033,17z/data=!3m1!4b1!4m6!3m5!1s0x80dc01c01d462a7d:0x95c23f3d553675a1!8m2!3d32.843065!4d-117.2751033!16s%2Fg%2F1tr9nqbg?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D',
    },
    
    
]