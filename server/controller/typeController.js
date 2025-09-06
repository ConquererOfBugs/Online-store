const {Type} = require('../models/models');
const ApiError = require('../error/apiError');

class typeController {

    async createType(req, res) {
        const {name} = req.body
        const type = await Type.create({name});
        return res.json(type);
        
    };

    async getType(req, res) {
        const findTypes = await Type.findAll();
        return res.json(findTypes)
    };

};

module.exports = new typeController();