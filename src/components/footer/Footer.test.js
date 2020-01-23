import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';

import Footer from './Footer';
import FooterLink from './footer-link';
import { FooterContainer, StyledLinkedinIcon, StyledGithubIcon, StyledEmailIcon } from './styles';

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

  it('is wrapped in a FooterContainer', () => {
    expect(footerWrapper.type()).toEqual(FooterContainer);
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

      expect(icon.type).toEqual(StyledLinkedinIcon);
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

      expect(icon.type).toEqual(StyledGithubIcon);
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

      expect(icon.type).toEqual(StyledEmailIcon);
    });
  });
});
