import React from 'react';

import SkillsSection from './skills-section';

import { languageAndFrameworks, infrastructure, methodologies } from './data';

import Styles from './styles';

const Skills = ({ mobile }) => (
  <div style={Styles.skillsContainer}>
    <div style={mobile ? Styles.mobileSkillsContent : Styles.skillsContent}>
      <h2 style={mobile ? Styles.mobileHeader : Styles.header}>Skills</h2>
      <SkillsSection sectionInfo={languageAndFrameworks} mobile={mobile} />
      <SkillsSection sectionInfo={infrastructure} mobile={mobile} />
      <SkillsSection sectionInfo={methodologies} mobile={mobile} />
    </div>
  </div>
);

export default Skills;
