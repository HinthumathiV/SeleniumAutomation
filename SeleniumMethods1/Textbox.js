
const { Builder,By } = require("selenium-webdriver");
const { get } = require("selenium-webdriver/http");
const assert = require('assert');

const seleniumautomation = async () => {
    //Builder-->Sets the URL of a remote webDriver server to use
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();

    //we r using await method in async--->after the first line runs the next second line will run
   await driver.get("https://www.tutorialspoint.com/selenium/practice/text-box.php");

   //TEXTBOX:
   
   // checking whether the fullname textbox is displaying or not:
   let fullname = await driver.findElement(By.xpath("//input[@id='fullname']"));
   let isDisplayed = await fullname.isDisplayed();
   assert.ok('The textbox fullname should be display',isDisplayed);
   console.log(isDisplayed);

   //passing the values for fullname:
   fullname.sendKeys("Hinthumathi.V");

   //Email
   let email= await driver.findElement(By.xpath("//input[@id='email']")).sendKeys("Hinthukarthik64@gmail.com");

   //Cuurent address:
   let address= await driver.findElement(By.xpath("//textarea[@id='address']")).sendKeys("2,Nile street,TTk Nagar,West Tambaram");

   //Password:
   let password= await driver.findElement(By.xpath("//input[@id='password']")).sendKeys("Hinthumathi@87");

  //submit:
  let submit = await driver.findElement(By.xpath("//input[@type='submit']")).click();

  
  







};
seleniumautomation();