import React, { useState } from 'react';
import './index.css';
import Card from './Card';
import Header from './Header';

function App() {

  const [ cardState, setCardState ] = useState({
    card: {
        caption: 'Caption',
        text: 'Text...',
        checked: false,
        edited: false
      },
    cachedCard: {
      caption: '',
      text: ''
    }
  });

  function checkboxChange() {
    setCardState({
      ...cardState,
      card: {
        ...cardState.card,
        checked: !cardState.card.checked}
    });
  }

  function editCard() {
    setCardState({
      card: {
        ...cardState.card,
        edited: true,
        checked: false,
      },
      cachedCard: {
        caption: cardState.card.caption,
        text: cardState.card.text
      }
    });
  }

  function changeHandler(event, property) {
    setCardState({
      ...cardState,
      cachedCard: {
        ...cardState.cachedCard, [property]: event.target.value
      }
    });
  }

  function saveEditing() {
    setCardState({
      ...cardState,
      card: {
        ...cardState.card,
        edited: false,
      caption: cardState.cachedCard.caption,
      text: cardState.cachedCard.text
      }
    })
  }

  function cancelEditing() {
    setCardState({
      ...cardState,
      card: {
        ...cardState.card,
        edited: false
      }
    });
  }

  return (
    <div className="App">
      <Header></Header>
      <Card className="block" caption={cardState.card.caption} text={cardState.card.text} checked={cardState.card.checked} edited={cardState.card.edited}
          cachedCaption={cardState.cachedCard.caption} cachedText={cardState.cachedCard.text}
          onCheckboxChange={checkboxChange} onCardEdit={editCard} onTextEdit={changeHandler} onSave={saveEditing} onCancel={cancelEditing}></Card>
      <Card className="block" caption="Cap" text="Text..."></Card>
    </div>
  );
}

export default App;
