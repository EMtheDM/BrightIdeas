const router = require('express').Router();
const { Tasks } = require('../../models');
const withAuth = require('../../utils/auths');

router.post('/', withAuth, async (req, res) => {
    try {
        const newTask = await Tasks.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newTask);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/edit/:id', withAuth, async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
        return;
    }

    try {
        const dbTaskData = await Tasks.update({
            name: req.body.name,
            task_content: req.body.task_content
        },
        {
            where: {
                id: req.params.id
            }
        }
    );

    res.status(200).json(dbTaskData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const taskData = await Tasks.destroy({
            where: {
                id: req.params.id,
                project_id: req.session.project_id,
            },
        });

        if (!taskData) {
            res.status(404).json({ message: 'No task found with this id!' });
            return;
        }

        res.status(200).json(taskData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;