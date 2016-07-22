/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import App from './js/app.js';
import myworld from './js/world.js';

class AwesomeProject extends Component {
    componentDidMount() {
        myworld.run();
    }
    render() {
        return (
            <App></App>
        );
    }
}



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
