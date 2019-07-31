import React, { useEffect } from 'react';
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

  useEffect(() => {
    fetchDocuments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchDocuments = async () => {
    try {
      const { data } = await axios.get('/documents');
      dispatch({ type: 'GET_DOCUMENTS', payload: data });
    } catch (err) {
      console.log(err.response.data);
    }
  };

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
