import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CardContext  = React.createContext();

const Provider = (props) => {
  const [cardState, setCardState] = useState([
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
  ]);

  function checkboxChange(id) {
    const cardIndex = cardState.findIndex(c => c.id === id);

    const card = cardState[cardIndex];
    card.checked = !card.checked;

    const cards = [...cardState];
    cards[cardIndex] = card;
    setCardState(cards);
  }

  function editMode(id) {
    const cardIndex= cardState.findIndex(c => c.id === id);
    const card = cardState[cardIndex];
    card.checked = false;
    card.edited = true;

    const cards = [...cardState];
    cards[cardIndex] = card;
    setCardState(cards);
  }

  function saveEditing(arr, id) {
    const cardIndex= cardState.findIndex(c =>c.id === id);
    const card = arr;
    card.edited = false;

    const cards = [...cardState];
    cards[cardIndex] = card;
    setCardState(cards);
  }

  function cancelEditing(id) {
    const cardIndex = cardState.findIndex(c => c.id === id);
    const card = cardState[cardIndex];
    card.edited = false;

    const cards = [...cardState];
    cards[cardIndex] = card;
    setCardState(cards);
  }

  function deleteCards() {
    const cardsNew = cardState.filter(c => !c.checked);
    setCardState(cardsNew);
  }

  function addCard() {
    const cardNew = {
      id: uuidv4(),
      caption: '',
      text: '',
      checked: false,
      edited: false
    };

    setCardState(
      cardState.concat(cardNew)
    );
  }

  function addCounter() {
    return cardState.length;
  }

  return (
    <CardContext.Provider value={{
      cardState,
      checkboxChange,
      editMode,
      saveEditing,
      cancelEditing,
      addCard,
      deleteCards,
      addCounter
    }}>
    {props.children}
    </CardContext.Provider>
  );
}

export default Provider;
