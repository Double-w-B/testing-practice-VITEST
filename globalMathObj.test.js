import { it, expect, describe } from "vitest";

  describe("testing Math random function", () => {
    it("should return a number", () => {
      expect(typeof Math.random()).toEqual("number");
      expect(typeof Math.random()).not.toEqual("string");
    });

    it("should return a number between 0 and 1", () => {
      const randomNumber = Math.random();
      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThan(1);
    });
  });

  describe("testing Math round function", () => {
    it("should return a rounded value of 4.5 being 5", () => {
      expect(Math.round(4.5)).toBe(5);
    });
  });
