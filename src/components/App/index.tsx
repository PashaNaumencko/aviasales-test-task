import React from 'react';
import { TicketsProvider } from '../../providers/TicketsProvider';
import { Header } from '../Header';
import { Tabs } from '../Tabs';

import '../../styles/main.scss';
import './styles.scss';

export const App: React.FC = () => {
  return (
    <TicketsProvider>
      <div className="container">
        <Header />
        <div className="wrapper">
          <div className="left-side">

          </div>
          <div className="right-side">
            <Tabs />
          </div>
        </div>
      </div>
    </TicketsProvider>
  );
};
