// Requiring all Models to establish relationships below
const User = require('./User');
const Tasks = require('./Tasks');
const Comment = require('./Comment');
const ProjectAsks = require('./ProjectAsks');
const Project = require('./Project');


// Model Relationships

User.hasMany(Project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Project.belongsTo(User, {
    foreignKey: 'project_id'
});

Project.hasMany(Comment, {
    foreignKey: 'project_id'
});

Comment.belongsTo(Project, {
    foreignKey: 'project_id'
})

ProjectAsks.belongsTo(Project, {
    foreignKey: 'project_id'
});

Project.hasMany(ProjectAsks, {
    foreignKey: 'project_id'
});

Tasks.belongsTo(Project, {
    foreignKey: 'project_id'
});

Project.hasMany(Tasks, {
    foreignKey: 'project_id'
});


// Exporting
module.exports = { User, Tasks, Comment, ProjectAsks, Project };