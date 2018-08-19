import React from 'react';

import ExperienceEntry from './ExperienceEntry';
import Styles from '../../styles/Experience';

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