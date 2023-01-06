const puppeteer = require("puppeteer");
let page;
console.log("Before");
const browserOpenpromise = puppeteer.launch({
    headless: false,
    slowMo: true,
    defaultViewport: null,
    args: ["--start-maximized"]
});
browserOpenpromise
    .then(function (browser) {
        // Currently opened tabs
        let pagesArrOpenpromise = browser.pages();
        return pagesArrOpenpromise;
    }).then(function (browserPages) {
        page = browserPages[0];
        let gotoPromise = page.goto("https://www.google.com/");
        return gotoPromise;
    }).then(function () {
        // waiting for the element to appear on the page
        let elementWaitpromise = page.waitForSelector("input[type = 'text']", { visible: true });
        return elementWaitpromise;
    })
    .then(function () {
        // console.log("Reached google homepage");
        // type any element on that page -> selector
        let keysWillBeSendpromise = page.type("input[type='text']", "pepcoding");
        return keysWillBeSendpromise;
    }).then(function () {
        // page.keyboard to type special character
        let enterWillBePressed = page.keyboard.press("Enter");
        return enterWillBePressed;
    }).then(function () {
        let elementWaitpromise = page.waitForSelector("h3.LC20lb.DKV0Md", { visible: true });
        return elementWaitpromise;
    }).then(function () {
        // mouse
        let keysWillBeSendpromise = page.click("h3.LC20lb.DKV0Md");
        return keysWillBeSendpromise;
    }).catch(function (err) {
        console.log(err);
    })
console.log("After");