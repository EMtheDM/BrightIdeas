const { Tasks } = require('../models');

const tasksData = [
    {
        name: 'Compare donuts',
        stage: 1,
        project_id: 1
    },
    {
        name: 'Find locations',
        stage: 2,
        project_id: 1
    },
    {
        name: 'Take selfie',
        stage: 3,
        project_id: 1
    },
    {
        name: 'Example 2',
        stage: 1,
        project_id: 2
    },
    {
        name: 'Example 3',
        stage: 1,
        project_id: 2
    },
    {
        name: 'Example 4',
        stage: 2,
        project_id: 2
    },
    {
        name: 'Example 5',
        stage: 3,
        project_id: 2
    }
];

const seedTasks = () => Tasks.bulkCreate(tasksData);

module.exports = seedTasks;