import React from 'react';
import './index.css';

const Card = ({caption, text, checked, checkboxChange}) => (
        <div className={'card ' + (checked ? 'border' : '')}>
            <p>{caption}
                <input type="checkbox" checked={checked} onChange={checkboxChange}></input>
            </p>
            <p>{text}</p>
        </div>
    );

export default Card;
