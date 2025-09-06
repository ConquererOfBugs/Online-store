const ApiError = require("../error/apiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {User, Bascket} = require("../models/models");

const generateToken = (id, email, role) => {
    return jwt.sign(
        {id: id, email, role},
        process.env.SECRET_KEY,
        //Токен нельзя хранить долгое время, поэтому expiresIn хранит токен в течении определённого промежутка времени
        //В данном случае 24 часа
        {expiresIn: '24h'});
};

class userController {

    async registration(req, res, next) {
        const {email, password, role, userId} = req.body;
        if(!email || !password) {
            return next(ApiError.notFound("Неверный email или пароль"));
        };

        const canditate = await User.findOne({where: {email}});

        if (canditate) {
            return next(ApiError.notFound("Такой пользователь уже существует"))
        };

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, role, password: hashPassword});
        const bascket = await Bascket.create({userId: user.id});
        const token = generateToken(user.id, user.email, user.role)
        return res.json(token)
    };

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if(!user) {
            return next(ApiError.notFound("Пользователь с такой почтой не найден"))
        };
        var corrPassword = bcrypt.compareSync(password, user.password);
        if (!corrPassword) {
            return next(ApiError.notFound("Неправельный пароль"));
        };
        const token = generateToken(user.id, user.email, user.role);
        return res.json({token: token});
    };

    async checkUser(req, res, next) {
        const token = generateToken(req.user.id, req.user.email, req.user.role);
        return res.json(token)
    };

    async getUsers(req, res) {
        const getuser = await User.findAll();
        return res.json(getuser);
    };

    async deleteUser(req, res) {
        try {
            const {id} = req.query;
            const delUser = await User.destroy({where: {id}});
            return res.json(delUser);
        } catch (e) {
            console.log(e);
            
        }
    }


};

module.exports = new userController();