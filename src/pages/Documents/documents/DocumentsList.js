import React, { useEffect } from 'react';
import axios from 'axios';
import {
  DocsList,
  DocItem,
  DocTitle,
  Category,
  DeleteBtn,
  Warning
} from './DocumentsList.styles';
import {
  useDocumentsState,
  useDocumentsDispatch
} from '../../../context/documentsContext';
import SpinnerSm from '../../../components/Spinner/SpinnerSm';

const categoryColors = {
  WORK: '#a30402',
  HOBBY: '#47990c',
  STUDY: '#0779b3',
  TRAVEL: '#edd100',
  FINANCE: '#990c90'
};

const DocumentsList = () => {
  const dispatch = useDocumentsDispatch();
  const { documents } = useDocumentsState();

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const { data } = await axios.get('/documents');
      dispatch({ type: 'GET_DOCUMENTS', payload: data });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const deleteDocument = async id => {
    try {
      await axios.delete(`/documents/${id}`);
      fetchDocuments();
    } catch (err) {
      console.log(err.response.data);
    }
  };

  if (!documents) return <SpinnerSm />;

  return (
    <>
      {documents && documents.length === 0 ? (
        <Warning>No documents added yet.</Warning>
      ) : (
        <DocsList>
          {documents.map(({ id, title, category }) => (
            <DocItem key={id}>
              <Category color={categoryColors[category]} />
              <DocTitle to={`/editor/${id}`}>{title}</DocTitle>
              <DeleteBtn onClick={() => deleteDocument(id)}>X</DeleteBtn>
            </DocItem>
          ))}
        </DocsList>
      )}
    </>
  );
};

export default DocumentsList;
