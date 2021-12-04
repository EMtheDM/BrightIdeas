const { ProjectAsks } = require('../models');

const projectAsksData = [
    {
        description: 'Create the backend of a donut social media website.',
        project_id: 1
    },
    {
        description: 'Add dynamic GIFs to posts.',
        project_id: 2
    },
    {
        description: 'Add map showing local breweries within 25 mile radius.',
        project_id: 3
    }
];

const seedProjectAsks = () => ProjectAsks.bulkCreate(projectAsksData);

module.exports - seedProjectAsks;