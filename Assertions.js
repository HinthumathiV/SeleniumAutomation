
const { Builder,By } = require("selenium-webdriver");
const { get } = require("selenium-webdriver/http");
const assert = require('assert');

const facebookassert = async () => {
    //Builder-->Sets the URL of a remote webDriver server to use
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();

    //we r using await method in async--->after the first line runs the next second line will run
   await driver.get("https://www.facebook.com/");

  //Assert the page title:
  let Title=await driver.getTitle();
  assert.strictEqual(Title,'Facebook – log in or sign up','page title mismatch');
  console.log(Title);

  //Assert the text
  let actualtext = await driver.findElement(By.xpath("//h2[@class='_8eso']")).getText();
  assert.strictEqual(actualtext,'Facebook helps you connect and share with the people in your life.','Text not match');
  console.log(actualtext);

//Username
 // let username= await driver.findElement(By.xpath("//input[@id='email']")).sendKeys("hindhumathi1164@gmail.com");
 
//Checking whether the Username box element isDisplayed
//assertok()----> displays Boolean condition [true or false]
 let username = await driver.findElement(By.xpath("//input[@id='email']"));
 let isDisplayed= await username.isDisplayed();
 assert.ok('the element should be  displayed', isDisplayed);
 console.log(isDisplayed);

  //password
//  let password= await driver.findElement(By.xpath("//input[@id='pass']")).sendKeys("karthik@78");

//Checking whether the password box element isDisplayed 
//Using assertok()---->To check the element is visible or not and display boolean condition [true or false]
 let password = await driver.findElement(By.xpath("//input[@id='pass']"));
 let isDisplayed1= await password.isDisplayed();
 assert.ok('the element should be displayed', isDisplayed);
 console.log(isDisplayed1);

 //using wait
 await driver.sleep(3000);

 //login button
 let loginbtn = await driver.findElement(By.xpath("//button[@name='login']")).click();

 //Using Assert and verifying the Error msg after clicking login btn:
  let ActualErrormsg= await driver.findElement(By.xpath("//div[@class='_9ay7']")).getText();
  let Expectedmsg = "The email address you entered isn't connected to an account. Find your account and log in.";
  assert(ActualErrormsg,Expectedmsg.includes('Find your account and log in'),'text does not contain expected');
  console.log(ActualErrormsg);

   //Assert the text [Forgetten Password?]:
   let actualtext1= await driver.findElement(By.xpath("//a[@class='_97w4']")).getText();
   assert.strictEqual(actualtext1,'Forgotten password?','Text does not match');
   console.log(actualtext1);
   

  //  //Assert the Text[facebook]
  //  let imagesrc = await driver.findElement(By.xpath("//img[@class='_97vu img']")).getAttribute(z);
   
  //  assert.strictEqual(imagesrc,'facebook','text does not match');


};
facebookassert();