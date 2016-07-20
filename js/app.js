import React, {Component} from 'react';

import {
  View
} from 'react-native';

import Shop from './Component/Shop.js';
import Customers from './Component/Customers.js';


import { createStore } from 'redux';
import { r_changeDoor } from './reducer/index.js';
let store = createStore(r_changeDoor);

export default class App extends Component {
    render() {
        return (
            <View>
                <Shop store={store}></Shop>
                <Customers></Customers>
            </View>
        )
    }
}


