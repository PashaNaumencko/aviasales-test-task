import { GET_TICKETS, GET_TICKETS_LOADING, GET_TICKETS_ERROR } from './actionTypes';
import { ITicketsState, TicketsAction } from './types';

export const initialState: ITicketsState = {
  tickets: [],
  loading: false,
  error: null
}

const handlers = {
  [GET_TICKETS]: (state: ITicketsState, { payload }: TicketsAction) => ({ ...state, tickets: payload }),
  [GET_TICKETS_LOADING]: (state: ITicketsState, { payload }: TicketsAction) => ({ ...state, loading: payload }),
  [GET_TICKETS_ERROR]: (state: ITicketsState, { payload }: TicketsAction) => ({ ...state, error: payload }),
  DEFAULT: (state: ITicketsState) => state
};

export const ticketsReducer = (state = initialState, action: TicketsAction) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
