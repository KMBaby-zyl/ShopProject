import {changeDoor} from '../action/action.js';

const initialState = {
  showType: changeDoor('front').text
};

export function rshop(state = initialState, action) {
    console.warn(action.type);

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
                showType: action.text
            })
        case 'backend':
            return Object.assign({}, state, {
                showType: action.text
            })
    }
}