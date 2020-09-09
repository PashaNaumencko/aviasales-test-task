import React from 'react';
import './styles.scss';

const Tickets: React.FC = () => {
  return (
    <div className="ticket">
      <div className="ticket__header mb-30">
        <div className="ticket__price">13 400 Р</div>
        <div className="ticket__logo">
          <img className="img-responsive" src="//pics.avs.io/99/36/S7.png" alt="company-logo"/>
        </div>
      </div>
      <div className="segment mb-20">
        <div className="segment__item">
          <div className="segment__title mb-10">MOW – HKT</div>
          <div className="segment__title segment__title--darked">10:45 – 08:00</div>
        </div>
        <div className="segment__item">
          <div className="segment__title mb-10">В пути</div>
          <div className="segment__title segment__title--darked">21ч 15м</div>
        </div>
        <div className="segment__item">
          <div className="segment__title mb-10">2 пересадки</div>
          <div className="segment__title segment__title--darked">HKG, JNB</div>
        </div>
      </div>
      <div className="segment">
        <div className="segment__item">
          <div className="segment__title mb-10">MOW – HKT</div>
          <div className="segment__title segment__title--darked">11:20 – 00:50</div>
        </div>
        <div className="segment__item">
          <div className="segment__title mb-10">В пути</div>
          <div className="segment__title segment__title--darked">13ч 30м</div>
        </div>
        <div className="segment__item">
          <div className="segment__title mb-10">1 пересадка</div>
          <div className="segment__title segment__title--darked">HKG</div>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
