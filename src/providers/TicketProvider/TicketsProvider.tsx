import React, { useReducer, Reducer } from 'react';
import { ITicketsState, TicketsAction } from '../../context/tickets/types';
import { ITabsProps } from './types/ITabsProps';
import { TicketsContext } from '../../context/tickets/context';
import { ticketsReducer, initialState } from '../../context/tickets/reducer';

const TicketsProvider: React.FC<ITabsProps> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<ITicketsState, TicketsAction>>(ticketsReducer, initialState);

  return (
    <TicketsContext.Provider value={{
      ...state,
      dispatch
    }}>
      {children}
    </TicketsContext.Provider>
  );
}

export default TicketsProvider;
