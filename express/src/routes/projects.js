const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Lista de proyectos')
})

router.post('/', (req, res) => {
    res.send('Crear un proyectos')
})


module.exports = router;