import React from 'react';
import './index.css';

const Auth = (props) => (
    <form className="auth">
        <h3>Sign In</h3>
        <label className="light">Username
            <input type="text" />
        </label>
        <label className="light">Password
            <input type="password" />
        </label>
        <button type="submit">Войти</button>
    </form>
);

export default Auth;
