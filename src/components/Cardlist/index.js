import React, { useContext } from 'react';
import Card from './Card';
import  { CardContext } from '../../context/Card-context';

const CardList = (props) => {
  const {cardState, checkboxChange, editMode, saveEditing, cancelEditing} = useContext(CardContext);

return cardState.map(card => {
      return (
        <Card
          data={card} key={card.id} checkboxMain={props.checkboxMain}
          onCheckboxChange={checkboxChange}
          onEditMode={editMode}
          onSave={saveEditing}
          onCancel={cancelEditing}
           />
          )
      });
};

export default React.memo(CardList);
