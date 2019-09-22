import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';
import FooterLink from '../../../components/helpers/FooterLink';

describe('Footer Link', () => {
  let footerLinkWrapper;
  let chance;

  const renderComponent = (props = {}) => {
    const { url, icon, link } = props;

    return shallow(
      <FooterLink
        url={url || chance.url()}
        icon={icon || chance.string()}
        link={link || chance.string()}
      />,
    );
  };

  beforeEach(() => {
    chance = Chance();

    footerLinkWrapper = renderComponent();
  });

  it('is wrapped in a div', () => {
    expect(footerLinkWrapper.type()).toEqual('div');
  });

  describe('Footer Link Anchor', () => {
    let footerLinkAnchor;

    beforeEach(() => {
      footerLinkAnchor = footerLinkWrapper.childAt(0);
    });

    it('is an a', () => {
      expect(footerLinkAnchor.type()).toEqual('a');
    });

    it('uses the url passed in props for the href', () => {
      const fakeUrl = chance.url();

      footerLinkWrapper = renderComponent({ url: fakeUrl });
      footerLinkAnchor = footerLinkWrapper.childAt(0);

      expect(footerLinkAnchor.props().href).toEqual(fakeUrl);
    });

    it('opens a new tab', () => {
      expect(footerLinkAnchor.props().target).toEqual('_blank');
    });

    it('sets the relation correctly', () => {
      expect(footerLinkAnchor.props().rel).toEqual('noreferrer noopener');
    });

    describe('Icon Container', () => {
      it('is a span', () => {
        const footerLinkIconContainer = footerLinkAnchor.childAt(0);

        expect(footerLinkIconContainer.type()).toEqual('span');
      });

      it('displays the icon passed in props', () => {
        const fakeIcon = chance.string();

        footerLinkWrapper = renderComponent({ icon: fakeIcon });
        footerLinkAnchor = footerLinkWrapper.childAt(0);

        const footerLinkIconContainer = footerLinkAnchor.childAt(0);
        const footerLinkIcon = footerLinkIconContainer.childAt(0).text();

        expect(footerLinkIcon).toEqual(fakeIcon);
      });
    });

    describe('Link Text', () => {
      it('is a span', () => {
        const footerLinkText = footerLinkAnchor.childAt(1);

        expect(footerLinkText.type()).toEqual('span');
      });

      it('displays the link passed in props', () => {
        const fakeLink = chance.string();

        footerLinkWrapper = renderComponent({ link: fakeLink });
        footerLinkAnchor = footerLinkWrapper.childAt(0);

        const footerLinkText = footerLinkAnchor.childAt(1);
        const linkText = footerLinkText.childAt(0).text();

        expect(linkText).toEqual(fakeLink);
      });
    });
  });
});
