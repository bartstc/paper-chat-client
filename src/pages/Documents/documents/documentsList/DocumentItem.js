import React from 'react';
import axios from 'axios';
import { useDocumentsDispatch } from '../../../../context/documentsContext';
import { DocItem, DocTitle, Category, DeleteBtn } from './DocumentItem.styles';

const categoryColors = {
  WORK: '#a30402',
  HOBBY: '#47990c',
  STUDY: '#0779b3',
  TRAVEL: '#edd100',
  FINANCE: '#990c90'
};

const DocumentItem = ({ id, category, title, fetchDocuments }) => {
  const dispatch = useDocumentsDispatch();

  const deleteDocument = async id => {
    try {
      dispatch({ type: 'LOADING_START' });
      await axios.delete(`/documents/${id}`);
      fetchDocuments();
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <DocItem key={id}>
      <Category color={categoryColors[category]} />
      <DocTitle to={`/editor/${id}`}>{title}</DocTitle>
      <DeleteBtn onClick={() => deleteDocument(id)}>X</DeleteBtn>
    </DocItem>
  );
};

export default DocumentItem;
