import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import Card from '../Cardlist/Card';

const CardPage = (props) => {
  const id = props.match.params.id.substr(1);
  const card = props.cards.filter(c => c.id === id)[0];

  return card ? <Card key={card.id} data={card} checkboxMain={props.checked}></Card> : <div>Try else</div>;
}

const mapStatetoProps = state => {
  return {
    cards: state.main.cards,
    checked: state.main.checked
  }
}

export default connect(mapStatetoProps) (CardPage);
