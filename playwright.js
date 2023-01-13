import { chromium } from 'playwright';
import { load } from 'cheerio';

const browser = await chromium.launch({ headless: false });

// code will be here in the future
const page = await browser.newPage();

await page.goto('https://google.com')

// Click the "I agree" button
//await page.click('button:has-text("I agree")');

// Type the query into the search box
await page.type('input[title="Search"]', 'Beverlyboy Productions');
await page.keyboard.press('Enter');

await page.click('.g a');
await page.waitForLoadState('networkidle');
// Grab the title and set it to a variable
const title = await page.title();

// Log the title to the console
console.log(title);

// Take the screenshot and write it to the filesystem
await page.screenshot({ path: 'screenshot.png' });

await page.waitForTimeout(5000)

await browser.close();