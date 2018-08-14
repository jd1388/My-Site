import React from 'react';

import { workExperience, schoolExperience } from '../data/Experience';

import Styles from '../styles/Experience';

const ExperienceEntry = ({ experience, mobile }) => {
  const {
    location,
    dates,
    position,
    description,
  } = experience;

  if (mobile) {
    return (
      <div style={Styles.mobileExperienceEntryContainer}>
        <h4 style={Styles.experienceEntryHeader}>{location}</h4>
        <p style={Styles.experienceEntryHeader}>{position}</p>
        <h4 style={Styles.experienceEntryDates}>{dates}</h4>
        <p style={Styles.experienceEntryDescription}>{description}</p>
      </div>
    );
  }

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
  );
};

const ExperienceSection = ({ sectionInfo, mobile }) => {
  const { header, experiences } = sectionInfo;

  const experienceEntries = [];

  experiences.forEach((experience, key) => {
    experienceEntries.push(<ExperienceEntry experience={experience} key={`experience-entry-${key}`} mobile={mobile} />);
  });

  return (
    <div>
      <h3 style={mobile ? Styles.mobileSubheader : Styles.subheader}>{header}</h3>
      {experienceEntries}
    </div>
  );
};

const Experience = ({ mobile }) => {
  if (mobile) {
    return (
      <div style={Styles.experienceContainer}>
        <div style={Styles.mobileExperienceContent}>
          <h2 style={Styles.mobileHeader}>Experience</h2>
          <ExperienceSection sectionInfo={workExperience} mobile />
          <ExperienceSection sectionInfo={schoolExperience} mobile />
        </div>
      </div>
    );
  }

  return (
    <div style={Styles.experienceContainer}>
      <div style={Styles.experienceContent}>
        <h2 style={Styles.header}>Experience</h2>
        <ExperienceSection sectionInfo={workExperience} />
        <ExperienceSection sectionInfo={schoolExperience} />
      </div>
    </div>
  );
};

export default Experience;
