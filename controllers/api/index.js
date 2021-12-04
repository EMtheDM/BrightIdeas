const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const projectAsksRoutes = require('./projectAsksRoutes');
const projectListRoutes = require('./projectListRoutes');
const taskRoutes = require('./taskRoutes');


router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/projectAsks', projectAsksRoutes);
router.use('/projectLists', projectListRoutes);
router.use('/tasks', taskRoutes);

module.exports = router;