import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';

import Skill from './Skill';
import Star from './star';
import { SkillEntryContainer, SkillEntryHeader } from './styles';

describe('Skill', () => {
  let skillWrapper;
  let chance;

  const renderComponent = (props = {}) => {
    const {
      skill,
      strength
    } = props;

    return shallow(
      <Skill
        skill={skill || chance.string()}
        strength={strength !== undefined ? strength : chance.natural({ min: 0, max: 5 })}
      />,
    );
  };

  beforeEach(() => {
    chance = Chance();

    skillWrapper = renderComponent();
  });

  it('is wrapped in a SkillEntryContainer', () => {
    expect(skillWrapper.type()).toEqual(SkillEntryContainer);
  });

  describe('Skill Name', () => {
    let skillName;

    beforeEach(() => {
      skillName = skillWrapper.childAt(0);
    });

    it('is a SkillEntryHeader', () => {
      expect(skillName.type()).toEqual(SkillEntryHeader);
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
