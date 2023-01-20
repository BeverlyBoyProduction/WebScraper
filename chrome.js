import { chromium } from 'playwright';
import axios from 'axios'

const proxy = {
  protocol: 'http',
  host: 'proxy.apify.com',
  port: 8000,

  auth: { username: 'auto', password: 'apify_proxy_Moil4BfmGGChWMuOhBLYmbaIGLgDXG05Mnxb' },
};

const url = 'http://proxy.apify.com/?format=json';

const { data } = await axios.get(url, { proxy });

(async () => {
  
  const browser = await chromium.launch({ headless: false });  // Or 'firefox' or 'webkit'.
  const page = await browser.newPage();
  await page.goto('https://www.google.com');

})();

//running this more then like 5 times will crash the PC
