import { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";
import { Clipboard } from "./clipboard";

import { MumbleIcon } from "./icons/mumble";

export default {
  title: "Components/Clipboard",
  component: Clipboard,
  argTypes: {
    value: {
      control: { type: "text" },
    },
    delay: {
      control: { type: "number" },
    },
  },
} as ComponentMeta<typeof Clipboard>;

export const ClipboardComponent: ComponentStory<any> = (args) => (
  <Clipboard {...args}>
    <MumbleIcon />
  </Clipboard>
);

ClipboardComponent.storyName = "Clipboard";

ClipboardComponent.args = {
  value: "Mumble",
  delay: 1000,
};
