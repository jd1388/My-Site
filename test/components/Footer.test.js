import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';

import LinkedinIcon from 'mdi-react/LinkedinIcon';
import GithubCircleIcon from 'mdi-react/GithubCircleIcon';
import EmailIcon from 'mdi-react/EmailIcon';

import Footer from '../../src/components/Footer';

import FooterLink from '../../src/components/helpers/FooterLink';
import Styles from '../../src/styles/Footer';

describe('Footer', () => {
  let footerWrapper;
  let chance;

  const renderComponent = (props = {}) => {
    const { mobile } = props;

    return shallow(<Footer mobile={mobile !== undefined ? mobile : chance.bool()} />);
  };

  beforeEach(() => {
    chance = Chance();

    footerWrapper = renderComponent();
  });

  it('is wrapped in a div', () => {
    expect(footerWrapper.type()).toEqual('div');
  });

  it('displays correctly on a mobile device', () => {
    footerWrapper = renderComponent({ mobile: true });

    expect(footerWrapper.props().style).toEqual(Styles.mobileFooterContainer);
  });

  it('displays correctly on a desktop device', () => {
    footerWrapper = renderComponent({ mobile: false });

    expect(footerWrapper.props().style).toEqual(Styles.footerContainer);
  });

  describe('LinkedIn Link', () => {
    let linkedinLink;

    beforeEach(() => {
      linkedinLink = footerWrapper.childAt(0);
    });

    it('is a footer link', () => {
      expect(linkedinLink.type()).toEqual(FooterLink);
    });

    it('uses the correct url', () => {
      expect(linkedinLink.props().url).toEqual('https://www.linkedin.com/in/griffinjared/');
    });

    it('uses the correct link text', () => {
      expect(linkedinLink.props().link).toEqual('LinkedIn');
    });

    it('uses the correct icon', () => {
      const { icon } = linkedinLink.props();

      expect(icon.type).toEqual(LinkedinIcon);
    });
  });

  describe('Github Link', () => {
    let githubLink;

    beforeEach(() => {
      githubLink = footerWrapper.childAt(1);
    });

    it('is a footer link', () => {
      expect(githubLink.type()).toEqual(FooterLink);
    });

    it('uses the correct url', () => {
      expect(githubLink.props().url).toEqual('https://github.com/jd1388');
    });

    it('uses the correct link text', () => {
      expect(githubLink.props().link).toEqual('GitHub');
    });

    it('uses the correct icon', () => {
      const { icon } = githubLink.props();

      expect(icon.type).toEqual(GithubCircleIcon);
    });
  });

  describe('Email Link', () => {
    let emailLink;

    beforeEach(() => {
      emailLink = footerWrapper.childAt(2);
    });

    it('is a footer link', () => {
      expect(emailLink.type()).toEqual(FooterLink);
    });

    it('uses the correct url', () => {
      expect(emailLink.props().url).toEqual('mailto:griffinjared1388@gmail.com');
    });

    it('uses the correct link text', () => {
      expect(emailLink.props().link).toEqual('Email');
    });

    it('uses the correct icon', () => {
      const { icon } = emailLink.props();

      expect(icon.type).toEqual(EmailIcon);
    });
  });
});
