import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { ExperienceContainer, ExperienceContent, ExperienceHeader } from './styles';

describe('Experience Styles', () => {
    test('renders the ExperienceContainer correctly', () => {
        const wrapper = shallow(<ExperienceContainer />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('renders the ExperienceContent correctly', () => {
        const wrapper = shallow(<ExperienceContent />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('renders the ExperienceHeader correctly', () => {
        const wrapper = shallow(<ExperienceHeader />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
