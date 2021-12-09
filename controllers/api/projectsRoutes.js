const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auths');

// RESTful -> routes represent operations around an entity / resource
// In this our case, the resource is "projects"
// - create
// - list (index)
// - update 
// - delete

// // TODO: GET route that shows all projects
// router.get("/projects", async (req, res) => {
//   try {

//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// GET a project
router.get('/projects/:id', async (req, res) => {
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
router.put('/projects/:id', withAuth, async (req, res) => {
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

// In real world, the best practice is not NEVER delete your data (aka always keep a history)
// you can still define your DELETE route on a project
// but instead of doing Project.destroy (which will literally delete that row from your db)
// you can something like update an attribute on the model, e.g. project.deleted = true; or project.deleted_at = <timestamp>; or project.inactive = true
// then, for your LIST route (GET all), you filter out only the active projects, e.g. SELECT * FROM projects where DELETED is null

// DELETE a project
router.delete('/projects/:id', async (req, res) => {
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