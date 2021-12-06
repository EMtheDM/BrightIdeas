const { User } = require('../models');

const userData = [
    {
        "firstName": "Katlyn",
        "email": "katlyn@hotmail.com",
        "password": "password12345"
    },
    {
        "firstName": "Eric",
        "email": "eric@gmail.com",
        "password": "password12345"
    },
    {
        "firstName": "Jon",
        "email": "jon@aol.com",
        "password": "password12345"
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;