describe.skip('Scroll Bar', ()=>{
    beforeEach(async()=>{
        //Load Homepage
        await browser.url("https://uitestingplayground.com/")
    })
    it('Should move the scrollbars in order to find the element', async()=>{
        await browser.waitAndClick('#overview > div > div:nth-child(3) > div:nth-child(1) > h3 > a')
        let button = await $('.btn-primary')
        await button.scrollIntoView()
        await browser.waitAndClick('.btn-primary')
        //await browser.pause(2000)
    })
})
