import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';

import Experience from './Experience';
import ExperienceSection from './experience-section';

import * as ExperienceData from './data';
import { ExperienceHeader, ExperienceContainer, ExperienceContent } from './styles';

describe('Experience', () => {
  let experienceWrapper;
  let chance;

  const renderComponent = (props = {}) => {
    const { mobile } = props;

    return shallow(<Experience mobile={mobile !== undefined ? mobile : chance.bool()} />);
  };

  beforeEach(() => {
    chance = Chance();

    experienceWrapper = renderComponent();
  });

  it('is wrapped in an ExperienceContainer', () => {
    expect(experienceWrapper.type()).toEqual(ExperienceContainer);
  });

  describe('Experience Content', () => {
    let experienceContent;

    beforeEach(() => {
      experienceContent = experienceWrapper.childAt(0);
    });

    it('is an ExperienceContent', () => {
      expect(experienceContent.type()).toEqual(ExperienceContent);
    });

    describe('Experience Header', () => {
      let experienceHeader;

      beforeEach(() => {
        experienceHeader = experienceContent.childAt(0);
      });

      it('is an ExperienceHeader', () => {
        expect(experienceHeader.type()).toEqual(ExperienceHeader);
      });

      it('contains the correct header text', () => {
        const experienceHeaderText = experienceHeader.childAt(0).text();

        expect(experienceHeaderText).toEqual('Experience');
      });
    });

    describe('Work Experience Section', () => {
      let workExperienceSection;

      beforeEach(() => {
        workExperienceSection = experienceContent.childAt(1);
      });

      it('is an experience section', () => {
        expect(workExperienceSection.type()).toEqual(ExperienceSection);
      });

      it('passes the work experience data as the sectionInfo prop', () => {
        const { sectionInfo } = workExperienceSection.props();

        expect(sectionInfo).toEqual(ExperienceData.workExperience);
      });
    });

    describe('School Experience Section', () => {
      let schoolExperienceSection;

      beforeEach(() => {
        schoolExperienceSection = experienceContent.childAt(2);
      });

      it('is an experience section', () => {
        expect(schoolExperienceSection.type()).toEqual(ExperienceSection);
      });

      it('passes the school experience data as the sectionInfo prop', () => {
        const { sectionInfo } = schoolExperienceSection.props();

        expect(sectionInfo).toEqual(ExperienceData.schoolExperience);
      });
    });
  });
});
