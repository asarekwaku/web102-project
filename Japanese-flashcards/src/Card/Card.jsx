import React, { useState } from 'react';
import './Card.css';

const Card = ({ card, handleNextCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
  };

  return (

    
    <div className="card-container">
      <div className="card-scene">
        <div
          className={`card ${card.level || ''} ${isFlipped ? 'flipped' : ''}`}
          onClick={handleCardClick}
        >
          {/* Front of the Card */}
          <div className="card-face card-front">
            <h2>How do you say "{card.answer}"?</h2>
            <p>Tap to Flip</p>
          </div>
          {/* Back of the Card */}
          <div className="card-face card-back">
            <h2>{card.question}</h2>
            <p>Romaji: {card.romaji}</p>
            <p>Level: {card.level}</p>
          </div>
        </div>
      </div>
      <button
        className="next-button"
        onClick={(e) => {
          e.stopPropagation(); // Prevent flipping when clicking "Next"
          setIsFlipped(false); // Reset flip state before changing the card
          handleNextCard();
          }}>
          Next
      </button>
    </div>
    

  );
};

export default Card;
