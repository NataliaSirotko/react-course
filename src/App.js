import React, { useState } from 'react';
import './index.css';
import Card from './Card';
import Header from './Header';

function App() {
  const [ cardState, setCardState ] = useState({
      caption: 'Caption', text: 'Text...', checked: false
  });

  function checkboxChange(event) {
    setCardState({
      ...cardState,
      checked: !cardState.checked
    });
  }

  return (
    <div className="App">
      <Header></Header>
      <Card className="block" caption={cardState.caption} text={cardState.text} checked={cardState.checked} checkboxChange={checkboxChange}></Card>
      <Card className="block" caption="Cap" text="Text..."></Card>
    </div>
  );
}

export default App;
