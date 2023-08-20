// Importer React
import React from 'react';

// Importer ReactDOM
import ReactDOM from 'react-dom';

// Importer le composant App
import App from './App';

// Importer le BrowserRouter
import { BrowserRouter } from 'react-router-dom';

// Rendre le composant App enveloppé par le BrowserRouter
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

