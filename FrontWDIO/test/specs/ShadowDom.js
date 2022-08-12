describe("Shadow Dom", () => {
  beforeEach(async () => {
    //Load Homepage
    await browser.url("https://uitestingplayground.com/");
  });
  it("Should assert and compare the values from the copy button and the input are the same", async () => {
    await browser.waitAndClick('#overview > div > div:nth-child(5) > div:nth-child(2) > h3 > a');

    let input = await $('>>>.edit-field:not([hidden])')
    let gear = await $('>>>.button-generate:not([hidden])')
    let copy = await $('>>>.button-copy:not([hidden])')

    await gear.click()
    await copy.click()

    await copy.getValue()
    console.log(copy)

    await browser.waitUntil(
      async () => (await input.getText()) === copy.getValue(),
      {
        timeout: 3000,
      }
    );

  })
  afterEach(async ()=>{
    await browser.saveScreenshot('./screenshots/ShadowDom.png')
})
})
