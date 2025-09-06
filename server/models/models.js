const sequelize = require("../db");
const {DataTypes} = require('sequelize');

// С помощью sequelize.define как раз создаётся новая таблица в базе данных
// Первое значение в define - это имя таблицы, второе - это  комплекс значений в таблице, и их настройки
const User = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
});

const Bascket = sequelize.define('basckets', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const BascketDevice = sequelize.define('bascket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.FLOAT, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false}
});

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
});

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.FLOAT, allowNull: false},
});

const DInfo = sequelize.define('info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
});

const TypetoBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

// Функции hasOne и belongsTo связывают таблицы между собой
User.hasOne(Bascket);
Bascket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Bascket.hasMany(BascketDevice);
BascketDevice.belongsTo(Bascket);

Type.hasMany(Device);
Device.belongsTo(Type);

Brand.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(Rating);
Rating.belongsTo(Device);

Device.hasMany(BascketDevice);
BascketDevice.belongsTo(Device);

Device.hasMany(DInfo, {as: "info"});
DInfo.belongsTo(Device);

Type.belongsToMany(Brand, {through: TypetoBrand});
Brand.belongsToMany(Type, {through: TypetoBrand});

// Экспорт всех типов
module.exports = {
    User,
    Bascket,
    BascketDevice,
    Device,
    Type,
    Brand,
    Rating,
    DInfo,
    TypetoBrand
}