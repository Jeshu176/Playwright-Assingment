import {test,chromium,firefox} from '@playwright/test'

test('Launch Browser',async()=>{

  
  const browser = await chromium.launch({channel:'msedge', headless:false})
  const page = await browser.newPage()
  await page.goto("https://www.redbus.in")
  const url =page.url
  const title=page.title
  console.log(`URL  ${url}`);
  console.log(`Title ${title}`);

  browser.close()

  const browser1= await firefox.launch({headless:false})
  const page1 = await browser1.newPage()
  await page1.goto("https://www.flipkart.com")
  const url1= page1.url
  const title1= page1.title
  console.log(`URL ${url1}`);
  console.log(`Title ${title1}`);
  browser1.close()
})