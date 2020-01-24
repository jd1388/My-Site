import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';

import App from './App';
import { AppContainer } from './styles/App';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Skills from './components/skills';
import Footer from './components/footer';

describe('App', () => {
  let appWrapper;
  let chance;

  const renderComponent = () => shallow(<App />);

  beforeEach(() => {
    chance = Chance();

    window.innerWidth = chance.natural();
    appWrapper = renderComponent();
  });

  it('is wrapped in an AppContainer', () => {
    expect(appWrapper.type()).toEqual(AppContainer);
  });

  describe('About Section', () => {
    let aboutSection;

    beforeEach(() => {
      aboutSection = appWrapper.childAt(0);
    });

    it('is an About component', () => {
      expect(aboutSection.type()).toEqual(About);
    });
  });

  describe('Experience Section', () => {
    let experienceSection;

    beforeEach(() => {
      experienceSection = appWrapper.childAt(1);
    });

    it('is an Experience component', () => {
      expect(experienceSection.type()).toEqual(Experience);
    });
  });

  describe('Projects Section', () => {
    let projectsSection;

    beforeEach(() => {
      projectsSection = appWrapper.childAt(2);
    });

    it('is a Projects component', () => {
      expect(projectsSection.type()).toEqual(Projects);
    });
  });

  describe('Skills Section', () => {
    let skillsSection;

    beforeEach(() => {
      skillsSection = appWrapper.childAt(3);
    });

    it('is a Skills component', () => {
      expect(skillsSection.type()).toEqual(Skills);
    });
  });

  describe('Footer', () => {
    let footer;

    beforeEach(() => {
      footer = appWrapper.childAt(4);
    });

    it('is a Footer component', () => {
      expect(footer.type()).toEqual(Footer);
    });
  });
});
