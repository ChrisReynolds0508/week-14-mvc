const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
// In the code snippet above, we're importing the express object and creating a new router object. We're also importing the apiRoutes and homeRoutes objects and using them in our router. Finally, we're exporting the router object.