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
        };
    }

    componentDidMount() {
        let {position} = this.state;

        position.setValue({
            x: 0,
            y: 330
        });
        Animated.sequence([            // 首先执行decay动画，结束后同时执行spring和twirl动画
            // Animated.decay(position, {   // 滑行一段距离后停止
            //     velocity: {x: 200, y: 300}, // 根据用户的手势设置速度
            //     deceleration: 0.997,
            // }),
            Animated.parallel([          // 在decay之后并行执行：
                Animated.timing(position, {
                    toValue: {x: ScreenWidth, y: 330},    // 返回到起始点开始
                    duration: 3000
                }),
                // Animated.timing(twirl, {   // 同时开始旋转
                //     toValue: 360,
                // }),
            ]),
        ]).start();

        position.addListener(function(val){
            if(val.x == ScreenWidth){

            }
        });
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
                    dispatch(clickCustom(item.id))
                }} style={item.styles}>
                    <Text>{item.name }</Text>
                </TouchableHighlight>
            </Animated.View>
        )
    }
}
