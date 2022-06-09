import React from 'react';
import BooksItem from './BooksItem.js';

export default function BooksList({ books }) {
  return (
    <div className='books-list'>
      {books.map((book, i) => (
        <BooksItem key={book + i} books={book} />
      ))}
    </div>
  );
}
