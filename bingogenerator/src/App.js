import './App.css';
import React, { useState } from 'react';
import BingoGrid from './components/BingoCard';
import bingoGenerator from './components/BingoGenerator';
import RegenerateButton from './components/RegenerateButton'

const App = () => {
  
  const [bingoPrompts, setBingoPrompts] = useState([]);
  
  const handleGeneration = () => {
    setBingoPrompts(bingoGenerator())
  }
  console.log(bingoPrompts)

  return (
    <div className="App">
      <header className="App-header">
        <BingoGrid bingoPrompts={bingoPrompts} />
        <RegenerateButton regenerate={handleGeneration} />
      </header>
    </div>
  );
}

export default App;
