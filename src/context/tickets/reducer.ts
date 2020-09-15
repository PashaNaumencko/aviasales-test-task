import {
  GET_TICKETS,
  GET_TICKETS_LOADING,
  GET_TICKETS_ERROR,
  SORT_TICKETS_BY_PRICE,
  SORT_TICKETS_BY_TIME,
  RESET_TICKETS,
  FILTER_TICKETS_BY_TRANSFER_COUNT
} from './actionTypes';
import { ITicketsState, TicketsAction } from './types';
import { sortByPrice, sortByTime } from '../../helpers/sortHelper';
import { filterByTransfers } from '../../helpers/filterHelper';

export const initialState: ITicketsState = {
  tickets: [],
  loading: false,
  error: null
}

const handlers = {
  [GET_TICKETS]: (state: ITicketsState, { payload }: TicketsAction) => ({ ...state, tickets: payload }),
  [SORT_TICKETS_BY_PRICE]: (state: ITicketsState) => {
    const sortedTickets =  [...state.tickets].sort(sortByPrice);
    return { ...state, tickets: sortedTickets };
  },
  [SORT_TICKETS_BY_TIME]: (state: ITicketsState) => {
    const sortedTickets =  [...state.tickets].sort(sortByTime);
    return { ...state, tickets: sortedTickets };
  },
  [RESET_TICKETS]: (state: ITicketsState, { payload }: TicketsAction) => ({ ...state, tickets: payload }),
  [FILTER_TICKETS_BY_TRANSFER_COUNT]: (state: ITicketsState, { payload: { numOfTransfers, initTickets } }: TicketsAction) => {
    const filteredTickets = initTickets.filter(filterByTransfers(numOfTransfers));
    return { ...state, tickets: filteredTickets };
  },
  [GET_TICKETS_LOADING]: (state: ITicketsState, { payload }: TicketsAction) => ({ ...state, loading: payload }),
  [GET_TICKETS_ERROR]: (state: ITicketsState, { payload }: TicketsAction) => ({ ...state, error: payload }),
  DEFAULT: (state: ITicketsState) => state
};

export const ticketsReducer = (state = initialState, action: TicketsAction) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
