import React from "react";

import { getAspectRatio, SupportedAspectRatio } from "../utils";

import gridStyles from "./grid-styles.module.css";
import { NextImageConfig } from "./MessonryGrid";

type WrapperProps = {
  src: string;
  alt?: string;
  handleCalculatedRatio: (calculatedRatio: SupportedAspectRatio) => void;
  index: number;
  nextImageConfig?: NextImageConfig;
};

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
        className={gridStyles.media}
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
        className={gridStyles.media}
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

export const NextImageWrapper = ({ src, alt, handleCalculatedRatio, index, nextImageConfig }: WrapperProps) => {
  const onImageLoad = (width: number, height: number) => {
    const ratio = getAspectRatio({ width, height });
    handleCalculatedRatio(ratio);
  };

  const hiddenFromScreenReaders = alt ? false : true;

  const imageProps = {
    src: src,
    alt: alt ? alt : "IT'S HIDDEN",
    fill: true,
    onLoadingComplete: ({ naturalWidth, naturalHeight }: { naturalWidth: number; naturalHeight: number }) =>
      onImageLoad(naturalWidth, naturalHeight),
    ...nextImageConfig,
  };

  try {
    // eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
    return React.createElement(require("next/image").default, {
      "aria-hidden": hiddenFromScreenReaders,
      className: gridStyles.media,
      "data-testid": `next/image-${index}`,
      ...imageProps,
    });
  } catch (error) {
    return <ImageWrapper src={src} handleCalculatedRatio={handleCalculatedRatio} alt={alt} index={index} />;
  }
};
