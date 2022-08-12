describe.skip('Mouse Over', ()=>{
    beforeEach(async()=>{
        //Load Homepage
        await browser.url("https://uitestingplayground.com/")
    })
    it('Should execute the test and make sure that the click count is increasing by 2', async()=>{
        await browser.waitAndClick('#overview > div > div:nth-child(4) > div:nth-child(3) > h3 > a')
        let click = await $('body > section > div > div:nth-child(7) > a')
        let count = await $('#clickCount')
        await click.doubleClick()
        await browser.waitUntil(
            async () => (await $(count).getText()) === '2',
            {
                timeout: 1000,
            }
        );
        await expect(count).toHaveText('2')
        await browser.pause(1000)
    })
})