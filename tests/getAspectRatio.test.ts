import { getAspectRatio } from "../src/utils";

const inputs = [
  { width: 1, height: 1, ratio: "1x1" },
  { width: 1920, height: 1080, ratio: "16x9" },
  { width: 2160, height: 3840, ratio: "9x16" },
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
