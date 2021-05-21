import { Builder, By, Key, until } from 'selenium-webdriver'
import assert from 'assert'
import expect from 'expect'

describe('selenium3', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  // afterEach(async function() {
  //   await driver.quit();
  // })
  it('selenium3', async function() {
    await driver.get("https://dou.ua/")
    await driver.manage().window().setRect(1936, 1056)
    await driver.findElement(By.css(".b-head li:nth-child(6) > a")).click()
    await driver.findElement(By.xpath("//a[@href='https://jobs.dou.ua/ratings/']")).click()
    let textToVerify = await driver.findElement(By.xpath("//table[@id='ratingsTableId']//tr[1]/td/h3[@class='g-h5']")).getText()
    expect(textToVerify).toEqual('от 1500 специалистов');
    await driver.findElement(By.css(".l-content.m-db p > a:nth-of-type(1)")).click()
    expect(textToVerify).toEqual('понад 1500 спеціалістів')
  })
})
