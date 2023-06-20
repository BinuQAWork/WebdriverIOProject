class LoginDemoPage {

    get usernameTextBox() {
        return $('#username')
    }

    get passwordTextBox() {
        return $('#password')
    }

    get loginButton() {
        return $('button[type="submit"]')
    }

    get messageField() {
        return $('//div[@id="flash"]')
    }
    
    async setUsername(username) {
        await this.usernameTextBox.setValue(username)
    }

    async setPassword(password) {
        await this.passwordTextBox.setValue(password)
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }

    async checkDisplayedMessage(message){
        await expect(this.messageField).toHaveTextContaining(message)
    }

}

module.exports = new LoginDemoPage();