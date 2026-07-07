import {test,chromium,firefox} from '@playwright/test'
test("Interact Using CSS",async({page})=>
{
    await page.goto("https://leaftaps.com/opentaps/control/login")//load url
    await page.locator('#username').fill('Demosalesmanager')//Enter username
    await page.locator('#password').fill('crmsfa')//Enter password
    await page.locator('.decorativeSubmit').click()//Clcik Login
    await page.locator('#label').click()//Clcik CRM/SFA
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click()//Click Leads
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click()//Click Create Lead
    await page.locator('#createLeadForm_companyName').fill('Infosys')//Fill Company Name
    await page.locator('#createLeadForm_firstName').fill('Chinthana')//Fill first name
    await page.locator('#createLeadForm_lastName').fill('JS')//Fill last name
    await page.locator('#createLeadForm_personalTitle').fill('Ms')//Fill Salutation
    await page.locator('#createLeadForm_generalProfTitle').fill('Test Engineer')//Fill Title
    await page.locator('#createLeadForm_annualRevenue').fill('100,000,000')//Fill Annual Revenue
    await page.locator('#createLeadForm_departmentName').fill('IT')//Fill Department
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9940994484')//Fill Phonenumber
    await page.locator('.smallSubmit').click();//Click Create Lead
    console.log(await page.title());//Get page title
    await page.waitForTimeout(7000)
}
)