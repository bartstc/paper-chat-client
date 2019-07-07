import React from 'react';
import signUpImage from '../../assets/signup.png';
import { FormWrapper } from './SignUp.styles';

import Showcase from '../../components/Showcase/Showcase';
import Form from './signUp/Form';

const SignUp = () => (
  <Showcase imageUrl={signUpImage}>
    <FormWrapper>
      <Form />
    </FormWrapper>
  </Showcase>
);

export default SignUp;
