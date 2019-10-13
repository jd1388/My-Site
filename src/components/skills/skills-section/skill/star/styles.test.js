import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { StyledStarIcon, StyledStarOutlineIcon } from './styles';

describe('Star Styles', () => {
    test('renders the StyledStarIcon correctly', () => {
        const wrapper = shallow(<StyledStarIcon />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('renders the StyledStarOutlineIcon correctly', () => {
        const wrapper = shallow(<StyledStarOutlineIcon />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
