import { createContext } from 'react'
import { initialState } from './reducer';
import { ITicketContext } from './types';

export const TicketsContext = createContext<ITicketContext>({
  ...initialState,
  dispatch: () => {}
});
