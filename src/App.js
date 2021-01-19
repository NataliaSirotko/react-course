import React, { useState } from 'react';
import './index.css';
import Card from './Card';
import Header from './Header';

function App() {
  const [ cardState, setCardState ] = useState({
      caption: 'Caption', text: 'Text...', checked: false,
      edited: false
  });

  function checkboxChange(event) {
    setCardState({
      ...cardState,
      checked: !cardState.checked
    });
  }

  function editCard() {
    setCardState({
      ...cardState,
      edited: !cardState.edited,
      checked: (cardState.checked ? !cardState.checked : cardState.checked)
    });
  }

  function captionChange(event) {
    setCardState({
      ...cardState,
      caption: event.target.value,
    });
  }

  function textChange(event) {
    setCardState({
      ...cardState,
      text: event.target.value
    });
  }

  function cancelEditing() {
    setCardState({
      caption: 'Caption', text: 'Text...',
      edited: !cardState.edited,
      checked: (cardState.checked ? !cardState.checked : cardState.checked)
    });
  }

  return (
    <div className="App">
      <Header></Header>
      <Card className="block" caption={cardState.caption} text={cardState.text} checked={cardState.checked} checkboxChange={checkboxChange}
            edit={editCard} edited={cardState.edited} capEdit={captionChange} textEdit={textChange} cancel={cancelEditing}></Card>
      <Card className="block" caption="Cap" text="Text..."></Card>
    </div>
  );
}

export default App;
