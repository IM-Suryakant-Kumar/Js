// player of the match
// https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard
let request = require("request");
let cheerio = require("cheerio");
let chalk=require("chalk");
let figlet = require("figlet");
request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard', cb);
function cb(error, response, html) {
    if (error) {
        console.log("error", error);
    } else {
        handleHtml(html);
    }
}
function handleHtml(html) {
    let selTool = cheerio.load(html);
    // .ds-flex.ds-justify-between.ds-items-center .ds-text-eyebrow-xs.ds-uppercase.ds-text-ui-typo-mid+div .ds-text-tight-m.ds-font-medium.ds-text-ui-typo.ds-underline.ds-decoration-ui-stroke.ds-block
    
    // extract title
    let title = ".ds-flex.ds-justify-between.ds-items-center .ds-text-eyebrow-xs.ds-uppercase.ds-text-ui-typo-mid";
    // extract name
    let name = ".ds-flex.ds-justify-between.ds-items-center .ds-text-eyebrow-xs.ds-uppercase.ds-text-ui-typo-mid+div .ds-text-tight-m.ds-font-medium.ds-text-ui-typo.ds-underline.ds-decoration-ui-stroke.ds-block";

    let contentArrT = selTool(title);
    let contentArrN = selTool(name);
    for (let i = 0; i < contentArrT.length; i++) {
        let data = selTool(contentArrT[i]).text();
        if (data == "Player Of The Match") {
            let nameData=selTool(contentArrN[i]).text();
            console.log(chalk.yellow(figlet.textSync(nameData)));
            return;
        }
    }
}
