const Realm = require('realm');
import Customer from '../db/Customer.js';
import {guid} from '../utils/utils.js';

const realm = new Realm({schema: [Customer]});

export default class CustomerDao {}

CustomerDao.addOne = function(){

    let d = {
        name: 'Hal Incandenza3',
        id: guid()
    };
    // Write
    realm.write(() => {
        savedPerson = realm.create('Customer', d);
    });

    console.warn(JSON.stringify(savedPerson));

    return savedPerson;
}

CustomerDao.delOne = function(id){
    // Write
    realm.write(() => {

        let c = realm.objects('Customer').filtered('id == ' + id);
        realm.delete(c);
    });
}