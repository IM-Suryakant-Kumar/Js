#!/usr/bin/env node
let fs = require("fs");
let inputArr = process.argv.slice(2);
// console.log(inputArr);

let command = inputArr[0];
let doestPathExist = fs.existsSync(command);
    if(doestPathExist){
        let isFile = fs.lstatSync(command).isFile();
        if(isFile){
            command = "display";
        }
    }
if(inputArr.length > 2){
    let command2 = inputArr[1];
    let doestPathExist2 = fs.existsSync(command2);
    if(!doestPathExist2){
        command = command + " " + command2;
    }
}
// console.log(command);
switch(command){
    case "display":
        display(inputArr);
        break;
    case "-s":
        removeSpaces(inputArr.slice(1));
        break;
    case "-n":
        numbering(inputArr.slice(1));
        break;
    case "-b":
        numberingNEl(inputArr.slice(1));
        break;
    case "-n -s":
        numberingWithRemoveSpacing(inputArr.slice(2));
        break;
    case "-b -s":
        numberingNElWithRemoveSpacing(inputArr.slice(2));
        break;
    case "-n -b":
        console.log("Wrong command ERROR");
        break;
    default:
        console.log("file does not exist Error  ");
}
function display(fileArr){
    for(let i = 0; i < fileArr.length; i++){
        let pathExist = fs.existsSync(fileArr[i]);
        if(pathExist){
            let isFile = fs.lstatSync(fileArr[i]).isFile();
            if(isFile){
                let content = fs.readFileSync(fileArr[i]);
                console.log("" + content);
            } else {
                console.log("Is not file Error");
                return;
            }
        } else {
            console.log("file does not exist Error");
            return;
        }
    }
}
function removeSpaces(fileArr){
    for(let i = 0; i < fileArr.length; i++){
        let pathExist = fs.existsSync(fileArr[i]);
        if(pathExist){
            let isFile = fs.lstatSync(fileArr[i]).isFile();
            if(isFile){
                let content = fs.readFileSync(fileArr[i]);
                content = removeEachContentSpaces("" + content);
                console.log(content);
            } else {
                console.log("Is not file Error");
                return;
            }
        } else {
            console.log("file does not exist Error");
            return;
        }
    }
}
function removeEachContentSpaces(content){
    let splitContent = content.split(` `);
    for (let i = 0; i < splitContent.length; i++) {
        if(splitContent[i] == ``){
            splitContent.splice(i, 1);
            i--;
        } 
    }
    return splitContent.join(` `);
}
function numbering(fileArr){
    for(let i = 0; i < fileArr.length; i++){
        let pathExist = fs.existsSync(fileArr[i]);
        if(pathExist){
            let isFile = fs.lstatSync(fileArr[i]).isFile();
            if(isFile){
                let content = fs.readFileSync(fileArr[i]);
                content = "" + content;
                content = numberingEachContent(content);
                console.log(content);
            } else {
                console.log("Is not file Error");
                return;
            }
        } else {
            console.log("file does not exist Error");
            return;
        }
    }
}
function numberingEachContent(content){
    let splitContent = content.split(`\n`);
    for(let i = 0; i < splitContent.length; i++){
        splitContent[i] = i + 1 + " " + splitContent[i];
    }
    return splitContent.join("\n");
}
function numberingNEl(fileArr){
    for(let i = 0; i < fileArr.length; i++){
        let pathExist = fs.existsSync(fileArr[i]);
        if(pathExist){
            let isFile = fs.lstatSync(fileArr[i]).isFile();
            if(isFile){
                let content = fs.readFileSync(fileArr[i]);
                content = "" + content;
                content = numberingNElEachContent(content);
                console.log(content);
            } else {
                console.log("Is not file Error");
                return;
            }
        } else {
            console.log("file does not exist Error");
            return;
        }
    }
}
function numberingNElEachContent(content){
    let splitContent = content.split("\n");
    for(let i = 0; i < splitContent.length; i++){
        let str = splitContent[i];
        if(str.substring(1) != ""){
            splitContent[i] = i + 1 + " " + splitContent[i];
        }
    }
    return splitContent.join("\n");
}
function numberingWithRemoveSpacing(fileArr){
    for(let i = 0; i < fileArr.length; i++){
        let pathExist = fs.existsSync(fileArr[i]);
        if(pathExist){
            let isFile = fs.lstatSync(fileArr[i]).isFile();
            if(isFile){
                let content = fs.readFileSync(fileArr[i]);
                content = "" + content;
                content = numberingEachContent(content);
                content = removeEachContentSpaces(content);
                console.log(content);
            } else {
                console.log("Is not file Error");
                return;
            }
        } else {
            console.log("file does not exist Error");
            return;
        }
    }
}
function numberingNElWithRemoveSpacing(fileArr){
    for(let i = 0; i < fileArr.length; i++){
        let pathExist = fs.existsSync(fileArr[i]);
        if(pathExist){
            let isFile = fs.lstatSync(fileArr[i]).isFile();
            if(isFile){
                let content = fs.readFileSync(fileArr[i]);
                content = "" + content;
                content = numberingNElEachContent(content);
                content = removeEachContentSpaces(content);
                console.log(content);
            } else {
                console.log("Is not file Error");
                return;
            }
        } else {
            console.log("file does not exist Error");
            return;
        }
    }
}