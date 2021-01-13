import React from 'react';
import './index.css';

const Card = ({caption, text}) => (
        <div className="card">
            <p>{caption}</p>
            <p>{text}</p>
        </div>
    );

export default Card;
