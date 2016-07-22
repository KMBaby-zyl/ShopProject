import {addCustom, clickCustom} from '../action/action.js';
import cDao from '../dao/customerDao.js';
import Mock from 'mockjs';
import {ScreenHeight, ScreenWidth} from '../utils/common.js';

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
        case 'UPDATE_CUSTOMER':
            return upate_customer(state, action);
        default:
            return state;
    }
}

function add_customer(state, action){
    let one = cDao.addOne();

    state.customerList.push(one);
    return Object.assign({}, state);
}

function click_customer(state, action){
    // console.warn(state.customerList.length);

    let customerList = state.customerList.filter(function(item){
        return item.id != action.id
    });

    cDao.delOne(action.id);

    return Object.assign({}, state, {
        customerList: customerList
    });
}

function upate_customer(state, action){
    customerList = state.customerList.map(function(item){
        item.left = Mock.mock('@integer(0, ' + ScreenWidth + ')');
        item.top = Mock.mock('@integer(0, ' + ScreenHeight + ')');

        return item;
    });

    // console.warn(JSON.stringify(customerList));

    return Object.assign({}, state, {
        customerList: customerList
    });
}