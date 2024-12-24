const { Builder,By } = require("selenium-webdriver");
const { get } = require("selenium-webdriver/http");
const assert = require('assert');
const chai= require('chai');

const seleniumautomation = async () => {
    //Builder-->Sets the URL of a remote webDriver server to use
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();

    //we r using await method in async--->after the first line runs the next second line will run
   await driver.get("https://www.tutorialspoint.com/selenium/practice/buttons.php");

   //Click Me Clicking
   let clickme = await driver.findElement(By.xpath("//button[text()='Click Me']")).click();

   //Verifying the Message displayed after giving click Me
    let verifymsg = await driver.findElement(By.xpath("//div[@style='display: block;']")).getText();
    assert.strictEqual(verifymsg,'You have done a dynamic click','Text does not match');
    console.log(verifymsg);

    //Right Click Me
    let rightclick = await driver.findElement(By.xpath("//button[text()='Right Click Me']"));
    let actions1 = driver.actions({sync : true});
    await actions1.contextClick(rightclick).perform();

    


   //Double Click Me
   let doubleclk= await driver.findElement(By.xpath("//button[text()='Double Click Me']"));
   let actions = driver.actions({async: true});
   await actions.doubleClick(doubleclk).perform();

   //Using assert.strictequal()--->verifying the text message displaying under double click
   let verifymsg1 = await driver.findElement(By.xpath("//p[@id='doublec']")).getText();
   assert.strictEqual(verifymsg1,'You have Double clicked','Text does not match');
   console.log(verifymsg1);



};
seleniumautomation();
