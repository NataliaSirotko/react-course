import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const CardBody = (props) => {
    let text = props.text.slice(0, 90) + '...';
    return props.edit ? <textarea onChange={(event) => props.handler(event, 'text')} value={props.value}></textarea>
    : <p>{text}</p>;
}

CardBody.propTypes = {
    edit: PropTypes.bool,
    handler: PropTypes.func,
    value: PropTypes.string,
    text: PropTypes.string
};

export default CardBody;
