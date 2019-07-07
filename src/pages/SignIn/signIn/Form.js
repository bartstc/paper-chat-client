import React from 'react';
import { SignInForm, Title, Subtitle } from './Form.styles';
import { useForm } from '../../../hooks/useForm';

import TextInputField from '../../../components/TextInputField/TextInputField';
import Button from '../../../components/Button/Button';

const initState = {
  username: '',
  password: ''
};

const Form = () => {
  const { handleChange, handleSubmit, values } = useForm(() => {
    console.log(values);
  }, initState);

  return (
    <SignInForm onSubmit={handleSubmit}>
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
    </SignInForm>
  );
};

export default Form;
