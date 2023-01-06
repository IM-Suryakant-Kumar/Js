const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

function getIssuePageHtml(url, topic, repoName) {

    request(url, cb);

    function cb(err, response, html) {
        if (err) {
            console.log(err);
        } else if (response.statusCode == 404) {
            console.log("Page Not found");
        } else {
            extractIssues(html);
        }
    }

    function extractIssues(html) {
        let $ = cheerio.load(html);
        let issueElems = $("a[data-hovercard-type=\"issue\"]");
        let arr = [];
        for (let i = 0; i < issueElems.length; i++) {
            let link = $(issueElems[i]).attr("href").trim();
            let fullLink = `https://github.com${link}`;
            arr.push(fullLink);
        }
        console.log(topic, " ", repoName, "        ", arr);
        let folderPath = path.join(__dirname, topic);
        dirCreator(folderPath);
        let filePath = path.join(folderPath, repoName +".json");
        let text = JSON.stringify(arr);
        fs.writeFileSync(filePath, text);
    }

    function dirCreator(folderPath) {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }
    }
}

module.exports = getIssuePageHtml;