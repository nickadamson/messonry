import { render, screen } from "@testing-library/react";

import { MessonryGrid } from "../../src/components/MessonryGrid";
import { testImages, testVideos, defaultOptions } from "../constants";

describe("MessonryGrid Component Test", () => {
  test("Should render the correct # of items", () => {
    render(<MessonryGrid items={testImages} options={defaultOptions} />);
    expect(screen.queryAllByRole("img", { hidden: true }).length).toEqual(10);
  });

  test("Should render images correctly", () => {
    render(<MessonryGrid items={testImages.slice(0, 1)} options={defaultOptions} />);
    expect(screen.getByTestId("img-0")).toHaveClass("css-3ty7jz");
  });

  test("Should render videos correctly", () => {
    render(<MessonryGrid items={testVideos} options={defaultOptions} />);
    expect(screen.getByTestId("video-0")).toHaveClass("css-3ty7jz");
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
