import { BleusquiSquite } from "../dist/index.js";
// import { Bleusqui } from "../dist/bleusqui.js";
import { expect } from "chai";
// import sinon from "sinon";

describe("Testing BleusquiSquite class", function () {
  // sinon.stub(Bleusqui, "agent").value({
  //   login: sinon.stub(),
  //
  // })
  // sinon.replace(Bleusqui, "agent", {});

  const newBleusquiSquite = () =>
    new BleusquiSquite({ identifier: "identifier", password: "password" });

  it("can be initialized with a configuration", function () {
    const bleusquiSquite = newBleusquiSquite();

    expect(bleusquiSquite).to.be.instanceof(BleusquiSquite);
  });

  it.skip("throws if initialized without a configuration", function () {
    // @ts-expect-error
    expect(() => new BleusquiSquite()).to.throw();
  });

  describe("#addPhoto()", function () {

    // sinon.stub(BleusquiSquite, <any>"agent").returns({
    //   uploadBlob: sinon.stub().resolves({
    //     data: {
    //       blob: new Blob()
    //     }
    //   })
    // });

    it("returns itself (as a promise)", async function () {
      let bleusquiSquite = newBleusquiSquite();
      bleusquiSquite = await bleusquiSquite.addPhoto("test/fixtures/cheese-puff.png", "alt text")
      expect(bleusquiSquite).to.be.instanceof(BleusquiSquite);
    });

    it("creates postRecord.embed when the first photo is added", async function(){
      let bleusquiSquite = newBleusquiSquite();
      expect(bleusquiSquite.postRecord.embed).to.be.undefined;
      bleusquiSquite = await bleusquiSquite.addPhoto("test/fixtures/cheese-puff.png", "alt text")
      expect(bleusquiSquite.postRecord.embed).is.not.null;
    });

    it("that has an images array", async function() {
      let bleusquiSquite = newBleusquiSquite();
      bleusquiSquite = await bleusquiSquite.addPhoto("test/fixtures/cheese-puff.png", "alt text")
      expect(bleusquiSquite.postRecord.embed?.images)
        .to.be.an('array').of.length(1);
    });

    it("throws if the image is too large", async function(){
      const bleusquiSquite = newBleusquiSquite();
      expect(
        bleusquiSquite.addPhoto("test/fixtures/large-image.png", "This image is too large.")
      ).to.be.rejectedWith(Error);

    });

    it("throws when there is no alt text", async function () {
      const bleusquiSquite = newBleusquiSquite();
      expect(
        // @ts-expect-error
        bleusquiSquite.addPhoto("test/fixtures/cheese-puff.png")
      ).to.be.rejectedWith(Error);
    });

    it("throws when a fifth photo is added", async function () {
      let bleusquiSquite = newBleusquiSquite();

      [1, 2, 3, 4].forEach(async () => {
        bleusquiSquite = await bleusquiSquite.addPhoto(
          "test/fixtures/cheese-puff.png",
          "alt text",
        );
      });

      expect(bleusquiSquite.postRecord.embed?.images)
        .to.be.an('array').of.length(4);
      expect(
        bleusquiSquite.addPhoto("test/fixtures/cheese-puff.png", "alt text")
      ).to.be.rejectedWith(Error);
    });
  }); // end describe #addPhoto()

  describe("#post()", function () {
    it("adds text to the postRecord");
    it("posts to Bluesky");
  }); // end describe #post()
}); // end describe BleusquiSquite
