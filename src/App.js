import React, { Component } from 'react';

import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

import Styles from './styles/App';

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
