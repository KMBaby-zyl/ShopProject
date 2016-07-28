class Customer {}

Customer.schema = {
    name: 'Customer',
    primaryKey: 'id',
    properties: {
        id:    'string',
        name: 'string',
        width: 'int',
        height: 'int',
        backgroundColor: 'string',
        left: 'int',
        top: 'int',
        where: 'string'
    },
};

export default Customer;