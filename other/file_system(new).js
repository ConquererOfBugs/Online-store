const { rejects } = require('assert');
const fs = require('fs');
const path = require('path');

// Создаёт папки (Sync означает - синхронная функция)
// fs.mkdirSync(path.join(__dirname, 'dir', 'css', 'style.css'), {recursive: true})
// fs.rmdirSync(path.resolve(__dirname, 'dir'))


// fs.mkdirSync(path.resolve(__dirname, `dir1`), (err) => {
//     if (err) {
//         console.log('Ошибка! Файл не создан');
//         return;
//     };
    
//     console.log('Папка создана');
    
// });


// fs.writeFile(path.resolve(__dirname, 'script.js'), 'consolse.log("Hello world")', (err) => {
//     if (err) {
//         console.log('Ошибка!');
//     };

//     console.log('Файл записан');
// });


// Информация для записи
var info = `public class main {
    public static void main(String[] args) {
        System.out.print("Хеллоу");
    };
    
`;

var info2 = `
    public static void main2(String[] args) {
        System.out.print("Hello world");
    }; \n
`;

var info3 = `
    public static void main3(String[] args) {
        System.out.print("Привет мир");
    }; \n
}`;


// writeFile перезаписывает данные в файле
// const writeFileAsync = async (data) => {
//     return new Promise((resolve, reject) => fs.writeFile(path.resolve(__dirname, 'main.java'), data, (err) => {
//         if (err) {
//             return reject(err.message)
//         };
//         resolve()
//     }));
// };

// // appendFile добавляет новые данные в файл
// const appendWriteFileAsync = async (data) => {
//     return new Promise((resolve, reject) => fs.appendFile(path.resolve(__dirname, 'main.java'), data, (err) => {
//         if (err) {
//             return reject(err.message)
//         };
//         resolve()
//     }));
// };

// appendWriteFileAsync(info)
// writeFileAsync(info)


//writeFile перезаписывает данные в файле
const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        };
        resolve()
    }));
};

// appendFile добавляет новые данные в файл
const appendWriteFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        };
        resolve()
    }));
};
const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            return reject(err.message)
        };
        resolve(data);
    }));
};


//Основная функция writeFileAsync создаёт файл с информацией
//Дополнительная функция appendWWriteFileAsync при необхадимости добавляет информацию к файлу  
// writeFileAsync(path.resolve(__dirname, 'main.java'), info)
//     .then(() => appendWriteFileAsync(path.resolve(__dirname, 'main.java'), info2))
//     .then(() => appendWriteFileAsync(path.resolve(__dirname, 'main.java'), info3))
//     .then(() => readFileAsync(path.resolve(__dirname, "main.java")))
//     .then(data => console.log(data))
//     .catch((err) => console.log("error"));

module.exports = writeFileAsync
module.exports = readFileAsync
