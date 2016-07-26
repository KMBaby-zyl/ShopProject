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
        const { dispatch, cusStor } = this.props;

        return (
            <View>
                {
                    (this.props.showType == 'front') ?
                    <TouchableHighlight onPress={() => {
                        CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
                        dispatch(changeDoor('backend'))
                        }
                    } style={this.styles.front}>
                        <Text>{'正门' + this.props.showType}</Text>
                    </TouchableHighlight>
                    :   <TouchableHighlight onPress={ () => {
                                dispatch(changeDoor('front'))
                            }
                        } style={this.styles.backend}>
                            <Text>{'后门' + this.props.showType}</Text>
                        </TouchableHighlight>
                }
                {
                    <Customers store={cusStor}></Customers>
                }
            </View>
        )
    }
}

function select(state){
    return {
        showType: state.showType.text
    }
}

export default connect(select)(Shop);

