import React, { Component } from 'react';

import LinkedinIcon from 'mdi-react/LinkedinIcon';
import GithubCircleIcon from 'mdi-react/GithubCircleIcon';
import EmailIcon from 'mdi-react/EmailIcon';

import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

import Styles from './styles/App';

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

class App extends Component {
    render() {
        return (
            <div style={Styles.content}>
                <About/>
                <Experience/>
                <Projects/>
                <Skills/>
                <Footer/>
            </div>
        );
    }
}

export default App;
