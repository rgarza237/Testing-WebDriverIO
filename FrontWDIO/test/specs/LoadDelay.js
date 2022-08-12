describe.skip('Load Delay', ()=>{
    beforeEach(async()=>{
        //Load Homepage
        await browser.url("https://uitestingplayground.com/")
    })
    it('Should ensure that a test is capable of waiting for a page to load', async()=>{
        await browser.waitAndClick('#overview > div > div:nth-child(1) > div:nth-child(4) > h3 > a')
        await browser.waitAndClick('.btn-primary')
        })
})
