describe('Progress Bar', ()=>{
    beforeEach(async()=>{
        //Load Homepage
        await browser.url("https://uitestingplayground.com/")
    })
    it('Should click start button and wait for the progress bar to reach 75% then it should click stop', async()=>{
        await browser.waitAndClick('#overview > div > div:nth-child(3) > div:nth-child(4) > h3 > a')


        let start = await $('#startButton')
        let stop = await $('#stopButton')
        let bar = await $('#progressBar')
        await start.click();
        await browser.waitUntil(
            async () => (await $(bar).getText()) === '75%',
            {
                timeout: 30000,
            }
        );
        await stop.click();
    })
})