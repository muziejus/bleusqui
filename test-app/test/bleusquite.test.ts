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

  it("throws if initialized without a configuration", function () {
    // @ts-ignore
    expect(() => new Bleusquite()).to.throw();
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

  it("has an `agent` instance variable", function () {
    const bleusquite = new Bleusquite({
      identifier: "identifier",
      password: "password",
    });

    expect(bleusquite.agent).to.not.be.null;
  });
}); // end describe
