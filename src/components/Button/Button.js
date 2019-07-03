import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './Button.styles';

const Button = ({ disabled, onClick, btnType, type, children }) => (
  <ButtonWrapper
    disabled={disabled}
    onClick={onClick}
    className={[btnType].join(' ')}
    type={type}
  >
    {children}
  </ButtonWrapper>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  btnType: PropTypes.string,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
