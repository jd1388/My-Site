import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';

import About from './About';
import Styles from './styles';
import { Hero, AboutContainer } from './styles';

describe('About', () => {
  let aboutWrapper;
  let chance;

  const renderComponent = (props = {}) => {
    const { mobile } = props;

    return shallow(<About mobile={mobile !== undefined ? mobile : chance.bool()} />);
  };

  beforeEach(() => {
    chance = Chance();

    aboutWrapper = renderComponent();
  });

  it('is wrapped in an AboutContainer component', () => {
    expect(aboutWrapper.type()).toEqual(AboutContainer);
  });

  describe('Hero', () => {
    let aboutHero;

    beforeEach(() => {
      aboutHero = aboutWrapper.childAt(0);
    });

    it('is a Hero', () => {
      expect(aboutHero.type()).toEqual(Hero);
    });

    it('has the correct hero message', () => {
      const aboutHeroText = aboutHero.childAt(0).text();

      expect(aboutHeroText).toEqual('Hello!');
    });
  });
});
