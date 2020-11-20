import { Sequelize } from '/index.js'

//this should set up the user table
module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        id: {
            type: sequelize. INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        hashedPassword: {
            type: Sequelize.STRING(64),
            allowNull: false
        }
    });
    User.beforeCreate(user, options) => {
        const salt = bcrypt.createSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
    };
    User.prototype.validPassword = function(password){
        return bcrypt.compareSync(password, this.password)
    }

    // create all defined tables
    sequelize.sync()
    .then(() => console.log('User table has been created'))
    .catch(error => console.log('Error Ocurred', error));
}