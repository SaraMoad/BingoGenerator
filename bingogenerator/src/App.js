import './App.css';
import React, { useEffect, useState } from 'react';
import BingoGrid from './components/bingoCard/BingoCard';
import bingoGenerator from './components/bingoCard/BingoGenerator'
import RegenerateButton from './components/bingoCard/RegenerateButton'
import PromptList from './components/Prompt List/promptList';
import { bingoPrompts } from './data/bingoPrompt';

const orignalPrompts = bingoPrompts
const App = () => {
  
  const [bingoPrompts, setBingoPrompts] = useState([]);
  const [usedPrompts, setUsedPrompts] = useState([orignalPrompts]);

  useEffect(() => {
    const emptyBingoCard = []
  for (let i = 0; i < 25; i++) {
    emptyBingoCard.push("")
    }
    setBingoPrompts(emptyBingoCard)
  }, [])

  const handleGeneration = () => {
    setBingoPrompts(bingoGenerator())
    setUsedPrompts(bingoPrompts)
  }
  console.log(bingoPrompts)

  return (
    <div className="App">
      <header className="App-header">
        <BingoGrid bingoPrompts={bingoPrompts} />
        <PromptList usedPrompts={usedPrompts} />
        <RegenerateButton regenerate={handleGeneration} />
      </header>
    </div>
  );
}

export default App;
