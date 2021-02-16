import React, { useState, useContext } from 'react';
import './App.css';
import CardList from '../components/Cardlist';
import Header from '../components/Header';
import styled from 'styled-components';
import { CardContext } from '../context/Card-context';

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
  const [ state, setState ] = useState({
    checked: false
  });

  const {cardState, addCard, deleteCards} = useContext(CardContext);

  function mainChecked() {
    cardState.forEach(c => {
      return c.edited = false;
    });
    setState({
      checked: !state.checked
    });
  }

  return (
    <div className="App">
      <Header />
      <main>
        <label>Только просмотр
          <Checkbox type="checkbox" checked={state.checked} onChange={mainChecked}  />
        </label>
        <div className="cardblock">
          <CardList
           checkboxMain={state.checked}
           />
        </div>
        <button type="text" onClick={deleteCards}>Удалить выбранные карточки</button>
        <button type="text" onClick={addCard}>Создать карточку</button>
      </main>
    </div>
  );
}

export default App;
