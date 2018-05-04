import React from 'react';
import renderer from 'react-test-renderer';
import { Hello } from './';

test('should render', () => {
  const component = renderer.create((
    <Hello />
  ));
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
