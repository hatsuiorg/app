// TODO: Add more tests.

import React from 'react';
import renderer from 'react-test-renderer';

import App from '../source/App';

describe('<App />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
