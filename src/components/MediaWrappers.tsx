/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type Image from "next/image";
import React from "react";

import { getAspectRatio, SupportedAspectRatio } from "../utils";

type WrapperProps = {
  src: string;
  alt?: string;
  handleCalculatedRatio: (calculatedRatio: SupportedAspectRatio) => void;
  index: number;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const NextImageWrapper = React.forwardRef(({ src, alt, handleCalculatedRatio, index }: WrapperProps, ref) => {
  const nextImagePath = require.resolve("next/image") as unknown as { default: typeof Image };
  const NextImage = nextImagePath?.default;

  const onImageLoad = (width: number, height: number) => {
    const ratio = getAspectRatio({ width, height });
    handleCalculatedRatio(ratio);
  };

  const hiddenFromScreenReaders = alt ? false : true;

  return (
    <>
      <NextImage
        style={
          css({
            display: "block",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            maxWidth: "100%",
            maxHeight: "100%",
          }) as React.CSSProperties
        }
        data-testid={`img-${index}`}
        // ref={ref}
        onLoadingComplete={({ naturalWidth, naturalHeight }) => onImageLoad(naturalWidth, naturalHeight)}
        src={src}
        alt={alt}
        aria-hidden={hiddenFromScreenReaders}
      />
    </>
  );
});

export const ImageWrapper = React.forwardRef<HTMLImageElement, WrapperProps>(
  ({ src, alt, handleCalculatedRatio, index }: WrapperProps, ref) => {
    const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      const width = e.currentTarget.naturalWidth;
      const height = e.currentTarget.naturalHeight;
      const ratio = getAspectRatio({ width, height });
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
          data-testid={`img-${index}`}
          ref={ref}
          src={src}
          onLoad={(e) => onImageLoad(e)}
          alt={alt}
          aria-hidden={hiddenFromScreenReaders}
          // TODO let users configure loady after specified index
          // loading="lazy"
        />
      </>
    );
  }
);

export const VideoWrapper = React.forwardRef<HTMLVideoElement, WrapperProps>(
  ({ src, handleCalculatedRatio, index }, ref) => {
    const onVideoLoad = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
      const width = e.currentTarget.videoWidth;
      const height = e.currentTarget.videoHeight;
      const ratio = getAspectRatio({ width, height });
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
        data-testid={`video-${index}`}
        ref={ref}
        muted
        onLoadedMetadata={(e) => onVideoLoad(e)}
        autoPlay
        controls={false}
        playsInline
      >
        <source src={src} />
      </video>
    );
  }
);
