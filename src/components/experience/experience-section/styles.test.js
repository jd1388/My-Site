import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { ExperienceSectionHeader } from './styles';

describe('Experience Section Styles', () => {
    test('renders the ExperienceSectionHeader correctly', () => {
        const wrapper = shallow(<ExperienceSectionHeader />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
