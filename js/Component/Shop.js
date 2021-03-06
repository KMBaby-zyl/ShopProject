import React, {Component} from 'react';
import {ScreenHeight, ScreenWidth} from '../utils/common.js';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
  NativeModules
} from 'react-native';


import { changeDoor } from '../action/action.js';
import { connect } from 'react-redux';

import Customers from '../Component/Customers.js';
// import { createStore } from 'redux';
// import { rCustomer } from '../reducer/rCustomer.js';
// let store_custom = createStore(rCustomer);

let CalendarManager = NativeModules.CalendarManager;

class Shop extends Component {

    styles = StyleSheet.create({
        front: {
            height: 100,
            width: 100,
            backgroundColor: '#dfdfdf',
            position: 'absolute',
        },
        backend: {
            height: 100,
            width: 100,
            backgroundColor: '#D1EEEE',
            position: 'absolute',
        }
    });

    render() {
        const { dispatch, customers, shop } = this.props;
        const { showType } = this.props.shop;
        console.warn(JSON.stringify(this.props.shop));

        return (
            <View>
                {
                    (showType == 'front') ?
                    <TouchableHighlight onPress={() => {
                        CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
                        dispatch(changeDoor('backend'))
                        }
                    } style={this.styles.front}>
                        <Text>{'正门' + showType}</Text>
                    </TouchableHighlight>
                    :   <TouchableHighlight onPress={ () => {
                                dispatch(changeDoor('front'))
                            }
                        } style={this.styles.backend}>
                            <Text>{'后门' + showType}</Text>
                        </TouchableHighlight>
                }
                {
                    <Customers  dispatch={dispatch} customers={customers} shop={shop} ></Customers>
                }
            </View>
        )
    }
}

function select(state){
    return {
        shop: state.shop,
        customers: state.customers
    }
}

export default connect(select)(Shop);

