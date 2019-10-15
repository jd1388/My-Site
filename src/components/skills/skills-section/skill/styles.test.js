import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { SkillEntryContainer, SkillEntryHeader } from './styles';

describe('Skill Styles', () => {
    it('renders the SkillEntryContainer correctly', () => {
        const wrapper = shallow(<SkillEntryContainer />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders the SkillEntryHeader correctly', () => {
        const wrapper = shallow(<SkillEntryHeader />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
