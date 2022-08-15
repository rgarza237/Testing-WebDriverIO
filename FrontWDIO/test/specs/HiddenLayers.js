describe('Hidden Layers', ()=>{
    beforeEach(async()=>{
        //Load Homepage
        await browser.url("https://uitestingplayground.com/")
    })
    it("Should verify that your test does not interact with elements visible becaus of z-order",async()=>{
        await browser.waitAndClick('#overview > div > div:nth-child(1) > div:nth-child(3) > h3 > a')
        let greenButton = await $('#greenButton')
        expect(greenButton).toBeClickable()
        let blueButton = await $('#blueButton')
        expect(blueButton).toExist();
        expect(blueButton).toBeClickable();
    })
})
    //Double check this 3rd task please