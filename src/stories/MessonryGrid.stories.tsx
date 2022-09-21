import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import MessonryGrid from "../components/MessonryGrid";

import gridItems from "./images.json";

export default {
  title: "Example/Messonry",
  component: MessonryGrid,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          maxWidth: "2560px",
          maxHeight: "1440px",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as ComponentMeta<typeof MessonryGrid>;

const Template: ComponentStory<typeof MessonryGrid> = (args) => <MessonryGrid {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  items: gridItems.slice(15, 30),
};
