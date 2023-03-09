import './App.css';
import React, { useState } from 'react';
import BingoGrid from './components/BingoCard';
import bingoGenerator from './components/BingoGenerator';
import RegenerateButton from './components/RegenerateButton'


const App = () => {
  const [bingoprompts, SetBingoPrompts] = useState([]);
  
  const Onregenerate = () => {
    SetBingoPrompts(bingoGenerator())
  }
  console.log(bingoprompts)

  return (
    <div className="App">
      <header className="App-header">
        <BingoGrid bingoprompts={bingoprompts} />
        <RegenerateButton regenerate={Onregenerate} />
      </header>
    </div>
  );
}

export default App;
