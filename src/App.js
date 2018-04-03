import React, { Component } from 'react';

import LinkedinIcon from 'mdi-react/LinkedinIcon';
import GithubCircleIcon from 'mdi-react/GithubCircleIcon';
import EmailIcon from 'mdi-react/EmailIcon';

import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

import Styles from './styles/App';

const About = () => (
    <div style={Styles.aboutContainer}>
        <h1 style={Styles.hero}>Hello,</h1>
        <div style={Styles.sectionContent}>
            {`
                My name is Jared Griffin. I'm a junior in Computer Engineering at
                Iowa State University. Through side projects that I've worked on
                with my friends and my apprenticeships, I've became a fluent web
                developer with experience working on the entire stack. I have also
                invested a lot of time in becoming a great leader, serving as
                President of Iowa State's student branch of the Institute of
                Electrical and Electronics Engineers and as a member of the
                Electrical and Computer Engineering Department's Student Advisory
                Committee. When I'm not knee-deep in projects, I'm probably
                playing video games or disc golf with friends.
            `}
        </div>
    </div>
);

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
