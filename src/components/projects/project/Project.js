import React from 'react';

import Styles from '../styles';

const Project = ({ projectInfo, mobile }) => {
  const { name, description } = projectInfo;

  return (
    <div style={Styles.projectContainer}>
      <h3 style={mobile ? Styles.mobileProjectName : Styles.projectName}>{name}</h3>
      <p style={Styles.projectDescription}>{description}</p>
    </div>
  );
};

export default Project;
