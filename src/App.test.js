import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import { Link } from 'react-router-dom';

test('App component should have navigation', () => {
  const app = shallow(<App />);
  const nav = app.find('nav');
  expect(nav.exists()).toEqual(true);
});

test('Verify the link tags', () => {
  const app = shallow(<App />);
  const nav = app.find('nav');
  expect(nav.find('Link')).toHaveLength(3);
});