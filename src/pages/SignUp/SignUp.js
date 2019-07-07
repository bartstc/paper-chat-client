import React from 'react';
import signUpImage from '../../assets/signup.png';
import { FormWrapper } from './SignUp.styles';

import Showcase from '../../components/Showcase/Showcase';
import Form from './signUp/Form';

const SignUp = ({ history }) => (
  <Showcase imageUrl={signUpImage}>
    <FormWrapper>
      <Form history={history} />
    </FormWrapper>
  </Showcase>
);

export default SignUp;
