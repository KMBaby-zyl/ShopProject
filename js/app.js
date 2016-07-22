import React, {Component} from 'react';
import {ScreenHeight, ScreenWidth} from './utils/common.js';

import {
  View,
  StyleSheet
} from 'react-native';

import Shop from './Component/Shop.js';
import Customers from './Component/Customers.js';


import { createStore } from 'redux';
import { rshop } from './reducer/rshop.js';
import { rCustomer } from './reducer/rCustomer.js';
let store_shop = createStore(rshop);
let store_custom = createStore(rCustomer);

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
        myworld.init(store_shop, store_custom);
    }

    render() {
        return (
            <View>
                <View style={this.styles.Shop} >
                    <Shop store={store_shop} cusStor={store_custom}></Shop>
                </View>
            </View>
        )
    }
}


