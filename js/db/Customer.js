class Customer {}

Customer.schema = {
    name: 'Customer',
    primaryKey: 'id',
    properties: {
        id:    'string',
        name: 'string',
    },
};

export default Customer;