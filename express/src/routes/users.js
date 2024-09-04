const express = require('express');
const router = express.Router();
const usersController = require('./../controllers/users.controller')

router.get('/', usersController.getAll)
router.get('/:id', usersController.getById)

router.post('/', (req, res) => {
    res.send('Crear un usuario')
})


module.exports = router;