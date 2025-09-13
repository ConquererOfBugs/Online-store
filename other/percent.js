// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */



// var twoSum = function(nums, target) {
//     const numInd = new Map();

//     for (let index = 0; index < nums.length; index++) {
//         const element = target - nums[index];
//         console.log((index + 1), element);
//         if (numInd.has(element))
//             return [numInd.get(), index]
        
//         numInd.set(nums[index], index)
//     }
// };

// twoSum([1, 24, 5, 4, 24, 6, 23, 85, 4], 32)
const fs = require('fs');
const path = require('path');
const files = require('./files.js');

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
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

const appendWriteFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            return reject(err.message);
        };
        resolve();
    }));
};

let int = new Map();

int.set("name", "Ahmed")

const obj = Object.fromEntries(int);
const reJson = JSON.stringify(obj)

writeFileAsync(path.resolve(__dirname, "./data.json"), reJson)

readFileAsync(path.resolve(__dirname, "./data.json")).then((data) => {
    d = data
    console.log(d);

    if (d !== null || undefined) {
        appendWriteFileAsync(path.resolve(__dirname, "./data.txt"), ", \n"+reJson)
    }
})

