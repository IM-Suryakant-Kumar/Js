// let url = "https://github.com/ljianshu/Blog/issues";
const cheerio = require("cheerio");
const request = require("request");
const path = require("path");
const fs = require("fs");
const xlsx = require("xlsx");
function issueElems(url, topicName, repoName) {
    request(url, cb);
    function cb(err, response, html) {
        if (err) {
            console.log(err);
        } else {
            // console.log(html);
            extractIssues(html);
        }
    }

    function extractIssues(html) {
        let $ = cheerio.load(html);
        let issueElems = $("a[data-hovercard-type=\"issue\"]");
        for (let i = 0; i < issueElems.length; i++) {
            let issue = $(issueElems[i]).text().trim();
            // console.log(issue);
            issuesSeprator(issue);
        }
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
    }
    function issuesSeprator(issue) {
        let topicPath = path.join(__dirname, "Topic", topicName);
        dirCreator(topicPath);
        let filePath = path.join(topicPath, repoName + ".xlsx");
        let content = excelReader(filePath, "sheetName");
        let issueObj = {
            issue
        }
        content.push(issueObj);
        excelWriter(filePath, content, "sheetName");
    }
    function dirCreator(filePath) {
        if (!(fs.existsSync(filePath))) {
            fs.mkdirSync(filePath);
        }
    }
    function excelWriter(filePath, json, sheetName) {

        let newWB = xlsx.utils.book_new();
        let newWS = xlsx.utils.json_to_sheet(json);
        xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
        xlsx.writeFile(newWB, filePath);
    }
    function excelReader(filePath, sheetName) {
        if (fs.existsSync(filePath) == false) {
            return [];
        }

        let wb = xlsx.readFile(filePath);
        let excelData = wb.Sheets[sheetName];
        let ans = xlsx.utils.sheet_to_json(excelData);
        return ans;
    }
}
module.exports = {
    issueE: issueElems
}