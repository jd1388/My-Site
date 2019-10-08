import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import { Hero, AboutContainer, SectionContent } from './styles';

describe('About Styles', () => {
    it('renders the Hero correctly', () => {
        const wrapper = shallow(<Hero />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders the AboutContainer correctly', () => {
        const wrapper = shallow(<AboutContainer />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders the SectionContent correctly', () => {
        const wrapper = shallow(<SectionContent />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

