const { Builder,By } = require("selenium-webdriver");
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

//    //Getting the Header:
//    let headers = await driver.findElements(By.xpath("//div[@class='bd-example table-responsive']//thead"));

//    //Getting the Header text:
//    let headerText= await headers.getText();
//    console.log('Total header:',headerText);

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
  

   //Iterate through each column using Loop
   for (let j = 0; j < columns.length; j++) {
    let CellText =await columns[j].getText();
    console.log(`Column ${j+1}:`, CellText);  
   }
 // await driver.quit();
};
seleniumautomation();