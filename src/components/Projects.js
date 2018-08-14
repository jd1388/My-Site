import React from 'react';

import {
  terra,
  bubblePopper,
  giphySearch,
  codeCouch,
  walkMeHome,
} from '../data/Projects';

import Styles from '../styles/Projects';

const Project = ({ projectInfo, mobile }) => {
  const { name, description } = projectInfo;

  return (
    <div style={Styles.projectContainer}>
      <h3 style={mobile ? Styles.mobileProjectName : Styles.projectName}>{name}</h3>
      <p style={Styles.projectDescription}>{description}</p>
    </div>
  );
};

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
