import React, {Component} from 'react';
import {ScreenHeight, ScreenWidth} from '../utils/common.js';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';


import { clickCustom, addCustom } from '../action/action.js';
import { connect } from 'react-redux';

class Customers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            left: 100,
            right: 100,
            img: '',
            name: '顾客',
            showType: '0',
            equipment: null, // 携带的装备id
            // customerList: props.customerList
        };

        const { dispatch } = this.props;
        // dispatch(addCustom());
    }

    styles = StyleSheet.create({
        view: {
            height: 0,
            width: 0,
            backgroundColor: '#dfdfdf',
            position: 'absolute',
        }
    });
    render() {
        let self = this;
        const { dispatch } = this.props;

        // console.warn(JSON.stringify('render' + this.props.customerList));
        return (
            <View style={this.styles.view}>
                {
                    this.props.customerList.map(function(item){
                        return <TouchableHighlight key={item.id} onPress={ () =>{
                                dispatch(clickCustom(item.id))
                            }} style={item.styles}>
                                <Text>{item.name }</Text>
                            </TouchableHighlight>
                    })
                }
            </View>
        )
    }
}



function select(state){
    console.warn('connect' + JSON.stringify(state.customerList));
    return {
        customerList: state.customerList
    }
}

export default connect(select)(Customers);
