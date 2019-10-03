import React from 'react';

import ExperienceEntry from '../experience-entry';
import Styles from '../styles';

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

export default ExperienceSection;
