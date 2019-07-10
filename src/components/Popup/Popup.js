import React from 'react';
import PropTypes from 'prop-types';
import { PopupWrapper } from './Popup.styles';

const Popup = ({ show, message }) => (
  <PopupWrapper show={show}>{message}</PopupWrapper>
);

Popup.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string
};

export default Popup;
