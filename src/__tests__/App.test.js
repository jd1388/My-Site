import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';

import App from '../App';
import Styles from '../styles/App';

import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

describe('App', () => {
  let appWrapper;
  let chance;

  const renderComponent = () => shallow(<App />);

  beforeEach(() => {
    chance = Chance();

    window.innerWidth = chance.natural();
    appWrapper = renderComponent();
  });

  it('is wrapped in a div', () => {
    expect(appWrapper.type()).toEqual('div');
  });

  it('is applying the correct style when on a mobile device', () => {
    window.innerWidth = chance.natural({ max: 799 });

    appWrapper = renderComponent();

    expect(appWrapper.props().style).toEqual(Styles.mobileContent);
  });

  it('is applying the correct style when on a desktop device', () => {
    window.innerWidth = chance.natural({ min: 800 });

    appWrapper = renderComponent();

    expect(appWrapper.props().style).toEqual(Styles.content);
  });

  describe('About Section', () => {
    let aboutSection;

    beforeEach(() => {
      aboutSection = appWrapper.childAt(0);
    });

    it('is an About component', () => {
      expect(aboutSection.type()).toEqual(About);
    });

    it('is passed the correct mobile prop', () => {
      const expectedMobileProp = window.innerWidth < 800;
      const actualMobileProp = aboutSection.props().mobile;

      expect(actualMobileProp).toEqual(expectedMobileProp);
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

    it('is passed the correct mobile prop', () => {
      const expectedMobileProp = window.innerWidth < 800;
      const actualMobileProp = experienceSection.props().mobile;

      expect(actualMobileProp).toEqual(expectedMobileProp);
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

    it('is passed the correct mobile prop', () => {
      const expectedMobileProp = window.innerWidth < 800;
      const actualMobileProp = projectsSection.props().mobile;

      expect(actualMobileProp).toEqual(expectedMobileProp);
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

    it('is passed the correct mobile prop', () => {
      const expectedMobileProp = window.innerWidth < 800;
      const actualMobileProp = skillsSection.props().mobile;

      expect(actualMobileProp).toEqual(expectedMobileProp);
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

    it('is passed the correct mobile prop', () => {
      const expectedMobileProp = window.innerWidth < 800;
      const actualMobileProp = footer.props().mobile;

      expect(actualMobileProp).toEqual(expectedMobileProp);
    });
  });
});
