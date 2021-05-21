// import { Builder, By, Key, until } from 'selenium-webdriver'
// import assert from 'assert'

// describe('selenium1', function() {
//   this.timeout(30000)
//   let driver
//   let vars
//   beforeEach(async function() {
//     driver = await new Builder().forBrowser('firefox').build()
//     vars = {}
//   })
//   // afterEach(async function() {
//   //   await driver.quit();
//   // })
//   it('selenium1', async function() {
//     await driver.get("https://dou.ua/")
//     await driver.manage().window().setRect(1936, 1056)
//     await driver.findElement(By.linkText("English")).click()
//     await driver.findElement(By.id("txtGlobalSearch")).click()
//     await driver.findElement(By.id("txtGlobalSearch")).sendKeys("IT Sales Internship")
//     await driver.findElement(By.id("txtGlobalSearch")).sendKeys(Key.ENTER)
//     let text = await driver.findElement(By.css("div:nth-of-type(1) > .gs-result.gs-webResult > .gsc-thumbnail-inside > .gs-title > .gs-title > b")).getText();
//     assert.strictEqual(text, 'IT Sales Internship', 'Wrong text');
//   })
// })
