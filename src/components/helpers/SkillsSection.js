import React from 'react';

import Skill from './Skill';

import Styles from '../../styles/Skills';

const SkillsSection = ({ sectionInfo, mobile }) => {
  const { header, skills } = sectionInfo;

  const skillEntries = [];
  let key = 0;

  skills.forEach((skillGroup, index) => {
    skillGroup.forEach((skill) => {
      skillEntries.push(
        <Skill skill={skill} strength={5 - index} key={key} index={key} mobile={mobile} />,
      );

      key += 1;
    });
  });

  if (mobile) {
    return (
      <div>
        <h3 style={Styles.mobileSubheader}>{header}</h3>
        {skillEntries}
      </div>
    );
  }

  return (
    <div>
      <h3 style={Styles.subheader}>{header}</h3>
      <div style={Styles.skillEntries}>
        {skillEntries}
      </div>
    </div>
  );
};

export default SkillsSection;
