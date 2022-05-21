const usuarioController = require('../controllers').usuarios;
const md_auth = require('../auth/auth');

module.exports = (app) => {
    app.post('/api/usuario', usuarioController.create);
    app.post('/api/login', usuarioController.login);
    app.get('/api/usuarios', usuarioController.getAll);
    app.put('/api/usuario/:id', usuarioController.update);
    app.get('/api/usuario/:id', usuarioController.getById);
    //app.post('/api/usuario', md_auth.auth, usuarioController.create);
}