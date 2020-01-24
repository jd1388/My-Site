import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { FooterContainer, StyledLinkedinIcon, StyledGithubIcon, StyledEmailIcon } from './styles';

describe('Experience Section Styles', () => {
    test('renders the FooterContainer correctly', () => {
        const wrapper = shallow(<FooterContainer />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('renders the StyledLinkedinIcon correctly', () => {
        const wrapper = shallow(<StyledLinkedinIcon />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('renders the StyledGithubIcon correctly', () => {
        const wrapper = shallow(<StyledGithubIcon />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test('renders the StyledEmailIcon correctly', () => {
        const wrapper = shallow(<StyledEmailIcon />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
