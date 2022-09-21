/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

import { SupportedAspectRatio } from "../constants";
import { RATIO_STYLES } from "../styles";

import { ImageWrapper, VideoWrapper } from "./MediaWrappers";

export type ItemOptions = {
  placeholder: boolean;
};

export enum SupportedMimeTypes {
  Image = "image",
  Video = "video",
}

export type Item = {
  // Media
  src?: string;
  mimeType?: SupportedMimeTypes;
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
const GridItem: React.FC<GridItemProps> = ({ item, options, ratio, index, updateRatios }): JSX.Element => {
  const mediaRef = React.useRef<HTMLVideoElement | HTMLImageElement>();
  const elementRef = React.useRef<HTMLDivElement>(null);
  const [aspectRatio, setAspectRatio] = React.useState<SupportedAspectRatio>(ratio);

  const handleCalculatedRatio = (calculatedRatio: SupportedAspectRatio) => {
    updateRatios(calculatedRatio, index);
  };

  React.useLayoutEffect(() => {
    if (ratio !== aspectRatio) setAspectRatio(ratio);
  }, [ratio, aspectRatio]);

  const { src, mimeType, content } = item;

  return (
    <>
      <div
        className="grid-item" // see StyleWrapper
        css={RATIO_STYLES[aspectRatio]}
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
              <ImageWrapper
                src={src}
                ref={mediaRef as React.MutableRefObject<HTMLImageElement>}
                handleCalculatedRatio={handleCalculatedRatio}
              />
            )}

            {src && mimeType === "video" && (
              <VideoWrapper
                src={src}
                ref={mediaRef as React.MutableRefObject<HTMLVideoElement>}
                handleCalculatedRatio={handleCalculatedRatio}
              />
            )}
            {!src && !mimeType && content !== undefined && (
              <>
                <div ref={elementRef}>{content as React.ReactNode}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GridItem;
