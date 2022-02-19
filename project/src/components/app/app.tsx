import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import Favorites from '../favorites/favorites';
import OfferPage from '../offer-page/offer-page';
import NotFoundPage from '../not-found-page/not-found-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  numberOfOffers: number;
};

function App({ numberOfOffers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage numberOfOffers={numberOfOffers} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<OfferPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>);
}

export default App;
