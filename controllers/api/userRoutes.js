const router = require('express').Router();
const {User} = require('../../models'); 
// this route is /api/users/signup
router.post('/signup', async (req, res) => {
    try {
        const newUser = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.logged_in = true;

            res.status(200).json(newUser);
        });
    } catch (err) {
        res.status(400).json(err);
    }
}); 

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
        console.log(userData);

        if (!userData) {
          return  res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
           
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
          return  res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
          
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
