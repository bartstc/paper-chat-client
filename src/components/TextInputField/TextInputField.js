import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from './TextInputField.styles';

const TextInputField = ({
  name,
  id,
  placeholder,
  value,
  label,
  error,
  type,
  onChange
}) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        error={error}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

TextInputField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextInputField.defaultProps = {
  type: 'text'
};

export default TextInputField;
