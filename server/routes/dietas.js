const dietaController = require('../controllers').dietas;
const md_auth = require('../auth/auth');

module.exports = (app) => {
    app.post('/api/dieta', dietaController.create);
    app.get('/api/dietas', dietaController.getAll);
    app.put('/api/dieta/:id', dietaController.update);
    app.get('/api/dieta/:id', dietaController.getById);
}