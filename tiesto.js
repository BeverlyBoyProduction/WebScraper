import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: false });
const page = await browser.newPage();

// Only listen for requests matching this regular expression
page.route(/soundcloud.com\/tiesto/, async (route) => {
    // Continue  the route, but replace "tiesto" in the URL with "mestomusic"
    return route.continue({ url: route.request().url().replace('tiesto', 'mestomusic') });
});

await page.goto('https://soundcloud.com/tiesto/following');

await page.waitForTimeout(10000);
await browser.close();