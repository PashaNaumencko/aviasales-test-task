import {
  GET_TICKETS,
  GET_TICKETS_ERROR,
  GET_TICKETS_LOADING,
  SORT_TICKETS_BY_PRICE,
  SORT_TICKETS_BY_TIME,
  RESET_TICKETS,
  FILTER_TICKETS_BY_TRANSFER_COUNT
} from '../actionTypes';
import { ITicket } from './ITicket';

interface GetTicketsAction {
  type: typeof GET_TICKETS;
  payload: ITicket[];
}

interface SortTicketsByPriceAction {
  type: typeof SORT_TICKETS_BY_PRICE;
  payload: null;
}

interface SortTicketsByTimeAction {
  type: typeof SORT_TICKETS_BY_TIME;
  payload: null;
}

interface ResetTicketsAction {
  type: typeof RESET_TICKETS;
  payload: ITicket[];
}

interface FilterTicketsByTransferCountAction {
  type: typeof FILTER_TICKETS_BY_TRANSFER_COUNT;
  payload: {
    numOfTransfers: number[];
    initTickets: ITicket[];
  };
}

interface GetTicketLoading {
  type: typeof GET_TICKETS_LOADING;
  payload: boolean;
}

interface GetTicketsError {
  type: typeof GET_TICKETS_ERROR;
  payload: any;
}

export type TicketsAction = GetTicketsAction
  | GetTicketLoading
  | GetTicketsError
  | SortTicketsByPriceAction
  | SortTicketsByTimeAction
  | ResetTicketsAction
  | FilterTicketsByTransferCountAction;
