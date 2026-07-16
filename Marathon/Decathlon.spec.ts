import { test,expect } from "@playwright/test";
test("Marathon 1 - Decathlon",async ({page}) => {
    await page.goto('https://www.decathlon.in/')
    //Click on search box, input "shoes" , Press Enter
    await page.locator('//input[@type="search"]').click()
    await page.getByRole("searchbox",{name:"Search for 60+ sports and 6,000+ products"}).fill("Shoes")
    await page.getByRole("searchbox",{name:"Search for 60+ sports and 6,000+ products"}).press("Enter")
    //Get the page titel , assert and print it in the console
    const titleofpage=await page.title()
    console.log(titleofpage)
    expect (titleofpage).toEqual("Search | Shoes")
    //Select Men under Gender filter
    await page.getByRole("button",{name:"Gender"}).click()
    await page.locator('//div[@id="gender_id_en"]/label[1]/span[1]').click()
    //Select "Uk 10.5" under size filter
    await page.getByRole("button",{name:"Size"}).click()
    await page.locator('//span[text()="Uk 10.5 - eu 45"]').click()
    //Select "Running" under sport filter
    await page.locator('//span[text()="Sport"]').click()
    await page.locator('//span[text()="Running"]').click()
    //Sort by Price high to low
    await page.getByRole("button",{name:"Most Relevant"}).click()
    await page.locator('//span[text()="Price (high → low) "]').click()
    //Select the first item displayed, select size 10.5
    await page.locator('//div[@data-test-id="product-card-product-image:stickers"]').click()
    await page.locator('//span[text()="UK 10.5 - EU 45"]').click()
    //Add to cart
    await page.getByRole("button",{name:"Add to cart"}).click()
    //Go to cart
    await page.getByRole("link",{name:"Cart"}).click()
    //Print the total value in the console
    const totalValue=await page.locator('//div[@data-test-id="cart:cart-checkout-total-cart-value"]').innerText()
    console.log(totalValue);
    await page.waitForTimeout(5000)
    
})