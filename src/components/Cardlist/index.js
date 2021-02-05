import React from 'react';
import Card from './Card';

const cardList = (props) => props.cards.map(card => {
        return <Card
          data={card} key={card.id} checkboxMain={props.checkboxMain}
          onCheckboxChange={props.onCheckboxChange}
          onEditMode={props.onEditMode}
          onSave={props.onSave}
          onCancel={props.onCancel} />
      });

export default React.memo(cardList);
