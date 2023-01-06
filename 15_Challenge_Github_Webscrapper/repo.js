// let url = "https://github.com/ljianshu/Blog";
const cheerio = require("cheerio");
const request = require("request");
const issueEObj = require("./issueElems");
function issueLink(url, topicName, repoName) {
    request(url, cb);
    function cb(err, response, html) {
        if (err) {
            console.log(err);
        } else {
            // console.log(html);
            extractIssueLink(html);
        }
    }
    // Extract Issue Links
    function extractIssueLink(html) {
        let $ = cheerio.load(html);
        let link = $("a[id=\"issues-tab\"]").attr("href");
        let fullLink = "https://github.com" + link;
        issueEObj.issueE(fullLink, topicName, repoName);
    }
}
module.exports = {
    issueL: issueLink
}