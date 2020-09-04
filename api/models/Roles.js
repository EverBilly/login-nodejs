module.exports = (sequelize, type) => {
    return sequelize.define('rol', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.TEXT,
        desc: type.TEXT
    });
};
