import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Link, LinkText } from './styles';

describe('Experience Styles', () => {
    test('renders the Link correctly', () => {
        const wrapper = shallow(<Link />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('renders the LinkText correctly', () => {
        const wrapper = shallow(<LinkText />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
