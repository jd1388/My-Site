import React from 'react';

import { introduction } from '../data/About';

import Styles from '../styles/About';

const About = () => (
    <div style={Styles.aboutContainer}>
        <h1 style={Styles.hero}>Hello,</h1>
        <div style={Styles.sectionContent}>{introduction}</div>
    </div>
);

export default About;
