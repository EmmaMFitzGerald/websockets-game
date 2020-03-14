import { describe, it } from "mocha";
import { expect } from "chai";

describe("Example Test Series", () => {
    it("should return an expected value", () => {
        const x = 1;
        const y = 10;
        const target = x + y;

        expect(target).to.equal(11);
    });
});
