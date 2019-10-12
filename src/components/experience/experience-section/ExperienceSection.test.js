import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';

import ExperienceSection from './ExperienceSection';

import Styles from '../styles';
import ExperienceEntry from '../experience-entry';

describe('Experience Section', () => {
  let experienceSectionWrapper;
  let chance;

  const generateSectionInfo = sectionInfo => ({
    header: chance.string(),
    experiences: chance.n(chance.string, chance.natural({ min: 1, max: 5 })),
    ...sectionInfo,
  });

  const renderComponent = (props = {}) => {
    const { sectionInfo } = props;

    return shallow(
      <ExperienceSection
        sectionInfo={generateSectionInfo(sectionInfo)}
      />,
    );
  };

  beforeEach(() => {
    chance = Chance();

    experienceSectionWrapper = renderComponent();
  });

  it('is wrapped in a div', () => {
    expect(experienceSectionWrapper.type()).toEqual('div');
  });

  describe('Experience Section Header', () => {
    let experienceSectionHeader;

    beforeEach(() => {
      experienceSectionHeader = experienceSectionWrapper.childAt(0);
    });

    it('is an h3', () => {
      expect(experienceSectionHeader.type()).toEqual('h3');
    });

    it('displays the header passed in the sectionInfo prop', () => {
      const fakeHeader = chance.string();

      experienceSectionWrapper = renderComponent({ sectionInfo: { header: fakeHeader } });
      experienceSectionHeader = experienceSectionWrapper.childAt(0);

      const experienceSectionHeaderText = experienceSectionHeader.childAt(0).text();

      expect(experienceSectionHeaderText).toEqual(fakeHeader);
    });
  });

  describe('Experience Entries', () => {
    let experienceEntries;
    let experiences;

    beforeEach(() => {
      experiences = chance.n(chance.string, chance.natural({ min: 1, max: 5 }));

      experienceSectionWrapper = renderComponent({
        sectionInfo: { experiences },
      });

      experienceEntries = [];

      for (let i = 1; i <= experiences.length; i += 1) {
        experienceEntries.push(experienceSectionWrapper.childAt(i));
      }
    });

    it('has one for each experience inside of sectionInfo', () => {
      expect.assertions(experienceEntries.length);

      experienceEntries.forEach((experienceEntry) => {
        expect(experienceEntry.type()).toEqual(ExperienceEntry);
      });
    });

    it('provides the correct experience data to each', () => {
      expect.assertions(experienceEntries.length);

      experienceEntries.forEach((experienceEntry, key) => {
        expect(experienceEntry.props().experience).toEqual(experiences[key]);
      });
    });

    it('provides the correct key to each', () => {
      expect.assertions(experienceEntries.length);

      experienceEntries.forEach((experienceEntry, key) => {
        expect(experienceEntry.key()).toEqual(`experience-entry-${key}`);
      });
    });
  });
});
