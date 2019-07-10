import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  DocsList,
  DocItem,
  DocTitle,
  Category,
  DeleteBtn,
  Warning
} from './DocumentsList.styles';
import SpinnerSm from '../../../components/Spinner/SpinnerSm';

const DocumentsList = () => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const { data } = await axios.get('/documents');
        setDocuments(data);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    fetchDocuments();
  }, []);

  // this.props.location.query
  if (!documents) return <SpinnerSm />;

  return (
    <>
      {documents && documents.length === 0 ? (
        <Warning>No documents added yet.</Warning>
      ) : (
        <DocsList>
          <DocItem>
            <Category color="#cf3e00" />
            <DocTitle to="/editor/1">Test title for document</DocTitle>
            <DeleteBtn>X</DeleteBtn>
          </DocItem>
          <DocItem>
            <Category color="#ede028" />
            <DocTitle to="/editor/1">Test title for document</DocTitle>
          </DocItem>
          <DocItem>
            <Category color="#4269f5" />
            <DocTitle to="/editor/1">Test title for document</DocTitle>
          </DocItem>
          <DocItem>
            <Category color="#4269f5" />
            <DocTitle to="/editor/1">Test title for document</DocTitle>
          </DocItem>
          <DocItem>
            <Category color="#4269f5" />
            <DocTitle to="/editor/1">Test title for document</DocTitle>
          </DocItem>
          <DocItem>
            <Category color="#4269f5" />
            <DocTitle to="/editor/1">Test title for document</DocTitle>
          </DocItem>
          <DocItem>
            <Category color="#4269f5" />
            <DocTitle to="/editor/1">Test title for document</DocTitle>
          </DocItem>
        </DocsList>
      )}
    </>
  );
};

export default DocumentsList;
