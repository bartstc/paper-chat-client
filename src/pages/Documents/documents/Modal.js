import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Backdrop, ModalWrapper, Form, FormTitle } from './Modal.styles';
import { useForm } from '../../../hooks/useForm';
import { initValue } from '../../../utils/slateInitValue';
import { useDocumentsDispatch } from '../../../context/documentsContext';

import TextInputField from '../../../components/TextInputField/TextInputField';
import SelectListField from '../../../components/SelectListField/SelectListField';
import Button from '../../../components/Button/Button';
import Popup from '../../../components/Popup/Popup';

const categories = [
  { label: 'WORK', value: 'WORK' },
  { label: 'HOBBY', value: 'HOBBY' },
  { label: 'STUDY', value: 'STUDY' },
  { label: 'FINANCE', value: 'FINANCE' },
  { label: 'TRAVEL', value: 'TRAVEL' }
];

const initState = {
  text: JSON.stringify(initValue.toJSON()),
  title: '',
  category: 'WORK'
};

const Modal = ({ closeModal, show }) => {
  const dispatch = useDocumentsDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const { handleChange, handleSubmit, reset, values } = useForm(e => {
    addDocument(values);
    if (values.title !== '') closeModal();
    reset();
  }, initState);

  const addDocument = async () => {
    try {
      dispatch({ type: 'LOADING_START' });
      const { data } = await axios.post('/documents', values);
      dispatch({ type: 'ADD_DOCUMENT', payload: data });
    } catch (err) {
      handlePopup();
      setErrorMsg(err.response.data.message);
      dispatch({ type: 'LOADING_END' });
    }
  };

  const handlePopup = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
      <Popup show={showPopup} message={errorMsg} />
      <Backdrop show={show} onClick={closeModal} />
      <ModalWrapper show={show}>
        <Form onSubmit={handleSubmit}>
          <FormTitle>Add document</FormTitle>
          <TextInputField
            label="Enter title"
            placeholder="Awesome title"
            id="title"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
          <SelectListField
            name="category"
            id="category"
            label="Select category"
            value={values.category}
            onChange={handleChange}
            options={categories}
          />
          <Button type="submit">Add</Button>
        </Form>
      </ModalWrapper>
    </>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default Modal;
