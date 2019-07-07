import React from 'react';
import signInImage from '../../assets/signin.png';
import { FormWrapper } from './SignIn.styles';

import Showcase from '../../components/Showcase/Showcase';
import Form from './signIn/Form';

const SignIn = props => (
  <Showcase imageUrl={signInImage}>
    <FormWrapper>
      <Form history={props.history} />
    </FormWrapper>
  </Showcase>
);

export default SignIn;
