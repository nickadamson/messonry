import { render, screen } from "@testing-library/react";

import { Item, SupportedMimeTypes } from "../../src/components/GridItem";
import { MessonryGrid } from "../../src/components/MessonryGrid";
import images from "../../src/stories/images.json";

const tenImages = images.slice(0, 10) as Item[];

const videoLink = "https://infura-ipfs.io/ipfs/bafybeibjz7p2sbp2s7pyt6gu5ngf3dlwx3kc4d2wgpozq34oqpmckhioqq";
const videos: Item[] = [
  {
    src: videoLink,
    mimeType: SupportedMimeTypes.Video,
  },
];

describe("MessonryGrid", () => {
  test("Should render the correct # of items", () => {
    render(<MessonryGrid items={tenImages} options={{ placeholder: true }} />);
    expect(screen.queryAllByRole("img", { hidden: true }).length).toEqual(10);
  });

  test("Should render images correctly", () => {
    render(<MessonryGrid items={images.slice(0, 1) as Item[]} options={{ placeholder: true }} />);
    expect(screen.getByTestId("img-0")).toHaveClass("css-3ty7jz");
  });

  test("Should render videos correctly", () => {
    render(<MessonryGrid items={videos} options={{ placeholder: true }} />);
    expect(screen.getByTestId("video-0")).toHaveClass("css-3ty7jz");
  });
});
