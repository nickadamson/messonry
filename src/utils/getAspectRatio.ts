export type SupportedAspectRatio =
  | "hidden" // Grid Items are hidden until loaded
  | "1x1"
  | "5x4"
  | "4x3"
  | "7x5"
  | "3x2"
  | "16x9"
  | "2x1"
  | "3x1"
  | "4x5"
  | "3x4"
  | "5x7"
  | "2x3"
  | "9x16"
  | "1x2"
  | "1x3";

export type Dimensions = {
  width: number;
  height: number;
};

export function getAspectRatio({ width, height }: Dimensions): SupportedAspectRatio {
  const ratio = width / height;
  let aspectRatio: SupportedAspectRatio = "hidden";

  // Square
  if (ratio > 0.81 && ratio < 1.23) {
    aspectRatio = "1x1";
  }

  // Landscape
  if (ratio >= 1.23) {
    // WIDTH X HEIGHT
    if (ratio <= 1.3) {
      aspectRatio = "5x4";
    } else if (ratio <= 1.385) {
      aspectRatio = "4x3";
    } else if (ratio <= 1.5) {
      aspectRatio = "7x5";
    } else if (ratio <= 1.68) {
      aspectRatio = "3x2";
    } else if (ratio <= 1.9) {
      aspectRatio = "16x9";
    } else if (ratio <= 2.5) {
      aspectRatio = "2x1";
    } else {
      aspectRatio = "3x1";
    }
  }

  // Portrait
  if (ratio <= 0.81) {
    // WIDTH X HEIGHT
    if (ratio >= 0.765) {
      aspectRatio = "4x5";
    } else if (ratio >= 0.735) {
      aspectRatio = "3x4";
    } else if (ratio >= 0.685) {
      aspectRatio = "5x7";
    } else if (ratio >= 0.605) {
      aspectRatio = "2x3";
    } else if (ratio >= 0.53) {
      aspectRatio = "9x16";
    } else if (ratio >= 0.41) {
      aspectRatio = "1x2";
    } else {
      aspectRatio = "1x3";
    }
  }

  return aspectRatio;
}
