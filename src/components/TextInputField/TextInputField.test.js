import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import TextInputField from './TextInputField';

describe('<TextInputField />', () => {
  const mockOnChange = jest.fn();

  const props = {
    id: 'username',
    placeholder: 'username',
    name: 'username',
    value: 'John Doe',
    label: 'Enter username',
    onChange: mockOnChange
  };

  let wrapper = mount(<TextInputField {...props} />);

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('label', () => {
    const label = wrapper.find('label');

    it('exists', () => {
      expect(label).toHaveLength(1);
    });

    it('contains correct htmlFor and text value', () => {
      expect(label.prop('htmlFor')).toEqual('username');
      expect(label.text()).toEqual('Enter username');
    });
  });

  describe('input', () => {
    const input = wrapper.find('input');

    it('exists', () => {
      expect(input).toHaveLength(1);
    });

    it('contains correct props', () => {
      expect(input.prop('type')).toEqual('text');
      expect(input.prop('name')).toEqual('username');
      expect(input.prop('id')).toEqual('username');
      expect(input.prop('placeholder')).toEqual('username');
    });
  });
});
