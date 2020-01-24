import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { AppContainer } from './App';

describe('App Styles', () => {
    test('renders the AppContainer correctly', () => {
        const wrapper = shallow(<AppContainer />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
