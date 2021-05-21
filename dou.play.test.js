const {chromium} = require('playwright');
const log4js = require('log4js');
const expect = require('expect');
  let browser;
  let page;

  const logger = log4js.getLogger();
  logger.level = process.env.LOG_LEVEL || 'error';

  beforeAll(async () => {
    browser = await chromium.launch();
  });
  afterAll(async () => {
    await browser.close();
  });
  beforeEach(async () => {
    page = await browser.newPage();
  });
  afterEach(async () => {
    await page.close();
  });

  logger.debug('starts debug started');

  it('should work', async () => {
    await page.goto('https://dou.ua/');
    expect(await page.title()).toBe('Сообщество программистов | DOU');
    expect(await page.isVisible('input#txtGlobalSearch'));
    logger.debug('starts debug finished');
    logger.warn('starts warning finished');
    logger.error('starts error finished');
  })



//   await page.goto('https://dou.ua/');
//   // Click text=Senior Manual Test Engineer (Ukraine) в AutoMobile Technologies ...
//   const [page2] = await Promise.all([
//     page.waitForEvent('popup'),
//     page.click('text=Senior Manual Test Engineer (Ukraine) в AutoMobile Technologies ...')
//   ]);
//   // Click text=AutoMobile Technologies
//   await page2.click('text=AutoMobile Technologies');
//   // assert.equal(page2.url(), 'https://jobs.dou.ua/companies/automobile-technologies/');
//   // Click text=Офисы
//   await page2.click('text=Офисы');
//   // assert.equal(page2.url(), 'https://jobs.dou.ua/companies/automobile-technologies/offices/');

// })();


