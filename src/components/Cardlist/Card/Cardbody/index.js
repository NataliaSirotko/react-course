import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const CardBody = (props) => {
    return props.edit ? <textarea onChange={(event) => props.handler(event, 'text')} value={props.value}></textarea>
    : <p>{props.text}</p>;
}

CardBody.propTypes = {
    edit: PropTypes.bool,
    handler: PropTypes.func,
    value: PropTypes.string,
    text: PropTypes.string
};

export default CardBody;
