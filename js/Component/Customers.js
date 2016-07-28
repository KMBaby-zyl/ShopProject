import React, {Component} from 'react';
import {ScreenHeight, ScreenWidth} from '../utils/common.js';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  Animated,
  StyleSheet,
} from 'react-native';


import { addCustom } from '../action/action.js';
import { connect } from 'react-redux';
import CustomerItem from './CustomerItem.js';

 export default class Customers extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        const { dispatch } = this.props;
        dispatch(addCustom());
    }

    styles = StyleSheet.create({
        view:{
            height: 0,
            width: 0,
            backgroundColor: '#dfdfdf',
            position: 'absolute',
            left: 0,
            top: 0
        }
    });

    componentDidMount() {
    }

    render() {
        let self = this;
        const { dispatch, shop } = this.props;
        let {customerList} = this.props.customers;
        // console.warn('render' + JSON.stringify(this.styles));

        return (
            <View style={this.styles.view}>
                {
                    customerList.map(function(item){
                        item.isShow = shop.showType == item.where ? true : false;

                        return <CustomerItem dispatch={dispatch} key={item.id} item={item}></CustomerItem>
                    })
                }
            </View>
        )
    }
}



// function select(state){
//     // console.warn('connect' + JSON.stringify(state.customerList));
//     return {
//         customerList: state.customers.customerList
//     }
// }

// export default connect(select)(Customers);
