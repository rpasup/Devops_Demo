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

test('Verify the link tags', () => {
  const app = shallow(<App />);
  const nav = app.find('nav');
  const links = nav.find('Link');
  expect(links.at(0).text()).toEqual('About');
  expect(links.at(1).text()).toEqual('Products');
  expect(links.at(2).text()).toEqual('Extra');
});