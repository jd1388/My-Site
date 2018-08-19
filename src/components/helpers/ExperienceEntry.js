import React from 'react';

import Styles from '../../styles/Experience';

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

export default ExperienceEntry;
