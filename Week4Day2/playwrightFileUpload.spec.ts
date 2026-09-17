import {test} from "@playwright/test"
import path from "path"

test("file upload with input tag", async({page})=>{
    await page.goto("https://leafground.com/file.xhtml")

    //single file input
    //await page.locator('(//input[@type="file"])[1]').setInputFiles(path.join(__dirname,"../Data/file.png","../Data/file1.png"));

    //multiple file input
    await page.locator('(//input[@type="file"])[2]').setInputFiles([ path.join(__dirname, "../Data/file.png"),
        path.join(__dirname, "../Data/file1.png") ]);

    await page.waitForTimeout(3000);
})

test.only("file upload without input tag", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")

    //single file upload
    const FileUploadP= page.waitForEvent("filechooser");
    await page.locator('[id="drag-drop-upload"]').click();
    const FileULRef=await FileUploadP

    //single file upload
    //FileULRef.setFiles(path.join(__dirname, "../Data/file.png"))

    //Multiple file upload
    await FileULRef.setFiles([path.join(__dirname, "../Data/file.png"),path.join(__dirname, "../Data/file1.png")])

    await page.waitForTimeout(3000);
})