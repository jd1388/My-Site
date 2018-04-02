import React, { Component } from 'react';

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
                Committee. When I'm not knee-deep in side projects, I'm probably
                playing video games or disc golf with friends.
            `}
        </div>
    </div>
);

class App extends Component {
    render() {
        return (
            <div style={Styles.content}>
                <About/>
            </div>
        );
    }
}

export default App;
