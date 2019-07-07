import React from 'react';
import PropTypes from 'prop-types';
import { SelectWrapper, Label, Select, Option } from './SelectListField.styles';

const SelectListField = ({
  name,
  value,
  error,
  onChange,
  options,
  id,
  label
}) => {
  const selectOptions = options.map((option, i) => (
    <Option key={i} value={option.value}>
      {option.label}
    </Option>
  ));

  return (
    <SelectWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Select
        error={error}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </Select>
    </SelectWrapper>
  );
};

SelectListField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  id: PropTypes.string,
  label: PropTypes.string
};

export default SelectListField;
