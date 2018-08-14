import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/App';

describe('App', () => {
  let appWrapper;

  const renderComponent = () => shallow(<App />);

  beforeEach(() => {
    appWrapper = renderComponent();
  });

  it('is wrapped in a div', () => {
    expect(appWrapper.type()).toEqual('div');
  });
});
