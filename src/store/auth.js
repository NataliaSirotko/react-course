import { createSlice } from '@reduxjs/toolkit';

const initialUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))
    : (localStorage.getItem('admin') ? JSON.parse(localStorage.getItem('admin')) : null);

const initMode = localStorage.getItem('admin') ? true : false;

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: initialUser,
        adminMode: initMode
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
            if (state.user) {
                if (state.user.username === 'testAdmin@gmail.com' && state.user.password === '12345yuiopp') {
                    state.adminMode = true;
                    localStorage.setItem('admin', JSON.stringify(state.user));
                } else {
                    localStorage.setItem('user', JSON.stringify(state.user));
                }
            }
        },
        logoutSuccess: (state, action) => {
            state.user = null;
            state.adminMode = false;
            localStorage.removeItem('user') || localStorage.removeItem('admin');
            console.log(localStorage);
        }
    }
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
