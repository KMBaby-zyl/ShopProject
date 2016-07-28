import React, {Component} from 'react';
import {ScreenHeight, ScreenWidth} from './utils/common.js';

import {
  View,
  StyleSheet,
  NativeModules
} from 'react-native';

import Shop from './Component/Shop.js';
import Customers from './Component/Customers.js';


import { createStore, combineReducers } from 'redux';
import { rshop } from './reducer/rshop.js';
import { rCustomer } from './reducer/rCustomer.js';

let CalendarManager = NativeModules.CalendarManager;

const rootReducer = combineReducers({
    shop: rshop,
    customers: rCustomer
});

let store_shop = createStore(rootReducer);

import myworld from './world.js';

export default class App extends Component {
    styles = StyleSheet.create({
        Shop: {
            height: ScreenHeight,
            width: ScreenWidth,
            position: 'absolute',
            top: 0,
            left: 0
        }
    });

    componentDidMount() {
        myworld.init(store_shop);
    }

    render() {
        CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
        return (
            <View>
                <View style={this.styles.Shop} >
                    <Shop store={store_shop}></Shop>
                </View>
            </View>
        )
    }
}


