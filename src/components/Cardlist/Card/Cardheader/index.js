import React from 'react';
import './index.css';

const CardHeader = (props) => {
    return props.edit ?  <input  type="text" onChange={(event) =>props.handler(event, 'caption')} value={props.value} />
    : <span>{props.caption}</span>;
}

export default CardHeader;
