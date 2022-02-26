import Header from '../header/header';
import FavoritesLocation from '../favorites-locations/favorites-locations';
import FavoritesFooter from '../favorites-footer/favorites-footer';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Offers } from '../../types/offers';
import { cityNames } from '../../const';


type FavoritesPageProps = {
  offers: Offers;
}

function Favorites({ offers }: FavoritesPageProps): JSX.Element {
  return (
    <div className="page">
      <Header authorizationStatus={AuthorizationStatus.Auth} pageUrl={AppRoute.Favorites} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cityNames.map((cityName) => <FavoritesLocation key={cityName} cityName={cityName} offers={offers.filter((offer) => offer.city.name === cityName)} />)}
            </ul>
          </section>
        </div>
      </main>
      <FavoritesFooter />
    </div>
  );
}

export default Favorites;
