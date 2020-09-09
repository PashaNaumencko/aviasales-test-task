import { GET_TICKETS, GET_TICKETS_LOADING, GET_TICKETS_ERROR } from './actionTypes';
import { ITicket, TicketsAction, ISearchResponse, ITicketsResponse } from './types'
import { callApi } from '../../helpers/callWebApi';

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
    })

    dispatch(getTickets(tickets));
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

export const getTicketsLoading = (loading: boolean): TicketsAction => ({
  type: GET_TICKETS_LOADING,
  payload: loading
});


export const getTicketsError = (error: any): TicketsAction => ({
  type: GET_TICKETS_ERROR,
  payload: error
});
