import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

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
                    Количество карточек <span className="badge">{props.cards.length}</span>
                </button>
            </div>
        </nav>
    </div>
    )};

export default React.memo(Header);
