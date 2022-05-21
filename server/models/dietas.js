module.exports = (sequelize, DataTypes) => {
    const dietas = sequelize.define('dietas', {
        //Campos de nuestra tabla
        id_dieta: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        tipo: DataTypes.STRING,
        calorias: DataTypes.INTEGER,
        descripcion: DataTypes.STRING,
        dieta: DataTypes.STRING,
        id_nutriologo: DataTypes.INTEGER,
        id_paciente: DataTypes.INTEGER
    });

    return dietas;
}