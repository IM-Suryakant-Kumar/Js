let url = "https://github.com/topics";
const request = require("request");
const cheerio = require("cheerio");
const getRepoPageHtml = require("./repoPage");
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        getTopicsLink(html);
    }
}
function getTopicsLink(html) {
    let $ = cheerio.load(html);
    let topicLinkArr = $(".no-underline.flex-justify-center");
    for (let i = 0; i < topicLinkArr.length; i++) {
        let link = $(topicLinkArr[i]).attr("href").trim();
        let topic = link.split("/").pop();
        let fullLink = `https://github.com${link}`;
        // console.log(fullLink);
        getRepoPageHtml(fullLink, topic);
    }
}