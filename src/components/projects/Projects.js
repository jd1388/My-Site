import React from 'react';

import Project from './project';

import {
  terra,
  bubblePopper,
  giphySearch,
  codeCouch,
  walkMeHome,
} from './data';

import Styles from './styles';

const Projects = ({ mobile }) => (
  <div style={Styles.projectsContainer}>
    <div style={mobile ? Styles.mobileProjectContent : Styles.projectContent}>
      <h2 style={mobile ? Styles.mobileHeader : Styles.header}>Projects</h2>
      <Project projectInfo={terra} mobile={mobile} />
      <Project projectInfo={bubblePopper} mobile={mobile} />
      <Project projectInfo={giphySearch} mobile={mobile} />
      <Project projectInfo={codeCouch} mobile={mobile} />
      <Project projectInfo={walkMeHome} mobile={mobile} />
    </div>
  </div>
);

export default Projects;
