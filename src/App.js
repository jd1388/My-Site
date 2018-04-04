import React, { Component } from 'react';

import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

import Styles from './styles/App';

class App extends Component {
    render() {
        const isMobile = window.innerWidth < 800;

        return (
            <div style={isMobile ? Styles.mobileContent : Styles.content}>
                <About mobile={isMobile}/>
                <Experience mobile={isMobile}/>
                <Projects mobile={isMobile}/>
                <Skills/>
                <Footer/>
            </div>
        );
    }
}

export default App;
