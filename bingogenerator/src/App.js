import './App.css';
import React, { useState } from 'react';
import BingoGrid from './components/bingoCard/BingoCard';
import bingoGenerator from './components/bingoCard/BingoGenerator'
import RegenerateButton from './components/bingoCard/RegenerateButton'
import { bingoPrompts } from './data/bingoPrompt';

const orignalPrompts = bingoPrompts
const App = () => {
  
  const [bingoPrompts, setBingoPrompts] = useState([]);
  const [usedPrompts, setUsedPrompts] = useState([orignalPrompts]);

  
  const handleGeneration = () => {
    setBingoPrompts(bingoGenerator())
    setUsedPrompts()
  }
  console.log(bingoPrompts)

  return (
    <div className="App">
      <header className="App-header">
        <BingoGrid bingoPrompts={bingoPrompts} />
        <RegenerateButton regenerate={handleGeneration} />
        {/* <PromptList bingoPrompts={bingoPrompts} usedPrompts={usedPrompts} /> */}
      </header>
    </div>
  );
}

export default App;
