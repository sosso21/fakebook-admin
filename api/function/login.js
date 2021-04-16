module.exports= (page, email,pass)=>{
    return new Promise(async resolve => {
        await page.goto('https://www.facebook.com')

        const cookieButtonSelector = '[data-cookiebanner="accept_button"]'
        await page.waitForSelector(cookieButtonSelector)
        await page.click(cookieButtonSelector)

        const loginInputSelector = 'input[type="text"]'
        const passwordInputSelector = 'input[type="password"]'
        await page.waitForSelector(loginInputSelector)
        await page.waitForSelector(passwordInputSelector)

        await page.evaluate((login, password, loginInputSelector, passwordInputSelector) => {
            document.querySelector(loginInputSelector).value = login
            document.querySelector(passwordInputSelector).value = password
        }, email,pass, loginInputSelector, passwordInputSelector)

        await page.waitForTimeout(1000)
        
        const submitButtonSelector = 'button[type="submit"]'
        await page.waitForSelector(submitButtonSelector)
        await page.click(submitButtonSelector)
        resolve()
    })
}
