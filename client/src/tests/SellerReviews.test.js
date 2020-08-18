import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SellerReviews from '../components/SellerReviews.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('SellerReviews', () => {
  it('should show text', () => {
    const wrapper = shallow(<SellerReviews />);
    const text = wrapper.find('div div h3');
    expect(text.text()).toBe('Seller Reviews <StarRatingComponent /> (0)');
  });

  it('should call the onClick function when dropdown is clicked', () => {
    const wrapper = shallow(<SellerReviews />);
    const mockedHandleClick = jest.fn();
    wrapper.instance().handleClick = mockedHandleClick;
    const dropdown = wrapper.find('div div');
    console.log('dropdown: ', dropdown);
    dropdown.onClick();
    expect(mockedHandleClick).toHaveBeenCalledTimes(1);
  });






})