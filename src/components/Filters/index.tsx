import React, { ChangeEvent, useState, useContext } from 'react';
import { TicketsContext } from '../../context/tickets/context';
import { filterTicketsByTransferCount, resetTickets } from '../../context/tickets/actions';
import classNames from 'classnames';
import './styles.scss';
import { IFilter } from './types/IFilter';

const Filters: React.FC = () => {
  const initialFilters = [
    { id: 1, value: 'Без пересадок', transferCount: 0, isChecked: true },
    { id: 2, value: '1 пересадка', transferCount: 1, isChecked: true },
    { id: 3, value: '2 пересадки', transferCount: 2, isChecked: true },
    { id: 4, value: '3 пересадки', transferCount: 3, isChecked: true },
  ];
  const [isAllChecked, setIsAllChecked] = useState<boolean>(true);
  const [filters, setFilters] = useState<IFilter[]>(initialFilters);
  const { dispatch } = useContext(TicketsContext);

  const onAllChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setIsAllChecked(event.target.checked);
    const changedFilters = filters.map((filter) => ({ ...filter, isChecked: !isAllChecked }));
    setFilters(changedFilters);
    dispatch(resetTickets());
  };

  const onFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const changedFilters = filters.map((filter) => {
      if(event.target.value === filter.value) {
        return { ...filter, isChecked: event.target.checked }
      }
      return filter;
    });
    const numOfTransfers = changedFilters.filter(({ isChecked }) => isChecked).map(({ transferCount }) => transferCount);
    setFilters(changedFilters);
    setIsAllChecked(numOfTransfers.length === initialFilters.length);
    dispatch(numOfTransfers.length ? filterTicketsByTransferCount(numOfTransfers): resetTickets());
  }

  return (
    <div className="filters">
      <div className="filters__header mb-20">Количество пересадок</div>
      <label className="check mb-20">
        <input
          type="checkbox"
          value="Все"
          checked={isAllChecked}
          className="visually-hidden"
          tabIndex={0}
          onChange={onAllChecked}
        />
        <div className="check__box"></div>
        Все
      </label>
      {filters.map(({ id, value, isChecked }) => (
        <label key={id} className={classNames("check", { "mb-20": id !== filters.length})}>
          <input
            type="checkbox"
            value={value}
            checked={isChecked}
            className="visually-hidden"
            tabIndex={0}
            onChange={onFilterChange}
          />
          <div className="check__box"></div>
          {value}
        </label>
      ))}
    </div>
  );
}

export default Filters;
