import MainPage from '../main-page/main-page';

type AppProps = {
  numberOfOffers: number;
};

function App({ numberOfOffers }: AppProps): JSX.Element {
  return (
    <MainPage numberOfOffers={numberOfOffers} />
  );
}

export default App;
