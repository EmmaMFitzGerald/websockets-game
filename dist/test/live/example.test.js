"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const chai_1 = require("chai");
mocha_1.describe("Example Test Series", () => {
    mocha_1.it("should return an expected value", () => {
        const x = 1;
        const y = 10;
        const target = x + y;
        chai_1.expect(target).to.equal(11);
    });
});
//# sourceMappingURL=example.test.js.map