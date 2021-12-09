const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const projectRoutes = require('./projectRoutes');
// const projectAsksRoutes = require('./projectAsks');
// const listRoutes = require('./listRoutes');
// const taskRoutes = require('./taskRoutes');
// const commentRoutes = require('./commentRoutes');


router.use('/users', userRoutes);
// router.use('/projects', projectRoutes);
// router.use('/projectAsks', projectAsksRoutes);
// router.use('/projectLists', listRoutes);
// router.use('/tasks', taskRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;