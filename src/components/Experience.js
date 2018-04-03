import React from 'react';

import { workExperience, schoolExperience } from '../data/Experience';

import Styles from '../styles/Experience';

const ExperienceEntry = props => {
    const { location, dates, position, description } = props.experience;

    return (
        <div style={Styles.experienceEntryContainer}>
            <div style={Styles.experienceEntryLeftColumn}>
                <h4 style={Styles.experienceEntryHeader}>{location}</h4>
                <p style={Styles.experienceEntryDates}>{dates}</p>
            </div>
            <div style={Styles.experienceEntryRightColumn}>
                <h4 style={Styles.experienceEntryHeader}>{position}</h4>
                <p style={Styles.experienceEntryDescription}>{description}</p>
            </div>
        </div>
    )
}

const ExperienceSection = props => {
    const { header, experiences } = props.sectionInfo;

    let experienceEntries = [];

    experiences.forEach((experience, key) => {
        experienceEntries.push(<ExperienceEntry experience={experience} key={key}/>);
    });

    return (
        <div>
            <h3 style={Styles.subheader}>{header}</h3>
            {experienceEntries}
        </div>
    );
}

const Experience = () => (
    <div style={Styles.experienceContainer}>
        <div style={Styles.experienceContent}>
            <h2 style={Styles.header}>Experience</h2>
            <ExperienceSection sectionInfo={workExperience}/>
            <ExperienceSection sectionInfo={schoolExperience}/>
        </div>
    </div>
);

export default Experience;
