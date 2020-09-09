import { ITicketsState } from "./ITicketsState";
import { TicketsAction } from "./TicketsAction";

export interface ITicketContext extends ITicketsState {
  dispatch: (value: TicketsAction) => void
}
