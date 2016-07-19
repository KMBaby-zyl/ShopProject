import React, {Component} from 'react';

import {
  View,
  Image,
  Text
} from 'react-native';

const Realm = require('realm');
import Person from '../db/person.js';

export default class Customers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            left: 100,
            right: 100,
            img: '',
            name: '顾客',
            showType: '0',
            equipment: null // 携带的装备id
        };

        // const realm = new Realm({schema: [Person]});

        // // Query
        // let people = realm.objects('Person', 'age >= 17');
        // people.length // => 0

        // // Write
        // realm.write(() => {
        //     savedPerson = realm.create('Person', {
        //         name: 'Hal Incandenza',
        //         age: 17,
        //     });
        // });
    }

    render() {

        return (
            <View>
                {
                    <Image source={''} >
                        <Text>{this.state.name}</Text>
                    </Image>
                }
            </View>
        )
    }
}


