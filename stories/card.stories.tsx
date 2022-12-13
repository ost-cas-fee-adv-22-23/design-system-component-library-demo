import { ComponentMeta, ComponentStory } from '@storybook/react';

import React from 'react';
import { Card } from '../src/components/card';
import { Stack } from '../src/components/stack';
import { Label } from '../src/components/label';
import { Link } from '../src/components/link';
import { Paragraph } from '../src/components/paragraph';
import { MumbleIcon } from '../src/components/icons/mumble';
import { Clipboard } from '../src/components/clipboard';
import { Action } from '../src/components/action';
import { ChatOutlineIcon } from '../src/components/icons/chat-outline';
import { HeartOutlineIcon } from '../src/components/icons/heart-outline';
import { Avatar } from '../src/components/avatar';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    as: {
      options: ['div', 'aside', 'article', 'main', 'section'],
      control: 'select',
    },
    rounded: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Card>;

export const CardComponent: ComponentStory<typeof Card> = (args) => (
  <div className="bg-slate-100 p-8">
    <div className="w-[615px]">
      <Card {...args}>
        <div className="absolute -left-8 top-4">
          <Avatar
            size="M"
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx89&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Portrait of Matilda"
          />
        </div>
        <Stack direction="col" spacing="M">
          <Stack direction="col" spacing="XS">
            <Label size="L">Display Name</Label>
            <Stack direction="row" spacing="S">
              <Link color="Violet" href="#">
                <MumbleIcon /> Username
              </Link>
              <Link color="Slate" href="#">
                <MumbleIcon /> Timestamp
              </Link>
            </Stack>
          </Stack>

          <Paragraph size="M">
            Paragraph – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio
            sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos
            excepturi ut deleniti ut repellat magni.
          </Paragraph>

          <img
            src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80"
            alt=""
          />

          <Stack direction="row" spacing="XL">
            <Action color="Violet">
              <ChatOutlineIcon />
              Comment
            </Action>
            <Action color="Pink">
              <HeartOutlineIcon />
              Like
            </Action>
            <Clipboard value="A Card" />
          </Stack>
        </Stack>
      </Card>
    </div>
  </div>
);

CardComponent.storyName = 'Mumble Card';
CardComponent.args = { rounded: true };
