import { ITicket } from "../context/tickets/types";

export const getInitialTicketState = (): ITicket[] => JSON.parse(localStorage.getItem('tickets') || '');

export const setInitialTicketState = (tickets: ITicket[]) => localStorage.setItem('tickets', JSON.stringify(tickets));
