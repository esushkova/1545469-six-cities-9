import FavoritesCard from '../favorites-card/favorites-card';

function FavoritesLocation(): JSX.Element {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <FavoritesCard />
        <FavoritesCard />
      </div>
    </li>
  );
}

export default FavoritesLocation;
