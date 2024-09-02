const express = require('express');
const router = express.Router();
const authMiddleware =  require('./../middlewares/auth');

router.get('/users', authMiddleware, (req, res) => {
    res.send([
        {
            id: 1, 
            name: 'Juan Carlos',
            email: 'e@mail.com'
        }
    ])

})

module.exports = router;