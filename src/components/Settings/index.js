import React from 'react';
import './index.css';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

const Checkbox = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border: 2px solid violet;
  border-radius: 5px;
  margin: 0 10px;
  vertical-align: top;
  outline: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-width: 4px;
  }

  &:active {
    background: violet;
  }

  &:checked {
    height: .6rem;
    border-width: 4px;
    border-top-style: none;
    border-right-style: none;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
`;

const Settings = () => {

    const state = useSelector(state => state.main);
    const dispatch = useDispatch();

    return (
        <div className="settings">
            <label>Только просмотр
                <Checkbox type="checkbox"
            checked={state.checked} onChange={() => dispatch(actionCreators.mainChecked(state))}/>
            </label>
        </div>

    )
};

export default Settings;
