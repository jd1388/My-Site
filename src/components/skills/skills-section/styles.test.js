import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { SkillSectionHeader, SkillSectionEntries } from './styles';

describe('Skill Section Styles', () => {
    it('renders the SkillSectionHeader correctly', () => {
        const wrapper = shallow(<SkillSectionHeader />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders the SkillSectionEntries correctly', () => {
        const wrapper = shallow(<SkillSectionEntries />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
