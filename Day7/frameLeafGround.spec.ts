import { expect,test } from "@playwright/test";
test("Frames Assignment",async({page})=>
{
    //1.Interact with Click Me button inside the frame
    await page.goto('https://leafground.com/frame.xhtml')
    const frameRef=await page.frameLocator('[src="default.xhtml"]')
    await frameRef.locator('#Click').click()
    console.log(await frameRef.locator('#Click').innerText())
    const val=await frameRef.locator('#Click').innerText()

    //2.Assert the text changed after clicking the button
    await expect (frameRef.locator('#Click')).toContainText('Hurray! You Clicked Me.')

    //3.Get the total count of frames present in the web page
    const allFrames=page.frames()
    console.log(`The total number of frames in this page is ${allFrames.length}`)
    
    //4.Interact with the Click Me button present inside a nested frame
    const outerFrameRef=page.frameLocator('[src="page.xhtml"]')
    const innerFrameRef=outerFrameRef.frameLocator('[src="framebutton.xhtml"]')
    await innerFrameRef.locator('#Click').click()

    //5.Assert the text changed , after intercating with the nested frame
    await expect(innerFrameRef.locator('#Click')).toContainText('Hurray! You Clicked Me.')
        
    await page.waitForTimeout(3000)
})