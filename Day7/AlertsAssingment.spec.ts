import { expect,test } from "@playwright/test";
test("Handle Alerts assignment",async({page})=>{
       //3.Handle the alert
    page.on("dialog",async (allalert) => {
        console.log(allalert.type())
        console.log(allalert.message())
        await allalert.accept()
        
    })
    //1.Load URL
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
    //2.Get into the frame , Click Try it button 
    const frameRef=page.frameLocator('//iframe[@id="iframeResult"]')
    await frameRef.locator('//button[text()="Try it"]').click()
  
    //4.Assert text within a frame
    await expect (frameRef.locator('#demo')).toContainText('You pressed OK!')
    await page.waitForTimeout(5000)
})