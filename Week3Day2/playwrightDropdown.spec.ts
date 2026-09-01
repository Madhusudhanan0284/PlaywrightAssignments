/*Classroom Activity:
Retrieve all the values for industry dropdpwn from the createlead page:
https://leaftaps.com/crmsfa/control/createLeadForm*/

import { test } from "@playwright/test";

test("Learn to Interact with Select tag dropdown", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill("democsr2");

    await page.locator('//input[@id="password"]').fill("crmsfa");

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.locator('//a[contains(text(),"CRM")]').click();

    await page.locator('//a[text()="Leads"]').click();

    await page.locator('//a[text()="Create Lead"]').click();


    let dropDownValues = page.locator('//select[@id="createLeadForm_industryEnumId"]/option') //dropDownValues// This holds 13 dropdown webelement

    const dropDownCount = await dropDownValues.count() // This line is extract the number of dropdown locator objects present in the DOM
        
    for (let i = 0; i < dropDownCount; i++) {       

        let dropDownValues = await page.locator('//select[@id="createLeadForm_industryEnumId"]/option').nth(i).innerText();
        console.log(dropDownValues);
        
    }

    await page.waitForTimeout(3000); // for demo
})