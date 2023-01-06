const request = require("request");
const cheerio = require("cheerio");
const getIssuePageHtml = require("./issues");

function getRepoPageHtml(url, topic) {

    request(url, cb);

    function cb(err, response, html) {
        if (err) {
            console.log(err);
        } else {
            extractTopRepoLink(html);
        }
    }

    function extractTopRepoLink(html) {
        let $ = cheerio.load(html);
        let repoElems = $(".text-bold.wb-break-word");
        for (let i = 0; i < 8; i++){
            let link = $(repoElems[i]).attr("href");
            let fullLink = `https://github.com${link}/issues`;
            // console.log(fullLink);
            let repoName = link.split("/").pop();
            getIssuePageHtml(fullLink, topic, repoName);
        }
    }
}

module.exports = getRepoPageHtml;