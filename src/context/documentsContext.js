import React, { createContext, useReducer, useContext } from 'react';

const DocumentsStateContext = createContext();
const DocumentsDispatchContext = createContext();

const initState = {
  documents: null,
  loading: false
};

const documentsReducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_DOCUMENTS':
      return {
        ...state,
        documents: payload,
        loading: false
      };

    case 'ADD_DOCUMENT':
      return {
        ...state,
        documents: [...state.documents, payload],
        loading: false
      };

    case 'LOADING_START':
      return {
        ...state,
        loading: true
      };

    case 'LOADING_END':
      return {
        ...state,
        loading: false
      };

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};

const DocumentsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(documentsReducer, initState);

  return (
    <DocumentsStateContext.Provider value={state}>
      <DocumentsDispatchContext.Provider value={dispatch}>
        {children}
      </DocumentsDispatchContext.Provider>
    </DocumentsStateContext.Provider>
  );
};

const useDocumentsState = () => {
  const state = useContext(DocumentsStateContext);
  if (state === undefined)
    throw new Error('useDocumentsState must be used within a AuthProvider');
  return state;
};

const useDocumentsDispatch = () => {
  const dispatch = useContext(DocumentsDispatchContext);
  if (dispatch === undefined)
    throw new Error('useDocumentsDispatch must be used within a AuthProvider');
  return dispatch;
};

export { DocumentsProvider, useDocumentsState, useDocumentsDispatch };
