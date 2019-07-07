import React from 'react';
import {
  DocsList,
  DocItem,
  DocTitle,
  Category,
  DeleteBtn,
  Warning
} from './DocumentsList.styles';

const DocumentsList = () => (
  <>
    {/* <Warning>No documents added yet.</Warning> */}
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
  </>
);

export default DocumentsList;
