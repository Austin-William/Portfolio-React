import React from 'react';

import "../styles/pages/Experiences.scss";

function Experiences() {
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
                "Redisign a home page regrouping some applications of the company for a better visual",
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
    const [currentExperience, setCurrentExperience] = React.useState(experiences[0]);
    const [activeTypeEffectDescription, setActiveTypeEffectDescription] = React.useState(false);
    const [tab, setTab] = React.useState('title');

    function TypingEffectComponent(props: { text: string, delay: number, className: string }) {
        const [currentText, setCurrentText] = React.useState('');
        const [currentIndex, setCurrentIndex] = React.useState(0);

        React.useEffect(() => {
            if (currentIndex < props.text.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(prevText => prevText + props.text[currentIndex]);
                    setCurrentIndex(prevIndex => prevIndex + 1);
                }, props.delay);

                return () => clearTimeout(timeout);
            }
            if (currentIndex === props.text.length) {
                setTimeout(() => {
                    setActiveTypeEffectDescription(true);
                }, 1500);
            }
        }, [currentIndex, props.delay, props.text, props.text.length]);

        return (
            <span className={props.className}> 
                {currentText}
            </span>
        )
    }

    function changeExperience(experience: any) {
        setCurrentExperience(experience);
        setActiveTypeEffectDescription(false);
    }

    function changeTab(tab: string) {
        setActiveTypeEffectDescription(false);
        setTab(tab);
    }

    function displayTab() {
        switch (tab) {
            case "title":
                return (
                    <div className='screen__content__title__wrapper'>
                        <div className='screen__content__title'>
                            {
                                !activeTypeEffectDescription ?
                                    <TypingEffectComponent text={currentExperience.name} delay={100} className='screen__content__title__text caret' />
                                    :
                                    <span className='screen__content__title__text'>
                                        {currentExperience.name}
                                    </span>
                            }
                        </div>
                        <div className='screen__content__description'>
                            {
                                activeTypeEffectDescription ?
                                    <TypingEffectComponent text={currentExperience.description} delay={50} className='screen__content__description__text caret' />
                                    :
                                    <span className='screen__content__description__text'></span>
                            }
                        </div>
                    </div>
                );
            case "missions":
                return (
                    <div className='screen__content__missions'>
                        {
                            currentExperience.missions.map((mission: any, index: number) => {
                                return (
                                    <div className=' screen__content__mission' key={index}>
                                        <span className='screen__content__mission__text'>
                                            {mission}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                );
            case "technologies":
                return (
                    <div className='screen__content__technologies'>
                        {
                            currentExperience.technologies.map((technology: any, index: number) => {
                                return (
                                    <div className=' screen__content__technology' key={index}>
                                        <span className='screen__content__technology__text'>
                                            {technology}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                );

            default:
                break;
        }
    }

    return (
        <div className='experiences' id='experiences'>
            <div className='container'>
                <h1 className='experiences__title' data-aos="fade-up" data-aos-duration="1000">
                    Experiences
                </h1>
                <h4 className='experiences__description' data-aos="fade-up" data-aos-duration="1000">
                    Here are some of my experiences in companies big school projects that I done during my studies and helped me to improve my skills.
                </h4>
                <div className='body' data-aos="fade-up" data-aos-duration="1000">
                    <section className='screen'>
                        <div className='screen__left'>
                            <div className='screen__content'>
                                {
                                    displayTab()
                                }
                            </div>
                        </div>
                        <div className='screen__right'>
                            <div className='tabs'>
                                <label className="checkbox__wrapper">
                                    <input type="radio" className="checkbox__input" id="title" name="tab-control" defaultChecked onChange={() => changeTab('title')} />
                                    <span className="checkbox__tile">
                                        <div className='checkbox__label__box'>
                                            <span className="checkbox__label">Title</span>
                                        </div>
                                    </span>
                                </label>
                                <label className="checkbox__wrapper">
                                    <input type="radio" className="checkbox__input" id="missions" name="tab-control" onChange={() => changeTab('missions')} />
                                    <span className="checkbox__tile">
                                        <div className='checkbox__label__box'>
                                            <span className="checkbox__label">Missions</span>
                                        </div>
                                    </span>
                                </label>
                                <label className="checkbox__wrapper">
                                    <input type="radio" className="checkbox__input" id="technologies" name="tab-control" onChange={() => changeTab('technologies')} />
                                    <span className="checkbox__tile">
                                        <div className='checkbox__label__box'>
                                            <span className="checkbox__label">Technologies</span>
                                        </div>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </section>
                    <div className='buttons' data-aos="fade-up" data-aos-duration="1000">
                        {experiences.map((experience) => (
                            <label className="checkbox__wrapper">
                                <input type="radio" className="checkbox__input" id={experience.name} name="experience-control" onChange={() => changeExperience(experience)} checked={currentExperience.name === experience.name} />
                                <span className="checkbox__tile">
                                    <div className='checkbox__label__box'>
                                        <span className="checkbox__label">{experience.name}</span>
                                    </div>
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences;