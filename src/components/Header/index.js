import React, { useContext } from 'react';
import './index.css';
import { CardContext } from '../../context/Card-context';

const Header = (props) => {
    const {addCounter} = useContext(CardContext);

    return (
    <div className="header">
        <h1>React App</h1>
        <button type="button">
            Количество карточек <span className="badge">{addCounter()}</span>
        </button>
    </div>
    )};

export default React.memo(Header);
