import React, { useState } from 'react';
import axios from 'axios';
import { SignUpForm, Title, Subtitle } from './Form.styles';
import { useForm } from '../../../hooks/useForm';
import { useAuthDispatch } from '../../../context/authContext';
import { setToken } from '../../../utils/setToken';

import TextInputField from '../../../components/TextInputField/TextInputField';
import Button from '../../../components/Button/Button';
import Popup from '../../../components/Popup/Popup';

const initState = {
  username: '',
  email: '',
  password: ''
};

const Form = ({ history }) => {
  const dispatch = useAuthDispatch();
  const [show, setShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const { handleChange, handleSubmit, reset, values } = useForm(async () => {
    try {
      const { data } = await axios.post('/auth/signup', values);
      localStorage.setItem('jwtToken', data.token);
      setToken(data.token);
      history.push('/');
      dispatch({ type: 'SET_USER', payload: data });
    } catch (err) {
      reset();
      handlePopup();
      setErrorMsg(err.response.data.message);
    }
  }, initState);

  const handlePopup = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <>
      <Popup show={show} message={errorMsg} />
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
    </>
  );
};

export default Form;
