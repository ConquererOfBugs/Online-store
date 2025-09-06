const fs = require('fs');
const path = require('path');

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message);
        };
        resolve();
    }));
};

const removeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.rm(path, data, (err) => {
        if (err) {
            return reject(err.message);
        };
        resolve();
    }));
};

// appendFile добавляет новые данные в файл
const appendWriteFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            return reject(err.message);
        };
        resolve();
    }));
};

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            return reject(err.message);
        };
        resolve(data);
    }));
};

module.exports = writeFileAsync;
module.exports = removeFileAsync;
module.exports = appendWriteFileAsync
module.exports = readFileAsync;

