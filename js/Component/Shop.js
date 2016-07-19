import React, {Component} from 'react';

import {
  View,
  Image,
  Text
} from 'react-native';


export default class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showType: true
        };
    }

    render() {
        return (
            <View>
                {
                    this.state.showType ?
                    <Image source={''}>
                        <Text>正门</Text>
                    </Image>
                    : <Image source={''}>
                        <Text>后门</Text>
                    </Image>
                }
            </View>
        )
    }
}


