import * as actions from './actions/actionTypes';

const initialState = {
    cards: [],
    checked: !!localStorage.getItem('viewMode')
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INIT:
            return {
                ...state,
                cards: action.payload
            };
        case actions.CHECKBOX_CHANGE:
            return {
                ...state,
                cards: action.payload
            };
        case actions.EDIT_MODE:
            return {
                ...state,
                cards: action.payload
            };
        case actions.SAVE_EDITING:
            return {
                ...state,
                cards: action.payload
            };
        case actions.CANCEL_EDITING:
            return {
                ...state,
                cards: action.payload
            };
        case actions.DELETE_CARDS:
            return {
                ...state,
                cards: action.payload
            };
        case actions.ADD_CARD:
            return {
                ...state,
                cards: action.payload
            };
        case actions.MAIN_CHECKED:
            return {
                checked: action.payload.checked,
                cards: action.payload.cards
            }
        default:
            return state;
    }
};

export default mainReducer;
