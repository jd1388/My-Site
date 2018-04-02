import React from 'react';

import Styles from '../styles/Experience';

const schoolExperience = {
    header: 'School'
};

const ExperienceSection = props => {
    const { header } = props.sectionInfo;

    return (
        <div>
            <h3 style={Styles.subheader}>{header}</h3>
        </div>
    );
}

const Experience = () => (
    <div style={Styles.experienceContainer}>
        <div style={Styles.experienceContent}>
            <h2 style={Styles.header}>Experience</h2>
            <ExperienceSection sectionInfo={schoolExperience}/>
        </div>
    </div>
);

export default Experience;
