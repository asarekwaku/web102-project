import React from 'react';
import './App.css';
import Card from './Card/Card';
import translations from './Card/Japanese';

function App() {
  return (
    <div className="App">
      <h1>Let Us Learn Japanese</h1>
      <Card translations={translations} />
    </div>
  );
}

export default App;
