import test,{chromium} from '@playwright/test'

test('launch browser', async()=>
{
    const browser = await chromium.launch({channel : 'chrome', headless : false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://playwright.dev/")
    console.log(await page.title());    
})