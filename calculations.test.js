import { it, expect, describe } from "vitest";
import { calculate } from "./calculations.js";

describe("calculate function", () => {
  it("should return sum of numbers passed as an arguments", () => {
    const result = calculate(1, "+", 6);
    expect(result).toBe(7);
  });

  it("should throw an error if operator wasn't passed as an argument", () => {
    const resultFn = () => calculate(3, 2);
    expect(resultFn).toThrow();
  });
  it("should trow an error if passed arguments aren't numbers", () => {
    const resultFn = () => calculate("a", "+", "b");
    expect(resultFn).toThrow();
  });
});
