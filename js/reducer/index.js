import {changeDoor} from '../action/action.js';

const initialState = {
  showType: changeDoor('front')
};

export function r_changeDoor(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {
        case 'change_door':
            return change_door(state, action)
        default:
            return state
    }
}

function change_door(state, action){
    switch (action.text) {
        case 'front':
            return Object.assign({}, state, {
                showType: action
            })
        case 'backend':
            return Object.assign({}, state, {
                showType: action
            })
    }
}