import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { SkillsContainer, SkillsContent, SkillsHeader } from './styles';

describe('Skills Styles', () => {
    test('renders the SkillsContainer correctly', () => {
        const wrapper = shallow(<SkillsContainer />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('renders the SkillsContent correctly', () => {
        const wrapper = shallow(<SkillsContent />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('renders the SkillsHeader correctly', () => {
        const wrapper = shallow(<SkillsHeader />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
