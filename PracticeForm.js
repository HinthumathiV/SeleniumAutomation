const { Builder,By, until, Options } = require("selenium-webdriver");
const { get } = require("selenium-webdriver/http");
const assert = require('assert');
const chai= require('chai');

const seleniumautomation = async () => {
    //Builder-->Sets the URL of a remote webDriver server to use
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
   
    //we r using await method in async--->after the first line runs the next second line will run
   await driver.get("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");

   //Verify the text[Student Registration Form]:
   let verifytext= await driver.findElement(By.xpath("//h1[text()='Student Registration Form']")).getText();
    assert.strictEqual(verifytext,'Student Registration Form','Text does not match');
    console.log(verifytext);

    //FirstName
    let firstname=await driver.findElement(By.name('name')).sendKeys("Hinthumathi");

    //Email
    let Email=await driver.findElement(By.name('email')).sendKeys("hinthumathi09@gmail.com");

    //Gender[RADIOBUTTON] copying the full Xpath

    let Gender=await driver.findElement(By.xpath('/html/body/main/div/div/div[2]/form/div[3]/div/div/div[2]/input')).click();

  //Mobile Number
  let Mobileno=await driver.findElement(By.name('mobile')).sendKeys("8976543210");

  //D.O.B
  let DOB=await driver.findElement(By.name('dob')).sendKeys("06/04/1999");

  //Subjects
  let subjects=await driver.findElement(By.name('subjects')).sendKeys("Java,Javascript,Python");
 
 // finding locator for Hobbies and using executeScript to Scrolldown and then clicking the button:
  let Hobbies=await driver.findElement(By.xpath('//*[@id="practiceForm"]/div[7]/div/div/div[2]/input'));
  await driver.executeScript("arguments[0].scrollIntoView(true);",Hobbies);
  await driver.executeScript("arguments[0].click();",Hobbies);
  
 
//Getting the path of iamge and upload the picture
 let Roseimagepath= "C:\\Users\\HinthumathiV\\Downloads\\Rosepicture.jpg";
 let image= await driver.findElement(By.name('picture'));

 console.log("Starting uploading images:");
 await image.sendKeys(Roseimagepath);
 console.log("File Uploaded Successfully");

//Current Address
let currentaddress= await driver.findElement(By.xpath("//textarea[@placeholder='Currend Address']")).sendKeys("West Tambaram");

//current state finding common locator for dropdown and scrolling down the window:
let dropdownstate= await driver.findElement(By.id('state'));
await driver.executeScript("arguments[0].scrollIntoView(true);",dropdownstate);

//Performing DROPDOWN here because all the state is under SELECT OPTION [SelectByIndex[]--->Options[2]]

let Options=await dropdownstate.findElements( By.tagName('option'));
await Options[2].click();

//current city finding common locator for dropdown and scrolling down the window:
let dropdowncity= await driver.findElement(By.id('city'));
await driver.executeScript("arguments[0].scrollIntoView(true);",dropdowncity);

//Performing DROPDOWN here because all the city is under SELECT OPTION [SelectByIndex[]--->Options[3]]

let Options1=await dropdowncity.findElements( By.tagName('option'));
await Options1[3].click();

//clicking Login Button
let loginbtn= await driver.findElement(By.xpath("//input[@type='submit']"));
await driver.executeScript("arguments[0].click();",loginbtn);
console.log("Login button clicked Successfully");







};
seleniumautomation();