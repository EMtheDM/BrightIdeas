const { Comment, Project } = require('../models');

const commentData = [
    {
        comment: 'comment 1.2',
        project_id: '1',
    },
    {
        comment: 'comment 1.3',
        project_id: '1',
    },
    {
        comment: 'comment 1.4',
        project_id: '1',
    },
    {
        comment: 'comment 2.1',
        project_id: '2',
    },
    {
        comment: 'comment 2.3',
        project_id: '2',
    },
    {
        comment: 'comment 2.4',
        project_id: '2',
    },
    {
        comment: 'comment 3.1',
        project_id: '3',
    },
    {
        comment: 'comment 3.2',
        project_id: '3',
    },
    {
        comment: 'comment 3.4',
        project_id: '3',
    },
    {
        comment: 'comment 4.1',
        project_id: '4',
    },
    {
        comment: 'comment 4.2',
        project_id: '4',
    },
    {
        comment: 'comment 4.3',
        project_id: '4',
    },
]

const commentSeed = () => Comment.bulkCreate(commentData);

module.exports = commentSeed;
// 