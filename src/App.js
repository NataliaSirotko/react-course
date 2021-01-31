import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import Header from './Header';
import styled from 'styled-components';

const Checkbox = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border: 2px solid violet;
  border-radius: 5px;
  margin: 0 10px;
  vertical-align: top;
  outline: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-width: 4px;
  }

  &:active {
    background: violet;
  }

  &:checked {
    height: .6rem;
    border-width: 4px;
    border-top-style: none;
    border-right-style: none;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  `;

function App() {
  const [ cardState, setCardState ] = useState({
    cards: [
      {
        id: 1,
        caption: 'One',
        text: 'first.',
        checked: false,
        edited: false
      },
      {
        id: 2,
        caption: 'Two',
        text: 'second',
        checked: false,
        edited: false
      },
      {
        id: 3,
        caption: 'Three',
        text: 'third',
        checked: false,
        edited: false
      },
      {
        id: 4,
        caption: 'Four',
        text: 'fourth',
        checked: false,
        edited: false
      },
      {
        id: 5,
        caption: 'Five',
        text: 'Fifth',
        checked: false,
        edited: false
      },
      {
        id: 6,
        caption: 'Six',
        text: 'sixth',
        checked: false,
        edited: false
      },
      {
        id: 7,
        caption: 'Seven',
        text: 'seventh',
        checked: false,
        edited: false
      },
      {
        id: 8,
        caption: 'Caption',
        text: 'Text...',
        checked: false,
        edited: false
      }
    ],
    checked: false
  });

  function checkboxChange(id) {
    const cardIndex = cardState.cards.findIndex(c => {
      return c.id === id;
    });

    const card = {...cardState.cards[cardIndex]};
    card.checked = !card.checked;

    const cards = [...cardState.cards];
    cards[cardIndex] = card;
    setCardState({
      ...cardState,
      cards: cards
    });
  }

  function editMode(id) {
    const cardIndex= cardState.cards.findIndex(c => {
      return c.id === id;
    });
    const card = {...cardState.cards[cardIndex]};
    card.checked = false;
    card.edited = true;

    const cards = [...cardState.cards];
    cards[cardIndex] = card;
    setCardState({
      ...cardState,
      cards: cards
    });
  }

  function saveEditing(arr, id) {
    const cardIndex= cardState.cards.findIndex(c => {
      return c.id === id;
    });
    const card = {...arr};
    card.checked = false;

    const cards = [...cardState.cards];
    cards[cardIndex] = card;

    setCardState({
      ...cardState,
      cards: cards
    });
  }

  function cancelEditing(id) {
    const cardIndex = cardState.cards.findIndex(c => {
      return c.id === id;
    });
    const card = {...cardState.cards[cardIndex]};
    card.edited = false;

    const cards = [...cardState.cards];
    cards[cardIndex] = card;

    setCardState({
      ...cardState,
      cards: cards
    });
  }

  function mainChecked() {
    cardState.cards.forEach(c => {
      return c.edited = false;
    });
    setCardState({
      ...cardState,
      checked: !cardState.checked
    });
  }

  return (
    <div className="App">
      <Header></Header>
      <main>
        <label>Только просмотр
          <Checkbox type="checkbox" checked={cardState.checked} onChange={mainChecked}  />
        </label>
        <div className="cardblock">
          {cardState.cards.map(card => {
            return <Card
              data={card} key={card.id} checkboxMain={cardState.checked}
              onCheckboxChange={checkboxChange}
              onEditMode={editMode}
              onSave={saveEditing}
              onCancel={cancelEditing} />
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
