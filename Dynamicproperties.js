const { Builder,By } = require("selenium-webdriver");
const { get } = require("selenium-webdriver/http");
const assert = require('assert');
const chai= require('chai');
const { isArgumentsObject } = require("util/types");

const seleniumautomation = async () => {
    //Builder-->Sets the URL of a remote webDriver server to use
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();

    //we r using await method in async--->after the first line runs the next second line will run
   await driver.get("https://www.tutorialspoint.com/selenium/practice/dynamic-prop.php");

   //Clicking Colour change:
   let colourbutton= await driver.findElement(By.id('colorChange'));

   //changing the colour of the button:[using executeScript()---->Passing the arguments and giving the colour to change ]
   await driver.executeScript(
   "arguments[0].style.backgroundColor = 'purple';",colourbutton);


 




};
seleniumautomation();
