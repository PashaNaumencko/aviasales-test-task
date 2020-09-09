import React from 'react';
import './styles.scss';

const Filters: React.FC = () => {
  return (
    <div className="filters">
      <div className="filters__header mb-20">Количество пересадок</div>
      <label className="check mb-20">
        <input type="checkbox" className="visually-hidden" tabIndex={0} />
        <div className="check__box"></div>
        Все
      </label>
      <label className="check mb-20">
        <input type="checkbox" className="visually-hidden" tabIndex={0} />
        <div className="check__box"></div>
        Без пересадок
      </label>
      <label className="check mb-20">
        <input type="checkbox" className="visually-hidden" tabIndex={0} />
        <div className="check__box"></div>
        1 пересадка
      </label>
      <label className="check mb-20">
        <input type="checkbox" className="visually-hidden" tabIndex={0} />
        <div className="check__box"></div>
        2 пересадка
      </label>
      <label className="check">
        <input type="checkbox" className="visually-hidden" tabIndex={0} />
        <div className="check__box"></div>
        3 пересадка
      </label>
    </div>
  );
}

export default Filters;