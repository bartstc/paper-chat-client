import React from 'react';
import { PageNotFound, Status, Message } from './NotFound.styles';
import Link from '../../components/Link/Link';

const NotFound = () => (
  <PageNotFound>
    <Status>404</Status>
    <Message>Page not found</Message>
    <Link to="/">Back to home</Link>
  </PageNotFound>
);

export default NotFound;
