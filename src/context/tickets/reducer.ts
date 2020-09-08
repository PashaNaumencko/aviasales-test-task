import { GET_TICKETS, GET_TICKETS_LOADING, GET_TICKETS_ERROR } from './actionTypes';
import { TicketsState } from './types/TicketsState';
import { TicketsAction } from './types/TicketsAction';

export const initialState: TicketsState = {
  tickets: [],
  loading: false,
  error: null
}

const handlers = {
  [GET_TICKETS]: (state: TicketsState, { payload }: TicketsAction) => ({ ...state, tickets: payload }),
  [GET_TICKETS_LOADING]: (state: TicketsState) => ({ ...state, loading: false }),
  [GET_TICKETS_ERROR]: (state: TicketsState, { payload }: TicketsAction) => ({ ...state, error: payload }),
  DEFAULT: (state: TicketsState) => state
};

export const ticketsReducer = (state = initialState, action: TicketsAction) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
