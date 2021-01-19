import React from 'react';
import './index.css';
import classNames from 'classnames';
import { IoIosSave } from 'react-icons/io';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';

const Card = ({caption, text, checked, checkboxChange, edited, edit, capEdit, textEdit, cancel}) => {
    let cardClass = classNames('card', {
        'card-checked': checked
    });
    let elemsClass = classNames({
       'active': !edited,
       'non-active': edited
    });
    let elemsEditedClass = classNames({
        'active': edited,
        'non-active': !edited
     });

    return <div className={cardClass}>
        <p><span className={elemsClass}>{caption}</span>
            <input className={elemsEditedClass} type="text" onChange={capEdit} value={caption} />
            <span className="iconBox">
                <span className={elemsClass} onClick={edit}><AiOutlineEdit /></span>
                <input className={elemsClass} type="checkbox" checked={checked} onChange={checkboxChange} />
                <span className={elemsEditedClass} onClick={edit}><IoIosSave /></span>
                <span className={elemsEditedClass} onClick={cancel}><MdCancel /></span>
            </span>
        </p>
        <p className={elemsClass}>{text}</p>
        <textarea className={elemsEditedClass} onChange={textEdit} value={text}></textarea>
    </div>
};

export default Card;
