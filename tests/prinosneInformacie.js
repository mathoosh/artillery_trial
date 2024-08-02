const {expect, errors} = require('@playwright/test')
const constElements = require('../constantsPerf')

async function doleziteFaktyPerformance(page, _userContext, events, done){
    
    page.setDefaultTimeout(60000)

    await page.goto(constElements.Constants.BASEURL)
    // await page.getByRole('textbox', {name: 'User ID'}).pressSequentially(constElements.Constants.LOGINNAME, { delay: 100 })
    // await page.getByRole('textbox', {name: 'Password'}).pressSequentially(constElements.Constants.PASSWORD, { delay: 100 })
    // await page.getByRole('button', {name: 'Continue'}).click();

    // var startTime
    // var endTime
    // var size
    // var inventoryEndpoint
    // var mixingEndpoint

    // var millSizeArray = ["SMALL", "MEDIUM", "LARGE"]

    // //ALL SIZES MILL TESTS
    // for (var i = 0; i < millSizeArray.length; i++){
    
    //     size = millSizeArray[i]
        
    //     switch (size) {
    //         case "SMALL":
    //             inventoryEndpoint = constElements.Constants.INVENTORYENDPOINTSMALL
    //             mixingEndpoint = constElements.Constants.MIXINGENDPOINTSMALL
    //             break
    //         case "MEDIUM":
    //             inventoryEndpoint = constElements.Constants.INVENTORYENDPOINTMEDIUM
    //             mixingEndpoint = constElements.Constants.MIXINGENDPOINTMEDIUM
    //             break
    //         case "LARGE":
    //             inventoryEndpoint = constElements.Constants.INVENTORYENDPOINTLARGE
    //             mixingEndpoint = constElements.Constants.MIXINGENDPOINTLARGE
    //             break
    //     }

    //     //Inventory overview
    //     await page.goto(mixingEndpoint)
    //     await expect(page.getByTestId('summary-card').first()).toBeVisible({ timeout: 60000 })
    //     await expect(page.getByRole('link', {name: 'Warehouse'})).toBeVisible({ timeout: 60000 })

    //     startTime = performance.now()
    //     await page.getByRole('link', {name: 'Warehouse'}).click();
    //     await expect(page.getByTestId('warehouse-card').getByText('Available').first()).toBeVisible({ timeout: 60000 })
    //     endTime = performance.now()
        
    //     events.emit("histogram", "custom_001_" + size + "_mill_INVENTORY", endTime-startTime)
    //     if (endTime-startTime > 3000) {
    //         events.emit("counter", "custom_001_" + size + "_mill_INVENTORY(more than 3000 ms count)", 1)
    //     }

    //     //to simulate user behavior
    //     await page.waitForTimeout(3000)
        
    //     //Mixing library
    //     startTime = performance.now()
    //     await page.getByRole('link', {name: 'Mixing'}).click();
    //     await expect(page.getByTestId('summary-card').first()).toBeVisible({ timeout: 60000 })
    //     endTime = performance.now()
        
    //     events.emit("histogram", "custom_002_" + size + "_mill_MIXING", endTime-startTime)
    //     if (endTime-startTime > 3000) {
    //         events.emit("counter", "custom_002_" + size + "_mill_MIXING(more than 3000 ms count)", 1)
    //     };

    //     //to simulate user behavior
    //     await page.waitForTimeout(3000)

    //     //Laydown management screen
    //     await page.goto(mixingEndpoint);
    //     await expect(page.getByTestId('summary-card').first()).toBeVisible({ timeout: 60000 })

    //     startTime = performance.now()
    //     await page.getByTestId('summary-card-laydowns').getByText('Lot management').first().click()
    //     await expect(page.getByTestId('laydown-management-chart')).toBeVisible({ timeout: 60000 })
    //     endTime = performance.now()

    //     events.emit("histogram", "custom_003_" + size + "_mill_LAYDOWN_MANAGEMENT_SCREEN", endTime-startTime)
    //     if (endTime-startTime > 3000) {
    //         events.emit("counter", "custom_003_" + size + "_mill_LAYDOWN_MANAGEMENT_SCREEN(more than 3000 ms count)", 1)
    //     };

    //     //to simulate user behavior
    //     await page.waitForTimeout(3000)

    //     //Inventory detailed view
    //     await page.goto(inventoryEndpoint)
    //     await expect(page.getByTestId('warehouse-card').getByText('Available').first()).toBeVisible({ timeout: 60000 })

    //     startTime = performance.now()
    //     await page.getByTestId('warehouse-card-navigate-to-warehouse-details-lot').first().click()
    //     await expect(page.getByTestId('inventory-lot-detail-table')).toBeVisible({ timeout: 60000 })
    //     endTime = performance.now()
        
    //     events.emit("histogram", "custom_004_" + size + "_mill_INVENTORY_DETAILED_VIEW", endTime-startTime)
    //     if (endTime-startTime > 3000) {
    //         events.emit("counter", "custom_004_" + size + "_mill_INVENTORY_DETAILED_VIEW(more than 3000 ms count)", 1)
    //     };

    //     //to simulate user behavior
    //     await page.waitForTimeout(3000)

    //     //Laydown detailed view
    //     await page.goto(mixingEndpoint);
    //     await page.getByTestId('summary-card-laydowns').getByText('Lot management').first().click()
    //     await page.getByTestId('laydown-management-table').getByRole('row').getByText(' 1 ', { exact: true }).click()
        
    //     startTime = performance.now()
    //     await page.getByText(' open_in_new ').click()
    //     await expect(page.getByTestId('laydown-grid-card').first()).toBeVisible({ timeout: 60000 })
    //     endTime = performance.now()
        
    //     events.emit("histogram", "custom_005_" + size + "_mill_LAYDOWN_DETAILED_VIEW", endTime-startTime)
    //     if (endTime-startTime > 3000) {
    //         events.emit("counter", "custom_005_" + size + "_mill_LAYDOWN_DETAILED_VIEW(more than 3000 ms count)", 1)
    //     };
 
    //     //to simulate user behavior
    //     await page.waitForTimeout(3000)
               
    //     // Mixing summary
    //     await page.goto(mixingEndpoint);
    //     await expect(page.getByTestId('summary-card').first()).toBeVisible({ timeout: 60000 })
        
    //     startTime = performance.now()
    //     await page.getByTestId('summary-card').locator('.title').first().click()
    //     await expect(page.getByTestId('mixing-summary-table')).toBeVisible({ timeout: 60000 })
    //     endTime = performance.now()
        
    //     events.emit("histogram", "custom_006_" + size + "_mill_MIXING_SUMMARY", endTime-startTime)
    //     if (endTime-startTime > 3000) {
    //         events.emit("counter", "custom_006_" + size + "_mill_MIXING_SUMMARY(more than 3000 ms count)", 1)
    //     };

    //     //to simulate user behavior
    //     await page.waitForTimeout(3000)
        
    //     // Mixing creation
    //     await page.goto(mixingEndpoint);
    //     await expect(page.getByTestId('summary-card').first()).toBeVisible({ timeout: 60000 })
    //     await page.getByText('New mixing').click()
    //     await page.locator('.mdc-button').getByText(' Lot management ').click()

    //     startTime = performance.now()
    //     await expect(page.getByTestId('variety-selection-search-varieties')).toBeVisible({ timeout: 60000 })
    //     endTime = performance.now()
        
    //     events.emit("histogram", "custom_007_" + size + "_mill_MIXING_CREATION", endTime-startTime)
    //     if (endTime-startTime > 3000) {
    //         events.emit("counter", "custom_007_" + size + "_mill_MIXING_CREATION(more than 3000 ms count)", 1)
    //     };

    //     //to simulate user behavior
    //     await page.waitForTimeout(3000)
        
    //     // Mixing edit
    //     await page.goto(mixingEndpoint);
    //     await page.getByTestId('summary-card').locator('.title').first().click()

    //     startTime = performance.now()
    //     await page.getByText('Edit mixing').click()
    //     await expect(page.getByTestId('variety-card-button-list-button').first()).toBeVisible({ timeout: 60000 })
    //     endTime = performance.now()
        
    //     events.emit("histogram", "custom_008_" + size + "_mill_MIXING_EDIT", endTime-startTime)
    //     if (endTime-startTime > 3000) {
    //         events.emit("counter", "custom_008_" + size + "_mill_MIXING_EDIT(more than 3000 ms count)", 1)
    //     };

    //     //to simulate user behavior
    //     await page.waitForTimeout(3000)
        
    //     // Bale opener management
    //     await page.goto(inventoryEndpoint)
    //     await page.getByRole('button', {expanded: false}).click()

    //     startTime = performance.now()
    //     await page.getByRole('menuitem', {name: 'Manage bale openers'}).click()
    //     await expect(page.getByRole('row').first()).toBeVisible({ timeout: 60000 })
    //     endTime = performance.now()
        
    //     events.emit("histogram", "custom_009_" + size + "_mill_BALE_OPENER_MANAGEMENT", endTime-startTime)
    //     if (endTime-startTime > 3000) {
    //         events.emit("counter", "custom_009_" + size + "_mill_BALE_OPENER_MANAGEMENT(more than 3000 ms count)", 1)
    //     };
        
    //     //to simulate user behavior
    //     await page.waitForTimeout(3000)
        
    //     // Warehouse management
    //     await page.goto(inventoryEndpoint)
    //     await page.getByRole('button', {expanded: false}).click()

    //     startTime = performance.now()
    //     await page.getByRole('menuitem', {name: 'Manage warehouses'}).click()
    //     await expect(page.getByRole('row').first()).toBeVisible({ timeout: 60000 })
    //     endTime = performance.now()
        
    //     events.emit("histogram", "custom_010_" + size + "_mill_WAREHOUSE_MANAGEMENT", endTime-startTime)
    //     if (endTime-startTime > 3000) {
    //         events.emit("counter", "custom_010_" + size + "_mill_WAREHOUSE_MANAGEMENT(more than 3000 ms count)", 1)
    //     };

    //     //to simulate user behavior
    //     await page.waitForTimeout(3000)
        
    //     // Variety management
    //     await page.goto(inventoryEndpoint)
    //     await page.getByRole('button', {expanded: false}).click()

    //     startTime = performance.now()
    //     await page.getByRole('menuitem', {name: 'Manage varieties'}).click()
    //     await expect(page.getByRole('row').first()).toBeVisible({ timeout: 60000 })
    //     endTime = performance.now()
        
    //     events.emit("histogram", "custom_011_" + size + "_mill_VARIETY_MANAGEMENT", endTime-startTime)
    //     if (endTime-startTime > 3000) {
    //         events.emit("counter", "custom_011_" + size + "_mill_VARIETY_MANAGEMENT(more than 3000 ms count)", 1)
    //     };
    //}
}
module.exports = {
    doleziteFaktyPerformance
}