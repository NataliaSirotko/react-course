import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import * as actionTypes from './actionTypes';

export function start(cardState) {
  return {
    type: actionTypes.INIT,
    payload: cardState
  };
};

export function init() {
  return (dispatch) => {
    axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
    .then(response => {
      let result = response.data.slice(0, 15).map(card => ({
                      id: card.Number,
                      caption: card.Name,
                      text: card.About,
                      checked: false,
                      edited: false
                    }));
      dispatch(start(result));
    });
  }
}

export function checkboxChange(cardState, id) {
  const cardIndex = cardState.findIndex(c => c.id === id);

  const card = cardState[cardIndex];
  card.checked = !card.checked;

  const cards = [...cardState];
  cards[cardIndex] = card;

  return {
      type: actionTypes.CHECKBOX_CHANGE,
      payload: cards
  }
}

export function editMode(cardState, id) {
  const cardIndex= cardState.findIndex(c => c.id === id);
  const card = cardState[cardIndex];
  card.checked = false;
  card.edited = true;

  const cards = [...cardState];
  cards[cardIndex] = card;
  return {
    type: actionTypes.EDIT_MODE,
    payload: cards
  }
}

export function saveEditing(cardState, arr, id) {
  const cardIndex= cardState.findIndex(c => c.id === id);
  const card = arr;
  card.edited = false;

  const cards = [...cardState];
  cards[cardIndex] = card;
  return {
    type: actionTypes.SAVE_EDITING,
    payload: cards
  }
}

export function cancelEditing(cardState, id) {
  const cardIndex = cardState.findIndex(c => c.id === id);
  const card = cardState[cardIndex];
  card.edited = false;

  const cards = [...cardState];
  cards[cardIndex] = card;
  return {
    type: actionTypes.CANCEL_EDITING,
    payload: cards
  }
}

export function deleteCards(cardState) {
  const cardsNew = cardState.filter(c => !c.checked);
  return {
    type: actionTypes.DELETE_CARDS,
    payload: cardsNew
  }
}

export function addCard(cardState) {
  let cards = [...cardState];
  const cardNew = {
    id: uuidv4(),
    caption: 'Header',
    text: 'Body',
    checked: false,
    edited: false
  };
  cards = cards.concat(cardNew);
  return {
    type: actionTypes.ADD_CARD,
    payload: cards
  }
}
