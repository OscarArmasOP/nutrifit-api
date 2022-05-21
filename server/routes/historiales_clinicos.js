const historialController = require('../controllers').historiales_clinicos;
const md_auth = require('../auth/auth');

module.exports = (app) => {
    app.post('/api/historial', historialController.create);
    app.get('/api/historiales', historialController.getAll);
    app.put('/api/historial/:id', historialController.update);
    app.get('/api/historial/:id', historialController.getById);
}