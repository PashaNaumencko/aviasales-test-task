import { ITicket } from "./ITicket";

export interface ITicketsState {
  tickets: ITicket[];
  loading: boolean;
  error: any;
}
