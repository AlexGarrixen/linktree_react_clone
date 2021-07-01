import { createContext } from 'react';
import { ContextValue } from './types';

const AppContext = createContext<Partial<ContextValue>>({});

export default AppContext;
