module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // name: type.TEXT,
        username: type.TEXT,
        password: type.TEXT,
        fullname: type.TEXT
        // email: type.TEXT
    })
}