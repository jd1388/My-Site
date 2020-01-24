import React from 'react';

import SkillsSection from './skills-section';

import { languageAndFrameworks, infrastructure, methodologies } from './data';
import { SkillsContainer, SkillsContent, SkillsHeader } from './styles';

const Skills = ({ mobile }) => (
  <SkillsContainer>
    <SkillsContent>
      <SkillsHeader>Skills</SkillsHeader>
      <SkillsSection sectionInfo={languageAndFrameworks} />
      <SkillsSection sectionInfo={infrastructure} />
      <SkillsSection sectionInfo={methodologies} />
    </SkillsContent>
  </SkillsContainer>
);

export default Skills;
