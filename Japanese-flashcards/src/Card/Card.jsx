import React, { useState } from 'react';
import './Card.css';

const Card = ({ card, handleNextCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className={`card-container ${card.level || ''}`}
      onClick={handleCardClick}
    >
      <h2>{isFlipped ? card.question : `How do you say "${card.answer}"?`}</h2>
      {isFlipped && (
        <>
          <p>Romaji: {card.romaji}</p>
          <p>Level: {card.level}</p>
        </>
      )}
      <button
        className="next-button"
        onClick={(e) => {
          e.stopPropagation(); // Prevent flipping when clicking "Next"
          setIsFlipped(false); // Reset flip state before changing the card
          handleNextCard();
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Card;
