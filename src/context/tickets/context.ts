import { createContext } from 'react'
import { initialState } from './reducer';
import { TicketsContextType } from './types/TicketContextType';

export const TicketsContext = createContext<TicketsContextType>({
  ...initialState,
  dispatch: () => {}
});
