import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // Mantén la importación de BrowserRouter y Route
import Dashboard from './views/Dashboard';
import CrimeForm from './views/CrimeForm';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route path="/form" component={CrimeForm} />
      </div>
    </BrowserRouter>
  );
};

export default App;

