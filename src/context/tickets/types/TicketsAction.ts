import { GET_TICKETS, GET_TICKETS_ERROR, GET_TICKETS_LOADING } from '../actionTypes';
import { Ticket } from './Ticket';

interface GetTicketsAction {
  type: typeof GET_TICKETS;
  payload: Ticket[];
}

interface GetTicketLoading {
  type: typeof GET_TICKETS_LOADING;
  payload: boolean;
}

interface GetTicketsError {
  type: typeof GET_TICKETS_ERROR;
  payload: any;
}

export type TicketsAction = GetTicketsAction | GetTicketLoading | GetTicketsError;
