import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';

import Skill from '../../../components/helpers/Skill';

import Styles from '../../../styles/Skills';
import Star from '../../../components/helpers/Star';

describe('Skill', () => {
  let skillWrapper;
  let chance;

  const renderComponent = (props = {}) => {
    const {
      skill,
      strength,
      index,
      mobile,
    } = props;

    return shallow(
      <Skill
        skill={skill || chance.string()}
        strength={strength !== undefined ? strength : chance.natural({ min: 0, max: 5 })}
        index={index !== undefined ? index : chance.natural()}
        mobile={mobile !== undefined ? mobile : chance.bool()}
      />,
    );
  };

  beforeEach(() => {
    chance = Chance();

    skillWrapper = renderComponent();
  });

  it('is wrapped in a div', () => {
    expect(skillWrapper.type()).toEqual('div');
  });

  it('applies the correct styling on mobile devices', () => {
    skillWrapper = renderComponent({ mobile: true });

    expect(skillWrapper.props().style).toEqual(Styles.mobileSkillEntryContainer);
  });

  it('applies the correct styling on desktop devices', () => {
    skillWrapper = renderComponent({ mobile: false });

    expect(skillWrapper.props().style).toEqual(Styles.skillEntryContainer);
  });

  describe('Skill Name', () => {
    let skillName;

    beforeEach(() => {
      skillName = skillWrapper.childAt(0);
    });

    it('is a span', () => {
      expect(skillName.type()).toEqual('span');
    });

    it('applies the correct styling when it is the first or second element in a row on a desktop device', () => {
      const fakeIndex = chance.natural({ min: 0, max: 1 });

      skillWrapper = renderComponent({ index: fakeIndex, mobile: false });
      skillName = skillWrapper.childAt(0);

      expect(skillName.props().style).toEqual(Styles.skillEntryHeader);
    });

    it('applies the correct styling on mobile devices', () => {
      skillWrapper = renderComponent({ mobile: true });
      skillName = skillWrapper.childAt(0);

      expect(skillName.props().style).toEqual(Styles.skillEntryHeader);
    });

    it('applies the correct styling for the third element in a row on a desktop device', () => {
      skillWrapper = renderComponent({ index: 2, mobile: false });
      skillName = skillWrapper.childAt(0);

      expect(skillName.props().style).toEqual({ ...Styles.skillEntryHeader, marginLeft: '7.5%' });
    });
  });

  describe('Star Container', () => {
    let skillStarContainer;

    beforeEach(() => {
      skillStarContainer = skillWrapper.childAt(1);
    });

    it('is a div', () => {
      expect(skillStarContainer.type()).toEqual('div');
    });

    it('applies the correct styling when it is the first or second element in a row on a desktop device', () => {
      const fakeIndex = chance.natural({ min: 0, max: 1 });

      skillWrapper = renderComponent({ index: fakeIndex, mobile: false });
      skillStarContainer = skillWrapper.childAt(1);

      expect(skillStarContainer.props().style).toEqual({ marginRight: '7.5%' });
    });

    it('applies the correct styling when it is the thrid element in a row on a desktop device', () => {
      skillWrapper = renderComponent({ index: 2, mobile: false });
      skillStarContainer = skillWrapper.childAt(1);

      expect(skillStarContainer.props().style).toEqual({});
    });

    it('applies the correct styling on a mobile device', () => {
      skillWrapper = renderComponent({ mobile: true });
      skillStarContainer = skillWrapper.childAt(1);

      expect(skillStarContainer.props().style).toEqual({});
    });

    describe('Stars', () => {
      let skillStars;

      const getSkillStars = () => {
        skillStars = [...Array(5)];

        return skillStars.map((star, index) => skillStarContainer.childAt(index));
      };

      beforeEach(() => {
        skillStars = getSkillStars();
      });

      it('is a star for each', () => {
        expect.assertions(skillStars.length);

        skillStars.forEach((star) => {
          expect(star.type()).toEqual(Star);
        });
      });

      it('passes the strength prop into the star strength prop', () => {
        expect.assertions(skillStars.length);

        const fakeStrength = chance.natural({ min: 0, max: 5 });

        skillWrapper = renderComponent({ strength: fakeStrength });
        skillStarContainer = skillWrapper.childAt(1);
        skillStars = getSkillStars();

        skillStars.forEach((star) => {
          expect(star.props().strength).toEqual(fakeStrength);
        });
      });

      it('sets the limit prop equal to the index', () => {
        expect.assertions(skillStars.length);

        skillStars.forEach((star, index) => {
          expect(star.props().limit).toEqual(index);
        });
      });
    });
  });
});
