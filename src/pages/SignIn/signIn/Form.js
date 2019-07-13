import React, { useState } from 'react';
import axios from 'axios';
import { SignInForm, Title, Subtitle } from './Form.styles';
import { useForm } from '../../../hooks/useForm';
import { useAuthDispatch } from '../../../context/authContext';
import { setToken } from '../../../utils/setToken';

import TextInputField from '../../../components/TextInputField/TextInputField';
import Button from '../../../components/Button/Button';
import Popup from '../../../components/Popup/Popup';

const initState = {
  email: '',
  password: ''
};

const Form = ({ history }) => {
  const dispatch = useAuthDispatch();
  const [show, setShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const { handleChange, handleSubmit, reset, values } = useForm(() => {
    onSubmit();
  }, initState);

  const onSubmit = async () => {
    try {
      const { data } = await axios.post('/auth/signin', values);
      localStorage.setItem('jwtToken', data.token);
      setToken(data.token);
      history.push('/');
      dispatch({ type: 'SET_USER', payload: data });
    } catch (err) {
      reset();
      handlePopup();
      setErrorMsg(err.response.data.message);
    }
  };

  const handlePopup = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <>
      <Popup show={show} message={errorMsg} />
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
    </>
  );
};

export default Form;
