import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => (
  <div className="grid">
    {books.map(book => (
      <BookCard key={book.id} book={book} />
    ))}
  </div>
);

export default BookList;
