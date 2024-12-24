const { Builder,By, until } = require("selenium-webdriver");
const { get } = require("selenium-webdriver/http");
const assert = require('assert');

const seleniumautomation = async () => {
    //Builder-->Sets the URL of a remote webDriver server to use
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();

    //we r using await method in async--->after the first line runs the next second line will run
   await driver.get("https://www.tutorialspoint.com/selenium/practice/webtables.php");

   //Finding the Locator for Webtable
   let webtable = await driver.findElement(By.xpath("//div[@class='bd-example table-responsive']"));

    //Getting the Headers name:
    let headers = await driver.findElement(By.xpath("//div[@class='bd-example table-responsive']//thead")).getText();
   console.log('Total headers are:',headers);

   //Get all the rows using table body and getting the length of the row [ TableRow---->tr]
   let rows= await webtable.findElements(By.xpath(".//tbody/tr"));
   console.log('Total Rows:' , rows.length);

   //Iterate through each row
   for (let i = 0; i < rows.length; i++) {
      let RowText = await rows[i].getText();
      console.log(`Row ${i+1}:` ,RowText);   
   }
 
   //Get all the columns using webtable:[TableColumn--->td]
   let columns= await webtable.findElements(By.tagName('td'));
   console.log('Total Columns:',columns.length);

   //Iterate through each column using Loop
   for (let j = 0; j < columns.length; j++) {
    let CellText =await columns[j].getText();
    console.log(`Column ${j+1}:`, CellText);  
   }
 // await driver.quit();

         //ADDING  A NEW WEBTABLE:
   let addwebtable=await driver.findElement(By.xpath("//button[text()='Add']")).click();
   
   //Using assert verifying the Registration form is present or not
  // let registerform = await driver.findElement(By.xpath("//div[@class='modal-header']//preceding::h5")).getText();
  // assert.strictEqual(registerform,'Registration Form','The name does not match');

  //firstName [Using elementIsVisible()--->Checking whether thebfirst name textbox is visible or not ].then passsing vaklues in sendkeys()
    let firstname=await driver.findElement(By.xpath("//input[@placeholder='First Name']"));
    await driver.wait(until.elementIsVisible(firstname),3000);
    firstname.sendKeys('Hinthumathi');
   
  //lastname
   let lastname=await driver.findElement(By.xpath("//input[@placeholder='Last Name']"));
   await driver.wait(until.elementIsVisible(lastname),3000);
   lastname.sendKeys('Karthik');
    
    //Email
     let Email=await driver.findElement(By.xpath("//input[@placeholder='Enter Email']"));
     await driver.wait(until.elementIsVisible(Email),3000);
     Email.sendKeys('Hinthumathi09@gmail.com');

   //Age
     let Age=await driver.findElement(By.xpath("//input[@placeholder='Enter Age']"));
     await driver.wait(until.elementIsVisible(Age),3000);
     Age.sendKeys('18-25');

  //Salary
      let salary=await driver.findElement(By.xpath("//input[@placeholder='Enter Salary']"));
      await driver.wait(until.elementIsVisible(salary),3000);
      salary.sendKeys('Sixty Five Thousands');
 
   //Department
      let department=await driver.findElement(By.xpath("//input[@placeholder='Enter Department']"));
      await driver.wait(until.elementIsVisible(department),3000);
      department.sendKeys('Bsc ComputerScience');
 
   //   //LoginButton
      let loginbtn=await driver.findElement(By.xpath("//input[@value='Login']"));
      await driver.wait(until.elementIsVisible(loginbtn),3000);
      loginbtn.click();
 
};
seleniumautomation();
