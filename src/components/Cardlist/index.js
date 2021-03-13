import React from 'react';
import Card from './Card';

const CardList = (props) => {
  return props.cards.map(card => <Card data={card} key={card.id} checkboxMain={props.checkboxMain} />);
};

export default React.memo(CardList);
