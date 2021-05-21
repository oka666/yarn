import { Builder, By, Key, until } from 'selenium-webdriver'
import assert from 'assert'
import expect from 'expect.js'

describe('selenium2', function() {
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
  it('selenium2', async function() {
    await driver.get("https://dou.ua/")
    await driver.manage().window().setRect(1936, 1056)
    await driver.findElement(By.css(".m-last > a")).click()
    await driver.findElement(By.name("city")).click()
    {
      const dropdown = await driver.findElement(By.name("city"))
      await dropdown.findElement(By.xpath("//option[. = 'онлайн']")).click()
    }
    await driver.findElement(By.css("select:nth-child(2) > option:nth-child(2)")).click()
    await driver.findElement(By.name("tag")).click()
    {
      const dropdown = await driver.findElement(By.name("tag"))
      await dropdown.findElement(By.xpath("//option[. = 'AI']")).click()
    }
    await driver.findElement(By.css("select:nth-child(3) > option:nth-child(4)")).click()
    expect(await driver.findElement(By.css("div > .b-similar > h3"))).ok
  })
})
