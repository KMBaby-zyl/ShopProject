import {addCustom, clickCustom} from '../action/action.js';
import cDao from '../dao/customerDao.js';

const initialState = {
  customerList: cDao.findALl()
};

export function rCustomer(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    console.warn(action.type);
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return add_customer(state, action);
        case 'CLICK_CUSTOMER':
            return click_customer(state, action);
        default:
            return state;
    }
}

function add_customer(state, action){
    let one = cDao.addOne();

    return state.customerList.push(one);
}

function click_customer(state, action){
    // console.warn(state.customerList.length);

    state.customerList = state.customerList.filter(function(item){
        return item.id != action.item.id
    });

    console.warn(state.customerList.length);
    // cDao.delOne(action.item);

    // JSON.stringify(state);

    // let r = delete item;

    return state;
}

