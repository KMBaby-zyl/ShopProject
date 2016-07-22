import React, {Component} from 'react';

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
            peopleNum: 2,
            equipment: null, // 携带的装备id
            // customerList: props.customerList
        };

        const { dispatch } = this.props;
        dispatch(addCustom());
    }

    styles = StyleSheet.create({
        customer_1: {
            width: 50,
            height: 50,
            backgroundColor: '#FFD700'
        }
    });

    // componentWillReceiveProps(nextProps){
    //     console.warn('revice');
    //     this.setState({
    //         customerList: props.customerList
    //     });
    // }

    render() {
        let self = this;
        const { dispatch } = this.props;

        // console.warn(JSON.stringify('render' + this.props.customerList.length));
        return (
            <View>
                {
                    this.props.customerList.map(function(item){
                        return <TouchableHighlight key={item.id} onPress={ () =>{
                                dispatch(clickCustom(item.id))
                            }} style={self.styles.customer_1}>
                                <Text>{self.state.name + self.state.peopleNum}</Text>
                            </TouchableHighlight>
                    })
                }
            </View>
        )
    }
}



function select(state){
    // console.warn(JSON.stringify('connect'+state.customerList.length));
    return {
        customerList: state.customerList
    }
}

export default connect(select)(Customers);
