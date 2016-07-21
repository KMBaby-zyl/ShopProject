import {addCustom, clickCustom} from '../action/action.js';

const initialState = {
  customerList: []
};

export function rCustomer(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {
        case 'addCustom':
            return change_door(state, action)
        case 'clickCustom':
            return change_door(state, action)
        default:
            return state
    }
}