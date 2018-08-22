import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';

import ExperienceEntry from '../../../src/components/helpers/ExperienceEntry';

import Styles from '../../../src/styles/Experience';

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

  describe('Given the user is on a mobile device', () => {
    beforeEach(() => {
      experienceEntryWrapper = renderComponent({ mobile: true });
    });

    it('is wrapped in a div', () => {
      expect(experienceEntryWrapper.type()).toEqual('div');
    });

    it('applies the correct styling', () => {
      expect(experienceEntryWrapper.props().style).toEqual(Styles.mobileExperienceEntryContainer);
    });

    describe('Experience Entry Location', () => {
      let experienceEntryLocation;

      beforeEach(() => {
        experienceEntryLocation = experienceEntryWrapper.childAt(0);
      });

      it('is an h4', () => {
        expect(experienceEntryLocation.type()).toEqual('h4');
      });

      it('displays the experience data\'s location', () => {
        const fakeLocation = chance.string();

        experienceEntryWrapper = renderComponent({
          mobile: true,
          experience: { location: fakeLocation },
        });
        experienceEntryLocation = experienceEntryWrapper.childAt(0);

        const experienceEntryLocationText = experienceEntryLocation.childAt(0).text();

        expect(experienceEntryLocationText).toEqual(fakeLocation);
      });
    });

    describe('Experience Entry Position', () => {
      let experienceEntryPosition;

      beforeEach(() => {
        experienceEntryPosition = experienceEntryWrapper.childAt(1);
      });

      it('is a p', () => {
        expect(experienceEntryPosition.type()).toEqual('p');
      });

      it('displays the experience data\'s position', () => {
        const fakePosition = chance.string();

        experienceEntryWrapper = renderComponent({
          mobile: true,
          experience: { position: fakePosition },
        });
        experienceEntryPosition = experienceEntryWrapper.childAt(1);

        const experienceEntryPositionText = experienceEntryPosition.childAt(0).text();

        expect(experienceEntryPositionText).toEqual(fakePosition);
      });
    });

    describe('Experience Entry Dates', () => {
      let experienceEntryDates;

      beforeEach(() => {
        experienceEntryDates = experienceEntryWrapper.childAt(2);
      });

      it('is an h4', () => {
        expect(experienceEntryDates.type()).toEqual('h4');
      });

      it('displays the experience data\'s dates', () => {
        const fakeDates = chance.string();

        experienceEntryWrapper = renderComponent({
          mobile: true,
          experience: { dates: fakeDates },
        });
        experienceEntryDates = experienceEntryWrapper.childAt(2);

        const experienceEntryDatesText = experienceEntryDates.childAt(0).text();

        expect(experienceEntryDatesText).toEqual(fakeDates);
      });
    });

    describe('Experience Entry Description', () => {
      let experienceEntryDescription;

      beforeEach(() => {
        experienceEntryDescription = experienceEntryWrapper.childAt(3);
      });

      it('is a p', () => {
        expect(experienceEntryDescription.type()).toEqual('p');
      });

      it('displays the experience data\'s description', () => {
        const fakeDescription = chance.sentence();

        experienceEntryWrapper = renderComponent({
          mobile: true,
          experience: { description: fakeDescription },
        });
        experienceEntryDescription = experienceEntryWrapper.childAt(3);

        const experienceEntryDescriptionText = experienceEntryDescription.childAt(0).text();

        expect(experienceEntryDescriptionText).toEqual(fakeDescription);
      });
    });
  });

  describe('Given the user is on a desktop device', () => {
    beforeEach(() => {
      experienceEntryWrapper = renderComponent({ mobile: false });
    });

    it('is wrapped in a div', () => {
      expect(experienceEntryWrapper.type()).toEqual('div');
    });

    it('applies the correct styling', () => {
      expect(experienceEntryWrapper.props().style).toEqual(Styles.experienceEntryContainer);
    });

    describe('Experience Entry Left Column', () => {
      let experienceEntryLeftColumn;

      beforeEach(() => {
        experienceEntryLeftColumn = experienceEntryWrapper.childAt(0);
      });

      it('is a div', () => {
        expect(experienceEntryLeftColumn.type()).toEqual('div');
      });

      describe('Experience Entry Location', () => {
        let experienceEntryLocation;

        beforeEach(() => {
          experienceEntryLocation = experienceEntryLeftColumn.childAt(0);
        });

        it('is an h4', () => {
          expect(experienceEntryLocation.type()).toEqual('h4');
        });

        it('displays the experience data\'s location', () => {
          const fakeLocation = chance.string();

          experienceEntryWrapper = renderComponent({
            mobile: false,
            experience: { location: fakeLocation },
          });
          experienceEntryLeftColumn = experienceEntryWrapper.childAt(0);
          experienceEntryLocation = experienceEntryLeftColumn.childAt(0);

          const experienceEntryLocationText = experienceEntryLocation.childAt(0).text();

          expect(experienceEntryLocationText).toEqual(fakeLocation);
        });
      });

      describe('Experience Entry Dates', () => {
        let experienceEntryDates;

        beforeEach(() => {
          experienceEntryDates = experienceEntryLeftColumn.childAt(1);
        });

        it('is an h4', () => {
          expect(experienceEntryDates.type()).toEqual('p');
        });

        it('displays the experience data\'s location', () => {
          const fakeDates = chance.string();

          experienceEntryWrapper = renderComponent({
            mobile: false,
            experience: { dates: fakeDates },
          });
          experienceEntryLeftColumn = experienceEntryWrapper.childAt(0);
          experienceEntryDates = experienceEntryLeftColumn.childAt(1);

          const experienceEntryDatesText = experienceEntryDates.childAt(0).text();

          expect(experienceEntryDatesText).toEqual(fakeDates);
        });
      });
    });

    describe('Experience Entry Right Column', () => {
      let experienceEntryRightColumn;

      beforeEach(() => {
        experienceEntryRightColumn = experienceEntryWrapper.childAt(1);
      });

      it('is a div', () => {
        expect(experienceEntryRightColumn.type()).toEqual('div');
      });

      describe('Experience Entry Position', () => {
        let experienceEntryPosition;

        beforeEach(() => {
          experienceEntryPosition = experienceEntryRightColumn.childAt(0);
        });

        it('is an h4', () => {
          expect(experienceEntryPosition.type()).toEqual('h4');
        });

        it('displays the experience data\'s location', () => {
          const fakePosition = chance.string();

          experienceEntryWrapper = renderComponent({
            mobile: false,
            experience: { position: fakePosition },
          });
          experienceEntryRightColumn = experienceEntryWrapper.childAt(1);
          experienceEntryPosition = experienceEntryRightColumn.childAt(0);

          const experienceEntryPositionText = experienceEntryPosition.childAt(0).text();

          expect(experienceEntryPositionText).toEqual(fakePosition);
        });
      });

      describe('Experience Entry Description', () => {
        let experienceEntryDescription;

        beforeEach(() => {
          experienceEntryDescription = experienceEntryRightColumn.childAt(1);
        });

        it('is an h4', () => {
          expect(experienceEntryDescription.type()).toEqual('p');
        });

        it('displays the experience data\'s location', () => {
          const fakeDescription = chance.string();

          experienceEntryWrapper = renderComponent({
            mobile: false,
            experience: { description: fakeDescription },
          });
          experienceEntryRightColumn = experienceEntryWrapper.childAt(1);
          experienceEntryDescription = experienceEntryRightColumn.childAt(1);

          const experienceEntryDescriptionText = experienceEntryDescription.childAt(0).text();

          expect(experienceEntryDescriptionText).toEqual(fakeDescription);
        });
      });
    });
  });
});
