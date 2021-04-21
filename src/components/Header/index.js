import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutSuccess } from '../../store/auth';

const Header = (props) => {

    const user = useSelector(state => state.auth.user);
    const adminMode = useSelector(state => state.auth.adminMode);

    const dispatch = useDispatch();

    function goRedirect() {
        dispatch(logoutSuccess());
    }

    return (
    <div className="header">
        <h1>React App</h1>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                { adminMode ? <li><NavLink to="/settings">Settings</NavLink></li> :null }
                { user || adminMode ? <li><NavLink onClick={goRedirect} to="/auth">Выйти</NavLink></li>
                : <li><NavLink to="/auth">Sign In</NavLink></li> }
            </ul>
            { user ? <h2>Приветствую тебя, {user.username.slice(0,1).toUpperCase() + user.username.slice(1).split('@').slice(0,1)}!</h2> : null }
            <div>
                <button type="button">
                    Количество карточек <span className="badge">{props.cards.length}</span>
                </button>
            </div>
        </nav>
    </div>
    )};

export default React.memo(Header);
