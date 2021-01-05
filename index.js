const{Builder, By, Key, util} = require('selenium-webdriver');
const { SeleniumServer } = require('selenium-webdriver/remote');
async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    await driver.get("http://google.com");
    await driver.findElement(By.name("q")).sendKeys("looks like friday",Key.RETURN);
}
example();