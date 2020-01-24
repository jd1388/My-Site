import React from 'react';

import { ProjectContainer, ProjectName, ProjectDescription } from './styles';

const Project = ({ projectInfo }) => {
  const { name, description } = projectInfo;

  return (
    <ProjectContainer>
      <ProjectName>{name}</ProjectName>
      <ProjectDescription>{description}</ProjectDescription>
    </ProjectContainer>
  );
};

export default Project;
