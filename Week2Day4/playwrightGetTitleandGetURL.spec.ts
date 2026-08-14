//importing the necessary driver names to use for the execution
import test, { chromium, firefox } from '@playwright/test'

test('launching in edge browser', async () => {
    //using channel as msedge and headless as false make the script visible while execuing
    const browser = await chromium.launch({ channel: 'msedge', headless: false })
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.redbus.in")
    console.log(await page.title());
    console.log(await page.url());
})

test('launching in firefox browser', async () => {
    //using headless as false make the script visible while execuing
    const browser = await firefox.launch({ headless: false })
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.flipkart.com")
    console.log(await page.title());
    console.log(await page.url());
})