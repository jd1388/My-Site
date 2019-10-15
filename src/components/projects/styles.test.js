import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { ProjectsContainer, ProjectsContent, ProjectsHeader } from './styles';

describe('Projects Styles', () => {
    test('renders the ProjectsContainer correctly', () => {
        const wrapper = shallow(<ProjectsContainer />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('renders the ProjectsContent correctly', () => {
        const wrapper = shallow(<ProjectsContent />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('renders the ProjectsHeader correctly', () => {
        const wrapper = shallow(<ProjectsHeader />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
