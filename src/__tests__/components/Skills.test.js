import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';

import Skills from '../../components/Skills';

import SkillsSection from '../../components/helpers/SkillsSection';
import * as SkillsData from '../../data/Skills';
import Styles from '../../styles/Skills';

describe('Skills', () => {
  let skillsWrapper;
  let chance;

  const renderComponent = (props = {}) => {
    const { mobile } = props;

    return shallow(<Skills mobile={mobile !== undefined ? mobile : chance.bool()} />);
  };

  beforeEach(() => {
    chance = Chance();

    skillsWrapper = renderComponent();
  });

  it('is wrapped in a div', () => {
    expect(skillsWrapper.type()).toEqual('div');
  });

  describe('Skills Content', () => {
    let skillsContent;

    beforeEach(() => {
      skillsContent = skillsWrapper.childAt(0);
    });

    it('is a div', () => {
      expect(skillsContent.type()).toEqual('div');
    });

    it('displays correctly on a mobile device', () => {
      skillsWrapper = renderComponent({ mobile: true });
      skillsContent = skillsWrapper.childAt(0);

      expect(skillsContent.props().style).toEqual(Styles.mobileSkillsContent);
    });

    it('displays correctly on a desktop device', () => {
      skillsWrapper = renderComponent({ mobile: false });
      skillsContent = skillsWrapper.childAt(0);

      expect(skillsContent.props().style).toEqual(Styles.skillsContent);
    });

    describe('Skills Header', () => {
      let skillsHeader;

      beforeEach(() => {
        skillsHeader = skillsContent.childAt(0);
      });

      it('is an h2', () => {
        expect(skillsHeader.type()).toEqual('h2');
      });

      it('displays correctly on a mobile device', () => {
        skillsWrapper = renderComponent({ mobile: true });
        skillsContent = skillsWrapper.childAt(0);
        skillsHeader = skillsContent.childAt(0);

        expect(skillsHeader.props().style).toEqual(Styles.mobileHeader);
      });

      it('displays correctly on a desktop device', () => {
        skillsWrapper = renderComponent({ mobile: false });
        skillsContent = skillsWrapper.childAt(0);
        skillsHeader = skillsContent.childAt(0);

        expect(skillsHeader.props().style).toEqual(Styles.header);
      });

      it('displays the correct header text', () => {
        const skillsHeaderText = skillsHeader.childAt(0).text();

        expect(skillsHeaderText).toEqual('Skills');
      });
    });

    describe('Languages and Frameworks Section', () => {
      let languagesAndFrameworksSection;

      beforeEach(() => {
        languagesAndFrameworksSection = skillsContent.childAt(1);
      });

      it('is a skills section', () => {
        expect(languagesAndFrameworksSection.type()).toEqual(SkillsSection);
      });

      it('passes the data for languages and frameworks to the sectionInfo prop', () => {
        const { sectionInfo } = languagesAndFrameworksSection.props();

        expect(sectionInfo).toEqual(SkillsData.languageAndFrameworks);
      });

      it('passes the device context to the mobile prop', () => {
        const passedMobile = chance.bool();

        skillsWrapper = renderComponent({ mobile: passedMobile });
        skillsContent = skillsWrapper.childAt(0);
        languagesAndFrameworksSection = skillsContent.childAt(1);

        expect(languagesAndFrameworksSection.props().mobile).toEqual(passedMobile);
      });
    });

    describe('Infrastructure Section', () => {
      let infrastructureSection;

      beforeEach(() => {
        infrastructureSection = skillsContent.childAt(2);
      });

      it('is a skills section', () => {
        expect(infrastructureSection.type()).toEqual(SkillsSection);
      });

      it('passes the data for infrastructure to the sectionInfo prop', () => {
        const { sectionInfo } = infrastructureSection.props();

        expect(sectionInfo).toEqual(SkillsData.infrastructure);
      });

      it('passes the device context to the mobile prop', () => {
        const passedMobile = chance.bool();

        skillsWrapper = renderComponent({ mobile: passedMobile });
        skillsContent = skillsWrapper.childAt(0);
        infrastructureSection = skillsContent.childAt(2);

        expect(infrastructureSection.props().mobile).toEqual(passedMobile);
      });
    });

    describe('Methodologies Section', () => {
      let methodologiesSection;

      beforeEach(() => {
        methodologiesSection = skillsContent.childAt(3);
      });

      it('is a skills section', () => {
        expect(methodologiesSection.type()).toEqual(SkillsSection);
      });

      it('passes the data for methodologies to the sectionInfo prop', () => {
        const { sectionInfo } = methodologiesSection.props();

        expect(sectionInfo).toEqual(SkillsData.methodologies);
      });

      it('passes the device context to the mobile prop', () => {
        const passedMobile = chance.bool();

        skillsWrapper = renderComponent({ mobile: passedMobile });
        skillsContent = skillsWrapper.childAt(0);
        methodologiesSection = skillsContent.childAt(3);

        expect(methodologiesSection.props().mobile).toEqual(passedMobile);
      });
    });
  });
});
