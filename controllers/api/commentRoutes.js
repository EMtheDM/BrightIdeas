const router = require('express').Router();
const Comment = require('../../models/Comment');
const withAuth = require('../../utils/auths');


// GET route that shows all comments
router.get('/Comment/:id', async (req, res) => {
  try {
    const userData = await Comment.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No comments found!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST route to create a comment route to the comments column

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
          ...req.body, 
          project_id: req.session.comment_id,  
        });

        res.status(200).json(newComment);
    }
    catch (err) {
      res.status(500).json(err);
    } 
});

// UPDATE a project ask
router.put('/comment/:id', async (req, res) => {
  try {
    const userData = await Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No comments found!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;