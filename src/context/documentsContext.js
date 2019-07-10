import React, { createContext, useReducer, useContext } from 'react';

const DocumentsStateContext = createContext();
const DocumentsDispatchContext = createContext();

const initState = {
  document: null,
  documents: null
};

const documentsReducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_DOCUMENT':
      return {
        ...state,
        document: payload
      };

    case 'GET_DOCUMENTS':
      return {
        ...state,
        documents: payload
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
