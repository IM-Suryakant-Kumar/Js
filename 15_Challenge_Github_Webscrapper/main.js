let url = "https://github.com/topics";
const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");
const path = require("path");
const topicLObj = require("./topEtRepo");
const filepath=path.join(__dirname, "Topic");
dirCreator(filepath);
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        // console.log(html);
        extractTopicsLink(html);
    }
}
// Extract Topics Links
function extractTopicsLink(html) {
    let $ = cheerio.load(html);
    let topicElems = $(".no-underline.flex-justify-center");
    for (let i = 0; i < topicElems.length; i++) {
        let link = $(topicElems[i]).attr("href");
        let fullLink = "https://github.com" + link;
        // console.log(fullLink);
        topicLObj.topicL(fullLink)
    }
    console.log("----------------------------------------------------------------------------");
}
function dirCreator(filePath) {
    if (!(fs.existsSync(filePath))) {
        fs.mkdirSync(filePath);
    }
}