describe.skip('Text Imput', ()=>{
    beforeEach(async()=>{
        //Load Homepage
        await browser.url("https://uitestingplayground.com/")
    })
    it('Should emulate real keyboard imput at OS level', async()=>{
        await browser.waitAndClick('#overview > div > div:nth-child(2) > div:nth-child(4) > h3 > a')
        let input = await $('.form-control')
        let value = 'NuevoBoton'
        await input.setValue(value)
        await browser.waitAndClick('.btn-primary')
        let boton = await $('.btn-primary')
        expect(boton).toHaveValue(value)  
    })
})
