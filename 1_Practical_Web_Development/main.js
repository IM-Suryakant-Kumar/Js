let inputArr = process.argv.slice(2);
console.log(inputArr);
// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help 

let command = inputArr[0];

switch (command) {
    case "tree":
        console.log(treefn(inputArr[1]));
        break;
    case "organize":
        console.log(organizefn(inputArr[1]));
        break;
    case "help":
        console.log(helpfn());
        break;
    default:
        console.log(`Please 🙏 Enter right command  `);
}

function treefn(dirpath) {
    return `tree command implemented `;
}


function organizefn(dirpath) {
    // return `organize command implemented `;
    // 1. input -> directory path given
    if(dirpath == undefined){
        console.log("kindly enter the path");
        return;
    }else{
        let doestExist = fs.existsSync(dirpath);
        if(doestExist){

            // 2. create -> organized_files -> directory


        }else {
            console.log("kindly enter the correct path");
            return;
        }
    }
    // 3. Identify categories of all the files present in that input directory ->
    // 4. copy / cut inside of any of category folder

}




// help fn
function helpfn() {
    return `List of all command:
                node main.js tree "directoryPath"
                node main.js organize "directoryPath"
                node main.js help `;
}