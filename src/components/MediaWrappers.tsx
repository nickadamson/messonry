/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

import calcAspectRatio from "../calcAspectRatio";
import { SupportedAspectRatio } from "../constants";

type WrapperProps = {
  src: string;
  alt?: string;
  handleCalculatedRatio: (calculatedRatio: SupportedAspectRatio) => void;
};

export const ImageWrapper = React.forwardRef<HTMLImageElement, WrapperProps>(
  ({ src, alt, handleCalculatedRatio }, ref) => {
  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const width = e.currentTarget.naturalWidth;
    const height = e.currentTarget.naturalHeight;
    const ratio = calcAspectRatio({ width, height });
    handleCalculatedRatio(ratio);
  };

    const hiddenFromScreenReaders = alt ? false : true;

  return (
    <>
      <img
        css={css({
          display: "block",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          maxWidth: "100%",
          maxHeight: "100%",
        })}
        ref={ref}
        src={src}
          alt={alt}
          aria-hidden={hiddenFromScreenReaders}
        // TODO let users configure loady after specified index
        // loading="lazy"
        onLoad={(loadedMedia) => onImageLoad(loadedMedia)}
      />
    </>
  );
  }
);

export const VideoWrapper = React.forwardRef<HTMLVideoElement, WrapperProps>(({ src, handleCalculatedRatio }, ref) => {
  const onVideoLoad = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const width = e.currentTarget.videoWidth;
    const height = e.currentTarget.videoWidth;
    const ratio = calcAspectRatio({ width, height });
    handleCalculatedRatio(ratio);
  };

  return (
    <video
      css={css({
        display: "block",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        maxWidth: "100%",
        maxHeight: "100%",
      })}
      ref={ref}
      muted
      onLoad={(e) => onVideoLoad(e)}
      // TODO test these
      // onLoadedData={(e) => onVideoLoad(e)}
      // onLoadedMetadata={(e) => onVideoLoad(e)}
      autoPlay
      controls={false}
      playsInline
    >
      <source src={src} />
    </video>
  );
});
