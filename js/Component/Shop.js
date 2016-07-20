import React, {Component} from 'react';

import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';


import { changeDoor } from '../action/action.js';
import { connect } from 'react-redux';


export default class Shop extends Component {

    styles = StyleSheet.create({
        front: {
            width: 300,
            height: 300,
            backgroundColor: '#FFD700'
        },
        backend: {
            width: 300,
            height: 300,
            backgroundColor: '#D1EEEE'
        }
    });

    render() {
        const { dispatch } = this.props

        setTimeout(function(){
            dispatch(changeDoor('backend'))
        }, 3000);
        return (
            <View>
                {
                    (this.props.showType == 'front') ?
                    <View style={this.styles.front}
                        onResponderGrant={ () => {
                            console.warn('backend');
                            dispatch(changeDoor('backend'))
                        }
                        }>
                        <Text>{'正门' + this.props.showType}</Text>
                    </View>
                    : <View style={this.styles.backend}
                            onResponderGrant={ () => {
                                console.warn('front');
                                dispatch(changeDoor('front'))
                            }
                        }>
                        <Text>{'后门' + this.props.showType}</Text>
                    </View>
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

