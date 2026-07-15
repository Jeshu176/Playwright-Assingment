import { test,expect } from "@playwright/test";
test("Marathon 1 - PVR",async({page})=>
{
    await page.goto('https://www.pvrcinemas.com')
    //Search Location =Chennai
    await page.getByRole("combobox",{name:"Cities"}).fill('Chennai')
    //Select Chennai location
    await page.locator('//li[@role="option"]').click()
    //Select Cinema
    await page.locator('//span[text()="Cinema"]').click()
    //Select the cinema name
    await page.getByRole("button",{name:"Select Cinema"}).click()
    //Select the date
    await page.locator('//ul[@role="listbox"]/li[3]').click()
    await page.locator('//ul[@role="listbox"]/li[2]').click()
    //Select the movie name
    await page.locator('//ul[@role="listbox"]/li[2]/span[text()="EVIL DEAD BURN"]').click()
    //Select the timing
    await page.locator('//html/body/div[3]/div/ul/li[4]/span/span[1]').click()
    //Click Submit
    await page.locator('//button[@type="submit"]').click()
    //Select the seat 
    await expect (page.locator('//span[@id="CL.CLUB|I:3"]')).toBeEnabled({timeout:8000})
    await page.locator('//span[@id="CL.CLUB|I:3"]').click()
    //Get the movie summary content
    console.log(await page.locator('//div[@class="summary-movies-content"]').innerText())
    await expect (page.locator('//div[@class="summary-movies-content"]')).toContainText('EVIL DEAD BURN')
    //Assert the selected seat number
    await expect (page.locator('//div[@class="seat-number"]/p')).toContainText('I3')
    //Get the page title and assert it 
    const pageTitle=await page.title()
    expect (pageTitle).toContain("PVR Cinemas")
    //Click proceed
    await page.locator('//button[text()="Proceed"]').click()
    await page.waitForTimeout(4000)
})