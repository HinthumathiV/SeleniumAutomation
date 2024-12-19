const { Builder, until, By } = require("selenium-webdriver");
const { get } = require("selenium-webdriver/http");

const facebook = async () => {
    //Builder-->Sets the URL of a remote webDriver server to use
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();

    //we r using await method in async--->after the first line runs the next second line will run
    await driver.get("https://www.facebook.com/login/");

    //Username:
    await driver.wait(until.elementLocated(By.xpath("//input[@id='email']")),2000).sendKeys("hindhumathi1164@gmail.com");
   
    //Password:
     await driver.wait(until.elementLocated(By.xpath("//input[@id='pass']")),2000).sendKeys("karthik@65");

     //using wait
     await driver.sleep(3000);

     //Login Button:
     await driver.wait(until.elementLocated(By.xpath("//button[@name='login']")),2000).click();
     
};
facebook();