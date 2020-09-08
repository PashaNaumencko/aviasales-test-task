import { GET_TICKETS, GET_TICKETS_LOADING, GET_TICKETS_ERROR } from './actionTypes';
import { Ticket } from './types/Ticket';
import { TicketsAction } from './types/TicketsAction';

export const getTickets = (tickets: Ticket[]): TicketsAction => ({
  type: GET_TICKETS,
  payload: tickets
});

export const getTicketsLoading = (loading: boolean): TicketsAction => ({
  type: GET_TICKETS_LOADING,
  payload: loading
});


export const getTicketsError = (error: any): TicketsAction => ({
  type: GET_TICKETS_ERROR,
  payload: error
});
