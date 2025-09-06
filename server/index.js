require('dotenv').config();
const express = require('express');
const sequelize = require("./db");
const models = require("./models/models");
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');
const router = require('./routes/index')
const errorHandler = require('./middleware/errorHandlingMiddleware')
const { message } = require('statuses');
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router);
app.use(errorHandler)

app.get('/', (req, res) => {
    res.status(200).json({message: "It work"})
})

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Сервер запущен на порту: 127.0.0.1:${PORT}
            
            `));
    } catch (error) {
        console.log(error);
    }
}

start();