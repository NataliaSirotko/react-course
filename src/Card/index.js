import React from 'react';
import './index.css';
import classNames from 'classnames';

//var classNames = require('classnames');
const Card = ({caption, text, checked, checkboxChange}) => {
    let cardClass = classNames('card', {
        'card-checked': checked
    });

    return <div className={cardClass}>
        <p>{caption}
            <input type="checkbox" checked={checked} onChange={checkboxChange}></input>
        </p>
        <p>{text}</p>
    </div>
};

export default Card;
