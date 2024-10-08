import React, { useState } from 'react';
import './Card.css';

const Card = ({ card, handleNextCard, handleShuffle, handlePreviousCard, streak, setStreak, setMaxStreak }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [inputs, setInputs] = useState({ guess: '' });
  const [formColor, setFormColor] = useState('white'); // New state for form background color

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
    if (!isFlipped) {
      setInputs({ guess: '' });
    }
    setFormColor('white'); // Reset form color on card flip
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheck = (e) => {
    e.preventDefault();

    if (inputs.guess.toLowerCase() === card.romaji.toLowerCase()) {
      setFormColor('green'); // Set form background to green if correct
      setStreak((prevStreak) => prevStreak + 1); // Update streak in the App component
      setMaxStreak((prevMaxStreak) => Math.max(prevMaxStreak, streak + 1)); // Update max streak
    } else {
      setFormColor('red'); // Set form background to red if incorrect
      setStreak(0); // Reset streak when wrong
    }
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
      <div>
        <form className='form' onSubmit={handleCheck}>
          <input
            type="text"
            name="guess"
            value={inputs.guess}
            placeholder="What is your answer?"
            onChange={handleChange}
            className="textbox"
            style={{ backgroundColor: formColor }} // Set the input's background color based on formColor state
          />
          <button type="submit" className="submit-button">
            Check
          </button>
        </form>
      </div>
      <div className="buttons-container">
        <button
          className="prev-button button"
          onClick={(e) => {
            e.stopPropagation();
            setIsFlipped(false);
            setInputs({ guess: '' });
            handlePreviousCard();
            setFormColor('white'); // Reset form color on card change
          }}
        >
          Prev
        </button>
        <button
          className="next-button button"
          onClick={(e) => {
            e.stopPropagation();
            setIsFlipped(false);
            setInputs({ guess: '' });
            handleNextCard();
            setFormColor('white'); // Reset form color on card change
          }}
        >
          Next
        </button>
        <button
          className="shuffle-button button"
          onClick={(e) => {
            e.stopPropagation();
            setIsFlipped(false);
            setInputs({ guess: '' });
            handleShuffle();
            setFormColor('white'); // Reset form color on shuffle
          }}
        >
          Shuffle
        </button>
      </div>
    </div>
  );
};

export default Card;
