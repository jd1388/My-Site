import React from 'react';

import ExperienceEntry from '../experience-entry';

import { ExperienceSectionHeader } from './styles';

const ExperienceSection = ({ sectionInfo, mobile }) => {
  const { header, experiences } = sectionInfo;

  const experienceEntries = [];

  experiences.forEach((experience, key) => {
    experienceEntries.push(<ExperienceEntry experience={experience} key={`experience-entry-${key}`} />);
  });

  return (
    <>
      <ExperienceSectionHeader>{header}</ExperienceSectionHeader>
      {experienceEntries}
    </>
  );
};

export default ExperienceSection;
