import { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";
import { TextLink } from "./text-link";

export default {
  title: "Components/TextLink",
  component: TextLink,
  argTypes: {
    children: {
      control: { type: "text" },
    },
    href: { control: { type: "text" } },
  },
} as ComponentMeta<typeof TextLink>;

export const TextLinkComponent: ComponentStory<typeof TextLink> = ({
  children,
  ...args
}) => <TextLink {...args}>{children}</TextLink>;

TextLinkComponent.storyName = "TextLink";

TextLinkComponent.args = {
  href: "#",
  children: "The quick brown fox jumps over the lazy dog",
};
