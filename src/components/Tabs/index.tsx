import React, { useState, useContext } from 'react';
import { TicketsContext } from '../../context/tickets/context';
import { sortTicketsByPrice, sortTicketsByTime } from '../../context/tickets/actions';
import classNames from 'classnames';

import './styles.scss';
import { ITabs } from './types/ITabs';

const Tabs: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const { dispatch } = useContext(TicketsContext);

  const onTabClick = (tabId: number) => () => {
    setActiveTabId(tabId);
    if(tabId === 0) {
      dispatch(sortTicketsByPrice())
    }
    if(tabId === 1) {
      dispatch(sortTicketsByTime())
    }
  };

  const tabs: ITabs[] = [
    {
      id: 0,
      text: 'Самый дешевый'
    },
    {
      id: 1,
      text: 'Самый быстрый'
    }
  ];

  return (
    <div className="tabs mb-20">
      {tabs.map(({ id, text }) => (
        <div
          key={id}
          className={classNames("tabs__item", { "tabs__item--active": activeTabId === id })}
          onClick={onTabClick(id)}
        >
          {text}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
