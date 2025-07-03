import React from 'react';
import BookCard from './BookCard';

interface BookListProps {
  books: any[]; // You can improve this with a proper `Book` interface later
}

const BookList: React.FC<BookListProps> = ({ books }) => (
  <div className="grid">
    {books.map(book => (
      <BookCard key={book.id} book={book} />
    ))}
  </div>
);

export default BookList;
