describe('Click', ()=>{
    beforeEach(async()=>{
        //Load Homepage
        await browser.url("https://uitestingplayground.com/")
    })
    it('Should ignore the event based click by emulating physical mouse click', async()=>{
        await browser.waitAndClick('#overview > div > div:nth-child(2) > div:nth-child(3) > h3 > a')
        await browser.waitAndClick('#badButton')
        let button = await $('#badButton')
        await button.getCSSProperty('background-color')
        console.log(button)
        expect(button).toHaveElementProperty('background-color', 'rgba(0, 123, 255, 1)')
    })
})
