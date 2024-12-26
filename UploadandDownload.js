const { Builder,By } = require("selenium-webdriver");
const { get } = require("selenium-webdriver/http");
const assert = require('assert');
const chai= require('chai');
const path = require("path");

const seleniumautomation = async () => {
    //Builder-->Sets the URL of a remote webDriver server to use
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();

//we r using await method in async--->after the first line runs the next second line will run
   await driver.get("https://www.tutorialspoint.com/selenium/practice/upload-download.php");

//Giving absolute path of the file
 let FilepathUpload= "C:\\Users\\HinthumathiV\\Downloads\\sampleFile (8).jpeg"; 
 
//CLICKING DOWNLOAD 
   let btnclick=await driver.findElement(By.xpath("//a[text()='Download']")).click();

//Uploading downloaded file:
console.log("Started Uploading Files:")
let Choosefile=await driver.findElement(By.xpath("//input[@class='form-control-file']"));

//let filePath=path.resolve("C:\Users\HinthumathiV\Downloads\sampleFile (8).jpeg");
await Choosefile.sendKeys(FilepathUpload);
console.log("File Uploaded Successfully");



};
seleniumautomation();
