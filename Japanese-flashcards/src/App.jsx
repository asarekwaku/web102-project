import React, { useState } from 'react';
import Card from './Card/Card'; // Assuming the Card component is in a subdirectory called Card
import translations from './Card/Japanese'
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure the translations list is populated before trying to render
  if (translations.length === 0) {
    return <p>No cards available</p>;
  }

  const handleNextCard = () => {
    const randomIndex = Math.floor(Math.random() * translations.length);
    setCurrentIndex(randomIndex);
  };

  return (
    <div className="App">
      <h1>Flashcard Study App - Learn Japanese</h1>
      <div className="card-info">
        <p>Total Cards: {translations.length}</p>
        <p>Title: Learn Japanese</p>
      </div>
      <Card card={translations[currentIndex]} handleNextCard={handleNextCard} />
    </div>
  );
}

export default App;
