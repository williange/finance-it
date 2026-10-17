import { describe, expect, it } from "vitest";
import { checkEmptyArray } from "../checkEmptyArray";

describe("checkEmptyArray", () => {
  it("should throw if gets passed an empty array", () => {
    expect(() => checkEmptyArray([], "testArray")).to.throws(
      "testArray can't be an empty array",
    );
  });
  it("should return true if gets an array with valid length", () => {
    expect(checkEmptyArray([1, 2], "testArray")).to.equal(true);
  });
  it("should throw if gets passed a invalid value as an Array", () => {
    expect(() =>
      checkEmptyArray("test" as unknown as unknown[], "testString"),
    ).to.throws("testString = test is not an array");
    expect(() =>
      checkEmptyArray(1234 as unknown as unknown[], "testString"),
    ).to.throws("testString = 1234 is not an array");
  });
});
