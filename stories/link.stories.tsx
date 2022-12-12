import { ComponentMeta, ComponentStory } from '@storybook/react';

import React from 'react';
import { Link } from '../src/components/link';
import { MumbleIcon } from '../src/components/icons/mumble';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    href: { control: { type: 'text' } },
  },
} as ComponentMeta<typeof Link>;

export const LinkComponent: ComponentStory<typeof Link> = ({ children, ...args }) => (
  <Link {...args}>
    <MumbleIcon />
    {children}
  </Link>
);

LinkComponent.storyName = 'Link';

LinkComponent.args = {
  href: '#',
  children: 'The quick brown fox jumps over the lazy dog',
};
