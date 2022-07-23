import { css, SerializedStyles } from "@emotion/react";

import { SupportedAspectRatio } from "./constants";

export const GRID_STYLE = css({
  display: "grid",
  width: "100%",
  height: "100%",
  gridTemplateColumns: "repeat(auto-fill, 1.25rem)",
  gridAutoRows: "1.25rem",
  gridAutoFlow: "row dense",
  justifyContent: "center",
  justifySelf: "center",
});

export const RATIO_STYLES: Record<SupportedAspectRatio, SerializedStyles> = {
  hidden: css({
    display: "none",
  }),

  // Square
  "1x1": css({
    aspectRatio: "1/1",
    gridColumn: "auto / span 15",
    gridRow: "auto / span 15",
  }),

  // Landscape
  "5x4": css({
    aspectRatio: "5/4",
    gridColumn: "auto / span 15",
    gridRow: "auto / span 12",
  }),

  "4x3": css({
    aspectRatio: "4/3",
    gridColumn: "auto / span 15",
    gridRow: "auto / span 11",
  }),

  "7x5": css({
    aspectRatio: "7/5",
    gridColumn: "auto / span 16",
    gridRow: "auto / span 11",
  }),

  "3x2": css({
    aspectRatio: "3/2",
    gridColumn: "auto / span 18",
    gridRow: "auto / span 12",
  }),

  "16x9": css({
    aspectRatio: "16/9",
    gridColumn: "auto / span 16",
    gridRow: "auto / span 9",
  }),

  "2x1": css({
    aspectRatio: "2/1",
    gridColumn: "auto / span 24",
    gridRow: "auto / span 12",
  }),

  "3x1": css({
    aspectRatio: "3/1",
    gridColumn: "auto / span 30",
    gridRow: "auto / span 10",
  }),

  // Portrait
  "4x5": css({
    aspectRatio: "4/5",
    gridColumn: "auto / span 12",
    gridRow: "auto / span 15",
  }),

  "3x4": css({
    aspectRatio: "3/4",
    gridColumn: "auto / span 11",
    gridRow: "auto / span 15",
  }),

  "5x7": css({
    aspectRatio: "5/7",
    gridColumn: "auto / span 11",
    gridRow: "auto / span 16",
  }),

  "2x3": css({
    aspectRatio: "2/3",
    gridColumn: "auto / span 12",
    gridRow: "auto / span 18",
  }),

  "9x16": css({
    aspectRatio: "9/16",
    gridColumn: "auto / span 9",
    gridRow: "auto / span 16",
  }),

  "1x2": css({
    aspectRatio: "1/2",
    gridColumn: "auto / span 12",
    gridRow: "auto / span 24",
  }),

  "1x3": css({
    aspectRatio: "1/3",
    gridColumn: "auto / span 10",
    gridRow: "auto / span 30",
  }),
};
