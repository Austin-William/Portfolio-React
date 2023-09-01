const projects = [
    {
        id: 1,
        name: "Paperwork",
        description: "An app to help to manage your french administrative paperworks, built with React Typescript, NodeJS, Flutter and AWS. A mobile application is available in Flutter and will be soon made with React Native. This app is still in development. (School project)",
        url: "https://www.paperwork-fr.com",
        github: "https://github.com/Paperwork-EIP",
        image: "assets/projects/logos/paperwork_logo.png",
        nb_members: 7,
        duration: "2 years",
        screenshots: [
            "assets/projects/paperwork/1.PNG",
            "assets/projects/paperwork/2.PNG",
            "assets/projects/paperwork/3.PNG",
            "assets/projects/paperwork/4.PNG",
            "assets/projects/paperwork/5.PNG",
            "assets/projects/paperwork/6.PNG",
            "assets/projects/paperwork/7.PNG",
            "assets/projects/paperwork/8.PNG",
        ],
    },
    {
        id: 2,
        name: "Area",
        description: "A web app to manage your different account in one app thanks to the API of the different services (Discord, Twitter, ...). This app is built with React JS, NodeJS/ExpressJS and Firebase. This app will not be updated anymore. (School project)",
        url: "",
        github: "https://github.com/Austin-William/Area",
        image: "assets/projects/logos/area_logo.jpg",
        nb_members: 6,
        duration: "2 months",
        screenshots: [
            "assets/projects/area/1.PNG",
            "assets/projects/area/2.PNG",
            "assets/projects/area/3.PNG",
            "assets/projects/area/4.PNG",
            "assets/projects/area/5.PNG",
            "assets/projects/area/6.PNG",
            "assets/projects/area/7.PNG",
            "assets/projects/area/8.PNG",
            "assets/projects/area/9.PNG",
            "assets/projects/area/10.PNG",
            "assets/projects/area/11.PNG",
            "assets/projects/area/12.PNG",
            "assets/projects/area/13.PNG",
            "assets/projects/area/14.PNG",
            "assets/projects/area/15.PNG",
        ],
    },
    {
        id: 3,
        name: "Dashboard",
        description: "A web app to display 6 different widgets (weather, Twitter, Reddit, Youtube, Github and Unsplash API). This app is built with React JS/Bootstrap and Firebase. This app will not be updated anymore. (School project)",
        url: "",
        github: "https://github.com/Austin-William/Dashboard-API",
        image: "assets/projects/logos/dashboard_logo.jpg",
        nb_members: 2,
        duration: "4 weeks",
        screenshots: [
            "assets/projects/dashboard/1.png",
            "assets/projects/dashboard/2.png",
            "assets/projects/dashboard/3.png",
            "assets/projects/dashboard/4.png",
            "assets/projects/dashboard/5.png",
            "assets/projects/dashboard/6.png",
            "assets/projects/dashboard/7.png",
        ],
    },
    {
        id: 4,
        name: "Redditech",
        description: "A mobile application using Reddit API. This app is built with Flutter. This app will not be updated anymore. (School project)",
        url: "",
        github: "https://github.com/Austin-William/Redditech",
        image: "assets/projects/logos/reddit_logo.png",
        nb_members: 2,
        duration: "4 weeks",
        screenshots: [
            "assets/projects/redditech/1.png",
            "assets/projects/redditech/2.png",
            "assets/projects/redditech/3.png",
            "assets/projects/redditech/4.png",
            "assets/projects/redditech/5.png",
        ],
    },
    {
        id: 5,
        name: "Telltale Game",
        description: "A story game made in Javascript which the end will depend on the user's choices (School project)",
        url: "https://austin-william.github.io/JAM-Epitech-2022/",
        github: "https://github.com/Austin-William/JAM-Epitech-2022",
        image: "assets/projects/logos/game_jam_2022_logo.PNG",
        nb_members: 3,
        duration: "2 days",
        screenshots: [
            "assets/projects/game_jam_2022/1.PNG",
            "assets/projects/game_jam_2022/2.PNG",
            "assets/projects/game_jam_2022/3.PNG",
            "assets/projects/game_jam_2022/4.PNG",
            "assets/projects/game_jam_2022/5.PNG",
            "assets/projects/game_jam_2022/6.PNG",
        ],
    },
    {
        id: 6,
        name: "Check The Time",
        description: "A website to check the time in different cities. This app is built with ReactJS. (Personal project)",
        url: "https://austin-william.github.io/CheckTheTime/",
        github: "https://github.com/Austin-William/CheckTheTime",
        image: "assets/projects/logos/check_the_time_logo.png",
        nb_members: 1,
        duration: "2 days",
        screenshots: [
            "assets/projects/check_the_time/1.PNG",
            "assets/projects/check_the_time/2.PNG",
        ],
    }
];

const experiences = [
    {
        id: 1,
        name: "Linagora",
        type: "Internship",
        description: "A website to create and manage different type of CV with different templates.",
        year: "2020",
        technologies: [
            "React JS",
            "Vue JS",
            "HTML/CSS",
        ],
        missions: [
            "Create design of the architecture of an online CV generator",
            "Find the best technologies to use for the project",
            "Create and develop of its interface as well as its functionalities",
        ],
    },
    {
        id: 2,
        name: "Natixis",
        type: "Internship",
        description: "Redesign and add new features to a home page regrouping some applications of the company",
        year: "2022",
        technologies: [
            "Angular JS",
            "C#",
            "SQLPAD",
        ],
        missions: [
            "Redesign a home page regrouping some applications of the company for a better visual",
            "Added new user settings to filter application user permissions",
            "Add new features to centralize different types of events (alerts, notifications, ...)"
        ],
    },
    {
        id: 3,
        name: "Paperwork",
        type: "School project",
        description: "A web app and a mobile app to help you to manage your french administrative paperworks.",
        year: "2022 - 2024",
        technologies: [
            "React JS/Typescript",
            "NodeJS",
            "Flutter",
            "React Native",
            "AWS",
        ],
        missions: [
            "Develop the welcome page, login and register screen in the web app with React Typescript/SCSS",
            "Develop the mobile app with React Native",
            "Develop a part of the logic of the server with NodeJs",
            "Develop the tests for the front-end, back-end and mobile app",
            "Help to develop the mobile app with Flutter and the back-end with NodeJs"
        ],
    },
];

const services = [
    {
        title: 'Web Development',
        description: 'React.JS, AngularJS, HTML5 / CSS3 and Javascript / Typescript are my main skills.',
        icon: 'web'
    },
    {
        title: 'Mobile Development',
        description: 'React Native and Flutter for applications development',
        icon: 'mobile'
    },
    {
        title: 'Server Development',
        description: 'NodeJS and ExpressJS are the languages I used the most for server development.',
        icon: 'server'
    },
    {
        title: 'Testing',
        description: 'Unit testing and integration testing with Jest.',
        icon: 'testing'
    },
]

export { projects, experiences, services };