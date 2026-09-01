import { expect,test } from "@playwright/test";

test("Learn to Interact with Select tag dropdown", async ({ page }) => {

    await page.goto("https://leafground.com/input.xhtml");
    await expect(page.getByRole("heading",{name : "Verify if text box is disabled"})).toBeDisabled();
    await expect(page.getByPlaceholder("Babu Manickam").fill("Madhusudhanan"))
    await expect.soft(page.locator("//input[@class = 'ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all city ui-state-filled']")).toBeDisabled()
})