import React from 'react';
import './index.css';
import CardList from '../../components/Cardlist';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

const Cardblock = (props) => {

    const state = useSelector(state => state.main);
    const dispatch = useDispatch();

    return (
        <div className="block">
            <div className="cardblock">
                <CardList checkboxMain={state.checked} cards={state.cards} />
            </div>
            <button type="text" onClick={() => dispatch(actionCreators.deleteCards(state.cards))}>Удалить выбранные карточки</button>
            <button type="text" onClick={() => dispatch(actionCreators.addCard(state.cards))}>Создать карточку</button>
        </div>
      );
};

export default  (Cardblock);
