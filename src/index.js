import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import from 'react-router-dom' for version 6

import App from './App';
import CountryD from './CountryD/CountryD';

const router = (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/country/:countryname" element={<CountryD />} />
  </Routes>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter  basename={process.env.PUBLIC_URL}>{router}</BrowserRouter>
  </React.StrictMode>
);
