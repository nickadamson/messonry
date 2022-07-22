import React from "react";
import { SupportedAspectRatio } from "src/constants";

import { ImageWrapper, VideoWrapper } from "./MediaWrappers";

export type ItemOptions = {
  placeholder: boolean;
};

export type Item = {
  // Media
  src?: string;
  mimeType?: "image" | "video";
  // JSX.Element
  content?: React.ReactNode;
};

export type GridItemProps = {
  item: Item;
  options?: ItemOptions;
};

/**       ---  Dual-axis Masonry Layout  ---
 *        Hide posts until they are loaded
 *  Then display them at the correct Aspect Ratio
 */

const GridItem: React.FC<GridItemProps> = ({ item, options }): JSX.Element => {
  console.log({ item, options });

  const mediaRef = React.useRef<HTMLVideoElement | HTMLImageElement>();
  const elementRef = React.useRef<HTMLDivElement>(null);
  const [aspectRatio, setAspectRatio] = React.useState<SupportedAspectRatio>("hidden");

  const { src, mimeType, content } = item;

  return (
    <>
      <div className={`${aspectRatio}`}>
        {src && mimeType === "image" && (
          <ImageWrapper
            src={src}
            ref={mediaRef as React.MutableRefObject<HTMLImageElement>}
            setAspectRatio={setAspectRatio}
          />
        )}

        {src && mimeType === "video" && (
          <VideoWrapper
            src={src}
            ref={mediaRef as React.MutableRefObject<HTMLVideoElement>}
            setAspectRatio={setAspectRatio}
          />
        )}
        {!src && !mimeType && content !== undefined && (
          <>
            <div ref={elementRef}>{content as React.ReactNode}</div>
          </>
        )}
      </div>
    </>
  );
};

export default GridItem;
