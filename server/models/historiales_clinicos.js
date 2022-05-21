module.exports = (sequelize, DataTypes) => {
    const historial_clinico = sequelize.define('historiales_clinicos', {
        //Campos de nuestra tabla
        id_historial: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        id_paciente: DataTypes.INTEGER,
        motivo: DataTypes.STRING,
        actividades: DataTypes.STRING,
        ejercicio: DataTypes.STRING,
        signos: DataTypes.STRING,
        peso: DataTypes.INTEGER,
        estatura: DataTypes.INTEGER,
        circunferencia_brazo: DataTypes.INTEGER,
        circunferencia_cintura: DataTypes.INTEGER,
        circunferencia_muñeca: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    });

    return historial_clinico;
}