import React from 'react';
import TicketsProvider from '../../providers/TicketProvider/TicketsProvider';
import Header from '../Header';
import Tabs from '../Tabs';
import Filters from '../Filters';

import '../../styles/main.scss';
import './styles.scss';



const App: React.FC = () => {
  return (
    <TicketsProvider>
      <div className="container">
        <Header />
        <div className="wrapper">
          <div className="left-side">
            <Filters />
          </div>
          <div className="right-side">
            <Tabs />
          </div>
        </div>
      </div>
    </TicketsProvider>
  );
};


export default React.memo(App);
