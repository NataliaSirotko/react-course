import React, { useState } from 'react';
import './index.css';
import Card from './Card';
import Header from './Header';

function App() {

  const [ cardState, setCardState ] = useState({
    card: {
        caption: 'Caption',
        text: 'Text...',
        checked: false
    },
    edited: false
  });

  function checkboxChange() {
    setCardState({
      ...cardState,
      card: {
        ...cardState.card,
        checked: !cardState.card.checked
      }
    });
  }

  function editMode() {
    setCardState({
      card: {
        ...cardState.card,
        checked: false
      },
      edited: true
    });
  }

  function saveEditing(arr) {
    setCardState({
      card: {
        ...arr,
        checked: false
      },
      edited: false
    });
  }

  function cancelEditing() {
    setCardState({
      ...cardState,
      edited: false
    });
  }

  return (
    <div className="App">
      <Header></Header>
      <Card className="block" data={cardState.card} edited={cardState.edited}
        onCheckboxChange={checkboxChange}
        onEditMode={editMode}
        onSave={saveEditing}
        onCancel={cancelEditing}></Card>
    </div>
  );
}

export default App;
