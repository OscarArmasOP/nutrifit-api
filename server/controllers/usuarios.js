const usuarios = require('../models').usuarios
const jwt = require('../services/jwt');


/* =============================== Users ======================================= */
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

function login(req, res) {
    //referencia al modelo con metodo "findOne" de sequelize
    usuarios.findOne({
            where: {
                usuario: req.body.usuario,
                password: req.body.password
            }
        })
        .then(usuario => {
            if (usuario) {
                if (req.body.token) {
                    res.status(200).send({
                        token: jwt.createToken(usuario)
                    });
                } else {
                    res.status(200).send({
                        usuario: usuario,
                    });
                }
            } else {
                res.status(401).send({ message: "Acceso no autorizado" });
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Ocurrio un error al buscar el usuario" });
        })
}

function update(req, res) {
    let id_usuario = req.params.id;
    let body = req.body;

    usuarios.findByPk(id_usuario) //Busqueda en el modelo (en la tabla) por id
        .then(usuario => {
            usuario.update(body)
                .then(() => {
                    res.status(200).send({ usuario });
                })
                .catch(err => {
                    res.status(500).send({ message: "Ocurrio un error al actualizar el usuario" });
                })
        })
        .catch(err => { //error al buscar
            res.status(500).send({ message: "Ocurrio un error al obtener el usuario" });
        })

}

function getAll(req, res) {
    //Generar listado del modelo "all" de sequelize
    usuarios.findAll()
        .then(usuarios => {
            data = {
                usuarios,
                length: usuarios.length
            }
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({ message: "Ocurrio un error al buscar los usuarios" });
        })
}

function getById(req, res) {
    let id_usuario = req.params.id;

    usuarios.findByPk(id_usuario)
        .then(usuario => {
            res.status(200).send({ usuario });
        })
        .catch(err => {
            res.status(500).send({ message: "ocurrio un error al buscar el usuario" });
        })
}

module.exports = {
    create,
    login,
    getAll,
    update,
    getById
}