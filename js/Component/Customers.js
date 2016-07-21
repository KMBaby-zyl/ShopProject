import React, {Component} from 'react';

import {
  View,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import cDao from '../dao/customerDao.js';

export default class Customers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            left: 100,
            right: 100,
            img: '',
            name: '顾客',
            showType: '0',
            peopleNum: 2,
            equipment: null // 携带的装备id
        };

        cDao.addOne();
    }

    styles = StyleSheet.create({
        customer_1: {
            width: 50,
            height: 50,
            backgroundColor: '#FFD700'
        }
    });

    render() {

        return (
            <View>
                {
                    <TouchableHighlight onPress={} style={this.styles.customer_1}>
                        <Text>{this.state.name + this.state.peopleNum}</Text>
                    </TouchableHighlight>
                }
            </View>
        )
    }
}


