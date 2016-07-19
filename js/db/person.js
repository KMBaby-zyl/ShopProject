class Person {}

Person.schema = {
    name: 'Person',
    primaryKey: 'name',
    properties: {
        name: 'string',
        age: {type: 'int', default: 0},
    },
};