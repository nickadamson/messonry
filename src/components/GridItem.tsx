/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

import { SupportedAspectRatio, RATIO_STYLES } from "../utils";

import { ImageWrapper, NextImageWrapper, VideoWrapper } from "./MediaWrappers";
import { MessonryOptions } from "./MessonryGrid";

export enum SupportedMimeTypes {
  Image = "image",
  Video = "video",
}

export type Item = {
  // Media
  src?: string;
  mimeType?: SupportedMimeTypes;
  alt?: string;
  // JSX.Element
  content?: React.ReactNode;
};

export type GridItemProps = {
  item: Item;
  options?: MessonryOptions;
  ratio: SupportedAspectRatio;
  index: number;
  updateRatios: (ratio: SupportedAspectRatio, index: number) => void;
};

/**      ---  Dual-axis Masonry Layout  ---
 *        Hide posts until they are loaded
 *  Then display them at the correct Aspect Ratio
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GridItem = ({ item, options, ratio, index, updateRatios }: GridItemProps) => {
  // const mediaRef = React.useRef<HTMLVideoElement | HTMLImageElement>();
  // const elementRef = React.useRef<HTMLDivElement>(null);
  const [aspectRatio, setAspectRatio] = React.useState<SupportedAspectRatio>(ratio);

  const handleCalculatedRatio = (calculatedRatio: SupportedAspectRatio) => {
    updateRatios(calculatedRatio, index);
  };

  React.useEffect(() => {
    if (ratio !== aspectRatio) setAspectRatio(ratio);
  }, [ratio, aspectRatio]);

  const { src, alt, mimeType, content } = item;

  return (
    <>
      <div
        className="grid-item" // see StyleWrapper
        css={RATIO_STYLES[aspectRatio]}
        data-testid={`grid-item-${index}`}
      >
        {src && mimeType === "image" && (
          <>
            {options?.useNextImage ? (
              <NextImageWrapper
                src={src}
                handleCalculatedRatio={handleCalculatedRatio}
                alt={alt}
                index={index}
                nextImageConfig={options.nextImageConfig}
              />
            ) : (
              <ImageWrapper src={src} handleCalculatedRatio={handleCalculatedRatio} alt={alt} index={index} />
            )}
          </>
        )}

        {src && mimeType === "video" && (
          <VideoWrapper src={src} handleCalculatedRatio={handleCalculatedRatio} index={index} />
        )}
        {!src && !mimeType && content !== undefined && (
          <>
            <div data-testid={`node-${index}`}>{content as React.ReactNode}</div>
          </>
        )}
      </div>
    </>
  );
};
