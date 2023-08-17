import { Bleusquite } from "../../bleusquite/dist/index.js";
import { expect } from "chai";

describe("Testing Bleusquite class", function () {
  it("can be initialized", function (done) {
    const bleusquite = new Bleusquite();

    expect(bleusquite).to.be.instanceof(Bleusquite);

    done();
  });
});
