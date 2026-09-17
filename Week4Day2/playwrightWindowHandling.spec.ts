/* Classroom :


1. Search for iPhone in flipkart
2. Click on product from product list
3. Move playwright focus / control from parent pafe(list page) to product page
4. Retreive the title of the child page
5. Bring the focus back to parent page click "Men"
6. Comeback to childpage retreive the product name*/

import { test, expect } from "@playwright/test";

test("Learn handing windows using playwright", async ({ page, context }) => {

    await page.goto("https://www.flipkart.com/");
    const searchBox = await page.getByPlaceholder("Search for Products, Brands and More", {exact: true}).first()
    await searchBox.fill("iPhone 16")
    await searchBox.press("Enter")
    const childPage = await Promise.all([context.waitForEvent("page"), 
        page.getByText("Apple iPhone 16 (Black, 128 GB)",{exact:true}).first().click()])
    await childPage[0].waitForLoadState()
    console.log(await childPage[0].title());
    await page.bringToFront();
    await page.locator('//span[text()="Men"]').click()
    await childPage[0].bringToFront()
    await childPage[0].waitForLoadState()
    const productName = await childPage[0].getByText("Apple iPhone 16 (Black, 128 GB)",{exact:true}).innerText()
    console.log(productName);
})