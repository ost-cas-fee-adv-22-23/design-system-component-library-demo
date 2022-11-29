import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "./button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: {
      options: ["Slate", "Violet", "Gradient"],
      control: { type: "select" },
    },
    size: {
      options: ["M", "L"],
      control: { type: "select" },
    },
    children: {
      control: { type: "text" },
    },
    as: {
      options: ["button", "link"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;

export const ButtonComponent: ComponentStory<typeof Button> = ({
  children,
  ...args
}) => <Button {...args}>{children}</Button>;

ButtonComponent.storyName = "Button";

ButtonComponent.args = {
  color: "Slate",
  size: "M",
  children: "Hello World",
  as: "button",
};
