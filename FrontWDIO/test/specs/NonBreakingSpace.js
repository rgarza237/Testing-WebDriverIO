describe.skip('Non-Breaking Space', ()=>{
    beforeEach(async()=>{
        //Load Homepage
        await browser.url("https://uitestingplayground.com/")
    })
    it('Create a non-breaking space for the Xpath to be valid', async()=>{
        await browser.waitAndClick('#overview > div > div:nth-child(4) > div:nth-child(4) > h3 > a')
        let btton = await $('button*=Button')
        await btton.click()
    })
})