const router = require('express').Router();
const User = require('../../models/Project');

// GET a project
router.get('/:id', async (req, res) => {
  try {
    const userData = await Project.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No project with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a project 
router.put('/:id', async (req, res) => {
  try {
    const userData = await Project.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No project with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a project
router.delete('/:id', async (req, res) => {
  try {
    const userData = await Project.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: 'No project with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;