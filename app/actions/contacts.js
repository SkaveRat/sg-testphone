import { createAction, handleActions } from 'redux-actions';
import Sipgate from '../api/sipgate';

const sipgate = new Sipgate('https://api.sipgate.com/v1');
sipgate.setAccessToken(localStorage.access_token);

export const CONTACTS_FETCH = 'CONTACTS_FETCH';
export const CONTACTS_FETCH_SUCCESS = 'CONTACTS_FETCH_SUCCESS';

const contactsFetch = createAction(CONTACTS_FETCH, () => ({
    promise: () => sipgate.getContacts(),
    shouldFetch: true
}));

export const actions = {
    contactsFetch
}


const initialState = {
    items: [],
};
export default handleActions({
    [CONTACTS_FETCH_SUCCESS]: (state, { payload }) => {
        return Object.assign({}, state, {
            items: payload.items,
        });
    },
}, initialState);
