import {
  GET_TICKETS,
  GET_TICKETS_LOADING,
  GET_TICKETS_ERROR,
  SORT_TICKETS_BY_PRICE,
  SORT_TICKETS_BY_TIME
} from './actionTypes';
import { ITicketsState, TicketsAction } from './types';
import { sortByPrice, sortByTime } from '../../helpers/sortHelper';

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
  [GET_TICKETS_LOADING]: (state: ITicketsState, { payload }: TicketsAction) => ({ ...state, loading: payload }),
  [GET_TICKETS_ERROR]: (state: ITicketsState, { payload }: TicketsAction) => ({ ...state, error: payload }),
  DEFAULT: (state: ITicketsState) => state
};

export const ticketsReducer = (state = initialState, action: TicketsAction) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
