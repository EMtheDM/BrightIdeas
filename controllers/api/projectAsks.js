const router = require('express').Router();
const ProjectAsks = require('../../models/ProjectAsks');
const withAuth = require('../../utils/auths');


// GET route that shows all projects asks
router.get('/ProjectAsks/:id', async (req, res) => {
  try {
    const userData = await ProjectAsks.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No project asks found!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST route to create a projectAsks route to the tasks column

router.post('/', withAuth, async => (req, res) => {
    try{
        const newAsk = await ProjectAsks.create({
          ...req.body, 
          project_id: req.session.project_id,  
        });

        res.status(200).json(newAsk);
    }
    catch {
    }  
});

// UPDATE a project ask
router.put('/ProjectAsks/:id', async (req, res) => {
  try {
    const userData = await ProjectAsks.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No project asks found!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;