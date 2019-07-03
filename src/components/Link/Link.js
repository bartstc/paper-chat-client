import React from 'react';
import PropTypes from 'prop-types';
import { LinkWrapper } from './Link.styles';

const Link = ({ linkType, children, to }) => {
  return (
    <LinkWrapper className={[linkType].join(' ')} to={to}>
      {children}
    </LinkWrapper>
  );
};

Link.propTypes = {
  linkType: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};

export default Link;
