import React from 'react';

import LinkedinIcon from 'mdi-react/LinkedinIcon';
import GithubCircleIcon from 'mdi-react/GithubCircleIcon';
import EmailIcon from 'mdi-react/EmailIcon';

import Styles from '../styles/Footer';

const FooterLink = ({ url, icon, link }) => (
    <div>
        <a
            href={url}
            target="_blank"
            style={Styles.footerLink}
        >
            <span>{icon}</span>
            <span style={Styles.footerLinkText}>{link}</span>
        </a>
    </div>
)

const Footer = () => (
    <div style={Styles.footerContainer}>
        <FooterLink
            url='https://www.linkedin.com/in/griffinjared/'
            link='LinkedIn'
            icon={<LinkedinIcon style={Styles.footerIcon}/>}
        />
        <FooterLink
            url='https://github.com/jd1388'
            link='GitHub'
            icon={<GithubCircleIcon style={Styles.footerIcon}/>}
        />
        <FooterLink
            url='mailto:griffinjared1388@gmail.com'
            link='Email'
            icon={<EmailIcon style={Styles.footerIcon}/>}
        />
    </div>
);

export default Footer;
