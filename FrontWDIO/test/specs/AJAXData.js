describe('AJAX Data', ()=>{
    beforeEach(async()=>{
        //Load Homepage
        await browser.url("https://uitestingplayground.com/")
    })
    it('Should wait for the AJAX elements to show up', async()=>{
        await browser.waitAndClick('#overview > div > div:nth-child(2) > div:nth-child(1) > h3 > a')
        await browser.waitAndClick('.btn-primary')
        //await browser.pause(15000)
        let information = await $('#content')
        await information.waitForDisplayed()
    })
})
