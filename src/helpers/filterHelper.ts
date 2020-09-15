import { ITicket } from "../context/tickets/types";

export const filterByTransfers = (numOfTransfers: number[]) => (ticket: ITicket) => {
  return ticket.segments.every(({ stops }) => numOfTransfers.includes(stops.length));
}
