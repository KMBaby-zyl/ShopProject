const Realm = require('realm');
import Customer from '../db/Customer.js';
import {guid} from '../utils/utils.js';
import Mock from 'mockjs';
import {ScreenHeight, ScreenWidth} from '../utils/common.js';

const realm = new Realm({schema: [Customer]});

export default class CustomerDao {}

CustomerDao.addOne = function(){

    let d = Mock.mock({
        name: '@cname',
        id: '@guid',
        left: '@integer(0, ' + ScreenWidth + ')',
        top: '@integer(0, ' + ScreenHeight + ')',
        width: 50,
        height: 50,
        backgroundColor: '#FFD700'
    });
    // Write
    realm.write(() => {
        let savedPerson = realm.create('Customer', d);
    });

    return d;
}

CustomerDao.delOne = function(id){
    // Write
    realm.write(() => {

        let c = realm.objects('Customer').filtered('id == "' + id + '"');
        // console.warn(JSON.stringify(c));
        realm.delete(c);
    });
}

CustomerDao.findALl = function(){
    let r = realm.objects('Customer');
    let array = [];
    for(let i in r){
        let item = Object.assign({}, r[i]);
        array.push(item);
    }
    return array;
}