const { Builder , By} = require("selenium-webdriver");
const { get } = require("selenium-webdriver/http");

const createAccount = async () => {
    //Builder-->Sets the URL of a remote webDriver server to use
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
   
    //we r using await method in async--->after the first line runs the next second line will run
   await driver.get("https://www.facebook.com/");

   //CreateNewButton click:
   let createbtnclick = await driver.findElement(By.xpath("//a[@class='_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy']")).click();

   //firstname:
   let firstname = await driver.findElement(By.xpath("//input[@name='firstname']")).sendKeys("Hinthumathi");

   //Surname:
let surname = await driver.findElement(By.xpath("//input[@name='lastname']")).sendKeys("V");

   //D.O.B
   //Date
   let dayDropdown = await driver.findElement(By.xpath("//select[@name='birthday_day']"));
   await dayDropdown.sendKeys('6');

   //month
   let monthDropdown = await driver.findElement(By.xpath("//select[@id='month']"));
   await monthDropdown.sendKeys('Apr');

   //year
   let yearDropdown = await driver.findElement(By.xpath("//select[@id='year']"));
   await  yearDropdown.sendKeys('1999');
  
   //Gender
   let genderbtn = await driver.findElement(By.xpath("//label[text()='Female']")).click();

   //Mobile number or Email address
   let Mobilenum = await driver.findElement(By.xpath("//input[@name='reg_email__']")).sendKeys("9092546102");

   //New Password
   let newpassword = await driver.findElement(By.xpath("//input[@name='reg_passwd__']")).sendKeys("Hinthukarthik@09");

   //Clicking button Sign In
   let btnSignIn = await driver.findElement(By.xpath("//button[@class='_6j mvm _6wk _6wl _58mi _3ma _6o _6v']")).click();


};
createAccount();