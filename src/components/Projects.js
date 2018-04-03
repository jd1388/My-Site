import React from 'react';

import { terra, giphySearch } from '../data/Projects';

import Styles from '../styles/Projects';

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
