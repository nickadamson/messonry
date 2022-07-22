import calcAspectRatio from "../src/calcAspectRatio";

const inputs = [
  { width: 1, height: 1, ratio: "1x1" },
  { width: 1920, height: 1080, ratio: "16x9" },
  { width: 2160, height: 3840, ratio: "9x16" },
];

describe("CalcAspectRatioTest", () => {
  describe("correctly calculates and returns the aspect ratio of a given width & height", () => {
    inputs.forEach((input) => {
      it(`${input.ratio}`, async () => {
        const { width, height, ratio } = input;
        const returnedRatio = calcAspectRatio({ width, height });

        expect(ratio === returnedRatio);
      });
    });
  });

  describe("gracefully handles errors", () => {
    it("should ...", async () => {
      // TODO add error handling test
    });
  });
});
