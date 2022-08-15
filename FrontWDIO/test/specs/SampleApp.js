describe('Sample App', () =>{
    beforeEach(async()=>{
        //Load Homepage
        await browser.url("https://uitestingplayground.com/")
    })
it('Should Fill in and submit the form. For successfull login use any non-empty user name and `pwd` as password', async()=>{
    await browser.waitAndClick('#overview > div > div:nth-child(4) > div:nth-child(2) > h3 > a');
    let username = await $('/html/body/section/div/div[2]/div/input')
    let password = await $('/html/body/section/div/div[3]/div/input')
    let status = await $('loginstatus')

    await username.setValue('non-empty')
    await password.setValue('pwd')
    await browser.waitAndClick('#login')
    expect(status).toBeDisplayed()
})
})