import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const CardContext  = React.createContext();

const Provider = (props) => {

  const [cardState, setCardState] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
      .then(response => {
        let cards = response.data.slice(0, 15).map(card => {
          return {
            id: card.Number,
            caption: card.Name,
            text: card.About,
            checked: false,
            edited: false
          }
        });
        setCardState(cards);
      });
  }, [setCardState]);

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
      caption: 'Header',
      text: 'Body',
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
