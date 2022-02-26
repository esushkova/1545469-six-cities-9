import FavoritesCard from '../favorites-card/favorites-card';

import { Offer, Offers } from '../../types/offers';

type FavoritesLocationProps = {
  cityName: string;
  offers: Offers;
}
function FavoritesLocation({ cityName, offers }: FavoritesLocationProps): JSX.Element {

  return (
    <li key={cityName} className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer: Offer) => <FavoritesCard offer={offer} key={offer.id} />)}
      </div>
    </li>
  );
}

export default FavoritesLocation;
