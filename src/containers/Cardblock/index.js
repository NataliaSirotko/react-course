import React, { useState } from 'react';
import './index.css';
import CardList from '../../components/Cardlist';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

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

const Cardblock = (props) => {
    const [ state, setState ] = useState({
      checked: false
    });

    const cards = useSelector(state => state.cards);
    const dispatch = useDispatch();

    function mainChecked() {
      cards.forEach(c => {
        return c.edited = false;
      });
      setState({
        checked: !state.checked
      });
    }

    return (
        <div className="block">
            <label>Только просмотр
                <Checkbox type="checkbox" checked={state.checked} onChange={mainChecked} />
            </label>
            <div className="cardblock">
                <CardList
                  checkboxMain={state.checked}
                  cards={cards} />
            </div>
            <button type="text" onClick={() => dispatch(actionCreators.deleteCards(cards))}>Удалить выбранные карточки</button>
            <button type="text" onClick={() => dispatch(actionCreators.addCard(cards))}>Создать карточку</button>
        </div>
      );
};

export default  (Cardblock);
