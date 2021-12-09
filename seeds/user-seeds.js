const { User } = require('../models');

const userData = [
    {
        "firstName": "Katlyn Boches",
        "email": "katlyn@hotmail.com",
        "password": "password12345"
    },
    {
        "firstName": "Eric Martin",
        "email": "eric@gmail.com",
        "password": "password12345"
    },
    {
        "firstName": "Jon Jackson",
        "email": "jon@aol.com",
        "password": "password12345"
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;