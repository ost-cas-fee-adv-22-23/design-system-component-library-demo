import { ComponentMeta, ComponentStory } from '@storybook/react';

import React from 'react';
import { Avatar } from '../src/components/avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      control: { type: 'text' },
    },
    alt: {
      control: { type: 'text' },
    },
    size: { options: ['S', 'M', 'L', 'XL'], control: { type: 'select' } },
  },
} as ComponentMeta<typeof Avatar>;

export const AvatarComponent: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

AvatarComponent.storyName = 'Avatar';

AvatarComponent.args = {
  src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx89&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  alt: 'Portrait of Mattilda',
  size: 'S',
};
