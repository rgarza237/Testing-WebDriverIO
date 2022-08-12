describe.skip('Client side delay', ()=>{
    beforeEach(async()=>{
        //Load Homepage
        await browser.url("https://uitestingplayground.com/")
    })
    it('Should wait for an element to show up', async()=>{
        await browser.waitAndClick('#overview > div > div:nth-child(2) > div:nth-child(2) > h3 > a')
        await browser.waitAndClick('#ajaxButton')
        let data = await $('.bg-success')
        await data.waitForDisplayed({timeout:30000})
    })
})
