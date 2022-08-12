describe.skip('Verify Text', ()=>{
    beforeEach(async()=>{
        //Load Homepage
        await browser.url("https://uitestingplayground.com/")
    })
    it('Should verify that the element contains the Welcome... text', async()=>{
        await browser.waitAndClick('#overview > div > div:nth-child(3) > div:nth-child(3) > h3 > a')
        let information = await $('badge-secondary')
        expect(information).toHaveValueContaining('Welcome')
    })
})