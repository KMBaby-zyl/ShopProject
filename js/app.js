import React, {Component} from 'react';
import {ScreenHeight, ScreenWidth} from './utils/common.js';

import {
  View,
  StyleSheet
} from 'react-native';

import Shop from './Component/Shop.js';
import Customers from './Component/Customers.js';


import { createStore } from 'redux';
import { r_changeDoor } from './reducer/index.js';
import { rCustomer } from './reducer/rCustomer.js';
let store_shop = createStore(r_changeDoor);
let store_custom = createStore(rCustomer);


export default class App extends Component {
    styles = StyleSheet.create({
        Shop: {
            height: ScreenHeight,
            width: ScreenWidth,
            position: 'absolute',
            top: 0,
            left: 0
        },
        Customers: {
            height: ScreenHeight,
            width: ScreenWidth,
            position: 'absolute',
            top: 0,
            left: 0
        }
    });

    render() {
        return (
            <View>
                <View style={this.styles.Shop} >
                    <Shop store={store_shop}></Shop>
                </View>
                <View  style={this.styles.Customers} >
                    <Customers store={store_custom}></Customers>
                </View>
            </View>
        )
    }
}


