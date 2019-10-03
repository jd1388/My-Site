import React from 'react';

import ExperienceSection from './experience-section';

import Styles from './styles';

import { workExperience, schoolExperience } from './data';

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
