import Header from '../header/header';
import FavoritesLocation from '../favorites-locations/favorites-locations';
import FavoritesFooter from '../favorites-footer/favorites-footer';

function Favorites(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoritesLocation />
              <FavoritesLocation />
            </ul>
          </section>
        </div>
      </main>
      <FavoritesFooter />
    </div>
  );
}

export default Favorites;
