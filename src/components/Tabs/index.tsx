import React, { useState } from 'react';
import classNames from 'classnames';

import './styles.scss';
import { ITabs } from './types/ITabs';

const Tabs: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const onTabClick = (tabId: number) => () => setActiveTabId(tabId);

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
    <div className="tabs">
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
