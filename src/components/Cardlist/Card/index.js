import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import classNames from 'classnames';
import { IoIosSave } from 'react-icons/io';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import CardHeader from './Cardheader';
import CardBody from './Cardbody';

import withLoadingDelay from '../../../hoc/WithLoadingDelay';
import Aux from '../../../hoc/Auxiliary';

import { useDispatch, useSelector } from 'react-redux';
import * as actionCreators from '../../../store/actions/actions';
import { withRouter } from "react-router-dom";

const Card = (props) => {

    let cardClass = classNames('card', {
        'card-checked': props.data.checked
    });

    const [cachedState, setCachedState] = useState({
        cachedCard: {}
    });

    const cards = useSelector(state => state.main.cards);
    const dispatch = useDispatch();

    function editing() {
      dispatch(actionCreators.editMode(cards, props.data.id));
      setCachedState({
        cachedCard: {
          ...props.data
        }
      });
    }

    function changeHandler(event, property) {
      setCachedState({
        cachedCard: {
          ...cachedState.cachedCard, [property]: event.target.value
        }
      });
    }

    function saveEditing() {
      dispatch(actionCreators.saveEditing(cards, cachedState.cachedCard, props.data.id));
      setCachedState({
        cachedCard: {}
      });
    }

    function cancelEditing() {
      dispatch(actionCreators.cancelEditing(cards, props.data.id));
      setCachedState({
        cachedCard: {}
      });
    }

    function toCardPage() {
      props.history.push('/card/:' + props.data.id);

    }

    return (
      <Aux>
        <div className={cardClass} onDoubleClick={toCardPage}>
        <p>
          <CardHeader
            value={cachedState.cachedCard.caption}
            handler={changeHandler}
            caption={props.data.caption}
            edit={props.data.edited}
            />
          <span className="iconBox">
            {props.data.edited ? <span onClick={saveEditing}><IoIosSave /></span>
            : (props.checkboxMain ? null : <span onClick={editing}><AiOutlineEdit /></span>)}
            {props.data.edited ? <span onClick={cancelEditing}><MdCancel /></span>
            : <input type="checkbox" checked={props.data.checked} onChange={() => dispatch(actionCreators.checkboxChange(cards, props.data.id))} />}
          </span>
        </p>
        <CardBody
          value={cachedState.cachedCard.text}
          handler={changeHandler}
          text={props.data.text}
          edit={props.data.edited} />
        </div>
      </Aux>
    );
};

Card.propTypes = {
  checkboxMain: PropTypes.bool,
  data: PropTypes.object
};

export default withRouter(withLoadingDelay(Card));
