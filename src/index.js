import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// Si deseas medir el rendimiento de tu aplicación, puedes pasar una función
// para registrar los resultados a la consola o enviarlos a un punto de análisis.
// Obtén más información en: https://bit.ly/CRA-vitals
reportWebVitals();
