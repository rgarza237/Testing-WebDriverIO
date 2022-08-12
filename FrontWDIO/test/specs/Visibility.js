describe.skip('Visibility', ()=>{
    beforeEach(async()=>{
        //Load Homepage
        await browser.url("https://uitestingplayground.com/")
    })
    it('Should verify if elements are visible on the screen', async()=>{
        await browser.waitAndClick('#overview > div > div:nth-child(4) > div:nth-child(1) > h3 > a')
        let hide = await $('#hideButton')
        let removed = await $('#removedButton')
        let zero = await $('#zeroWidthButton')
        let overlapped = await $('#overlappedButton')
        let opacity = await $('#transparentButton')
        let visibility = await $('#invisibleButton')
        let displayNone = await $('#notdisplayedButton')
        let offscreen = await $('#offscreenButton')

        await browser.waitAndClick(hide)
        await expect(removed).not.toBeDisplayed()
        await expect(zero).toExist()
        await expect(overlapped).toExist()
        await expect(opacity).toExist()
        await expect(visibility).toExist()
        await expect(displayNone).toExist()
        await expect(offscreen).toExist()
    })
})