import { ComponentMeta, ComponentStory } from '@storybook/react';

import React from 'react';
import { IconButton } from '../src/components/icon-button';

import { MumbleIcon } from '../src/components/icons/mumble';

export default {
  title: 'Components/Button',
  component: IconButton,
  argTypes: {
    onClick: { action: 'clicked', table: { disable: true } },
  },
} as ComponentMeta<typeof IconButton>;

export const IconButtonComponent: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <MumbleIcon />
  </IconButton>
);

IconButtonComponent.storyName = 'IconButton';
