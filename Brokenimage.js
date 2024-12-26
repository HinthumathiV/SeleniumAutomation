const { Builder,By } = require("selenium-webdriver");
const { get } = require("selenium-webdriver/http");
const assert = require('assert');
const chai= require('chai');

const seleniumautomation = async () => {
    //Builder-->Sets the URL of a remote webDriver server to use
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();

    //we r using await method in async--->after the first line runs the next second line will run
   await driver.get("https://www.tutorialspoint.com/selenium/practice/broken-links.php");

  //Verify the  text[Broken Links - Images]:
  let verifytext= await driver.findElement(By.xpath("//h1[text()='Broken Links - Images']")).getText();
  assert.strictEqual(verifytext,'Broken Links - Images','Text does not match');
  console.log(verifytext);

  //Verify the text[Broken Image]:
  let verifytext1= await driver.findElement(By.xpath("//strong[text()='Broken image']")).getText();
  assert.strictEqual(verifytext1,'Broken image','Text does not match');
  console.log(verifytext1);

  //Finding locator for broken image and checking how many link is present
 let brokenimage= await driver.findElements(By.tagName('img'));

  console.log(`Link on the page found is ${brokenimage.length}`);

//   //Finding the link,text and src of broken image
  //Iterate through elements and finding the length of link
  for (let i = 0; i < brokenimage.length; i++) {
    const element = brokenimage[i]; 

//Retrieve the Src and class attribute value
  let src= await element.getAttribute('src');
  let classname = await element.getAttribute('class');

    console.log(`Link ${i+1}`);
    console.log(`src: ${src}`); 
    console.log(`Class: ${classname}`);
    
// finding locator for whole page and Retrieve the text 
  //let imagetext = await driver.findElement(By.xpath("//div[@class='col-md-8 col-lg-8 col-xl-8']")).getText();
 
  //console.log(`Text: ${imagetext}`);
 
  // finding locator for href and getting href link:
  let hreflink=await driver.findElement(By.tagName('a')).getAttribute('href');
 // let href1=await hreflink.getAttribute('href');
   console.log(`Href: ${hreflink}`); 
  }

  //finding the locator for broken image link:
  let brokenimage2= await driver.findElement(By.xpath("//img[@class='broken-img']"));
  console.log("Starting Validations:");

//Validate the  broken image is present or not:
 let imagesrc=await brokenimage2 .getAttribute('src');
 console.log(`Image source URL:${imagesrc}`);

 try{
    let imageResponse=await axios.get(imagesrc);
    if (imageResponse.status === 200) {
      console.log('Image is Valid.');
      } else {
      console.log('Image is broken (Invalid HTTP Response)');
     }

 }catch(error){
  console.log('Image is broken (Request failed)');
 }

 //clicking the broken link
 let brokenlink= await driver.findElement(By.xpath("//a[text()='Click Here for Broken Link']")).click();

 //after navigate into next page verifying the text of status code
 let verifystatuscode= await driver.findElement(By.xpath("//h5[text()='This page returned a 500 status code.']")).getText();
assert.strictEqual(verifystatuscode,'This page returned a 500 status code.','Text does not match');
console.log(verifystatuscode);

//Navigate back to browser: [using Navigate ---->back()-->To move on to first window]
await driver.navigate().back();
console.log("Went  back to broken image previous window");











};
seleniumautomation();