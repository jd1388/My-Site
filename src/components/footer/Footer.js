import React from 'react';

import FooterLink from './footer-link';
import { FooterContainer, StyledLinkedinIcon, StyledGithubIcon, StyledEmailIcon } from './styles';

const Footer = () => (
  <FooterContainer>
    <FooterLink
      url="https://www.linkedin.com/in/griffinjared/"
      link="LinkedIn"
      icon={<StyledLinkedinIcon />}
    />
    <FooterLink
      url="https://github.com/jd1388"
      link="GitHub"
      icon={<StyledGithubIcon />}
    />
    <FooterLink
      url="mailto:griffinjared1388@gmail.com"
      link="Email"
      icon={<StyledEmailIcon />}
    />
  </FooterContainer>
);

export default Footer;
