import React from 'react';

import introduction from './data';
import Styles from './styles';

const About = ({ mobile }) => {
  if (mobile) {
    return (
      <div style={Styles.mobileAboutContainer}>
        <h1 style={Styles.mobileHero}>Hello!</h1>
        <div style={Styles.sectionContent}>{introduction}</div>
      </div>
    );
  }

  return (
    <div style={Styles.aboutContainer}>
      <h1 style={Styles.hero}>Hello!</h1>
      <div style={Styles.sectionContent}>{introduction}</div>
    </div>
  );
};

export default About;
