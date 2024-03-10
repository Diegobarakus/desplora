import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { store } from './data/store'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <HelmetProvider>
      <App />
      </HelmetProvider>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
