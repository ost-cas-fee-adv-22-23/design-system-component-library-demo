import { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";
import { Input } from "./input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

export const InputComponent: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

InputComponent.storyName = "Input";

InputComponent.args = {
  label: "Label",
  placeholder: "Placeholder",
};
