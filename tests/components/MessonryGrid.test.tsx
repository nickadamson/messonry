import { render, screen } from "@testing-library/react";
import { Item } from "src/components/GridItem";

import MessonryGrid from "../../src/components/MessonryGrid";
import images from "../../src/stories/images.json";

describe("MessonryGrid", () => {
  test("Should render all items correctly", () => {
    render(<MessonryGrid items={images.slice(0, 10) as Item[]} options={{ placeholder: true }} />);
    expect(screen.queryAllByRole("img", { hidden: true }).length).toEqual(10);
  });

describe("MessonryGridTest", () => {
  // TODO
});
