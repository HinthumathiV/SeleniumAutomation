const { Builder,By, until, Options } = require("selenium-webdriver");
const { get } = require("selenium-webdriver/http");
const assert = require('assert');
const chai= require('chai');

const seleniumautomation = async () => {
    //Builder-->Sets the URL of a remote webDriver server to use
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
   
    //we r using await method in async--->after the first line runs the next second line will run
   await driver.get("https://www.tutorialspoint.com/selenium/practice/alerts.php");

   //Alerts 
  // let btnalerts=await driver.findElement(By.xpath("//button[text()='Alert']")).click();

   //To handle alerts
//  const btnalerts1 = await driver.switchTo().alert();
//  await btnalerts1.accept();

//Click me first
let clickmebtn=await driver.findElement(By.xpath("//div[@class='d-flex justify-content-between mt-4'][1]")).click();





};
seleniumautomation();