const uuid = require('uuid');
const path = require('path');
const {Device} = require('../models/models');
const {DInfo} = require('../models/models');
const ApiError = require('../error/apiError');


class deviceController {

    async createDevice(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body;
            // В этот раз мы берём еще и изображения из req.files 
            const {img} = req.files;
            // uuid - это особая библиотека, которая даёт файлу особое название
            let imgFileName = uuid.v4() + ".jpg";
            // Переносим изображение в папку static
            img.mv(path.resolve(__dirname, '..', 'static', imgFileName));

            // info хранит в себе какую- то информацию о товаре, но если info нет, то она не запишется
            if (info) {
                info = JSON.parse(info);
                info.forEach(i => {
                    DInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: i.deviceId
                    })
                })
            }
    
            const device = await Device.create({name, price, brandId, typeId, img: imgFileName});
    
            return res.json(device)
        } catch (error) {
            next(ApiError.notFound(error.message))
        }

    };

    async getDevices(req, res) {
        // req.query - это параметры которые были введены в ссылке, наприпер, если нужно чтобы произошел поиск по id
        // Ссылка будет выглядеть так: "http://127.0.0.1:8080/api/device?id=3"
        var {brandId, typeId, page, limit} = req.query
        //Объяснение с page и limit будут ниже
        page = page || 1
        limit = limit || 9

        var offset = page * limit - limit

        let devices

        // Здесь происзодит поиск
        //Если нет параметров поиска, то выводит все имеющиеся товары 
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset});

        };
        // Выводит товары по бренду
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset});
        };
        // Выводит товары по его типу (телефоны, телевизоры и т.д.)
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset});
        };
        // Выводит товары и по бренду, и типу
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset});
        };
        
        return res.json(devices)
    };

    async getOneDevice(req, res) {
        const {id} = req.params
        const device = await Device.findOne({
            where: {id},
            include: [{model: DInfo, as: 'info'}]
        })
        return res.json(device)
    };

    async deleteDevice(req, res) {
        const {id} = req.params
        const delDevice = await Device.destroy({
            where: {id}
        })

        return res.json(delDevice)
    }

};

module.exports = new deviceController();



//Короче, переменная limit хранит в себе максимальное количество строк на экране, а page это страницы на экране
//