/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

import { getAspectRatio, SupportedAspectRatio } from "../utils";

export const ImageWrapper = ({ src, alt, handleCalculatedRatio, index }: WrapperProps) => {
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
        src={src}
        onLoad={(e) => onImageLoad(e)}
        alt={alt}
        aria-hidden={hiddenFromScreenReaders}
        // TODO let users configure loady after specified index
        // loading="lazy"
      />
    </>
  );
};

export const VideoWrapper = ({ src, handleCalculatedRatio, index }: WrapperProps) => {
  const onVideoLoad = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const width = e.currentTarget.videoWidth;
    const height = e.currentTarget.videoHeight;
    const ratio = getAspectRatio({ width, height });
    handleCalculatedRatio(ratio);
  };

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        data-testid={`video-${index}`}
        css={css({
          display: "block",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          maxWidth: "100%",
          maxHeight: "100%",
        })}
        // muted
        onLoadedMetadata={(e) => onVideoLoad(e)}
        // autoPlay={false}
        // controls={false}
        // playsInline
      >
        <source src={src} />
      </video>
    </>
  );
};

type WrapperProps = {
  src: string;
  alt?: string;
  handleCalculatedRatio: (calculatedRatio: SupportedAspectRatio) => void;
  index: number;
};

export const NextImageWrapper = ({ src, alt, handleCalculatedRatio, index }: WrapperProps) => {
  const onImageLoad = (width: number, height: number) => {
    const ratio = getAspectRatio({ width, height });
    handleCalculatedRatio(ratio);
  };

  const hiddenFromScreenReaders = alt ? false : true;

  try {
    // eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
    return React.createElement(require("next/image").default, {
      src: src,
      alt: alt,
      layout: "fill",
      "aria-hidden": hiddenFromScreenReaders,
      css: css`
        display: "block",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        maxWidth: "100%",
        maxHeight: "100%",
      `,
      "data-testid": `next/image-${index}`,
      onLoadingComplete: ({ naturalWidth, naturalHeight }: { naturalWidth: number; naturalHeight: number }) =>
        onImageLoad(naturalWidth, naturalHeight),
    });
  } catch (error) {
    return <ImageWrapper src={src} handleCalculatedRatio={handleCalculatedRatio} alt={alt} index={index} />;
  }
};
