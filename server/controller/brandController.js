const {Brand} = require('../models/models');
const ApiError = require('../error/apiError');

// Контроллеры - это прощу говоря функции, которые вызываются при обращении клиентом к серверу
// Обращение обычно запивывается в формате json, исключение - если нужно записать изображения

class brandController {

    async createBrand(req, res) {
        // req.body - это и есть информация с обращением к серверу (пример будет ниже)
        const {name} = req.body
        // create - это функция Sequelize которое создаёт новое значение в таблице 
        const brand = await Brand.create({name})
        return res.json(brand)
    };

    async getBrand(req, res) {
        // findall - это функция Sequelize которая выводит все значения из таблицы
        const findBrand = await Brand.findAll();
        return res.json(findBrand)
    };

};

module.exports = new brandController();


// Пример работы req.body - {"name": "Alex"}
// Это json строка в которую записываются данные, const {name} берет значение name из req.body