const { Builder,By, until, Options } = require("selenium-webdriver");
const { get } = require("selenium-webdriver/http");
const assert = require('assert');
const chai= require('chai');
const { console } = require("inspector");

const seleniumautomation = async () => {
    //Builder-->Sets the URL of a remote webDriver server to use
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
   
    //we r using await method in async--->after the first line runs the next second line will run
   await driver.get("https://www.tutorialspoint.com/selenium/practice/alerts.php");

//  //Alerts 
//   let btnalerts=await driver.findElement(By.xpath("//button[text()='Alert']")).click();

//   // To handle alerts--->Switch to alert and giving [accept()-->m]
//  const btnalerts1 = await driver.switchTo().alert();
//  await btnalerts1.accept();

//  //Getting the text of the alert:
//  let alertText=await btnalerts1.getText();
//  console.log('Alert Text:',alertText);

//  //Click me first
//    let clickmebtn=await driver.findElement(By.xpath("//button[@onclick='myMessage()']"));
//    await driver.executeScript("arguments[0].click();",clickmebtn);

//  //Wait for alerts to appear(set timeouts to 8 seconds)
//    await driver.wait(until.alertIsPresent(),8000);

//   //Switch to alert and interact with alert and accept it:
//   const clickmealerts = await driver.switchTo().alert();
//    await clickmealerts.accept();

//   //Click me first
//   let clickmefirstbtn=await driver.findElement(By.xpath("//button[@onclick='myDesk()']"));
//   await driver.executeScript("arguments[0].click();",clickmefirstbtn);

//   //switch to alert and performing cancel using [dismiss()-->m]
//   const clickfirstbtn =await driver.switchTo().alert();
 // await clickfirstbtn.accept();
  // await clickfirstbtn.dismiss();

  //Click Prompt box
  let clickbtn=await driver.findElement(By.xpath("//button[@onclick='myPromp()']"));
  await driver.executeScript("arguments[0].click();",clickbtn);
  //await clickbtn.sendKeys('HinthumathiV');

  //switch to alert and performing cancel using [dismiss()-->m]
   const clickprompt =await driver.switchTo().alert();
   await clickprompt.accept();

};
seleniumautomation();