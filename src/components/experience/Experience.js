import React from 'react';

import { ExperienceContainer, ExperienceContent, ExperienceHeader } from './styles';
import ExperienceSection from './experience-section';
import { workExperience, schoolExperience } from './data';

const Experience = () => (
  <ExperienceContainer>
    <ExperienceContent>
      <ExperienceHeader>Experience</ExperienceHeader>
      <ExperienceSection sectionInfo={workExperience} />
      <ExperienceSection sectionInfo={schoolExperience} />
    </ExperienceContent>
  </ExperienceContainer>
);

export default Experience;
