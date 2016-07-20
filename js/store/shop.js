import { createStore } from 'redux';
import { changeDoor } from '../action/action.js';
import { r_changeDoor } from '../reducer/index.js';

let store = createStore(r_changeDoor);

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
    console.log(store.getState());
)

store.dispatch(changeDoor('backend'));
store.dispatch(changeDoor('front'));

unsubscribe();