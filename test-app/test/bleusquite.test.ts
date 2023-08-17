import { Bleusquite } from "../../bleusquite/dist/index.js";
import { expect } from "chai";

describe("Testing Bleusquite class", function () {
  it("can be initialized with a configuration", function () {
    const bleusquite = new Bleusquite({
      identifier: "identifier",
      password: "password",
    });

    expect(bleusquite).to.be.instanceof(Bleusquite);
  });

  // Instance variables
  it("has an `identifier` instance variable", function () {
    const bleusquite = new Bleusquite({
      identifier: "identifier",
      password: "password",
    });

    expect(bleusquite.identifier).to.equal("identifier");
  });
  it("has a `password` instance variable", function () {
    const bleusquite = new Bleusquite({
      identifier: "identifier",
      password: "password",
    });

    expect(bleusquite.password).to.equal("password");
  });
}); // end describe
