import React from "react";
import calcAspectRatio from "src/calcAspectRatio";
import { SupportedAspectRatio } from "src/constants";

type WrapperProps = {
  src: string;
  setAspectRatio: React.Dispatch<React.SetStateAction<SupportedAspectRatio>>;
};

export const ImageWrapper = React.forwardRef<HTMLImageElement, WrapperProps>(({ src, setAspectRatio }, ref) => {
  console.log({ src, setAspectRatio, ref });

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log({ e });
    const width = e.currentTarget.naturalWidth;
    const height = e.currentTarget.naturalHeight;

    setAspectRatio(calcAspectRatio({ width, height }));
  };

  return <img ref={ref} src={src} alt={""} onLoad={(loadedMedia) => onImageLoad(loadedMedia)} />;
});

export const VideoWrapper = React.forwardRef<HTMLVideoElement, WrapperProps>(({ src, setAspectRatio }, ref) => {
  console.log({ src, setAspectRatio, ref });

  const onVideoLoad = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.log({ e });
    const width = e.currentTarget.videoWidth;
    const height = e.currentTarget.videoWidth;

    setAspectRatio(calcAspectRatio({ width, height }));
  };

  return (
    <div>
      <video
        ref={ref}
        muted
        onLoad={(e) => onVideoLoad(e)}
        // onLoadedData={(e) => onVideoLoad(e)}
        // onLoadedMetadata={(e) => onVideoLoad(e)}
        autoPlay
        controls={false}
        playsInline
      >
        <source src={src} />
      </video>
    </div>
  );
});
