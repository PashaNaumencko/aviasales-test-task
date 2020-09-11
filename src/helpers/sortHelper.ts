import { ITicket } from "../context/tickets/types";

export const sortByPrice = (firstTicket: ITicket, secondTicket: ITicket) => {
  const firstPrice = firstTicket.price;
  const secondPrice = secondTicket.price;

  return firstPrice - secondPrice;
};

export const sortByTime = (firstTicket: ITicket, secondTicket: ITicket) => {
  const firstTime = getTotalDurationTime(firstTicket);
  const secondTime = getTotalDurationTime(secondTicket);

  return firstTime - secondTime;
};

const getTotalDurationTime = (ticket: ITicket) =>
  ticket.segments
    .map(({ duration }) => duration)
    .reduce((acc, duration) => duration + acc);
