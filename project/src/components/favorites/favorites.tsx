import UserNav from '../user-nav/user-nav';
import FavoritesLocation from '../favorites-locations/favorites-locations';
import FavoritesFooter from '../favorites-footer/favorites-footer';

function Favorites(): JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <UserNav />
          </div>
        </div>
      </header>

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
