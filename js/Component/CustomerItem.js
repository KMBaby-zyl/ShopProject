import React, {Component} from 'react';
import {ScreenHeight, ScreenWidth} from '../utils/common.js';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  Animated,
  StyleSheet
} from 'react-native';


import { clickCustom, addCustom } from '../action/action.js';
import { connect } from 'react-redux';

export default class CustomersItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            left: 100,
            right: 100,
            img: '',
            name: '顾客',
            showType: '0',
            equipment: null, // 携带的装备id
            position: new Animated.ValueXY(),
            isonclick: false
        };
    }

    componentDidMount() {
        let self = this;
        let {position} = this.state;

        this.animateMove();
    }

    clickHandle(callback){
        let self = this;


        let {position} = this.state;
        let {item} = this.props;

        self.setState({
            isonclick: true
        }, function(){
            position.stopAnimation(function(data){
                Animated.timing(position, {
                    toValue: {x: 200, y: 0},
                    duration: 3000
                }).start(function(){
                    // console.warn('del');
                    callback();
                });
            });
        });
    }

    animateMove(){
        let self = this;
        let {position} = this.state;
        let {item} = this.props;
        position.setValue({
            x: 0,
            y: 330
        });

        Animated.sequence([
            Animated.parallel([
                Animated.timing(position, {
                    toValue: {x: (ScreenWidth - item.width), y: 330},
                    duration: 3000
                })
            ]),
            Animated.parallel([
                Animated.timing(position, {
                    toValue: {x: 0, y: 330},
                    duration: 3000
                })
            ]),
        ]).start(function(){
            if(self.state.isonclick == true) return;
            self.animateMove();
        })
    }

    render() {
        let self = this;
        const { dispatch, item } = this.props;
        item.styles = {
            left: 0, //item.left,
            top: 0, //item.top,
            width: item.width,
            height: item.height,
            backgroundColor: item.backgroundColor,
        };

        return (
            <Animated.View style={this.state.position.getLayout()}>
                <TouchableHighlight onPress={ () =>{
                    self.clickHandle(function(){
                        dispatch(clickCustom(item.id))
                    });
                }} style={item.styles}>
                    <Text>{item.name }</Text>
                </TouchableHighlight>
            </Animated.View>
        )
    }
}
