import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const INIT = 'INIT';
export const CHECKBOX_CHANGE = 'CHECKBOX_CHANGE';
export const EDIT_MODE = 'EDIT_MODE';
export const SAVE_EDITING = 'SAVE_EDITING';
export const CANCEL_EDITING = 'CANCEL_EDITING';
export const DELETE_CARDS = 'DELETE_CARDS';
export const ADD_CARD = 'ADD_CARD';

export function start(cardState) {
  return {
    type: INIT,
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
      type: CHECKBOX_CHANGE,
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
    type: EDIT_MODE,
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
    type: SAVE_EDITING,
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
    type: CANCEL_EDITING,
    payload: cards
  }
}

export function deleteCards(cardState) {
  const cardsNew = cardState.filter(c => !c.checked);
  return {
    type: DELETE_CARDS,
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
    type: ADD_CARD,
    payload: cards
  }
}
