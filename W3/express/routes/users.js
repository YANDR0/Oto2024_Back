const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Lista de usuarios')
})

router.get('/:id', (req, res) => {
    const userID = req.params.id
    res.send(`Datos del ususario ${userID}`)
})

router.post('/', (req, res) => {
    res.send('Crear un usuario')
})


module.exports = router;