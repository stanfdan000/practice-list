import React from 'react';
export default function BooksItem({ books }) {
  return (
    <div className='books-item'>
      <h1>{books.name}</h1>
      <p>{books.type}</p>
      
    </div>
  );
}
               
        
