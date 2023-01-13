import { chromium } from 'playwright';



(async () => {
  const browser = await chromium.launch({ headless: false });  // Or 'firefox' or 'webkit'.
  const page = await browser.newPage();
  await page.goto('https://youtu.be/Fc6hpAxBSC0');
  await page.click('#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > button')
  await page.click('#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > span > button')
  await page.waitForTimeout(100000)
  browser.close();
})();

//running this more then like 5 times will crash the PC
