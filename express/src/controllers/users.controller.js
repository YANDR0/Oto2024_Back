class UsersController {
    getAll(req, res) {
        res.send([{
            id: 1,
            name: 'Juan Perez'
        }])

    }

    getById(req, res) {
        const userId = req.params.id;
        res.send(`Datos del usuario ${userId}`)
    }
}


module.exports = new UsersController();