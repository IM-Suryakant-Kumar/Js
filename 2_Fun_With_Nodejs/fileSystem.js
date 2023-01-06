// fileSystem
// files -> create,    read,            update,              delete
// open -w ,           readFileSync     appendFileSync       unlinkSync
// writeFileSync
let fs = require("fs");

// read
// let buffer = fs.readFileSync("abc.js");
// console.log("bin data \n\n\n"+ buffer);

// Create
// fs.openSync("abc.txt", "w");
// no file -> create and file exist -> content replace
// Crete Write
// fs.writeFileSync("abc.txt", "Hum aaj khush nhi hai");
// Update
// fs.appendFileSync("abc.txt", "\nBhai Khush kyu nhi hai");

// folder(directory)
// Create      read           delete
// mkdirSync   readdirSync    rmdirSync

// fs.mkdirSync("meriDirectory");
// fs.writeFileSync("meriDirectory/meriFile.txt", "mera content");
// let content = fs.readdirSync("meriDirectory");
// console.log(content);
// for(let i = 0; i < content.length; i++){
//     console.log("file", content[i], "is removed");
//     // remove file
//     fs.unlinkSync("meriDirectory/" + content[i]);
// }
// remove folder
// fs.rmdirSync("meriDirectory");
// fs.existSync -> if a file exist at a path -> true/false
// let doesPathExist = fs.existsSync("abc.txt");
// console.log(doesPathExist);
// doesPathExist = fs.existsSync("abcd.txt");
// console.log(doesPathExist);
// // fs.lstatSync -> fs.lst
//  let detailsObj = fs.lstatSync(__dirname + "\\fileSystem.js");
//  let ans = detailsObj.isFile();
//  console.log(ans);
//  ans = detailsObj.isDirectory();
//  console.log(ans);

// E:\DSA\VsCode\Js\L2
// E:\DSA\VsCode\Js\L2\childprocess.js

for(i = 1; i <= 10; i++){
    let dirPathToMake = `Lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake + "\\" + "readme.md", `# readme for ${dirPathToMake}`);
}