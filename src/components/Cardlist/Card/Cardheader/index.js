import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const CardHeader = (props) => {
    return props.edit ?  <input  type="text" onChange={(event) =>props.handler(event, 'caption')} value={props.value} />
    : <span>{props.caption}</span>;
}

CardHeader.propTypes = {
    edit: PropTypes.bool,
    handler: PropTypes.func,
    value: PropTypes.string,
    caption: PropTypes.string
};

export default CardHeader;
