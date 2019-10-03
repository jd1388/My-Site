import React from 'react';

import About from './components/about';
import Experience from './components/experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

import Styles from './styles/App';

const App = () => {
  const isMobile = window.innerWidth < 800;

  return (
    <div style={isMobile ? Styles.mobileContent : Styles.content}>
      <About mobile={isMobile} />
      <Experience mobile={isMobile} />
      <Projects mobile={isMobile} />
      <Skills mobile={isMobile} />
      <Footer mobile={isMobile} />
    </div>
  );
};

export default App;
