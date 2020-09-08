import { Ticket } from "./Ticket";

export interface TicketsState {
  tickets: Ticket[];
  loading: boolean;
  error: any;
}
