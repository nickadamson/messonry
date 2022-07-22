import type { SupportedAspectRatio } from "./constants";

type WxH = {
  width: number;
  height: number;
};

export default function calcAspectRatio({ width, height }: WxH): SupportedAspectRatio {
  const ratio = width / height;
  let ratioString: SupportedAspectRatio | undefined = undefined;

  // Square
  if (ratio > 0.81 && ratio < 1.23) {
    ratioString = "1x1";
  }

  // Landscape
  if (ratio >= 1.23) {
    // WIDTH X HEIGHT
    if (ratio <= 1.3) {
      ratioString = "5x4";
    } else if (ratio <= 1.385) {
      ratioString = "4x3";
    } else if (ratio <= 1.5) {
      ratioString = "7x5";
    } else if (ratio <= 1.68) {
      ratioString = "3x2";
    } else if (ratio <= 1.9) {
      ratioString = "16x9";
    } else if (ratio <= 2.5) {
      ratioString = "2x1";
    } else {
      ratioString = "3x1";
    }
  }

  // Portrait
  if (ratio <= 0.81) {
    // WIDTH X HEIGHT
    if (ratio >= 0.765) {
      ratioString = "4x5";
    } else if (ratio >= 0.735) {
      ratioString = "3x4";
    } else if (ratio >= 0.685) {
      ratioString = "5x7";
    } else if (ratio >= 0.605) {
      ratioString = "2x3";
    } else if (ratio >= 0.53) {
      ratioString = "9x16";
    } else if (ratio >= 0.41) {
      ratioString = "1x2";
    } else {
      ratioString = "1x3";
    }
  }

  if (typeof ratioString === "undefined") {
    throw new Error(`Unable to calculate aspect ratio.
        Given WxH: ${width}x${height} - Ratio?: ${ratio}.
        `);
  }

  return ratioString;
}
