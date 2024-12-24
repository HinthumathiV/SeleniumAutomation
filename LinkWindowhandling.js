const { Builder,By,until, Key } = require("selenium-webdriver");
const { get } = require("selenium-webdriver/http");
const assert = require('assert');
const chai= require('chai');

const seleniumautomation = async () => {
    //Builder-->Sets the URL of a remote webDriver server to use
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
    //await driver.manage().setTimeouts({pageLoad :10000});

    //we r using await method in async--->after the first line runs the next second line will run
   await driver.get("https://www.tutorialspoint.com/selenium/practice/links.php");

   //Verifying the text:
   let verifytext = await driver.findElement(By.xpath("//h1[text()='Links']")).getText();
   assert.strictEqual(verifytext,'Links','Text does not match');
   console.log(verifytext);

   //Verify the text:
   let verifytext1 = await driver.findElement(By.xpath("//strong[text()='Following links will open new tab']")).getText();
   assert.strictEqual(verifytext1,'Following links will open new tab','Text does not match');
   console.log(verifytext1);

   //Clicking 1st link [Home]:
   let firstlink= await driver.findElement(By.xpath("//a[text()='Home']")).click();

   //Getting all the windows:
  let windowHandles = await driver.getAllWindowHandles();
   console.log('Window Handles:',windowHandles);

  //Switching to first to second window:
  await driver.switchTo().window(windowHandles[1]);
  console.log('Switched to second window');

 //Performing actions in the second window:[In searchbox entering the Java and clicking it]
let search =await driver.wait(until.elementLocated(By.xpath("//div[@id='search-wrapper-div']//input[1]"),3000));
await search.sendKeys('Java Interview Questions',Key.ENTER);
console.log("performed actions in second window");

//switch back to the first window:
await driver.switchTo().window(windowHandles[0]);
console.log("Switched back to first window");

//Verify the text:
let verifytext2 = await driver.findElement(By.xpath("//strong[text()='Following links will send an api call']")).getText();
assert.strictEqual(verifytext2,'Following links will send an api call','Text does not match');
console.log(verifytext2);

//click the created
let createdbtn= await driver.findElement(By.xpath("//a[@id='created']")).click();

//Verifying the text message displaying down
let createdtext= await driver.findElement(By.xpath("//div[@class='create']")).getText();
assert.strictEqual(createdtext,'Link has responded with staus 201 and status text Created','Text does not match');
console.log(createdtext);





 

};
seleniumautomation();