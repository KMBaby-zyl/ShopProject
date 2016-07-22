const Realm = require('realm');
import Customer from '../db/Customer.js';
import {guid} from '../utils/utils.js';
import Mock from 'mockjs';

const realm = new Realm({schema: [Customer]});

export default class CustomerDao {}

CustomerDao.addOne = function(){

    let d = Mock.mock({
        name: '@cname',
        left: '@integer(60, 100)',
        id: '@guid'
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
        array.push(r[i]);
    }
    return array;
}