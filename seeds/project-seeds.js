const { Project } = require('../models');

const projectData = [
    {
        name: 'E-Commerce Platform',
        description: 'ABC Company would like to have a functioning E-Commerce platform to sell their products.',
        date_created: 2021-12-05,
        client_name: "Brad Johnson",
        client_email: "bjohnson@gmail.com",
        client_phone: "4795551234",
    },
    {
        name: 'Commercial Website',
        description: 'Ford Motor Company would like to have an overhaul to their current website.',
        date_created: 2021-10-03,
        client_name: 'Jack Bellamy',
        client_email: "jbellamy@gmail.com",
        client_phone: "4799876543", 
    },
    {
        name: 'New API',
        description: 'Apple would like to have a new API to track user data.',
        date_created: 2021-08-03,
        client_name: "Trevor McCoy",
        client_email: "tmccoy@gmail.com",
        client_phone: "4793759856", 
    },
    {
        name: 'Dog Tracker',
        description: 'PetCo would like to have a functioning non-invasive dog tracker.',
        date_created: 2021-09-08,
        client_name: "Carl Reynolds",
        client_email: "creynolds@gmail.com",
        client_phone: 4795556789, 
    },
    {
        name: 'Tech Blog',
        description: 'Discover Magazine wants a fully functioning tech blog to report their discoveries.',
        date_created: 2021-08-28,
        client_name: "Victor Stein",
        client_email: "vstein@gmail.com",
        client_phone: "4795559674", 
    },
];

const seedProject = () => Project.bulkCreate(projectData);

module.exports = seedProject;