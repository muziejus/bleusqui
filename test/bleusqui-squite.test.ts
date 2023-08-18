import { BleusquiSquite } from "../dist/index.js";
import { expect } from "chai";

describe("Testing BleusquiSquite class", function () {
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
    it("returns itself", function () {
      const bleusquiSquite = newBleusquiSquite();
      expect(
        bleusquiSquite.addPhoto("test/fixtures/cheese-puff.png", "alt text"),
      ).to.be.instanceof(BleusquiSquite);
    });

    it("creates an embed object when the first photo is added");

    it("that has an images array");

    it("throws if the image is too large");

    it("throws when there is no alt text", function () {
      const bleusquiSquite = newBleusquiSquite();
      expect(() => {
        // @ts-expect-error
        bleusquiSquite.addPhoto("test/fixtures/cheese-puff.png");
      }).to.throw();
    });

    it("throws when a fifth photo is added", function () {
      let bleusquiSquite = newBleusquiSquite();

      [1, 2, 3, 4].forEach(() => {
        bleusquiSquite = bleusquiSquite.addPhoto(
          "test/fixtures/cheese-puff.png",
          "alt text",
        );
      });

      expect(() => {
        bleusquiSquite.addPhoto("test/fixtures/cheese-puff.png", "alt text");
      }).to.throw();
    });
  }); // end describe #addPhoto()

  describe("#post()", function () {
    it("adds text to the postRecord");
    it("posts to Bluesky");
  }); // end describe #post()
}); // end describe BleusquiSquite
