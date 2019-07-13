import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from './Button';

describe('<Button />', () => {
  const props = {
    btnType: 'btn'
  };

  let wrapper = mount(<Button {...props} />);

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('button contains `btn` class', () => {
    expect(wrapper.find('button').hasClass('btn')).toEqual(true);
  });

  it('has `submit` type', () => {
    expect(wrapper.find('button').type()).toEqual('button');
  });

  describe('when click', () => {
    const mockClick = jest.fn();

    beforeEach(() => {
      const props = { onClick: mockClick };
      wrapper = mount(<Button {...props} />);

      wrapper.find('button').simulate('click');
    });

    it('runs passed function', () => {
      expect(mockClick).toHaveBeenCalled();
    });
  });
});
