import React from 'react';
import './index.css';
import classNames from 'classnames';
import { IoIosSave } from 'react-icons/io';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';

const Card = (props) => {

    let cardClass = classNames('card', {
        'card-checked': props.checked
    });

    return <div className={cardClass}>
        <p>
            { props.edited
            ? <input  type="text" onChange={(event) =>props.onTextEdit(event, 'caption')} value={props.cachedCaption} />
            : <span >{props.caption}</span> }
            <span className="iconBox">
                { props.edited
                ? <span onClick={props.onSave}><IoIosSave /></span>
                : <span onClick={props.onCardEdit}><AiOutlineEdit /></span> }
                { props.edited
                ? <span onClick={props.onCancel}><MdCancel /></span>
                : <input type="checkbox" checked={props.checked} onChange={props.onCheckboxChange} /> }
            </span>
        </p>
        { props.edited
        ? <textarea onChange={(event) => props.onTextEdit(event, 'text')} value={props.cachedText}></textarea>
        : <p>{props.text}</p> }
    </div>
};

export default Card;
