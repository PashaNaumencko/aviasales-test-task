import React, { useReducer } from 'react'
import { TicketsContext } from '../context/tickets/context';
import { ticketsReducer, initialState} from '../context/tickets/reducer';

type TicketsProviderProps = {
  children: React.ReactChild
}

export const TicketsProvider: React.FC<TicketsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(ticketsReducer, initialState);

  return (
    <TicketsContext.Provider value={{
      ...state,
      dispatch
    }}>
      {children}
    </TicketsContext.Provider>
  );
}
