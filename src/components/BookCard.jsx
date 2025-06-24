import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

const BookCard = ({ book }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some(fav => fav.id === book.id);

  return (
    <div className="book-card">
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <h3>{book.volumeInfo.title}</h3>
      <p>{book.volumeInfo.authors?.join(', ')}</p>
      <a href={book.volumeInfo.previewLink} target="_blank" rel="noreferrer">Preview</a>
      <div className="button-group">
        {isFavorite ? (
          <button onClick={() => removeFavorite(book.id)} style={{ backgroundColor: 'red' }}>Remove Favorite</button>
        ) : (
          <button onClick={() => addFavorite(book)} style={{ backgroundColor: 'green' }}>Add Favorite</button>
        )}
      </div>
    </div>
  );
};

export default BookCard;
