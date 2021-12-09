const { User } = require('../models');

const userData = [
    {
        "firstName": "Katlyn",
        "lastName": "Boches",
        "email": "katlyn@hotmail.com",
        "password": "password12345"
    },
    {
        "firstName": "Eric",
        "lastName": "Martin",
        "email": "eric@gmail.com",
        "password": "password12345"
    },
    {
        "firstName": "Jon",
        "lastName": "Jackson",
        "email": "jon@aol.com",
        "password": "password12345"
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;