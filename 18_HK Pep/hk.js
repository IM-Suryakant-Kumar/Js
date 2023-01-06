const puppeteer = require("puppeteer");

const codeObj = require("./codes");

const loginLink = "https://www.hackerrank.com/auth/login";
const email = "clenchw@gmail.com";
const password = "242526";

const browserOpen = puppeteer.launch({
    headless: false,

    args: ["--start-maximized"],

    defaultViewport: null
});

let page;

browserOpen.then(function (browser) {
    let browserOpenpromise = browser.newPage();
    return browserOpenpromise;
}).then(function (newTab) {
    page = newTab;
    let hackerrankOpenPromise = newTab.goto(loginLink);
    return hackerrankOpenPromise;
}).then(function () {
    let emailIsEntered = page.type("#input-1", email, { delay: 50 });
    return emailIsEntered;
}).then(function () {
    let passwordIsEntered = page.type("#input-2", password, { delay: 50 });
    return passwordIsEntered;
}).then(function () {
    let loginButtonClicked = page.click("button[type='submit']", { delay: 50 });
    return loginButtonClicked;
}).then(function () {
    let clickOnAlgoPromise = waitAndClick('a[data-attr1="algorithms"]', page);
    return clickOnAlgoPromise;
}).then(function () {
    let getToWarmup = waitAndClick('input[value="warmup"]', page);
    return getToWarmup;
})
// .then(function () {
//     let waitFor3Seconds = page.waitFor(3000);
//     return waitFor3Seconds;
// })
.then(function () {
    let allChallegesPromise = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled', { delay: 50 });
    return allChallegesPromise;
}).then(function (questionsArr) {
    console.log('number of questions', questionsArr.length);
    let questionWillBeSolved = questionSolver(page, questionsArr[0], codeObj.answers[0]);
    return questionWillBeSolved;
})




function waitAndClick(selector, cPage) {
    return new Promise(function (resolve, reject) {
        let waitForModelPromise = cPage.waitForSelector(selector);
        waitForModelPromise.then(function () {
            let clickModel = cPage.click(selector);
            return clickModel;
        }).then(function () {
            resolve();
        }).catch(function (err) {
            reject();
        })
    })
}


function questionSolver(page, question, answer){
    return new Promise(function(resolve, reject){
        let questionWillBeClicked = question.click();
        questionWillBeClicked.then(function (){
            let editorInFocusPromise = waitAndClick('.monaco-editor.no-user-select.vs', page);
            return editorInFocusPromise;
        }).then(function (){
            return waitAndClick('.checkbox-input', page);
        }).then(function (){
            return page.waitForSelector('textarea.custominput', page);
        }).then(function(){
            return page.type('textarea.custominput', answer, {delay: 10})
        }).then(function(){
            let ctrlIsPressed = page.keyboard.down('Control');
            return ctrlIsPressed;
        }).then(function(){
            let AIsPressed = page.keyboard.press('A', {delay: 100});
            return AIsPressed;
        }).then(function (){
            let XIsPressed = page.keyboard.press('X', {delay : 100});
            return XIsPressed;
        }).then(function(){
            let ctrlIsUnPressed = page.keyboard.up('Control');
            return ctrlIsUnPressed;
        }).then(function(){
            let mainEditorInFocus = waitAndClick('.monaco-editor.no-user-select.vs', page);
            return mainEditorInFocus;
        }).then(function(){
            let ctrlIsPressed = page.keyboard.down('Control');
            return ctrlIsPressed;
        }).then(function(){
            let AIsPressed = page.keyboard.press('A', {delay: 100});
            return AIsPressed;
        }).then(function (){
            let VIsPressed = page.keyboard.press('V', {delay: 100});
            return VIsPressed;
        }).then(function(){
            let ctrlIsUnPressed = page.keyboard.up('Control');
            return ctrlIsUnPressed;
        }).then(function (){
            return page.click('.hr-monaco__run-code', {delay: 50});
        }).then(function (){
            let submitIsClicked = page.click('.hr-monaco-submit', {delay: 100});
            return submitIsClicked;
        }).then(function(){
            resolve();
        }).then(function(){
            reject();
        })
    })
}