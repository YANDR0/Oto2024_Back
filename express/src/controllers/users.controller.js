const user = require('./../models/user')

class UsersController {
    getAll(req, res) {
        const users = user.find()
        res.send(users)
    }

    getById(req, res) {
        const userId = req.params.id;
        res.send(`Datos del usuario ${userId}`)
    }
}


module.exports = new UsersController();