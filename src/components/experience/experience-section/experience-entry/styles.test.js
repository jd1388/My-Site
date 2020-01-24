import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import { ExperienceEntryContainer, ExperienceEntryHeader, ExperienceEntryContent } from './styles';

describe('Experience Entry Styles', () => {
    test('renders the ExperienceEntryContainer correctly', () => {
        const wrapper = shallow(<ExperienceEntryContainer />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('renders the ExperienceEntryContainer correctly', () => {
        const wrapper = shallow(<ExperienceEntryHeader />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('renders the ExperienceEntryContent correctly', () => {
        const wrapper = shallow(<ExperienceEntryContent />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
