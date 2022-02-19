import { AppRoute, AuthorizationStatus } from '../../const';
import { Link } from 'react-router-dom';

type HeaderProps = {
  authorizationStatus: AuthorizationStatus;
  pageUrl: AppRoute | null;
}

function Header({ authorizationStatus, pageUrl }: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {pageUrl !== AppRoute.Main
              ?
              (
                <Link className="header__logo-link" to="/">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </Link>
              )
              :
              (
                <a className="header__logo-link">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
                </a>)}
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">

              {authorizationStatus === AuthorizationStatus.Auth
                ?
                (
                  <>
                    <li className="header__nav-item user">
                      <a className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      </a>
                    </li>
                    <li className="header__nav-item">
                      <a className="header__nav-link" href="#">
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  </>
                )
                :
                (
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to="/login">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
