import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter as Router } from 'react-router-dom';
import DocumentsList from './DocumentsList';
import {
  DocumentsStateContext,
  DocumentsDispatchContext
} from '../../../context/documentsContext';
import { Warning } from './DocumentsList.styles';
import axios from 'axios';

jest.mock('axios');

// https://github.com/f/react-hooks-todo-app

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

afterEach(() => {
  jest.clearAllMocks();
});

let DocumentsProvider = ({ children }) => {
  return (
    <DocumentsStateContext.Provider value={state}>
      <DocumentsDispatchContext.Provider value={dispatch}>
        {children}
      </DocumentsDispatchContext.Provider>
    </DocumentsStateContext.Provider>
  );
};

describe('<DocumentsList />', () => {
  let wrapper = mount(
    <Router>
      <DocumentsProvider>
        <DocumentsList />
      </DocumentsProvider>
    </Router>
  );

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders list of documents when it`s not empty', () => {
    const list = wrapper.find('ul');

    expect(list.length).toEqual(1);
    expect(list.find('li').length).toEqual(2);
  });

  describe('when rendered', () => {
    it('should fetch a list of documents', () => {
      const getSpy = jest.spyOn(axios, 'get');

      wrapper = mount(
        <Router>
          <DocumentsProvider>
            <DocumentsList />
          </DocumentsProvider>
        </Router>
      );

      expect(getSpy).toBeCalled();
    });

    it('renders spinner when list of documents is `null` and loading is `true`', () => {
      state = {
        documents: null,
        loading: true
      };

      DocumentsProvider = ({ children }) => {
        return (
          <DocumentsStateContext.Provider value={state}>
            <DocumentsDispatchContext.Provider value={dispatch}>
              {children}
            </DocumentsDispatchContext.Provider>
          </DocumentsStateContext.Provider>
        );
      };

      wrapper = mount(
        <Router>
          <DocumentsProvider>
            <DocumentsList />
          </DocumentsProvider>
        </Router>
      );

      expect(wrapper.find('SpinnerSm').length).toEqual(1);
    });
  });

  it('renders warning message when list of documents is empty', () => {
    state = {
      documents: [],
      loading: false
    };

    DocumentsProvider = ({ children }) => {
      return (
        <DocumentsStateContext.Provider value={state}>
          <DocumentsDispatchContext.Provider value={dispatch}>
            {children}
          </DocumentsDispatchContext.Provider>
        </DocumentsStateContext.Provider>
      );
    };

    wrapper = mount(
      <Router>
        <DocumentsProvider>
          <DocumentsList />
        </DocumentsProvider>
      </Router>
    );

    expect(wrapper.find(Warning).length).toEqual(1);
  });
});
