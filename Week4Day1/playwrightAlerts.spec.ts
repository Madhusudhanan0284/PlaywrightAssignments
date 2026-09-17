import {test,expect} from "@playwright/test"
test("Interact with Alerts and Frames", async({page}) => {
    page.on("dialog",async(Alert)=>{
        console.log("Alert Type :" +Alert.type());
        await Alert.accept();
    })

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    const Frame = page.frameLocator('//iframe[@id="iframeResult"]');
    await Frame.locator('//button[text()="Try it"]').click();
    const buttonText = await Frame.locator('//p[@id="demo"]');
    await expect(buttonText).toHaveText("You pressed OK!");
})