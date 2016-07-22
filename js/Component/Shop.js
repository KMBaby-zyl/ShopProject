import React, {Component} from 'react';
import {ScreenHeight, ScreenWidth} from '../utils/common.js';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';


import { changeDoor } from '../action/action.js';
import { connect } from 'react-redux';

export default class Shop extends Component {

    styles = StyleSheet.create({
        front: {
            height: ScreenHeight,
            backgroundColor: '#dfdfdf',
            position: 'absolute',
        },
        backend: {
            height: ScreenHeight,
            backgroundColor: '#D1EEEE',
            position: 'absolute',
        }
    });

    render() {
        const { dispatch } = this.props;

        return (
            <View>
                {
                    (this.props.showType == 'front') ?
                    <View >
                        <TouchableHighlight onPress={() => {
                            dispatch(changeDoor('backend'))
                            }
                        } style={this.styles.front}>
                            <Text>{'正门' + this.props.showType}</Text>
                        </TouchableHighlight>
                    </View>
                    : <View >
                        <TouchableHighlight onPress={ () => {
                                dispatch(changeDoor('front'))
                            }
                        } style={this.styles.backend}>
                            <Text>{'后门' + this.props.showType}</Text>
                        </TouchableHighlight>
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

