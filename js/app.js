import React, {Component} from 'react';

import {
  View
} from 'react-native';

import Shop from './Component/Shop.js';
import Customers from './Component/Customers.js';


import { createStore } from 'redux';
import { r_changeDoor } from './reducer/index.js';
import { rCustomer } from './reducer/rCustomer.js';
let store_shop = createStore(r_changeDoor);
let store_custom = createStore(rCustomer);

export default class App extends Component {
    render() {
        return (
            <View>
                <Shop store={store_shop}></Shop>
                <Customers store={store_custom}></Customers>
            </View>
        )
    }
}


