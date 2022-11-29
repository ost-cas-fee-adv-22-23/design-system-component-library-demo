import { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";
import { Label } from "./label";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    children: {
      control: { type: "text" },
    },
    as: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Label>;
export const LabelComponent: ComponentStory<typeof Label> = ({
  children,
  ...args
}) => <Label {...args}>{children}</Label>;

LabelComponent.storyName = "Label";

LabelComponent.argTypes = {
  as: {
    options: ["span"],
    control: { type: "select" },
  },
  size: {
    options: ["S", "M", "L", "XL"],
    control: { type: "select" },
  },
  children: {
    control: { type: "text" },
  },
};

LabelComponent.args = {
  as: "span",
  size: "L",
  children: "The quick brown fox jumps over the lazy dog",
};
