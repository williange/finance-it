import { describe, expect, it } from "vitest";
import { checkEmptyString } from "../checkEmptyString";

describe("checkEmptyString", () => {
  it("should throw when passing an empty string", () => {
    expect(() => checkEmptyString("", "testString")).to.throws(
      "testString can't be a empty string",
    );
  });
  it("should return true when passing a correct string", () => {
    expect(checkEmptyString("test", "testString")).to.equal(true);
  });
  it("should throw when passing a invalid value as string", () => {
    expect(() =>
      checkEmptyString(1234 as unknown as string, "testNumber"),
    ).to.throws("testNumber = 1234 is not a string");
    expect(() =>
      checkEmptyString([1, 2, 3, 4] as unknown as string, "testArray"),
    ).to.throws("testArray = 1,2,3,4 is not a string");
  });
});
