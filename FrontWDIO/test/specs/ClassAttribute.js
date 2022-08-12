describe.skip('Class Attribute', ()=>{
    beforeEach(async()=>{
        //Load Homepage
        await browser.url("https://uitestingplayground.com/")
    })
    it("Should check that class attribute based XPath is well formed", async()=>{
        await browser.waitAndClick('#overview > div > div:nth-child(1) > div:nth-child(2) > h3 > a')
        await browser.waitAndClick('.btn-primary')
    //    await browser.pause(5)
        await browser.acceptAlert()
    //    await browser.pause(5)
    })
})