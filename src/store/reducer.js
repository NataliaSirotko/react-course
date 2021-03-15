import * as actions from './actions/actionTypes';

const initialState = {
    cards: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INIT:
            return {
                cards: action.payload
            };
        case actions.CHECKBOX_CHANGE:
            return {
                cards: action.payload
            };
        case actions.EDIT_MODE:
            return {
                cards: action.payload
            };
        case actions.SAVE_EDITING:
            return {
                cards: action.payload
            };
        case actions.CANCEL_EDITING:
            return {
                cards: action.payload
            };
        case actions.DELETE_CARDS:
            return {
                cards: action.payload
            };
        case actions.ADD_CARD:
            return {
                cards: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
