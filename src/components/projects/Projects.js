import React from 'react';

import Project from './project';

import {
  terra,
  bubblePopper,
  giphySearch,
  codeCouch,
  walkMeHome,
} from './data';
import { ProjectsContainer, ProjectsContent, ProjectsHeader } from './styles';

const Projects = ({ mobile }) => (
  <ProjectsContainer>
    <ProjectsContent>
      <ProjectsHeader>Projects</ProjectsHeader>
      <Project projectInfo={terra} mobile={mobile} />
      <Project projectInfo={bubblePopper} mobile={mobile} />
      <Project projectInfo={giphySearch} mobile={mobile} />
      <Project projectInfo={codeCouch} mobile={mobile} />
      <Project projectInfo={walkMeHome} mobile={mobile} />
    </ProjectsContent>
  </ProjectsContainer>
);

export default Projects;
