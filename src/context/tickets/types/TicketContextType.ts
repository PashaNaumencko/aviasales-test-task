import { TicketsState } from "./TicketsState";
import { TicketsAction } from "./TicketsAction";

export interface TicketsContextType extends TicketsState {
  dispatch: (value: TicketsAction) => void
}
