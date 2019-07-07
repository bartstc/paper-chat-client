import React, { useState } from 'react';
import {
  Wrapper,
  DocsHeader,
  Title,
  AddBtn,
  Limiter
} from './Documents.styles';

import Modal from './documents/Modal';
import DocumentsList from './documents/DocumentsList';

const Documents = () => {
  const [open, setOpen] = useState(false);

  const onModalOpen = () => setOpen(true);
  const onModalClose = () => setOpen(false);

  return (
    <Wrapper>
      <Limiter>
        <DocsHeader>
          <Title>Your documents:</Title>
          <AddBtn onClick={onModalOpen}>Add new</AddBtn>
        </DocsHeader>
        <Modal show={open} closeModal={onModalClose} />
        <DocumentsList />
      </Limiter>
    </Wrapper>
  );
};

export default Documents;
