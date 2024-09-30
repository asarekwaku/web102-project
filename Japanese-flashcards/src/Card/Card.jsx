// Card.js
import React, { useState } from 'react';
import './Card.css';

const Card = ({ translations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < Object.keys(translations).length ? prevIndex + 1 : 0
    );
  };

  const currentTranslationKey = Object.keys(translations)[currentIndex];
  const currentTranslation = translations[currentTranslationKey];

  // Set the background color based on the level
  const backgroundColor = (() => {
    switch (currentTranslation.level) {
      case 'hard':
        return 'red';
      case 'medium':
        return 'yellow';
      case 'easy':
        return 'green';
      default:
        return 'white';
    }
  })();

  return (
    <div
      className="card-container"
      style={{ backgroundColor: backgroundColor, padding: '20px', borderRadius: '10px', margin: '20px' }}
    >
      <h2>{currentTranslationKey}</h2>
      <p>Japanese: {currentTranslation.japanese}</p>
      <p>Romaji: {currentTranslation.romaji}</p>
      <p>Level: {currentTranslation.level}</p>
      <button className="next-button" onClick={handleNextCard}>
        Next
      </button>
    </div>
  );
};

export default Card;
