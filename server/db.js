// Sequelize позваляет работать с базой данных без SQL запросов
const {Sequelize} = require('sequelize');

// Экспортироуется новый объект Sequelize
// Объекту нужны данные для входа в БД, эти данные лежат в файле .env  
module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect:"postgres",
        host: process.env.DB_HOST,
        post: process.env.DB_PORT
    }
)