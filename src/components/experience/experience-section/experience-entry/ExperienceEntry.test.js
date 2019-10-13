import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';

import ExperienceEntry from './ExperienceEntry';
import {
  ExperienceEntryContainer,
  ExperienceEntryHeader,
  ExperienceEntryContent,
  ExperienceEntryDates,
  ExperienceEntryPosition
} from './styles';

describe('Experience Entry', () => {
  let experienceEntryWrapper;
  let chance;

  const generateExperienceData = (experienceData = {}) => ({
    location: chance.string(),
    dates: chance.string(),
    position: chance.string(),
    description: chance.sentence(),
    ...experienceData,
  });

  const renderComponent = (props = {}) => {
    const { experience, mobile } = props;

    return shallow(
      <ExperienceEntry
        experience={generateExperienceData(experience)}
        mobile={mobile !== undefined ? mobile : chance.bool()}
      />,
    );
  };

  beforeEach(() => {
    chance = Chance();
  });

  it('is wrapped in a ExperenceEntryContainer component', () => {
    const experienceEntryWrapper = renderComponent();

    expect(experienceEntryWrapper.type()).toEqual(ExperienceEntryContainer);
  });

  describe('Experience Entry Location', () => {
    let experienceEntryLocation,
      randomLocation;

    beforeEach(() => {
      randomLocation = chance.city();

      const randomProps = {
        experience: {
          location: randomLocation,
          dates: chance.string(),
          position: chance.string(),
          description: chance.paragraph()
        }
      };
      const experienceEntryWrapper = renderComponent(randomProps);

      experienceEntryLocation = experienceEntryWrapper.childAt(0);
    });

    it('renders an ExperienceEntryHeader for the location', () => {
      expect(experienceEntryLocation.type()).toEqual(ExperienceEntryHeader);
    });

    it('displays the experience data\'s location', () => {
      const experienceEntryLocationText = experienceEntryLocation.text();

      expect(experienceEntryLocationText).toEqual(randomLocation);
    });
  });

  describe('Experience Entry Dates', () => {
    let experienceEntryDates,
      randomDates;

    beforeEach(() => {
      randomDates = chance.string();

      const randomProps = {
        experience: {
          location: chance.city(),
          dates: randomDates,
          position: chance.string(),
          description: chance.paragraph()
        }
      };
      const experienceEntryWrapper = renderComponent(randomProps);

      experienceEntryDates = experienceEntryWrapper.childAt(1);
    });

    it('renders an ExperienceEntryHeader for the location', () => {
      expect(experienceEntryDates.type()).toEqual(ExperienceEntryDates);
    });

    it('displays the experience data\'s location', () => {
      const experienceEntryDatesText = experienceEntryDates.text();

      expect(experienceEntryDatesText).toEqual(randomDates);
    });
  });

  describe('Experience Entry Position', () => {
    let experienceEntryPosition,
      randomPosition;

    beforeEach(() => {
      randomPosition = chance.string();

      const randomProps = {
        experience: {
          location: chance.city(),
          dates: chance.string(),
          position: randomPosition,
          description: chance.paragraph()
        }
      };
      const experienceEntryWrapper = renderComponent(randomProps);

      experienceEntryPosition = experienceEntryWrapper.childAt(2);
    });

    it('renders an ExperienceEntryHeader for the location', () => {
      expect(experienceEntryPosition.type()).toEqual(ExperienceEntryPosition);
    });

    it('displays the experience data\'s location', () => {
      const experienceEntryPositionText = experienceEntryPosition.text();

      expect(experienceEntryPositionText).toEqual(randomPosition);
    });
  });

  describe('Experience Entry Description', () => {
    let experienceEntryDescription,
      randomDescription;

    beforeEach(() => {
      randomDescription = chance.paragraph();

      const randomProps = {
        experience: {
          location: chance.city(),
          dates: chance.string(),
          position: chance.string(),
          description: randomDescription
        }
      };
      const experienceEntryWrapper = renderComponent(randomProps);

      experienceEntryDescription = experienceEntryWrapper.childAt(3);
    });

    it('renders an ExperienceEntryHeader for the location', () => {
      expect(experienceEntryDescription.type()).toEqual(ExperienceEntryContent);
    });

    it('displays the experience data\'s location', () => {
      const experienceEntryDescriptionText = experienceEntryDescription.text();

      expect(experienceEntryDescriptionText).toEqual(randomDescription);
    });
  });
});
