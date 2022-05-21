let nJwt = require('njwt');
let config = require('../config/config');
let secret = config.token_secret;

exports.createToken = (usuario) => {
    let params = {
        sub: usuario.id,
        usuario: usuario.usuario,
        id_rol: usuario.id_rol
    }
    let jwt = nJwt.create(params, secret);

    let hours = new Date();
    hours.setHours(hours.getHours() + 2);
    jwt.setExpiration(hours);

    //Cadena codificada en base 64
    let token = jwt.compact();

    return token;
}