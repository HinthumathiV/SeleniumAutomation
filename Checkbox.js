const { Builder,By } = require("selenium-webdriver");
const { get } = require("selenium-webdriver/http");
const assert = require('assert');

const seleniumautomation = async () => {
    //Builder-->Sets the URL of a remote webDriver server to use
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();

    //we r using await method in async--->after the first line runs the next second line will run
   await driver.get("https://www.tutorialspoint.com/selenium/practice/check-box.php");

// CHECKBOX:

  //Clicking the checkbox:
  let checkbox = await driver.findElement(By.xpath("//input[@id='c_bs_1']"));

  //To Check if the checkbox is not already selected:[isSelected()]
  let isSelected= await checkbox.isSelected();
  if (!isSelected) {
    await checkbox.click();   //click here to select
    
  }
   await driver.quit();

  







};
seleniumautomation();
