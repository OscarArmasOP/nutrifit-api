const historiales_clinicos = require('../models').historiales_clinicos
const jwt = require('../services/jwt');


/* =============================== Users ======================================= */
function create(req, res) {
    console.log('ENTRAMOS')
        //referencia al modelo con metodo "create" de sequelize
    historiales_clinicos.create(req.body)
        .then(historial_clinico => {
            res.status(200).send({ historial_clinico });
        })
        .catch(err => {
            console.log("Error al crear un historial clinico")
            res.status(500).send({ err });
        })
}

function update(req, res) {
    let id_historial = req.params.id;
    let body = req.body;

    historiales_clinicos.findByPk(id_historial) //Busqueda en el modelo (en la tabla) por id
        .then(historial_clinico => {
            historial_clinico.update(body)
                .then(() => {
                    res.status(200).send({ historial_clinico });
                })
                .catch(err => {
                    res.status(500).send({ message: "Ocurrio un error al actualizar el historial clinico" });
                })
        })
        .catch(err => { //error al buscar
            res.status(500).send({ message: "Ocurrio un error al buscar el historial" });
        })

}

function getAll(req, res) {
    //Generar listado del modelo "all" de sequelize
    historiales_clinicos.findAll()
        .then(historial_clinico => {
            data = {
                historial_clinico,
                length: historial_clinico.length
            }
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({ message: "Ocurrio un error al buscar los historiales" });
        })
}

function getById(req, res) {
    let id_historial = req.params.id;

    historiales_clinicos.findByPk(id_historial)
        .then(historial_clinico => {
            res.status(200).send({ historial_clinico });
        })
        .catch(err => {
            res.status(500).send({ message: "ocurrio un error al buscar el historial" });
        })
}

module.exports = {
    create,
    getById,
    getAll,
    update

}