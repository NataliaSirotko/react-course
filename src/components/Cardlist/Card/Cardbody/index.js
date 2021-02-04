import React from 'react';
import './index.css';

const CardBody = (props) => {
    return props.edit ? <textarea onChange={(event) => props.handler(event, 'text')} value={props.value}></textarea>
    : <p>{props.text}</p>;
}

export default CardBody;
