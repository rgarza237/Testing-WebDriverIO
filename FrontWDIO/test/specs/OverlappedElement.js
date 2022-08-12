describe.skip("Overlapped Element", () => {
  beforeEach(async () => {
    //Load Homepage
    await browser.url("https://uitestingplayground.com/");
  });
  it("Should make the element visible to enter the text", async () => {
    await browser.waitAndClick("#overview > div > div:nth-child(5) > div:nth-child(1) > h3 > a");
    let aidi = await $("#id");
    let name = await $("#name");

    await aidi.scrollIntoView()
    await aidi.setValue('aidis')
    await name.scrollIntoView()
    await name.setValue('TiaPiolinBendicionesSaludameATuMami')
    await browser.pause(100)
  });
});
