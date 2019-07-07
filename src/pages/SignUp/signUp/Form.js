import React from 'react';
import axios from 'axios';
import { SignUpForm, Title, Subtitle } from './Form.styles';
import { useForm } from '../../../hooks/useForm';
import { useAuthDispatch } from '../../../context/authContext';

import TextInputField from '../../../components/TextInputField/TextInputField';
import Button from '../../../components/Button/Button';

const initState = {
  username: '',
  email: '',
  password: ''
};

const Form = ({ history }) => {
  const dispatch = useAuthDispatch();

  const { handleChange, handleSubmit, reset, values } = useForm(async () => {
    try {
      const { data } = await axios.post('/auth/signup', values);
      history.push('/');
      dispatch({ type: 'SET_USER', payload: data });
    } catch (err) {
      // show popup
      reset();
      console.log(err.response.data);
    }
  }, initState);

  return (
    <SignUpForm onSubmit={handleSubmit}>
      <Title>Sign Up for free</Title>
      <Subtitle>
        Register to be able to start working with our amazing text editor.
      </Subtitle>
      <TextInputField
        label="Enter username"
        placeholder="JohnDoe"
        id="username"
        name="username"
        value={values.username}
        onChange={handleChange}
      />
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
      <Button type="submit">Sign Up</Button>
    </SignUpForm>
  );
};

export default Form;
