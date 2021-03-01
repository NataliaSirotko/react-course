import React from 'react';
import './index.css';
import classNames from 'classnames';

const Input = (props) => {
    let invalidClass = classNames({
        'invalid': props.invalid && props.touched
    });

    return (
        <div>
            <label>{props.label[0].toUpperCase() + props.label.slice(1)}</label>
            <input className={invalidClass} {...props.elementConfig}
                value={props.value} onChange={props.changed} pattern={props.pattern} />
        </div>
)};

export default Input;
