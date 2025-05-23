import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/main.css';
import App from './App';

// Récupération de l'élément HTML racine (#root)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Rendu de l'application dans le DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
