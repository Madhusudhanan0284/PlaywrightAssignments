import { test, expect } from "@playwright/test";

test("Learn handing frames using playwright", async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml");

    //To get Parent frame from the page
    const parentFrame = page.frameLocator('//iframe[@src="page.xhtml"]')

    //To locate the nested child frame inside the parent frame
    const nestedChildFrame = parentFrame.frameLocator('//iframe[@id = "frame2"]')

    const clickButton = nestedChildFrame.locator('#click')
    await clickButton.click()

    //Asset if the text is present for the click button in the page
    await expect(clickButton).toHaveText("Hurray! You Clicked Me.")
})