const jwt = require('jsonwebtoken')

module.exports = function (userRole) {
    return function(req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        };
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(401).json({message: "Пользователь не авторизован"})
            };
            const decode = jwt.verify(token, process.env.SECRET_KEY);
            if (decode.role !== userRole) {
                return res.status(403).json({message: "У вас нет доступа"});
            }
            req.user = decode;
            next()
    
        } catch (e) {
            res.status(401).json({message: "Пользователь не авторизован"})
        };
    };
};