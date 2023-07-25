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
                "Add new features to centralize different types of events (alerts, notifications, ...)",
                "Added new user settings to filter application user permissions"
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
                "Developing the web app with React Typescript",
                "Developing the mobile app with Flutter",
                "Developing the API with NodeJS",
                "Developing the database with AWS",
            ],
        },
    ];

    return (
        <div className='experiences' id='experiences'>
            <div className='container'>
                <h1 className='experiences__title'>
                    Experiences
                </h1>
                <h4 className='experiences__description'>
                    Here are some of my experiences. You can click on the cards to see more details.
                </h4>
                {
                    experiences.map((experience) => {
                        return (
                            <details className='card' key={experience.id}>
                                <summary className='card__header'>
                                    <div className='card__header__title'>
                                        <h1 className='card__header__title__name'>
                                            {experience.name}
                                        </h1>
                                        <h2 className='card__header__title__type'>
                                            {experience.type}
                                        </h2>
                                        <div className='card__body__description'>
                                            <p className='card__body__description__text'>
                                                {experience.description}
                                            </p>
                                        </div>
                                    </div>
                                    <h2 className='card__header__year'>
                                        {experience.year}
                                    </h2>
                                </summary>
                                <div className='card__body'>
                                    <details className='card__body__technologies'>
                                        <summary className='card__body__technologies__title'>
                                            Technologies
                                        </summary>
                                        <ul className='card__body__technologies__list'>
                                            {
                                                experience.technologies.map((technology) => {
                                                    return (
                                                        <li className='card__body__technologies__list__item' key={technology + experience.id}>
                                                            {technology}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </details>
                                    <details className='card__body__missions'>
                                        <summary className='card__body__missions__title'>
                                            Missions
                                        </summary>
                                        <ul className='card__body__missions__list'>
                                            {
                                                experience.missions.map((mission) => {
                                                    return (
                                                        <li className='card__body__missions__list__item' key={mission + experience.id}>                                                          {mission}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </details>
                                </div>
                            </details>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Experiences;