import { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";
import { Label } from "../src/components/label";

export default {
  title: "Components/Label",
  component: Label,
} as ComponentMeta<typeof Label>;
export const LabelComponent: ComponentStory<typeof Label> = ({
  children,
  ...args
}) => <Label {...args}>{children}</Label>;

LabelComponent.storyName = "Label";

LabelComponent.argTypes = {
  as: {
    options: ["span", "label"],
    control: { type: "select" },
  },
  size: {
    options: ["S", "M", "L", "XL"],
    control: { type: "select" },
  },
  children: {
    control: { type: "text" },
  },
  htmlFor: {
    control: { type: "text" },
  },
};

LabelComponent.args = {
  as: "span",
  size: "L",
  children: "The quick brown fox jumps over the lazy dog",
};
