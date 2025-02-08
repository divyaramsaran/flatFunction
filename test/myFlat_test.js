import { flatten } from "../myFlat.js";
import { describe, it } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";

describe("array flatten one level", () => {
  it("flats one level when depth is 1 and array is alread flatted", () => {
    const expected = [1, 2, 3];
    assertEquals(flatten([1, 2, 3], 1), expected);
  });

  it("flats one level when depth is 1 and array is not flatted", () => {
    const expected = [1, 2, 3];
    assertEquals(flatten([1, 2, [3]], 1), expected);
  });

  it("flats one level when depth is 1 and array is one level nested", () => {
    const expected = [1, 2, 3];
    assertEquals(flatten([1, 2, [3]], 1), expected);
  });

  it("flats one level when depth is 1 and array is two level nested", () => {
    const expected = [1, 2, [3]];
    assertEquals(flatten([1, [2, [3]]], 1), expected);
  });

  it("flats one level when depth is 1 and array is multilevel level nested", () => {
    const expected = [1, 2, [3, [4]]];
    assertEquals(flatten([1, [2, [3, [4]]]], 1), expected);
  });
});

describe("array flattend multiple levels", () => {
  it("flats 3 levels when depth is 3 and array is alread flatted", () => {
    const expected = [1, 2, 3];
    assertEquals(flatten([1, 2, 3], 3), expected);
  });

  it("flats 3 levels when depth is 3 and array is nested 2 levels", () => {
    const expected = [1, 2, 3];
    assertEquals(flatten([1, [2, [3]]], 3), expected);
  });

  it("flats 2 levels when depth is 2 and array is nested 4 levels", () => {
    const expected = [1, 2, 3, [4, [5]]];
    assertEquals(flatten([1, [2, [3, [4, [5]]]]], 2), expected);
  });

  it("flats infinite levels when depth is infinite and array is nested 2 levels", () => {
    const expected = [1, 2, 3];
    assertEquals(flatten([1, [2, [3]]], 2), expected);
  });
});

describe("invalid cases", () => {
  it("when empty string is given", () => {
    const expected = [1, 2, 3, 2, 5];
    assertEquals(flatten([1, 2, 3, [2, [5]]], ""), expected);
  });
});
