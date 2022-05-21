/*TIPOS DE USUARIOS
    1 = ADMIN
    2 = NUTRIOLOGO
    3 = PACIENTE
*/
module.exports = (sequelize, DataTypes) => {
    const usuarios = sequelize.define('usuarios', {
        //Campos de nuestra tabla
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        usuario: DataTypes.STRING,
        password: DataTypes.STRING,
        nombre: DataTypes.STRING,
        apellidos: DataTypes.STRING,
        edad: DataTypes.INTEGER,
        genero: DataTypes.STRING,
        cedula_profesional: DataTypes.STRING,
        id_rol: DataTypes.INTEGER,
        activo: DataTypes.BOOLEAN,
        usuario_creacion: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    });

    return usuarios;
}