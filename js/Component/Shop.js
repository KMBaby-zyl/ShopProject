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
            height: 600,
            backgroundColor: '#222222'
        },
        backend: {
            width: 300,
            height: 600,
            backgroundColor: '#2d2d2d'
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
                        onStartShouldSetResponder={ () =>
                            dispatch(changeDoor('backend'))
                        }>
                        <Text>{'正门' + this.props.showType}</Text>
                    </View>
                    : <View style={this.styles.backend}>
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

