import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import BookList from '../components/BookList';

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <h2 className="text-xl mb-4">Your Favorites</h2>
      <BookList books={favorites} />
    </div>
  );
};

export default FavoritesPage;
