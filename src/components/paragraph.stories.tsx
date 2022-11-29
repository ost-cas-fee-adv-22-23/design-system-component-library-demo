import { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";
import { Paragraph } from "./paragraph";

export default {
  title: "Components/Paragraph",
  component: Paragraph,
  argTypes: {
    children: {
      control: { type: "text" },
    },
    as: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Paragraph>;
export const ParagraphComponent: ComponentStory<typeof Paragraph> = ({
  children,
  ...args
}) => <Paragraph {...args}>{children}</Paragraph>;

ParagraphComponent.storyName = "Paragraph";

ParagraphComponent.argTypes = {
  as: {
    options: ["p", "span"],
    control: { type: "select" },
  },
  size: {
    options: ["M", "L"],
    control: { type: "select" },
  },
  children: {
    control: { type: "text" },
  },
};

ParagraphComponent.args = {
  as: "p",
  size: "M",
  children: "The quick brown fox jumps over the lazy dog",
};
