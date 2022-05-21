const historial = require('../models').historial
const jwt = require('../services/jwt');


function create(req, res) {
    console.log('ENTRAMOS')
        //referencia al modelo con metodo "create" de sequelize
    usuarios.create(req.body)
        .then(usuario => {
            res.status(200).send({ usuario });
        })
        .catch(err => {
            console.log("Error al crear un usuario")
            res.status(500).send({ err });
        })
}

module.exports = {
    create,
    login,
    getAll,
    update,
    getById
}