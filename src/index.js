import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ use createRoot instead of render
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import './App.css';
import { SearchProvider } from './context/SearchContext';

const root = createRoot(document.getElementById('root'));
root.render(



    <BrowserRouter>
    <FavoritesProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </FavoritesProvider>
  </BrowserRouter>



);
