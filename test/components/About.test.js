import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';

import About from '../../src/components/About';
import Styles from '../../src/styles/About';

describe('About', () => {
  let aboutWrapper;
  let chance;

  const renderComponent = (props = {}) => {
    const { mobile } = props;

    return shallow(<About mobile={mobile !== undefined ? mobile : chance.bool()} />);
  }

  beforeEach(() => {
    chance = Chance();

    aboutWrapper = renderComponent();
  });

  it('is wrapped in a div', () => {
    expect(aboutWrapper.type()).toEqual('div');
  });

  it('uses the correct styles for mobile', () => {
    aboutWrapper = renderComponent({ mobile: true });

    expect(aboutWrapper.props().style).toEqual(Styles.mobileAboutContainer);
  });

  it('uses the correct styles for desktop', () => {
    aboutWrapper = renderComponent({ mobile: false });

    expect(aboutWrapper.props().style).toEqual(Styles.aboutContainer);
  });

  describe('Hero', () => {
    let aboutHero;

    beforeEach(() => {
      aboutHero = aboutWrapper.childAt(0);
    });

    it('is an h1', () => {
      expect(aboutHero.type()).toEqual('h1');
    });

    it('has the correct hero message', () => {
      const aboutHeroText = aboutHero.childAt(0).text();

      expect(aboutHeroText).toEqual('Hello!');
    });

    it('uses the correct styles for mobile', () => {
      aboutWrapper = renderComponent({ mobile: true });
      aboutHero = aboutWrapper.childAt(0);

      expect(aboutHero.props().style).toEqual(Styles.mobileHero);
    });

    it('uses the correct styles for desktop', () => {
      aboutWrapper = renderComponent({ mobile: false });
      aboutHero = aboutWrapper.childAt(0);

      expect(aboutHero.props().style).toEqual(Styles.hero);
    });
  });
});
