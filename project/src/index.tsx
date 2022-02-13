import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  NUMBER_OF_OFFERS: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      numberOfOffers={Setting.NUMBER_OF_OFFERS}
    />
  </React.StrictMode>,
  document.getElementById('root'));
