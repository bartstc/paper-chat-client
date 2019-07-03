import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children }) => {
  return <section className="page">{children}</section>;
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
