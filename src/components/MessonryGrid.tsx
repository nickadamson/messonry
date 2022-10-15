/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

import { SupportedAspectRatio, GRID_STYLE } from "../utils";

import { GridItem, Item } from "./GridItem";
import { StyleWrapper } from "./StyleWrapper";

type MessonryOptions = {
  placeholder: boolean;
};

export type MessonryGridProps = {
  items: Item[];
  options: MessonryOptions;
};

/**       ---  Dual-axis Masonry Layout  ---
 *             Creates a 100x100 grid.
 *      Fills it Tetris-style, while respecting
 *           the media's aspect ratio
 */

export const MessonryGrid: React.FC<MessonryGridProps> = ({ items, options }): JSX.Element => {
  const [ratios, setRatios] = React.useState<SupportedAspectRatio[]>(items.map(() => "hidden"));

  const updateRatios = (ratio: SupportedAspectRatio, index: number) => {
    const newState = ratios;
    newState[index] = ratio;

    setRatios(() => ({
      ...newState,
    }));
  };

  return (
    <StyleWrapper>
      {/* Fills Parent Div */}
      <div
        data-testid={`messonry`}
        css={css({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          maxWidth: "inherit",
          height: "100%",
          maxHeight: "inherit",
        })}
      >
        {/* Grid */}
        <div css={GRID_STYLE}>
          {/* Grid Items */}
          {items.map((item, index) => {
            return (
              <GridItem
                key={`MessonryGridItem-${index}`}
                item={item}
                options={options ? options : undefined}
                ratio={ratios[index]}
                index={index}
                updateRatios={updateRatios}
              />
            );
          })}
        </div>
      </div>
    </StyleWrapper>
  );
};
