/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

import { SupportedAspectRatio, RATIO_STYLES } from "../utils";

import { ImageWrapper, NextImageWrapper, VideoWrapper } from "./MediaWrappers";

export type ItemOptions = {
  useNextImage: boolean;
};

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
  options?: ItemOptions;
  ratio: SupportedAspectRatio;
  index: number;
  updateRatios: (ratio: SupportedAspectRatio, index: number) => void;
};

/**      ---  Dual-axis Masonry Layout  ---
 *        Hide posts until they are loaded
 *  Then display them at the correct Aspect Ratio
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GridItem: React.FC<GridItemProps> = ({ item, options, ratio, index, updateRatios }): JSX.Element => {
  const mediaRef = React.useRef<HTMLVideoElement | HTMLImageElement>();
  const elementRef = React.useRef<HTMLDivElement>(null);
  const [aspectRatio, setAspectRatio] = React.useState<SupportedAspectRatio>(ratio);

  const handleCalculatedRatio = (calculatedRatio: SupportedAspectRatio) => {
    updateRatios(calculatedRatio, index);
  };

  React.useLayoutEffect(() => {
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
        <div
          css={css({
            display: "flex",
            width: "100%",
          })}
        >
          <div
            css={css({
              display: "flex",
              margin: "0.75rem",
            })}
          >
            {src && mimeType === "image" && (
              <>
                {options?.useNextImage ? (
                  <NextImageWrapper
                    src={src}
                    ref={mediaRef as React.MutableRefObject<HTMLElement>}
                    handleCalculatedRatio={handleCalculatedRatio}
                    alt={alt}
                    index={index}
                  />
                ) : (
                  <ImageWrapper
                    src={src}
                    ref={mediaRef as React.MutableRefObject<HTMLImageElement>}
                    handleCalculatedRatio={handleCalculatedRatio}
                    alt={alt}
                    index={index}
                  />
                )}
              </>
            )}

            {src && mimeType === "video" && (
              <VideoWrapper
                src={src}
                ref={mediaRef as React.MutableRefObject<HTMLVideoElement>}
                handleCalculatedRatio={handleCalculatedRatio}
                index={index}
              />
            )}
            {!src && !mimeType && content !== undefined && (
              <>
                <div data-testid={`node-${index}`} ref={elementRef}>
                  {content as React.ReactNode}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
