import React, {Component} from 'react';

import {
  View
} from 'react-native';

import Shop from './Component/Shop.js';
import Customers from './Component/Customers.js';


export default class App extends Component {
    render() {
        return (
            <View>
                <Shop></Shop>
                <Customers></Customers>
            </View>
        )
    }
}


