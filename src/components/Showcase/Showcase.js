import React from 'react';
import PropTypes from 'prop-types';
import { ShowcaseWrapper, ShowcaseImage } from './Showcase.styles';

const Showcase = ({ imageUrl, children }) => {
  return (
    <ShowcaseWrapper>
      <ShowcaseImage src={imageUrl} alt="" />
      {children}
    </ShowcaseWrapper>
  );
};

Showcase.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Showcase;
