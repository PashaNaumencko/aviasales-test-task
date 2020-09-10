import React, { useEffect, useContext } from 'react';
import { TicketsContext } from '../../context/tickets/context';
import { getTicketsRequest } from '../../context/tickets/actions';
import {
  getPrettyDurationTime,
  getTransferTitle,
  getPrettyPrice,
  getPrettyFlyingTime
} from '../../helpers/formatHelper';
import Loader from '../Loader';
import './styles.scss';

const Tickets: React.FC = () => {
  const { tickets, loading, dispatch } = useContext(TicketsContext);

  useEffect(() => {
    getTicketsRequest(dispatch);
  }, [dispatch])

  if(loading) {
    return <Loader />;
  }

  return (
    <>
      {tickets.map(({ price, carrier, segments }, idx) => (
          <div className="ticket mb-20" key={idx}>
            <div className="ticket__header mb-30">
              <div className="ticket__price">{getPrettyPrice(price)}</div>
              <div className="ticket__logo">
                <img className="img-responsive" src={`//pics.avs.io/99/36/${carrier}.png`} alt="company-logo"/>
              </div>
            </div>

            {segments.map(({ origin, destination, stops, duration, date }, idx) => (
              <div className="segment mb-20" key={idx}>
                <div className="segment__item">
                  <div className="segment__title mb-10">{origin} – {destination}</div>
                  <div className="segment__title segment__title--darked">{getPrettyFlyingTime(date, duration)}</div>
                </div>
                <div className="segment__item">
                  <div className="segment__title mb-10">В пути</div>
                  <div className="
                    segment__title
                    segment__title--duration
                    segment__title--darked"
                  >
                    {getPrettyDurationTime(duration)}
                  </div>
                </div>
                <div className="segment__item">
                  <div className="segment__title mb-10">{getTransferTitle(stops.length)}</div>
                  <div className="segment__title segment__title--darked">{stops.join(', ')}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
    </>
  );
};

export default Tickets;
