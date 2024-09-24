const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');

// this route is /api/users
router.use('/users', userRoutes);
// this route is /api/blogs
router.use('/blogs', blogRoutes);
router.get("*",(req, res)=>{
    res.status(404).send("404 error: route not defined") 
})

module.exports = router;