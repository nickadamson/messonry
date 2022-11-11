import type { ImageProps } from "next/image";
import React from "react";

import { SupportedAspectRatio } from "../utils";

import gridStyles from "./grid-styles.module.css";
import { GridItem, Item } from "./GridItem";

export type NextImageConfig = Omit<ImageProps, "src" | "alt" | "width" | "height" | "fill" | "onLoadingComplete">;

export type MessonryOptions = {
  useNextImage: boolean;
  nextImageConfig: NextImageConfig;
};

export type MessonryGridProps = {
  items: Item[];
  options: MessonryOptions;
};

const defaultOptions: MessonryOptions = {
  useNextImage: true,
  nextImageConfig: {
    quality: 90,
    priority: true,
    loading: "eager",
    unoptimized: false,
  },
};

/**       ---  Dual-axis Masonry Layout  ---
 *             Creates a 100x100 grid.
 *      Fills it Tetris-style, while respecting
 *           the media's aspect ratio
 */

export const MessonryGrid = ({ items, options = defaultOptions }: MessonryGridProps) => {
  const [ratios, setRatios] = React.useState<SupportedAspectRatio[]>(items.map(() => "hidden"));

  const updateRatios = (ratio: SupportedAspectRatio, index: number) => {
    const newState = ratios;
    newState[index] = ratio;

    setRatios(() => ({
      ...newState,
    }));
  };

  return (
    <div data-testid={`messonry`} className={gridStyles["grid-wrapper"]}>
      {/* Grid */}
      <div className={gridStyles["messonry-grid"]}>
        {/* Grid Items */}
        {items.map((item, index) => {
          return (
            <GridItem
              key={`MessonryGridItem-${index}`}
              item={item}
              options={options}
              ratio={ratios[index]}
              index={index}
              updateRatios={updateRatios}
            />
          );
        })}
      </div>
    </div>
  );
};
