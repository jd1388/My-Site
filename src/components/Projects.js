import React from 'react';

import Styles from '../styles/Projects';

const terra = {
    name: 'Terra',
    description: `
        Terra is a platform for users to post services that they need done at their residences (lawncare, snow removal, etc.). 
        After a user makes a post, another user can complete the tasks in the post, then get paid through Terra. Currently I'm 
        working on this project with a group of friends. We are currently working on the first iteration of the project, which 
        consists of users being able to create postings that other users can complete. The only services that we will handle 
        initially is lawncare, but we will slowly add other services. I'm responsible for the frontend design. I've set up the 
        Terra frontend to use React, and we use Redux for handling client-side data.
    `
};

const giphySearch = {
    name: 'Giphy Search',
    description: `
        I created Giphy Search because I wanted to try some new React features, and I have wanted to try using a public API 
        extensively for some time. My friends like their memes, so I had a group of people who could ask for features. Thus 
        Giphy Search was born. Giphy Search wraps the Giphy API, specifically their search, trending, and random APIs.
    `
}

const Project = props => {
    const { name, description } = props.projectInfo;

    return (
        <div style={Styles.projectContainer}>
            <h3 style={Styles.projectName}>{name}</h3>
            <p style={Styles.projectDescription}>{description}</p>
        </div>
    );
}

const Projects = () => (
    <div style={Styles.projectsContainer}>
        <div style={Styles.projectContent}>
            <h2 style={Styles.header}>Projects</h2>
            <Project projectInfo={terra}/>
            <Project projectInfo={giphySearch}/>
        </div>
    </div>
);

export default Projects;
