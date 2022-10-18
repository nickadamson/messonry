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
});
