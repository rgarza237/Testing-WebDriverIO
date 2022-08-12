describe.skip('Dynamic Table', ()=>{
    beforeEach(async()=>{
        //Load Homepage
        await browser.url("https://uitestingplayground.com/")
    })
    it('Should verify the cell value in a dynamic table', async()=>{
        await browser.waitAndClick('#overview > div > div:nth-child(3) > div:nth-child(2) > h3 > a')
        let chromeVal = await $('body > section > div > div > div:nth-child(3) > div:nth-child(2) > span:nth-child(4)')
        let chromeCPU = await $('.bg-warning')
        expect(chromeCPU).toHaveValue(chromeVal)
    })
})