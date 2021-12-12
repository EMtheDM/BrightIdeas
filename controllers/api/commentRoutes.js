const router = require('express').Router();
const Comment = require('../../models/Comment');
const withAuth = require('../../utils/auths');


// GET route that shows all comments
router.get('/Comment/:id', async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No comments found!' });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST route to create a comment route to the comments column

router.post('/', withAuth, async (req, res) => {
  console.log("POOOP");
    try {
      console.log("MOOOOOOOOOOO", 
      req.body);
        const newComment = await Comment.create({
          comment: req.body.comment, 
          project_id: req.session.project_id,  
        });
        

        console.log('this is the newComment: ', 
        newComment, 
        "====================================================");
        res.status(200).json(newComment.dataValues);
    }
    catch (err) {
      res.status(500).json(err);
    } 
});

// UPDATE a project ask
router.put('/comment/:id', async (req, res) => {
  try {
    const commentData = await Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!commentData[0]) {
      res.status(404).json({ message: 'No comments found!' });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Exporting the router
module.exports = router;