import React from 'react';
export default function BooksItem({ books }) {
  return (
    <><div className='books-item'>
      <h1>This Is The Author {books.name}</h1>
      <p>These Type of Books Are {books.type}</p>
    </div>
    <div className='book'>
      {books.book.map((book) => (
        <p key={book}>{book}</p>
      ))}
    </div></>
      
  );
}
               
        
