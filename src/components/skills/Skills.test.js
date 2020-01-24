import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';

import Skills from './Skills';

import SkillsSection from './skills-section/SkillsSection';
import * as SkillsData from './data';
import { SkillsContainer, SkillsContent } from './styles';
import { SkillsHeader } from './styles';

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

  it('is wrapped in a SkillsContainer', () => {
    expect(skillsWrapper.type()).toEqual(SkillsContainer);
  });

  describe('Skills Content', () => {
    let skillsContent;

    beforeEach(() => {
      skillsContent = skillsWrapper.childAt(0);
    });

    it('is a SkillsContent', () => {
      expect(skillsContent.type()).toEqual(SkillsContent);
    });

    describe('Skills Header', () => {
      let skillsHeader;

      beforeEach(() => {
        skillsHeader = skillsContent.childAt(0);
      });

      it('is a SkillsHeader', () => {
        expect(skillsHeader.type()).toEqual(SkillsHeader);
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
    });
  });
});
