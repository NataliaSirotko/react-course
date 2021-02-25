import React, { useContext } from 'react';
import './index.css';
import { CardContext } from '../../context/Card-context';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    const {addCounter} = useContext(CardContext);

    return (
    <div className="header">
        <h1>React App</h1>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/auth">Sign In</NavLink></li>
            </ul>
            <div>
                <button type="button">
                    Количество карточек <span className="badge">{addCounter()}</span>
                </button>
            </div>
        </nav>
    </div>
    )};

export default React.memo(Header);
