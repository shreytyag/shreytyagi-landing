import React, { useState } from 'react';
import './BooksSection.css';

const BooksSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const books = [
    {
      id: 1,
      title: 'Power Play',
      author: 'Mukta Mahajani',
      image: 'https://m.media-amazon.com/images/I/714z9UQDwqL._SY522_.jpg'
    },
    {
      id: 2,
      title: 'Traction',
      author: 'Gabriel Weinberg',
      image: 'https://m.media-amazon.com/images/I/81OSje3X6UL._SY522_.jpg'
    },
    {
      id: 3,
      title: 'The Lean Product Playbook',
      author: 'Dan Olsen',
      image: 'https://m.media-amazon.com/images/P/B00SZ638C8.jpg'
    },
    {
      id: 4,
      title: 'Zero to Scale',
      author: 'Arindum Paul',
      image: 'https://cdn.penguin.co.in/wp-content/uploads/2025/07/9788198484680-2-scaled.jpg'
    }
  ];

  return (
    <section className="books-section section" id="books">
      <div className="books-container">
        <div className="books-header">
          <span className="books-number">03</span>
          <h2 className="books-title">Books I'm Reading</h2>
          <p className="books-subtitle">Constantly learning and growing through great reads</p>
        </div>

        <div className="books-content">
          <div
            className="book-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Book covers display */}
            <div className="book-covers">
              {books.map((book) => (
                <div key={book.id} className="book-cover-wrapper">
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="book-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Gradient accent */}
            <div className="card-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
