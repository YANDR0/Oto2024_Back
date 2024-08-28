const express = require('express');
const router = express.Router();

const users = require('./users');
const projects = require('./projects');

router.get('/', (req, res) => {
    res.send('Pagina de inicio')
})

router.use('/users', users);
router.use('/projects', projects);

module.exports = router;