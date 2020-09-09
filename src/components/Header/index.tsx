import React from 'react';

import './styles.scss';

const Header: React.FC = () => (
  <div className="header">
    <div className="header__logo">
      <img src="https://i.imgur.com/u5HVtTP.png" className="img-responsive" alt="logo"/>
    </div>
  </div>
);

export default React.memo(Header);
