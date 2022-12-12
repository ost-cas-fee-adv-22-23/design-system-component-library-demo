import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button } from '../src/components/button';
import { MumbleIcon } from '../src/components/icons/mumble';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['Slate', 'Violet', 'Gradient'],
      control: { type: 'select' },
    },
    size: {
      options: ['M', 'L'],
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
    as: {
      options: ['button', 'a'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

export const ButtonComponent: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

ButtonComponent.storyName = 'Button';

ButtonComponent.args = {
  color: 'Slate',
  size: 'M',
  children: 'Button Label',
  as: 'a',
  href: '#',
};

export const ButtonWithIconComponent: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>
    {children}
    <MumbleIcon />
  </Button>
);

ButtonWithIconComponent.storyName = 'Button with Icon';

ButtonWithIconComponent.args = {
  color: 'Slate',
  size: 'M',
  children: 'Button Label',
  as: 'a',
  href: '#',
};
