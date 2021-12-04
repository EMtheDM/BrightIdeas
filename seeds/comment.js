const { Comment, Project } = require('../models');
// Created seeds for comments

const commentData = [
    {
        comment: 'Project Started',
        project_id: '1',
    },
    {
        comment: 'Project in Progress',
        project_id: '1',
    },
    {
        comment: 'Making Notes on Project',
        project_id: '1',
    },
    {
        comment: 'Commenting on Project Changes',
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