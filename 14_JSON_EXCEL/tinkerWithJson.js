let fs = require("fs");
let xlsx = require("xlsx");
// let buffer = fs.readFileSync("./example.json");
// console.log(buffer);
// console.log('""""""""""""""""""""""""""""""""""');
// array
// let data = JSON.parse(buffer);
let data = require("./example.json");

// console.log(data);
// data.push({
//     "name": "Thor",
//     "lastName": "Rogers",
//     "isAvenger": "true",
//     "friend": [
//         "bruce",
//         "peter",
//         "natasha"
//     ],
//     "age": 45,
//     "address": {
//         "city": "New York",
//         "state": "Manhattan"
//     }
// });
// let stringData = JSON.stringify(data);
// fs.writeFileSync("./example.json", stringData);

// write
// // wb->filePath, ws -> name, json data
// // new worksheet
function excelWriter(filePath, json, sheetName) {
    
    let newWB = xlsx.utils.book_new();
    let newWS = xlsx.utils.json_to_sheet(json);
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
    xlsx.writeFile(newWB, filePath);
}
// // json data -> excel format convert
// // -> newwb, ws, sheet name
// // filePath
// read
// Workbook get
function excelReader(filePath, sheetName){
    if(fs.existsSync(filePath) == false){
        return [];
    }

    let wb = xlsx.readFile(filePath);
    let excelData = wb.Sheets[sheetName];
    let ans = xlsx.utils.sheet_to_json(excelData);
    return ans;
}
// // sheet
// // sheet data get
// console.log(ans);
