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
      props.onEditMode();
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
      props.onSave(cachedState.cachedCard);
    }

    function cancelEditing() {
      props.onCancel();
      setCachedState({
        cachedCard: {
          ...props.data
        }
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
                    <span onClick={editing}><AiOutlineEdit /></span>
                    <input type="checkbox" checked={props.data.checked} onChange={props.onCheckboxChange} />
                </span>
            </p>
            <p>{props.data.text}</p>
        </div>
    );

    return props.edited ? editMode : defaultMode;
};

export default Card;
