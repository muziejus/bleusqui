import { Bleusquite } from "../dist/index.js";
import { expect } from "chai";

describe("Testing Bleusquite class", function () {
  const newBleusquite = () =>
    new Bleusquite({ identifier: "identifier", password: "password" });

  it("can be initialized with a configuration", function () {
    const bleusquite = newBleusquite();

    expect(bleusquite).to.be.instanceof(Bleusquite);
  });

  it("throws if initialized without a configuration", function () {
    // @ts-expect-error
    expect(() => new Bleusquite()).to.throw();
  });

  // Instance variables
  it("has an `identifier` instance variable", function () {
    const bleusquite = newBleusquite();

    expect(bleusquite.identifier).to.equal("identifier");
  });
  it("has a `password` instance variable", function () {
    const bleusquite = newBleusquite();

    expect(bleusquite.password).to.equal("password");
  });

  it("has an `agent` instance variable", function () {
    const bleusquite = newBleusquite();

    expect(bleusquite.agent).to.not.be.null;
  });

  describe("#addPhoto()", function () {
    it("returns itself", function () {
      const bleusquite = newBleusquite();
      expect(
        bleusquite.addPhoto("test/fixtures/cheese-puff.png", "alt text"),
      ).to.be.instanceof(Bleusquite);
    });

    it("creates an embed object when the first photo is added");

    it("that has an images array");

    it("throws when there is no alt text", function () {
      const bleusquite = newBleusquite();
      expect(() => {
        // @ts-expect-error
        bleusquite.addPhoto("test/fixtures/cheese-puff.png");
      }).to.throw();
    });

    it("throws when a fifth photo is added", function () {
      let bleusquite = newBleusquite();

      [1, 2, 3, 4].forEach(() => {
        bleusquite = bleusquite.addPhoto(
          "test/fixtures/cheese-puff.png",
          "alt text",
        );
      });

      expect(() => {
        bleusquite.addPhoto("test/fixtures/cheese-puff.png", "alt text");
      }).to.throw();
    });
  }); // end describe #addPhoto()

  describe("#post()", function () {
    it("adds text to the postRecord");
    it("posts to Bluesky");
  }); // end describe #post()
}); // end describe Bleusquite
