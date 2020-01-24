import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { ProjectContainer, ProjectName, ProjectDescription } from './styles';

describe('Project Styles', () => {
    test('renders the ProjectContainer correctly', () => {
        const wrapper = shallow(<ProjectContainer />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('renders the ProjectName correctly', () => {
        const wrapper = shallow(<ProjectName />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('renders the ProjectDescription correctly', () => {
        const wrapper = shallow(<ProjectDescription />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
