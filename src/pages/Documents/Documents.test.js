import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  DocumentsStateContext,
  DocumentsDispatchContext
} from '../../context/documentsContext';
import Documents from './Documents';
import { AddBtn } from './Documents.styles';

let state = {
  documents: [
    {
      id: 1,
      category: 'WORK',
      title: 'test'
    },
    {
      id: 2,
      category: 'HOBBY',
      title: 'test2'
    }
  ],
  loading: false
};

let dispatch = jest.fn();

let DocumentsProvider = ({ children }) => {
  return (
    <DocumentsStateContext.Provider value={state}>
      <DocumentsDispatchContext.Provider value={dispatch}>
        {children}
      </DocumentsDispatchContext.Provider>
    </DocumentsStateContext.Provider>
  );
};

describe('<Documents />', () => {
  let wrapper = mount(
    <Router>
      <DocumentsProvider>
        <Documents />
      </DocumentsProvider>
    </Router>
  );

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
