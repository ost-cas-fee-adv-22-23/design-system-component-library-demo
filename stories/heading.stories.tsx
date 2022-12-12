import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Heading } from '../src/components/heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    level: {
      options: ['1', '2', '3', '4'],
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
    as: {
      options: [undefined, 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Heading>;

export const HeadingComponent: ComponentStory<typeof Heading> = ({ children, ...args }) => (
  <Heading {...args}>{children}</Heading>
);

HeadingComponent.storyName = 'Heading';

HeadingComponent.args = {
  level: '1',
  as: undefined,
  children: 'The quick brown fox jumps over the lazy dog',
};
