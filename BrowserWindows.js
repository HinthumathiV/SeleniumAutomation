const { Builder,By, until, Options } = require("selenium-webdriver");
const { get } = require("selenium-webdriver/http");
const assert = require('assert');
const chai= require('chai');

const seleniumautomation = async () => {
    //Builder-->Sets the URL of a remote webDriver server to use
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
   
    //we r using await method in async--->after the first line runs the next second line will run
   await driver.get("https://www.tutorialspoint.com/selenium/practice/browser-windows.php");

   //Verify text [Browser Windows]
  // let verifytext= await driver.findElement(By.xpath("//h1[@class='mb-3 fw-normal border-bottom text-left pb-2 mb-4'")).getText();
  // assert.strictEqual(verifytext,'Browser Windows','Text does not match');
   //console.log(verifytext);

   //clicking New Tab
   let newtab=await driver.findElement(By.xpath("//button[text()='New Tab']"));
   await driver.executeScript("arguments[0].click();",newtab);

//  //Getting all the New Tab:
  let windowHandles = await driver.getAllWindowHandles();
  console.log('Window Handles for New Tab:',windowHandles);

// //Switching to first to second window:
 await driver.switchTo().window(windowHandles[1]);
console.log('Switched to second window');

// //switch back to the first window:
 await driver.switchTo().window(windowHandles[0]);
 console.log("Switched back to first window");

 //Clicking New Window
  let newwindow=await driver.findElement(By.xpath("//button[text()='New Window']"));
  await driver.executeScript("arguments[0].click();",newwindow);

   //Getting all the New Windows:
  let windowHandles1 = await driver.getAllWindowHandles();
  console.log('Window Handles for New Window:',windowHandles1);

// //Switching to first to second window:
 await driver.switchTo().window(windowHandles[1]);
console.log('Switched to second window');

// //switch back to the first window:
 await driver.switchTo().window(windowHandles[0]);
 console.log("Switched back to first window");


//Clicking New Window Message
  let newwindowmsg=await driver.findElement(By.xpath("//button[text()='New Window Message']"));
  await driver.executeScript("arguments[0].click();",newwindowmsg);

   //Getting all the New Windows Message:
  let windowHandles2 = await driver.getAllWindowHandles();
  console.log('Window Handles for New Window Message:',windowHandles2);

// //Switching to first to second window:
 await driver.switchTo().window(windowHandles[1]);
console.log('Switched to second window');

// //switch back to the first window:
 await driver.switchTo().window(windowHandles[0]);
 console.log("Switched back to first window");
 


};
seleniumautomation();