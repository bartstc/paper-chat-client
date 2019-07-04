import React from 'react';
import {
  Wrapper,
  DocsHeader,
  Title,
  AddBtn,
  DocsList,
  DocItem,
  DocTitle,
  Category,
  DeleteBtn,
  Limiter,
  Warning
} from './Documents.styles';

const Documents = () => {
  return (
    <Wrapper>
      <Limiter>
        <DocsHeader>
          <Title>Your documents:</Title>
          <AddBtn>Add new</AddBtn>
        </DocsHeader>
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
        </DocsList>
      </Limiter>
    </Wrapper>
  );
};

export default Documents;
