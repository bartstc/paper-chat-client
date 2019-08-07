import React, { useEffect, useCallback } from 'react';
import axios from 'axios';
import { DocsList, Warning } from './DocumentsList.styles';
import {
  useDocumentsState,
  useDocumentsDispatch
} from '../../../context/documentsContext';
import SpinnerSm from '../../../components/Spinner/SpinnerSm';
import DocumentItem from './documentsList/DocumentItem';

const DocumentsList = () => {
  const dispatch = useDocumentsDispatch();
  const { documents, loading } = useDocumentsState();

  const fetchDocuments = useCallback(async () => {
    try {
      const { data } = await axios.get('/documents');
      dispatch({ type: 'GET_DOCUMENTS', payload: data });
    } catch (err) {
      console.log(err.response.data);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]);

  if (!documents || loading) return <SpinnerSm />;

  return (
    <>
      {documents && documents.length === 0 ? (
        <Warning>No documents added yet.</Warning>
      ) : (
        <DocsList>
          {documents.map(doc => (
            <DocumentItem
              key={doc.id}
              {...doc}
              fetchDocuments={fetchDocuments}
            />
          ))}
        </DocsList>
      )}
    </>
  );
};

export default DocumentsList;
