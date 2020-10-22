const Example = require('../../db/models/example'),
  router = require('express').Router();

// ***********************************************//
// Get all examples
// examples?limit=10&skip=10
// examples?sortBy=createdAt:asc
// ***********************************************//
router.get('/api/examples', async (req, res) => {
  try {
    let limit = 10,
      skip = 0;
    if (req.query.sortBy) {
      const parts = req.query.sortBy.split(':');
      sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
    }
    if (req.query.limit) limit = parseInt(req.query.limit);
    if (req.query.skip) skip = parseInt(req.query.skip);
    const examples = await Example.find({})
      .limit(limit)
      .sort('-createdOn')
      .skip(skip);
    res.json(examples);
  } catch (error) {
    console.log(error);
  }
});

router.get('/api/test', async (req, res) => {
  res.json('Hello from server!');
});
module.exports = router;
