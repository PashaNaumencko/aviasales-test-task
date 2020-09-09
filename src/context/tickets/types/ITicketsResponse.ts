import { ITicket } from "./ITicket";

export interface ITicketsResponse {
  tickets: ITicket[],
  stop: boolean
}
