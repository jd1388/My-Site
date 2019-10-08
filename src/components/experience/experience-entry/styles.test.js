import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import { ExperienceEntryContainer } from './styles';

describe('Experience Entry Styles', () => {
    test('renders the ExperienceEntryContainer correctly', () => {
        const wrapper = shallow(<ExperienceEntryContainer />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
