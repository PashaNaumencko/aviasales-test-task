import {
  GET_TICKETS,
  GET_TICKETS_LOADING,
  GET_TICKETS_ERROR,
  SORT_TICKETS_BY_PRICE,
  SORT_TICKETS_BY_TIME,
  RESET_TICKETS,
  FILTER_TICKETS_BY_TRANSFER_COUNT
} from './actionTypes';
import {
  ITicket,
  TicketsAction,
  ISearchResponse,
  ITicketsResponse
} from './types';
import { callApi } from '../../helpers/callWebApi';
import { getInitialTicketState, setInitialTicketState } from '../../helpers/localStorageHelper';

export const getTicketsRequest = async (dispatch: (value: TicketsAction) => void) => {
  try {
    dispatch(getTicketsLoading(true));
    const { searchId } = await callApi<ISearchResponse>({
      endpoint: '/search',
      type: 'GET'
    });
    const { tickets } = await callApi<ITicketsResponse>({
      endpoint: '/tickets',
      type: 'GET',
      query: {
        searchId
      }
    });
    setInitialTicketState(tickets.slice(0, 10));
    dispatch(getTickets(tickets.slice(0, 10)));
    dispatch(sortTicketsByPrice());
  } catch (error) {
    dispatch(getTicketsError(error));
  } finally {
    dispatch(getTicketsLoading(false));
  }
};

export const getTickets = (tickets: ITicket[]): TicketsAction => ({
  type: GET_TICKETS,
  payload: tickets
});

export const sortTicketsByPrice = (): TicketsAction => ({
  type: SORT_TICKETS_BY_PRICE,
  payload: null
});

export const sortTicketsByTime = (): TicketsAction => ({
  type: SORT_TICKETS_BY_TIME,
  payload: null
});

export const resetTickets = (): TicketsAction => ({
  type: RESET_TICKETS,
  payload: getInitialTicketState()
});

export const filterTicketsByTransferCount = (numOfTransfers: number[]): TicketsAction => ({
  type: FILTER_TICKETS_BY_TRANSFER_COUNT,
  payload: {
    initTickets: getInitialTicketState(),
    numOfTransfers
  }
});

export const getTicketsLoading = (loading: boolean): TicketsAction => ({
  type: GET_TICKETS_LOADING,
  payload: loading
});

export const getTicketsError = (error: any): TicketsAction => ({
  type: GET_TICKETS_ERROR,
  payload: error
});
