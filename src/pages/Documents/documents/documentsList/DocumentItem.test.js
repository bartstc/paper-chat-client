import React from 'react';
import { mount } from 'enzyme';
import axios from 'axios';
import toJson from 'enzyme-to-json';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  DocumentsStateContext,
  DocumentsDispatchContext
} from '../../../../context/documentsContext';
import DocumentItem from './DocumentItem';
import { DeleteBtn } from './DocumentItem.styles';

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

describe('<DocumentItem />', () => {
  const mockFetchDocuments = jest.fn();
  let props = {
    id: 1,
    title: 'test',
    category: 'WORK',
    fetchDocuments: mockFetchDocuments
  };

  let wrapper = mount(
    <Router>
      <DocumentsProvider>
        <DocumentItem {...props} />
      </DocumentsProvider>
    </Router>
  );

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('contains DeleteBtn', () => {
    expect(wrapper.find(DeleteBtn).length).toEqual(1);
  });

  // describe('when the `DeleteBtn` is clicked', () => {
  // beforeEach(() => {
  //   wrapper = mount(
  //     <Router>
  //       <DocumentsProvider>
  //         <DocumentItem {...props} />
  //       </DocumentsProvider>
  //     </Router>
  //   );
  //   wrapper.find(DeleteBtn).simulate('click');
  // });

  // it('should made a delete request', () => {
  //   const deleteSpy = jest.spyOn(axios, 'delete');
  //   expect(deleteSpy).toBeCalled();
  // });

  // it('call dispatch function with type `LOADING_START`', () => {
  //   const dispatch = jest.fn();
  //   expect(dispatch).toBeCalledWith({ type: 'LOADING_START' });
  // });

  // it('refetch documents', () => {
  //   expect(mockFetchDocuments).toHaveBeenCalled();
  // });
  // });
});
