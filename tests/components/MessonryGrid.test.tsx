import { render, screen } from "@testing-library/react";
import { MessonryGrid } from "src";

import { testImages, testVideos, defaultOptions, baseStyleString } from "../constants";

describe("MessonryGrid Component Test", () => {
  // messiness(?)
  describe("with many items", () => {
    beforeEach(() => {
      render(<MessonryGrid items={testImages} options={defaultOptions} />);
    });

    test("Should render the correct # of items", () => {
      expect(screen.queryAllByRole("img", { hidden: true }).length).toEqual(10);
    });

    test("The first item should start at Row 3/Column 3 on grid", () => {
      expect(screen.getByTestId("grid-item-0")).toHaveStyle("gridColumnStart: 3; gridRowStart: 3;");
    });

    test("The sixth item should start on Column 6", () => {
      expect(screen.getByTestId("grid-item-5")).toHaveStyle("gridColumnStart: 6;");
    });

    test("The ninth item should start on Row 6", () => {
      expect(screen.getByTestId("grid-item-8")).toHaveStyle("gridRowStart: 6;");
    });
  });

  // images
  describe("Should render images correctly", () => {
    beforeEach(() => {
      // items: { image, notAnImage }
      render(<MessonryGrid items={[testImages[0], testImages[9]]} options={defaultOptions} />);
    });

    test("Should hide images until loaded", () => {
      expect(screen.getByTestId("grid-item-1")).toHaveStyle("display: none;");
      expect(screen.getByTestId("img-1")).toHaveClass("css-1yb066v-ImageWrapper");
      expect(screen.getByTestId("img-1")).toHaveStyle(baseStyleString);
    });

    test("Should render with root styling", () => {
      expect(screen.getByTestId("img-0")).toHaveClass("css-1yb066v-ImageWrapper");
      expect(screen.getByTestId("img-0")).toHaveStyle(baseStyleString);
    });

    test("Should change aspect ratio onLoad", () => {
      // TODO test fails, but it works in practice. need to mock onLoad?
      expect(screen.getByTestId("grid-item-0")).toHaveStyle("display: block; aspect-ratio: 1/1;");
    });
  });

  // videos
  describe("Should render videos correctly", () => {
    beforeEach(() => {
      // items: { video, notAVideo }
      render(<MessonryGrid items={testVideos} options={defaultOptions} />);
    });

    test("Should hide videos until loaded", () => {
      expect(screen.getByTestId("grid-item-1")).toHaveStyle("display: none;");
      expect(screen.getByTestId("video-1")).toHaveClass("css-64edqw-VideoWrapper");
      expect(screen.getByTestId("video-1")).toHaveStyle(baseStyleString);
    });

    test("Should render with root styling", async () => {
      expect(screen.getByTestId("video-0")).toHaveClass("css-64edqw-VideoWrapper");
      expect(screen.getByTestId("video-0")).toHaveStyle(baseStyleString);
    });

    test("Should change aspect ratio onLoadedMeta", async () => {
      // TODO test fails, but it works in practice. need to mock onLoadedMetadata?
      expect(screen.getByTestId("grid-item-0")).toHaveStyle("display: block; aspect-ratio: 1/1;");
    });
  });

  describe("NextJS support", () => {
    test("Should use next/image if option is enabled and installed locally", () => {
      render(<MessonryGrid items={testImages.slice(0, 1)} options={{ ...defaultOptions, useNextImage: true }} />);
      expect(screen.getByTestId("next/image-0")).toHaveStyle(
        "position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
      );
    });

    test("Should fail to use next/image if option is enabled and not installed locally", () => {
      // mock next/image missing
      jest.mock("next/image", () => {});
      // silence error when next/image fails to load
      jest.mock("console", () => {});

      expect(() => {
        render(<MessonryGrid items={testImages.slice(0, 1)} options={{ ...defaultOptions, useNextImage: true }} />);
        screen.getByTestId("next/image-0");
      }).toThrow();

      jest.clearAllMocks();
    });
  });
});
