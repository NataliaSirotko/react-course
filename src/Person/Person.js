import React, { Children } from 'react';

const Person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
};

export default Person;
