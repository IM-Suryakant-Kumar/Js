// let url = "https://github.com/topics/ajax";
const cheerio = require("cheerio");
const request = require("request");
const path = require("path");
const fs = require("fs");
const issueLObj = require("./repo");
function topicLinks(url) {
    request(url, cb);
}
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        // console.log(html);
        extractTopRepoLink(html);
    }
}
// Extract Top eight repo Links
function extractTopRepoLink(html) {
    let $ = cheerio.load(html);
    let topicName = $(".h1").text().trim();
    let repoElems = $(".text-bold.wb-break-word");
    for (let i = 0; i < 8; i++) {
        let link = $(repoElems[i]).attr("href");
        let repoName = $(repoElems[i]).text().trim();
        // console.log(link);
        let fullLink = "https://github.com" + link;
        console.log(fullLink);
        issueLObj.issueL(fullLink, topicName, repoName);
    }
}
module.exports = {
    topicL: topicLinks
}