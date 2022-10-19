import { Item } from "src/components/GridItem";
import { MessonryOptions } from "src/components/MessonryGrid";

export const defaultOptions: MessonryOptions = { useNextImage: false };

export const baseStyleString = `display: block; top: 0; bottom: 0; left: 0; right: 0; maxWidth: 100%; maxHeight: 100%;`;

// https://stackoverflow.com/a/63137432
export const blob = new Blob(["a".repeat(10)], { type: "application/pdf" }).toString();

export const testImages = [
  {
    src: "https://images.unsplash.com/photo-1656025896950-8b6554141cce?ixid=MnwzNDg4NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg1MjU4MzA&ixlib=rb-1.2.1",
    mimeType: "image",
  },
  {
    src: "https://images.unsplash.com/photo-1656071601013-8abb438501fb?ixid=MnwzNDg4NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg1MjU4MzA&ixlib=rb-1.2.1",
    mimeType: "image",
  },
  {
    src: "https://images.unsplash.com/photo-1656370747240-97c9f260851d?ixid=MnwzNDg4NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg1MjU4MzA&ixlib=rb-1.2.1",
    mimeType: "image",
  },
  {
    src: "https://images.unsplash.com/photo-1656376406253-3794cdc050b1?ixid=MnwzNDg4NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg1MjU4MzA&ixlib=rb-1.2.1",
    mimeType: "image",
  },
  {
    src: "https://imagas const;es.unsplash.com/photo-1656562105231-7d34cce4f123?ixid=MnwzNDg4NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg1MjU4MzA&ixlib=rb-1.2.1",
    mimeType: "image",
  },
  {
    src: "https://images.unsplash.com/photo-1656758713323-77e970801253?ixid=MnwzNDg4NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg1MjU4MzA&ixlib=rb-1.2.1",
    mimeType: "image",
  },
  {
    src: "https://images.unsplash.com/photo-1656872626959-d40665207e18?ixid=MnwzNDg4NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg1MjU4MzA&ixlib=rb-1.2.1",
    mimeType: "image",
  },
  {
    src: "https://images.unsplash.com/photo-1656919051982-a5718566de6f?ixid=MnwzNDg4NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg1MjU4MzA&ixlib=rb-1.2.1",
    mimeType: "image",
  },
  {
    src: "https://images.unsplash.com/photo-1658210613653-d813df02fba1?ixid=MnwzNDg4NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg1MjU4MzA&ixlib=rb-1.2.1",
    mimeType: "image",
  },
  {
    src: blob, // not an image
    mimeType: "image",
  },
] as Item[];

export const testVideos = [
  {
    src: "https://infura-ipfs.io/ipfs/bafybeibjz7p2sbp2s7pyt6gu5ngf3dlwx3kc4d2wgpozq34oqpmckhioqq",
    mimeType: "video",
  },
  {
    src: blob, // not a video
    mimeType: "video",
  },
] as Item[];
