import React from 'react';

import Skill from './skill';

import { SkillSectionHeader, SkillSectionEntries } from './styles';

const SkillsSection = ({ sectionInfo, mobile }) => {
  const { header, skills } = sectionInfo;

  const skillEntries = [];
  let key = 0;

  skills.forEach((skillGroup, index) => {
    skillGroup.forEach((skill) => {
      skillEntries.push(
        <Skill skill={skill} strength={5 - index} key={key} index={key} />,
      );

      key += 1;
    });
  });

  return (
    <>
      <SkillSectionHeader>{header}</SkillSectionHeader>
      <SkillSectionEntries>{skillEntries}</SkillSectionEntries>
    </>
  );
};

export default SkillsSection;
