import React from 'react';

import introduction from './data';
import { Hero, AboutContainer, SectionContent } from './styles';

const About = () => (
  <AboutContainer>
    <Hero>Hello!</Hero>
    <SectionContent>{introduction}</SectionContent>
  </AboutContainer>
);

export default About;
