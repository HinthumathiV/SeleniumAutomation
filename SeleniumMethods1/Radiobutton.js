const { Builder,By } = require("selenium-webdriver");
const { get } = require("selenium-webdriver/http");
const assert = require('assert');

const seleniumautomation = async () => {
    //Builder-->Sets the URL of a remote webDriver server to use
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();

    //we r using await method in async--->after the first line runs the next second line will run
   await driver.get("https://www.tutorialspoint.com/selenium/practice/radio-button.php");

   //Locate the radiobutton and clicking it
   let radiobutton = await driver.findElement(By.xpath("//input[@onclick='show2();']")).click();

   //To check the radiobutton is selected :[isSelected]
  let isSelected = await radiobutton.isSelected();
  console.log('Radiobutton is selected' ,isSelected);




};
seleniumautomation();
