import React from 'react';
import signInImage from '../../assets/signin.png';
import { FormWrapper, Form, Title, Subtitle } from './SignIn.styles';
import { useForm } from '../../hooks/useForm';

import Showcase from '../../components/Showcase/Showcase';
import TextInputField from '../../components/TextInputField/TextInputField';
import Button from '../../components/Button/Button';

const initState = {
  username: '',
  password: ''
};

const SignIn = () => {
  const { handleChange, handleSubmit, values } = useForm(() => {
    console.log(values);
  }, initState);

  return (
    <Showcase imageUrl={signInImage}>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <Title>Sign In</Title>
          <Subtitle>Log in and continue working on your documents.</Subtitle>
          <TextInputField
            label="Enter username"
            placeholder="JohnDoe"
            id="username"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          <TextInputField
            label="Enter password"
            placeholder="Secretpassword"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <Button type="submit">Sign In</Button>
        </Form>
      </FormWrapper>
    </Showcase>
  );
};

export default SignIn;
