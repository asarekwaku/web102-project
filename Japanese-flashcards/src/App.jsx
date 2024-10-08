import React, { useState } from 'react';
import Card from './Card/Card';
import translations from './Card/Japanese';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  // Ensure the translations list is populated before trying to render
  if (translations.length === 0) {
    return <p>No cards available</p>;
  }

  const handleShuffle = () => {
    const randomIndex = Math.floor(Math.random() * translations.length);
    setCurrentIndex(randomIndex);
  };

  const handlePreviousCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? translations.length - 1 : prevIndex - 1
    );
  };

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= translations.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="App">
      <h1>Flashcard Study App - Learn Japanese</h1>
      <div className="card-info">
        <p>Total Cards: {translations.length}</p>
        <p>Title: Learn Japanese</p>
      </div>
      <div className="score-streak">
        <p>Max Streak🏆: {maxStreak}</p>
        <p>Streak🔥: {streak} </p>
      </div>
      <Card 
        card={translations[currentIndex]} 
        handleNextCard={handleNextCard} 
        handlePreviousCard={handlePreviousCard} 
        handleShuffle={handleShuffle} 
        streak={streak}
        setStreak={setStreak}
        setMaxStreak={setMaxStreak} // Pass setMaxStreak to the Card component
      />
    </div>
  );
}

export default App;
