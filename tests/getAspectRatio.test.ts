import { getAspectRatio } from "../src/utils";

const inputs = [
  { width: 1, height: 1, ratio: "1x1" },
  { width: 1920, height: 1080, ratio: "16x9" },
  { width: 2160, height: 3840, ratio: "9x16" },
  { width: 5, height: 4, ratio: "5x4" },
  { width: 4, height: 3, ratio: "4x3" },
  { width: 7, height: 5, ratio: "7x5" },
  { width: 3, height: 2, ratio: "3x2" },
  { width: 2, height: 1, ratio: "2x1" },
  { width: 3, height: 1, ratio: "3x1" },
  { width: 40, height: 50, ratio: "4x5" },
  { width: 30, height: 40, ratio: "3x4" },
  { width: 50, height: 70, ratio: "5x7" },
  { width: 20, height: 30, ratio: "2x3" },
  { width: 10, height: 20, ratio: "1x2" },
  { width: 10, height: 30, ratio: "1x3" },
];

describe("getAspectRatioTest", () => {
  describe("correctly calculates and returns the aspect ratio of a given width & height", () => {
    inputs.forEach((input) => {
      it(`${input.ratio}`, async () => {
        const { width, height, ratio } = input;
        const returnedRatio = getAspectRatio({ width, height });

        expect(returnedRatio).toBe(ratio);
      });
    });
  });

  describe("error handling", () => {
    it("should return 'hidden' if unable to calculate an aspect ratio", async () => {
      const returnedRatio = getAspectRatio({ width: "NaN" as unknown as number, height: "NaN" as unknown as number });

      expect(returnedRatio).toBe("hidden");
    });
  });
});
