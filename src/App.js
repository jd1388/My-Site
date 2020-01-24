import React from 'react';

import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Skills from './components/skills';
import Footer from './components/footer';

import { AppContainer } from './styles/App';

const App = () => (
  <AppContainer>
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Footer />
  </AppContainer>
);

export default App;
