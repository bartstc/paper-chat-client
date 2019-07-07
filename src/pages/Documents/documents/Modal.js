import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop, ModalWrapper, Form, FormTitle } from './Modal.styles';
import { useForm } from '../../../hooks/useForm';
import { initValue } from '../../../utils/slateInitValue';

import TextInputField from '../../../components/TextInputField/TextInputField';
import SelectListField from '../../../components/SelectListField/SelectListField';
import Button from '../../../components/Button/Button';

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
  const { handleChange, handleSubmit, values } = useForm(e => {
    console.log(values);
    closeModal();
  }, initState);

  return (
    <>
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
            // error={errors.type}
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
