
const { Given, When, Then } = require('@wdio/cucumber-framework');

const loginDemoPage = require('../pageobjects/login.demo.page');


Given(/^user is on login page$/, async () => {
    await browser.url(`https://the-internet.herokuapp.com/login`)
});


When(/^user enters (.*) and (.*)$/, async (username, password) => {
    // await $('#username').setValue(username)
    // await $('#password').setValue(password)

    await loginDemoPage.setUsername(username)
    await browser.pause(2000)
    await loginDemoPage.setPassword(password)
    await browser.pause(2000)
});
/*
When(/^user enters username and password$/, async () => {
    await $('#username').setValue('tomsmith')
    await $('#password').setValue('SuperSecretPassword!')
});
*/
When(/^clicks on login button$/, async () => {
    //await $('button[type="submit"]').click()
    await browser.pause(2000)
    await loginDemoPage.clickLoginButton()

});
/*
Then(/^user is navigated to the Home page$/, async () => {
    await expect($('//div[@id="flash"]')).toHaveTextContaining('You logged into a secure area!')
});
*/
Then(/^user is able to view the (.*)$/, async (message) => {
    //await expect($('//div[@id="flash"]')).toHaveTextContaining(message)
    await loginDemoPage.checkDisplayedMessage(message)

});

