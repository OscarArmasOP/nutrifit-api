const dietas = require('../models').dietas
const jwt = require('../services/jwt');


/* =============================== Users ======================================= */
function create(req, res) {
    console.log('ENTRAMOS')
        //referencia al modelo con metodo "create" de sequelize
    dietas.create(req.body)
        .then(dieta => {
            res.status(200).send({ dieta });
        })
        .catch(err => {
            console.log("Error al crear un dieta")
            res.status(500).send({ err });
        })
}


function update(req, res) {
    let id_dietas = req.params.id;
    let body = req.body;

    dietas.findByPk(id_dietas) //Busqueda en el modelo (en la tabla) por id
        .then(dieta => {
            dieta.update(body)
                .then(() => {
                    res.status(200).send({ dieta });
                })
                .catch(err => {
                    res.status(500).send({ message: "Ocurrio un error al actualizar la dieta" });
                })
        })
        .catch(err => { //error al buscar
            res.status(500).send({ message: "Ocurrio un error al buscar la dieta" });
        })

}

function getAll(req, res) {
    //Generar listado del modelo "all" de sequelize
    dietas.findAll()
        .then(dieta => {
            data = {
                dieta,
                length: dieta.length
            }
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({ message: "Ocurrio un error al buscar las dietas" });
        })
}

function getById(req, res) {
    let id_dieta = req.params.id;

    dietas.findByPk(id_dieta)
        .then(dieta => {
            res.status(200).send({ dieta });
        })
        .catch(err => {
            res.status(500).send({ message: "ocurrio un error al buscar la dieta" });
        })
}

module.exports = {
    create,
    getById,
    getAll,
    update
}