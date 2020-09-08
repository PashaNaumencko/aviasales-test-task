import React, { useState, useCallback } from 'react';
import classNames from 'classnames';

import './styles.scss';

export const Tabs: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const onTabClick = useCallback((tabId) => () => setActiveTabId(tabId), []);

  const tabs = [
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
          className={classNames("tabs__item", { "tabs__item--active": activeTabId === id })}
          onClick={onTabClick(id)}
        >
          {text}
        </div>
      ))}
    </div>
  );
}
