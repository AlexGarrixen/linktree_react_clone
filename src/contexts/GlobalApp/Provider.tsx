import React, { useReducer, FC } from 'react';
import ContextApp from './Context';
import reducer from './reducer';
import initialState from './initialState';

const Provider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextApp.Provider value={{ state, dispatch }}>
      {children}
    </ContextApp.Provider>
  );
};

export default Provider;
