const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Lista de usuarios')
})

router.post('/', (req, res) => {
    res.send('Crear un usuario')
})


module.exports = router;