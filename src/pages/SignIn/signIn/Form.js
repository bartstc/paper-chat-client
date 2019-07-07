import React from 'react';
import axios from 'axios';
import { SignInForm, Title, Subtitle } from './Form.styles';
import { useForm } from '../../../hooks/useForm';
import { useAuthDispatch } from '../../../context/authContext';

import TextInputField from '../../../components/TextInputField/TextInputField';
import Button from '../../../components/Button/Button';

const initState = {
  email: '',
  password: ''
};

const Form = ({ history }) => {
  const dispatch = useAuthDispatch();

  const { handleChange, handleSubmit, reset, values } = useForm(async () => {
    try {
      const { data } = await axios.post('/auth/signin', values);
      history.push('/');
      dispatch({ type: 'SET_USER', payload: data });
    } catch (err) {
      // show popup
      reset();
      console.log(err.response.data);
    }
  }, initState);

  return (
    <SignInForm onSubmit={handleSubmit}>
      <Title>Sign In</Title>
      <Subtitle>Log in and continue working on your documents.</Subtitle>
      <TextInputField
        label="Enter email"
        placeholder="johndoe@gmail.com"
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <TextInputField
        label="Enter password"
        placeholder="Secretpassword"
        id="password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      <Button type="submit">Sign In</Button>
    </SignInForm>
  );
};

export default Form;
