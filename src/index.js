import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>
);
