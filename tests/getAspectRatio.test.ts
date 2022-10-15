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

  describe("gracefully handles errors", () => {
    it("should ...", async () => {
      // TODO add error handling test
    });
  });
});
