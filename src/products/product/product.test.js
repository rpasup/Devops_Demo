import React from 'react';
import { shallow } from 'enzyme';
import Product from './product';
 
describe('<Product />', () => {
 
 let productWrapper;
 const props = {
 product: {
 id: 1,
 productName: 'Book',
 quantity: 5,
 price: 1000
 }
 }
 beforeEach(() => {
 productWrapper = shallow(<Product {...props} />);
 });
 
 test('Product Component should render single table row `<tr>`', () => {
 const tableRow = productWrapper.find('tr');
 expect(tableRow).toHaveLength(1);
 });
})