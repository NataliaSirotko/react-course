import React, { useState } from 'react';
import './index.css';
import classNames from 'classnames';
import { IoIosSave } from 'react-icons/io';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';

const Card = (props) => {

    let cardClass = classNames('card', {
        'card-checked': props.data.checked
    });

    const [cachedState, setCachedState] = useState({
        cachedCard: {}
    });

    function editing() {
      props.onEditMode(props.data.id);
      setCachedState({
        cachedCard: {
          ...props.data
        }
      });
    }

    function changeHandler(event, property) {
      setCachedState({
        cachedCard: {
          ...cachedState.cachedCard, [property]: event.target.value
        }
      });
    }

    function saveEditing() {
      props.onSave(cachedState.cachedCard, props.data.id);
      setCachedState({
        cachedCard: {}
      });
    }

    function cancelEditing() {
      props.onCancel(props.data.id);
      setCachedState({
        cachedCard: {}
      });
    }

    const editMode = (
        <div className={cardClass}>
            <p>
                <input  type="text" onChange={(event) =>changeHandler(event, 'caption')} value={cachedState.cachedCard.caption} />
                <span className="iconBox">
                    <span onClick={saveEditing}><IoIosSave /></span>
                    <span onClick={cancelEditing}><MdCancel /></span>
                </span>
            </p>
            <textarea onChange={(event) => changeHandler(event, 'text')} value={cachedState.cachedCard.text}></textarea>
        </div>
    );
    const defaultMode = (
        <div className={cardClass}>
            <p>
                <span >{props.data.caption}</span>
                <span className="iconBox">
                    {props.checkboxMain ? null : <span onClick={editing}><AiOutlineEdit /></span>}
                    <input type="checkbox" checked={props.data.checked} onChange={() => props.onCheckboxChange(props.data.id)} />
                </span>
            </p>
            <p>{props.data.text}</p>
        </div>
    );

    return props.data.edited ? editMode : defaultMode;
};

export default Card;
