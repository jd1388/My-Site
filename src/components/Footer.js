import React from 'react';

import LinkedinIcon from 'mdi-react/LinkedinIcon';
import GithubCircleIcon from 'mdi-react/GithubCircleIcon';
import EmailIcon from 'mdi-react/EmailIcon';

import FooterLink from './helpers/FooterLink';

import Styles from '../styles/Footer';

const Footer = ({ mobile }) => (
  <div style={mobile ? Styles.mobileFooterContainer : Styles.footerContainer}>
    <FooterLink
      url="https://www.linkedin.com/in/griffinjared/"
      link="LinkedIn"
      icon={<LinkedinIcon style={Styles.footerIcon} />}
    />
    <FooterLink
      url="https://github.com/jd1388"
      link="GitHub"
      icon={<GithubCircleIcon style={Styles.footerIcon} />}
    />
    <FooterLink
      url="mailto:griffinjared1388@gmail.com"
      link="Email"
      icon={<EmailIcon style={Styles.footerIcon} />}
    />
  </div>
);

export default Footer;
